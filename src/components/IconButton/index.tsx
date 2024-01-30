import { FC } from "react";
// Common Components
import Button from "../Button";
import ArrowIcon from "../SvgComponents/ArrowIcon";
import PlusIcon from "../SvgComponents/PlusIcon";

interface Props {
  onClick: () => void;
  icon?: "up" | "plus";
  size?: number;
  testId: string;
}
const IconButton: FC<Props> = (props) => {
  const { onClick, icon, size ,testId} = props;
  const currentSize = size ?? 32;
  return (
    <Button onClick={onClick} testId={testId}>
      {icon === "up" ? (
        <ArrowIcon size={currentSize} />
      ) : icon === "plus" ? (
        <PlusIcon size={currentSize} />
      ) : (
        ""
      )}
    </Button>
  );
};

export default IconButton;
