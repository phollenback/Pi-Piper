import Ingredient from "@/app/types/models/Ingredient";
import IngredientRow from "./IngredientRow";

interface IngredientTableProps {
  list: Ingredient[];
  categoryOptions: { label: string, value: number }[];
  handleSelection: (id: number, value: number | string, field: 'ingredient_category') => void;
  onEditClick: (item: Ingredient) => void;
  onDeleteClick: (item: Ingredient) => void;
}

// Table component for displaying ingredients
const IngredientTable: React.FC<IngredientTableProps> = ({ list, categoryOptions, onEditClick, onDeleteClick }) => {
  return (
    <table className="min-w-full bg-white border border-gray-200">
      <thead className='bg-gray-200'>
        <tr>
          <th className="px-4 py-2 border-b border-gray-300">Name</th>
          <th className="px-4 py-2 border-b border-gray-300">Unit of Measure</th>
          <th className="px-4 py-2 border-b border-gray-300">Cost per Unit</th>
          <th className="px-4 py-2 border-b border-gray-300">Category</th>
          <th className="px-4 py-2 border-b border-gray-300"></th>
          <th className="px-4 py-2 border-b border-gray-300"></th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <IngredientRow 
            key={index}
            item={item}
            categoryOptions={categoryOptions}
            onEditClick={onEditClick}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </tbody>
    </table>
  );
};

export default IngredientTable;