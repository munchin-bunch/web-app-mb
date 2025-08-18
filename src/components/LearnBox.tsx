import { ReactNode } from "react";
import { TbInfoCircle } from "react-icons/tb";

interface LearnBoxProps {
  label?: string;
  children?: ReactNode;
}

export const LearnBox = ({ label = "LEARN" }: LearnBoxProps) => {
  return (
    <div className="flex gap-1 items-center">
      <TbInfoCircle size={20} className="text-blue-primary" />
      <div className="text-sm lg:text-base">{label}</div>
    </div>
  );
};
