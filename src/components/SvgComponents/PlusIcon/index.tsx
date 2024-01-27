import { FC } from "react";

interface Props {
  size?: number;
}
const PlusIcon: FC<Props> = (props) => {
  const { size } = props;
  return (
    <svg
      width={`${size ?? "24"}px`}
      height={`${size ?? "24"}px`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12H20M12 4V20"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default PlusIcon;
