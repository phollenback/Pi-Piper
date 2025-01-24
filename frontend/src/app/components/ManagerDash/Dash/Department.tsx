import ProgressCircle from './ProgressBar';

interface DepartmentProps {
  name: string;
  progress: number;
  total_items: number;
  completed_items: number;
}

const Department: React.FC<DepartmentProps> = ({ name, progress, total_items, completed_items }: DepartmentProps) => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-row items-center bg-white p-8 border-b-4 border-black w-full">
        {/* Left Section: Progress Circle */}
        <div className="w-1/4 flex justify-center">
          <ProgressCircle percentage={progress} />
        </div>

        {/* Right Section: Name and Details */}
        <div className="w-3/4 pl-6">
          <div className="text-2xl font-bold">{name}</div>
          <div className="text-lg mt-4">
            Progress: <span className="font-semibold">{progress.toFixed(1)}%</span>
          </div>
          <div className="text-lg">
            Completed: <span className="font-semibold">{completed_items}/{total_items}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department;