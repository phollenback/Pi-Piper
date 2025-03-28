import PrepDashNav from "../components/PrepDash/PrepDashNav";

const PrepDashLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PrepDashNav />
      <main>
        {children}
      </main>
    </>
  );
};

export default PrepDashLayout;