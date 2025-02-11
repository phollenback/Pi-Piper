"use client";

import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import AllPrepList from '../../components/PrepDash/PrepPlan/AllPrepList';
import SelectBox from '@/app/components/Elements/ui/SelectBox';
import PrepListBreakdown from '../../components/PrepDash/PrepPlan/PrepListBreakdown';
import Button from '@/app/components/Elements/Button';
import ErrorMessage from '@/app/components/Elements/ErrorMessage';
import NumberSelect from '@/app/components/Elements/ui/NumberSelect';
import { setPrepSearchTerm } from '@/redux/features/search/searchSlice';

// TYPES ***************
import { PrepItemAdapter, PrepItem} from '@/app/types/models/PrepItem';
import PrepListItem from '@/app/types/models/PrepListItem';
import Category from '@/app/types/models/Category';
import { setDailyPrepItems } from '@/redux/features/preplist/dailyPrepListSlice';
import NewPrepList from '@/app/components/PrepDash/PrepPlan/NewPrepList';
import { postDailyPrep } from '@/app/util/actions';

// Helper function to get tomorrow's date
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

const fetchAllPrep = async () => {
  const response = await axios.get<PrepItem[]>('http://localhost:3000/prepitems/1');
  return response.data;
};

const fetchDailyList = async () => {
  const response = await axios.get<PrepListItem[]>('http://localhost:3000/prepitems/daily/1');
  return response.data;
};

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

  const { data: dailyPrepList = [], isError } = useQuery<PrepListItem[]>({
    queryKey: ['dailyPrep'],
    queryFn: fetchDailyList,
  });

  // Fetch categories
  const { data: categories = [], refetch: refetchCategories } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3000/categories');
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      return response.json();
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const allPrepItems = await fetchAllPrep();
      setPrepItems(allPrepItems); // Populate initial state
      setDailyPrepItems(dailyPrepList); // Sync with dailyPrepList
    };
    fetchData();
  }, [dailyPrepList]);

  const handleCompleteClick = async () => {
    if (isVerified && verifierName) {
        console.log('Preparing to post the following Prep List:', PrepListItems);
        const hasNulls = PrepListItems.some(item => item == null);
        if (hasNulls) {
            console.error('Prep List contains null values:', PrepListItems);
            return; // Prevent the post if there are nulls
        }

        // Convert PrepListItems to plain objects using PrepItemAdapter's method
        const plainObjects : PrepListItem[] | unknown = PrepListItems.map(item => {
            if (item instanceof PrepItemAdapter) {
                return item.toPlainObject(); // Use the method defined in PrepItemAdapter
            }
            // You could alternatively throw an error or handle the case where it's not an instance
            console.warn("Item is not an instance of PrepItemAdapter:", item);
            return {};
        });

        console.log('plainObjects:', plainObjects)

        try {
            const response = await postDailyPrep(plainObjects, 1);
            if (!response) {
                setErrorMessage("An error occurred internally.");
            } else {
                alert('List Created!');
                setPrepListItems([]); // Clear the list after posting
            }
        } catch (error) {
            console.error("Error while posting daily prep:", error);
            setErrorMessage("Failed to post daily prep.");
        }
    } else {
        setErrorMessage("Please enter the verifier's name and verify the list before submitting.");
    }
};

  const handleBreakdownClick = () => {
    setIsBreakdown((prev) => !prev); // Toggle the `isBreakdown` state
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    setQuantities((prev) => ({ ...prev, [id]: quantity }));
  };

  const handleCardClick = (item: PrepItem) => {
    const itemTwo = new PrepItemAdapter(item, quantities[item.prep_item_id]);

  
      // Check if the item exists in prepItems
      if (prepItems.some((prepItem) => prepItem.name === item.name)) {
        // Move item from prepItems to PrepListItems
        setPrepItems((prev) => prev.filter((prepItem) => prepItem.prep_item_id !== item.prep_item_id));
        setPrepListItems((prev) => [...prev, itemTwo]); // Add to PrepListItems
      } // check if item exists in daily list
      else if (PrepListItems.some((dailyItem) => dailyItem.name === item.name)) {
        // Move item from PrepListItems back to prepItems
        setPrepListItems((prev) =>
          prev.filter((dailyItem) => dailyItem.prep_list_id !== item.prep_item_id)
        );
        setPrepItems((prev) => [...prev, item]); // Add back to prepItems
      }
    };

  // Prepare category options for SelectBox
  const categoryOptions = categories.map((category: Category) => ({
    label: category.category_name,
    value: category.category_id,
  }));

  // Handle reset action
  const handleReset = () => {
    dispatch(setPrepSearchTerm(''));
    refetchCategories();
    setSelectedCategory(null);
  };

  if (isError) {
    return <p>Error loading plan...</p>;
  }

  const handleListClick = (item: PrepListItem) => {
    const updatedItem: PrepItem = {
      prep_item_id: item.prep_list_id / 1000, // Assuming prep_item_id is derived from prep_list_id
      name: item.name,
      description: item.description,
      category: item.category,
      kitchen_department_id: 1, // Assuming a default kitchen_department_id
    };

    // Move item from PrepListItems back to prepItems
    setPrepListItems((prev) =>
      prev.filter((dailyItem) => dailyItem.prep_list_id !== item.prep_list_id)
    );
    setPrepItems((prev) => [...prev, updatedItem]); // Add back to prepItems
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {/* Left column (1/3 of the space) */}
      <div className="col-span-1 bg-gray-100 p-4">
        <div className="flex items-center space-x-4 mb-4">
          {/* SelectBox */}
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

        {/* Pass filtered prep items to AllPrepList */}
        <AllPrepList
          prepList={prepItems}
          category={selectedCategory}
          onAddToDailyPrep={handleCardClick}
          step={step} // Pass the step value
          onQuantityChange={handleQuantityChange} // Pass the quantity change handler
        />
      </div>

      {/* Right column (2/3 of the space) */}
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