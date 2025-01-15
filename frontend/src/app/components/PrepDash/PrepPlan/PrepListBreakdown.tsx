import React, { useState } from 'react';
import InputField from '../../Elements/login/InputField';
import PrepListItem from '@/app/types/models/PrepListItem';
import Category from '@/app/types/models/Category';

interface PrepListBreakdownProps {
  list: PrepListItem[];
  onClick: () => void;
  categories: Category[];
  setVerifier: (verifier: string) => void;
  setVerified: (verified: boolean) => void;
}

const PrepListBreakdown: React.FC<PrepListBreakdownProps> = ({ list, categories, setVerifier, setVerified }) => {
  const [verifierName, setVerifierName] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleVerifierNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVerifierName(e.target.value);
    setVerifier(e.target.value);
  };

  const handleVerifyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsVerified(e.target.checked);
    setVerified(e.target.checked);
    console.log(isVerified);
  };

  const groupedItems = list.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as { [key: number]: PrepListItem[] });

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
      
      {Object.entries(groupedItems).map(([categoryId, items]) => {
        const { name, description } = getCategoryDetails(Number(categoryId));
        return (
          <div key={categoryId} className="mb-6">
            <h3 className="text-lg font-semibold mb-2">{name}</h3>
            <p className="text-sm text-gray-500 mb-2">{description}</p>
            <ul className="list-disc pl-5 space-y-2">
              {items.map((item) => (
                <li key={item.prep_list_id}>
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