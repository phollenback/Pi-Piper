import { PrepItem } from "@/app/types/models/PrepItem";
import PrepItemRow from "./PrepItemRow";

// Table component for displaying prep items
const PrepItemTable: React.FC<{ list: PrepItem[], categoryOptions: { label: string, value: number }[], departmentOptions: { label: string, value: number }[], handleSelection: (id: number, value: number | string, field: 'category' | 'kitchen_department_id' | 'ingredient_category') => void, handleEditClick: (item: PrepItem) => void }> = ({ list, categoryOptions, departmentOptions, handleSelection, handleEditClick }) => {
    return (
      <table className="min-w-full bg-white border border-gray-200">
        <thead className='bg-gray-200'>
          <tr>
            <th className="px-4 py-2 border-b border-gray-300">Name</th>
            <th className="px-4 py-2 border-b border-gray-300">Description</th>
            <th className="px-4 py-2 border-b border-gray-300">Category</th>
            <th className="px-4 py-2 border-b border-gray-300">Department</th>
            <th className="px-4 py-2 border-b border-gray-300"></th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <PrepItemRow
              key={index}
              item={item}
              categoryOptions={categoryOptions}
              departmentOptions={departmentOptions}
              handleSelection={handleSelection}
              handleEditClick={handleEditClick}
            />
          ))}
        </tbody>
      </table>
    );
  };

  export default PrepItemTable;