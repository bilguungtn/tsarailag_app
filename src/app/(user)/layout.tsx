import { type Metadata } from "next";
import Footer from "./footer";
import { constantNames } from "@/configs/default";

export const metadata: Metadata = {
  title: constantNames.appName,
  description: "Energy Balance",
};

const MainLayout: React.Layout = ({ children }) => {
  return (
    <div className="flex justify-center">
      {/* MOBILE CONTAINER */}
      <div className="relative flex h-[100dvh] w-[640px] flex-col items-center">
        <header className="py-8 font-semibold">{constantNames.appName}</header>
        <div className="w-full flex-auto">{children}</div>
        <div className="sticky bottom-0 w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
