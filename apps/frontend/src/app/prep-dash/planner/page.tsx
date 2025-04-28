"use client";

import axios from 'axios';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import AllPrepList from '@/components/PrepDash/PrepPlan/AllPrepList';
import SelectBox from '@/components/Elements/ui/SelectBox';
import PrepListBreakdown from '@/components/PrepDash/PrepPlan/PrepListBreakdown';
import Button from '@/components/Elements/Button';
import ErrorMessage from '@/components/Elements/ErrorMessage';
import NumberSelect from '@/components/Elements/ui/NumberSelect';
import { setPrepSearchTerm } from '@/features/redux/features/search/searchSlice';
import { PrepItemAdapter, PrepItem} from '@/app/types/models/PrepItem';
import {PrepListItem} from '@/app/types/models/PrepListItem';
import {Category} from '@/app/types/models/Category';
import { setDailyPrepItems } from '@/features/redux/features/preplist/dailyPrepListSlice';
import NewPrepList from '@/components/PrepDash/PrepPlan/NewPrepList';
import { postDailyPrep } from '@/app/actions/prepItemActions';
import { getPrepItems, fetchCategories } from '@/app/actions/prepItemActions';

// Formats tomorrow's date for display
const getTomorrowDate = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// Fetch all prep items for the restaurant
const fetchAllPrep = async () => {
  const response = await getPrepItems(1);
  return response;
};

// Fetch current daily prep list
const fetchDailyList = async () => {
  const response = await axios.get<PrepListItem[]>('http://localhost:3001/prepitems/daily/1');
  return response.data;
};

// Prep planning page with item selection, quantity management, and list verification
export default function PlanPage() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [prepItems, setPrepItems] = useState<PrepItem[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [PrepListItems, setPrepListItems] = useState<PrepListItem[]>([]);
  const [isBreakdown, setIsBreakdown] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const [step, setStep] = useState(0.5);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [verifierName, setVerifierName] = useState('');

  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  // Fetch and cache daily prep list
  const { data: dailyPrepList = [], isError } = useQuery<PrepListItem[]>({
    queryKey: ['dailyPrep'],
    queryFn: fetchDailyList,
  });

  // Standardized category fetching
  const { data: categories = [] } = useQuery<Category[]>({
    queryKey: ['categories', 1],
    queryFn: () => fetchCategories(1),
    enabled: true,
    staleTime: 1000 * 60 * 5
  });

  // Initialize prep items and sync with daily list
  useEffect(() => {
    const fetchData = async () => {
      const allPrepItems = await fetchAllPrep();
      setPrepItems(allPrepItems);
      setDailyPrepItems(dailyPrepList);
    };
    fetchData();
  }, [dailyPrepList]);

  // Submit verified prep list to backend

  const handleCompleteClick = async () => {
    if (isVerified && verifierName) {
        console.log('Preparing to post the following Prep List:', PrepListItems);
        const hasNulls = PrepListItems.some(item => item == null);
        if (hasNulls) {
            console.error('Prep List contains null values:', PrepListItems);
            return;
        }

        // Convert items to plain objects for API submission
        const plainObjects : PrepListItem[] | unknown = PrepListItems.map(item => {
            if (item instanceof PrepItemAdapter) {
                return item.toPlainObject();
            }
            console.warn("Item is not an instance of PrepItemAdapter:", item);
            return {};
        });

        console.log('plainObjects:', plainObjects)

        try {
            const response = await postDailyPrep(plainObjects as PrepListItem[], 1);  
            if (!response) {
                setErrorMessage("An error occurred internally.");
            } else {
                alert('List Created!');
                setPrepListItems([]);
            }
        } catch (error) {
            console.error("Error while posting daily prep:", error);
            setErrorMessage("Failed to post daily prep.");
        }
    } else {
        setErrorMessage("Please enter the verifier's name and verify the list before submitting.");
    }
};

  // Toggle breakdown view
  const handleBreakdownClick = () => {
    setIsBreakdown((prev) => !prev);
  };

  // Update item quantities in state
  const handleQuantityChange = (id: number, quantity: number) => {
    setQuantities((prev) => ({ ...prev, [id]: quantity }));
  };

  // Move items between prep lists and daily lists
  const handleCardClick = (item: PrepItem) => {
    const itemTwo = new PrepItemAdapter(item, quantities[item.prep_item_id]);
  
    if (prepItems.some((prepItem) => prepItem.name === item.name)) {
      setPrepItems((prev) => prev.filter((prepItem) => prepItem.prep_item_id !== item.prep_item_id));
      setPrepListItems((prev) => [...prev, itemTwo]);
    }
    else if (PrepListItems.some((dailyItem) => dailyItem.name === item.name)) {
      setPrepListItems((prev) =>
        prev.filter((dailyItem) => dailyItem.prep_list_id !== item.prep_item_id)
      );
      setPrepItems((prev) => [...prev, item]);
    }
  };

  const categoryOptions = categories.map((category: Category) => ({
    label: category.categoryName,
    value: category.categoryId,
  }));

  // Reset filters and reload categories
  const handleReset = () => {
    dispatch(setPrepSearchTerm(''));
    queryClient.invalidateQueries({ queryKey: ['categories'] });
    setSelectedCategory(null);
  };

  if (isError) {
    return <p>Error loading plan...</p>;
  }

  // Handle item removal from daily list
  const handleListClick = (item: PrepListItem) => {
    const updatedItem: PrepItem = {
      prep_item_id: item.prep_list_id / 1000,
      name: item.name,
      description: item.description,
      category: item.category,
      kitchen_department_id: 1,
    };

    setPrepListItems((prev) =>
      prev.filter((dailyItem) => dailyItem.prep_list_id !== item.prep_list_id)
    );
    setPrepItems((prev) => [...prev, updatedItem]);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1 bg-gray-100 p-4">
        <div className="flex items-center space-x-4 mb-4">
          <SelectBox
            value={selectedCategory || ''}
            onChange={(value) => setSelectedCategory(value ? Number(value) : null)}
            options={categoryOptions}
            placeholder="Select a category"
          />
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600"
          >
            Reset
          </button>
          <NumberSelect
            label="Step"
            min={0.1}
            max={10}
            step={0.1}
            value={step}
            onChange={(value) => setStep(value)}
          />
        </div>

        <hr className="my-4 border-black" />

        <AllPrepList
          prepList={prepItems}
          category={selectedCategory}
          onAddToDailyPrep={handleCardClick}
          step={step}
          onQuantityChange={handleQuantityChange}
        />
      </div>

      <div className="col-span-2 bg-gray-200 p-4">
        <div className="flex flex-auto items-center space-x-4 my-4">
          <h2 className="text-lg font-bold">
            Daily Prep Items for Tomorrow ({getTomorrowDate()})
          </h2>
          <Button
            label={isBreakdown ? 'Hide Breakdown' : 'View Breakdown'}
            onClick={handleBreakdownClick}
            size="medium"
            style={{
              backgroundColor: 'yellow',
              color: 'black',
              fontWeight: 'bold',
            }}
          />
        </div>
        {errorMessage && <ErrorMessage message={errorMessage} />}
        {isBreakdown ? (
          <NewPrepList list={PrepListItems} handleCardClick={handleListClick} />
        ) : (
          <div>
            <PrepListBreakdown
              list={PrepListItems}
              onClick={handleCompleteClick}
              setVerifier={setVerifierName}
              setVerified={setIsVerified}
              categories={categories}
            />
          </div>
        )}
        <Button
          label="Create Prep List"
          onClick={handleCompleteClick}
          size="large"
          style={{
            backgroundColor: 'green',
            color: 'white',
            fontWeight: 'bold',
          }}
        />
      </div>
    </div>
  );
} 