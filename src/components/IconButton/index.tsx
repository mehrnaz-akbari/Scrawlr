import { FC } from "react";
// Common Components
import Button from "../Button";
import ArrowIcon from "../SvgComponents/ArrowIcon";
import PlusIcon from "../SvgComponents/PlusIcon";

interface Props {
  onClick: () => void;
  icon?: "up" | "plus";
  size?: number;
}
const IconButton: FC<Props> = (props) => {
  const { onClick, icon, size } = props;
  const currentSize = size ?? 32;
  return (
    <Button onClick={onClick}>
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
