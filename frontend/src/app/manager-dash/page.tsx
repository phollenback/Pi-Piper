import DepartmentProgress from "../components/ManagerDash/Dash/DepartmentProgress";
import InventoryTable from "../components/ManagerDash/Dash/InventoryTable";
import TimeVariables from "../components/ManagerDash/Dash/TimeVariables";

// Manager dashboard container with time tracking, inventory management, and department progress monitoring
export default async function ManagerContainer() {
  return (
    <div className="min-h-screen pt-4 grid grid-cols-4">
      <div className="h-full col-span-2 border-r border-black flex flex-col">
        <div className="">
          <TimeVariables />
        </div>
  
        {/* Table Below TimeVariables */}
        <div className="flex-1 overflow-auto">
          <InventoryTable />
        </div>
      </div>
  
      {/* Right Column */}
      <div className="col-span-2 text-center">
        <h2 className="text-4xl font-bold">Progress</h2>
        <DepartmentProgress />
      </div>
    </div>
  );
}