import { FC, ReactNode } from "react";
// Styles
import { StyledButton } from "./index.styled";

interface Props {
  children: ReactNode;
  onClick: () => void;
  testId?: string;
}
const Button: FC<Props> = (props) => {
  const { children, onClick, testId } = props;
  return (
    <StyledButton onClick={onClick} data-testid={testId}>
      {children}
    </StyledButton>
  );
};

export default Button;
