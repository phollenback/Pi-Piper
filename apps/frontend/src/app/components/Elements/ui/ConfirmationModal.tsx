import React from 'react';
import Button from '@/app/components/Elements/Button';

interface ConfirmationModalProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
        <p className="mb-4">{message}</p>
        <div className="flex justify-end space-x-2">
          <Button
            label={"Cancel"}
            onClick={onCancel}
            size="small"
            style={{
              backgroundColor: "gray",
              color: "white",
            }}
          />
          <Button
            label={"Confirm"}
            onClick={onConfirm}
            size="small"
            style={{
              backgroundColor: "red",
              color: "white",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;