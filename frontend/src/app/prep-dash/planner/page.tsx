"use client";

import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import AllPrepList from '../../components/PrepDash/PrepPlan/AllPrepList';
import SelectBox from '@/app/components/Elements/ui/SelectBox';
import PrepListing from '@/app/components/PrepDash/DailyPrep/PrepListing';
import PrepListBreakdown from '../../components/PrepDash/PrepPlan/PrepListBreakdown';
import Button from '@/app/components/Elements/Button';
import ErrorMessage from '@/app/components/Elements/ErrorMessage';
import NumberSelect from '@/app/components/Elements/ui/NumberSelect';
import { setPrepSearchTerm } from '@/redux/features/search/searchSlice';

// TYPES ***************
import PrepListItem from '@/app/types/models/PrepListItem';
import Category from '@/app/types/models/Category';
import { setDailyPrepItems } from '@/redux/features/preplist/dailyPrepListSlice';

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

const fetchDailyList = async () => {
  const response = await axios.get<PrepListItem[]>('http://localhost:3000/prepitems/1');
  return response.data;
};

export default function PlanPage() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [prepItems, setPrepItems] = useState<PrepListItem[]>([]);
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
      // Fetch all prep items
      setPrepItems(await fetchDailyList());
      setDailyPrepItems(dailyPrepList);
      setIsVerified(false);
    };
    fetchData();
  }, [dailyPrepList]);

  const handleCompleteClick = () => {
    if (isVerified && verifierName) {
      //postPrepList(PrepListItems);
      alert('List Created!');
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

  // Dynamic handler for item movement
  const handleCardClick = (item: PrepListItem) => {
    const updatedItem = { ...item, quantity: quantities[item.prep_list_id] || item.quantity };

    if (prepItems.some((prepItem) => prepItem.prep_list_id === item.prep_list_id)) {
      // Move item from prepItems to PrepListItems
      setPrepItems((prev) => prev.filter((prepItem) => prepItem.prep_list_id !== item.prep_list_id));
      setPrepListItems((prev) => [...prev, updatedItem]);
    } else if (PrepListItems.some((dailyItem) => dailyItem.prep_list_id === item.prep_list_id)) {
      // Move item from PrepListItems back to prepItems
      setPrepListItems((prev) =>
        prev.filter((dailyItem) => dailyItem.prep_list_id !== item.prep_list_id)
      );
      setPrepItems((prev) => [...prev, updatedItem]);
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
          <PrepListing list={PrepListItems} handleCardClick={handleCardClick} />
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