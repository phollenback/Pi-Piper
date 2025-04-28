import ManagerNav from "@/components/ManagerDash/ManagerNav";


const PrepDashLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ManagerNav />
      <main className="">{children}</main>  {/* Add padding for nav */}
    </>
  );
};

export default PrepDashLayout;