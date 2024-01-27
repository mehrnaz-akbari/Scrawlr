import { FC, ReactNode } from "react";
// Styles
import { StyledButton } from "./index.styled";

interface Props {
  children: ReactNode;
  onClick: () => void;
}
const Button: FC<Props> = (props) => {
  const { children, onClick } = props;
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
