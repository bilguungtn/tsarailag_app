import { type Metadata } from "next";
import Footer from "./footer";

export const metadata: Metadata = {
  title: "Tsarailag App",
  description: "Energy Balance",
};

const MainLayout: React.Layout = ({ children }) => {
  return (
    <div className="flex justify-center">
      {/* MOBILE CONTAINER */}
      <div className="relative flex h-[100dvh] w-[640px] flex-col items-center">
        <div className="container w-full flex-auto">{children}</div>
        <div className="sticky bottom-0 w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
