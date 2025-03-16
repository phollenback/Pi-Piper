import Footer from "../components/Layout/Footer";
import PrepDashNav from "../components/PrepDash/PrepDashNav";

const PrepDashLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PrepDashNav />
      <main>
        {children}
      </main>
      <footer className="h-10 bg-black flex justify-evenly items-center text-white">
        <Footer />
      </footer>
    </>
  );
};

export default PrepDashLayout;