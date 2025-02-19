import { PrepItem } from "@/app/types/models/PrepItem";
import PrepItemRow from "./PrepItemRow";

interface PrepItemTableProps {
  list: PrepItem[];
  categoryOptions: { label: string, value: number }[];
  departmentOptions: { label: string, value: number }[];
  onEditClick: (item: PrepItem) => void;
  onDeleteClick: (item: PrepItem) => void;
}

// Table component for displaying prep items
const PrepItemTable: React.FC<PrepItemTableProps> = ({ list, categoryOptions, departmentOptions, onEditClick, onDeleteClick }) => {
  return (
    <table className="min-w-full bg-white border border-gray-200">
      <thead className='bg-gray-200'>
        <tr>
          <th className="px-4 py-2 border-b border-gray-300">Name</th>
          <th className="px-4 py-2 border-b border-gray-300">Description</th>
          <th className="px-4 py-2 border-b border-gray-300">Category</th>
          <th className="px-4 py-2 border-b border-gray-300">Department</th>
          <th className="px-4 py-2 border-b border-gray-300"></th>
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
            onEditClick={onEditClick}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </tbody>
    </table>
  );
};

export default PrepItemTable;