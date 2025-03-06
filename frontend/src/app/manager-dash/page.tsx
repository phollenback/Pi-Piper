import Link from "@mui/material/Link";
import DepartmentProgress from "../components/ManagerDash/Dash/DepartmentProgress";
import InventoryTable from "../components/ManagerDash/Dash/InventoryTable";

// Manager dashboard container with time tracking, inventory management, and department progress monitoring
export default async function ManagerContainer() {
  return (
    <div className="min-h-screen pt-4 grid grid-cols-4">
      
      <div className="h-full col-span-2 border-r border-black flex flex-col">
        
        <div className="flex flex-col gap-4 items-end">
          
          <div className="font-bold text-2xl text-right">
            Operations Overview:
          </div>
          
          <div className="flex flex-col items-end">
            <Link href="/manager-dash/prep-manager" underline="always" className="text-blue-500 font-bold text-xl">
              Manage Stock
            </Link>  
            
            <Link href="/manager-dash/inventory" underline="always" className="text-blue-500 font-bold text-xl">
              Inventory
            </Link> 
          </div>
          
        </div>
        
        {/* Table Below TimeVariables */}
        
        <div className="flex-1 overflow-auto">
          <InventoryTable />
        </div>
        
      </div>
  
      {/* Right Column */}
      <div className="col-span-2 text-center flex flex-col">
        <h2 className="text-4xl font-bold">Progress</h2>
        <DepartmentProgress />
      </div>
    </div>
  );
}