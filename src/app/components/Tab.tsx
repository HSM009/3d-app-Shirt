import React from "react";
import Image from "next/image";
import { useSnapshot } from "valtio";
import state from "../store/page";
import { StaticImageData } from "next/image";

interface tabProps {
  tab: {
    name: string;
    icon: StaticImageData;
  };
  isFilterTab?: boolean;
  IsActiveTab?: string;
  handleCLick: () => void;
}

const Tab = ({ tab, isFilterTab, IsActiveTab, handleCLick }: tabProps) => {
  const snap = useSnapshot(state);
  const activeStyles =
    isFilterTab && IsActiveTab
      ? { backgroundColor: snap.color, opacity: 0.5 }
      : { backgroundColor: "transparent", opacity: 1 };
  return (
    <div
      key={tab.name}
      className={`tab-btn ${
        isFilterTab ? "rounded-full glassmorhism" : "rounded-4"
      }`}
      onClick={handleCLick}
      style={activeStyles}
    >
      <Image
        src={tab.icon}
        alt={tab.name}
        className={`${
          isFilterTab ? "w-2/3 h-2/3" : "w-11/12 h-11/12 object-contain"
        }`}
      />
    </div>
  );
};

export default Tab;
