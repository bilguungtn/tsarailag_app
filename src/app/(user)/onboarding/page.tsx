import { Button } from "@/components/ui/button";
import Link from "next/link";

const OnboardingPage: React.Page = () => {
  return (
    <div className="grid h-full grid-rows-2 gap-5">
      {/* hero img */}
      <div className="flex items-center">
        <div className="h-[250px] w-full bg-primary"></div>
      </div>
      <div className="container flex h-full flex-col justify-around">
        <div className="flex flex-col gap-2">
          <h1 className="text-center text-3xl font-bold">Тавтай морил!</h1>
          <div className="text-center text-slate-300">
            Дараах алхамуудыг бөглөж захиалгаа хийнэ үү!
          </div>
        </div>
        <div className="flex gap-3">
          <Button asChild variant={"ghost"} className="w-full">
            <Link href="/">Алгасах</Link>
          </Button>
          <Button className="w-full">Эхлэх</Button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;
