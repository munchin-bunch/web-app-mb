import clsx from "clsx";
import { Button } from "./Button";

interface Props {
  buttonActionLabel: string;
  onClick?: () => void;
  className?: string;
}

export const BlueActionButton = ({
  buttonActionLabel,
  onClick,
  className,
}: Props) => {
  return (
    <>
      <Button
        onClick={onClick}
        className={clsx(
          "bg-blue-primary px-6 text-xs lg:text-base text-dark-primary font-bold e uppercase",
          "md:hover:bg-blue-primary md:hover:text-whit",
          "active:bg-blue-primary active:text-white",
          "focus:blue-primary focus:text-white focus:outline-none focus:ring-2 focus:ring-blue-400/50",
          className
        )}
      >
        {buttonActionLabel}
      </Button>
    </>
  );
};
