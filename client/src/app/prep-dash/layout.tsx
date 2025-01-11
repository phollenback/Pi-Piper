import PrepDashNav from "../components/PrepDash/PrepDashNav";

const PrepDashLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PrepDashNav />
      <main className="pt-4">
        {children}
      </main> 
    </>
  );
};

export default PrepDashLayout;