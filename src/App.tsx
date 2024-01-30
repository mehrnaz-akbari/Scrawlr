import { FC } from "react";
// Contexts
import { ContextProvider } from "./context";
// Common Components
import VotesCard from "./components/VotesCard";
// Styles
import "./App.css";

export const App: FC = () => {
  return (
    <ContextProvider>
      <VotesCard />
    </ContextProvider>
  );
};

export default App;
