import Link from "next/link";
import React from "react";

const salonData = [
  {
    salonName: `"Joyous" Beaty Salon`,
    distance: "120m",
    image: undefined,
    score: undefined,
  },
  {
    salonName: `The Green Hair Salon`,
    distance: "620m",
    image: undefined,
    score: undefined,
  },
  {
    salonName: `Paradox Salon`,
    distance: "2.1km",
    image: undefined,
    score: undefined,
  },
  {
    salonName: `J Salon`,
    distance: "3.6km",
    image: undefined,
    score: undefined,
  },
  {
    salonName: `Seoul Hair Salon`,
    distance: "4.5km",
    image: undefined,
    score: undefined,
  },
  {
    salonName: `"Joyous" Beaty Salon`,
    distance: "120m",
    image: undefined,
    score: undefined,
  },
];

const SalonsList: React.FC = () => {
  return (
    <div className="container">
      <h1 className="text-center text-2xl">Та үйлчлүүлэх салоноо сонгоно уу</h1>
      {salonData.map((e, index) => {
        return (
          <div key={index}>
            <Link href={"/salons/id"}>
              <SalonListCard salonData={e} key={index} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SalonsList;

type Props = {
  salonData: {
    salonName: string;
    distance: string;
    image?: string;
    score?: string;
  };
};
const SalonListCard: React.FC<Props> = ({ salonData }) => {
  return (
    <div className="border-b py-5">
      <div className="flex gap-4">
        <div className="h-12 w-12 rounded-lg border bg-slate-200"></div>
        <div className="flex flex-col">
          <h1>{salonData.salonName}</h1>
          <p className="text-slate-300">{salonData.distance}</p>
        </div>
      </div>
    </div>
  );
};
