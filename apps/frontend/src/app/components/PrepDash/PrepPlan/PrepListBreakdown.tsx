import React, { useState } from 'react';
import InputField from '../../Elements/login/InputField';
import PrepListItem from '@/app/types/models/PrepListItem';
import Category from '@/app/types/models/Category';

// PrepListBreakdown component: displays a categorized breakdown of the prep list, allowing for verification.
interface PrepListBreakdownProps {
  list: PrepListItem[]; // Prep list items to display.
  onClick: () => void; // Callback for button click (currently unused).
  categories: Category[]; // Array of categories.
  setVerifier: (verifier: string) => void; // Callback to update verifier name in parent component.
  setVerified: (verified: boolean) => void; // Callback to update verification status in parent component.
}

const PrepListBreakdown: React.FC<PrepListBreakdownProps> = ({ list, categories, setVerifier, setVerified }) => {
  const [verifierName, setVerifierName] = useState(''); // Verifier's name.
  const [, setIsVerified] = useState(false); // Verification status.

  // Handles changes to the verifier's name.
  const handleVerifierNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVerifierName(e.target.value);
    setVerifier(e.target.value);
  };

  // Handles changes to the verification checkbox.
  const handleVerifyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsVerified(e.target.checked);
    setVerified(e.target.checked);
  };

  // Groups items by category.
  const groupedItems = list.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as { [key: number]: PrepListItem[] });

  // Retrieves category name and description given its ID.
  const getCategoryDetails = (categoryId: number) => {
    const category = categories.find((cat) => cat.category_id === categoryId);
    return category ? { name: category.category_name, description: category.description } : { name: '', description: '' };
  };

  return (
    <div className="bg-white p-4 shadow rounded-md">
      <h2 className="text-xl font-bold mb-4">Prep List Breakdown</h2>
      
      <div className="flex items-center mb-4">
        <label htmlFor="verify-checkbox" className="text-sm font-medium">Verify?</label>
        <input
          title="verify"
          type="checkbox"
          onChange={handleVerifyChange}
          className="mr-2"
        />
        <InputField 
          id="verifier-name"
          type="text"
          placeholder="Enter verifier's name"
          value={verifierName}
          onChange={handleVerifierNameChange}
        />
      </div>
      
      {Object.entries(groupedItems).map(([categoryId, items], index) => {
        const { name, description } = getCategoryDetails(Number(categoryId));
        return (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-semibold mb-2">{name}</h3>
            <p className="text-sm text-gray-500 mb-2">{description}</p>
            <ul className="list-disc pl-5 space-y-2">
              {items.map((item, index) => (
                <li key={index}>
                  <div className="flex justify-between items-center">
                    <div>
                      <strong>{item.name}</strong> - {item.description}
                    </div>
                    <div>
                      {item.quantity} {item.unit}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default PrepListBreakdown;