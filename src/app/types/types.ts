import { StaticImageData } from "next/image";

type tabProps = {
  tab: {
    name: string;
    icon: StaticImageData;
  };
  isFilterTab?: boolean;
  IsActiveTab?: string;
  handleCLick: () => void;
};

export interface ItabsProps {
  Itab: tabProps;
}
