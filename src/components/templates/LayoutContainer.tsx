import { Outlet } from "react-router-dom";
import Header from "@organisms/Header";
import StarsCanvas from "@atoms/StarBackground";
import Footer from "../organisms/Footer";

const LayoutContainer: React.FC = () => {
  return (
    <>
      <StarsCanvas />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="relative z-0 flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default LayoutContainer;
