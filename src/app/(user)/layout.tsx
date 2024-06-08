import { type Metadata } from "next";

// import { APP_TITLE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tsarailag App",
  description: "Energy Balance",
};

const MainLayout: React.Layout = ({ children }) => {
  return (
    <div>
      {/* <Header /> */}
      <div className="">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
