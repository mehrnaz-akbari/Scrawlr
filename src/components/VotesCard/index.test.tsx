import { fireEvent, render, screen } from "@testing-library/react";
import VotesCard from ".";
import { ContextProvider } from "../../context";

describe("CardRow", () => {
  test("it should add one vote to higher row and remove one vote from selected row ", () => {
    render(
      <ContextProvider>
        <VotesCard />
      </ContextProvider>
    );
    const firstRow = screen.queryByTestId("row-0");
    const firstRowCount = firstRow?.children.length ?? 0;
    // Create a vote button
    const addButton = screen.queryByTestId("add-1");
    addButton && fireEvent.click(addButton);
    // store second row new child
    const newSecondRow = screen.queryByTestId("row-1");
    const secondRowCount = newSecondRow?.children.length ?? 0;
    // select new vote button and click on it
    const firstVoteInRow1 = screen.queryByTestId("vote-1-1");
    firstVoteInRow1 && fireEvent.click(firstVoteInRow1);
    // check for new vote to move row 0
    expect(firstRow?.children.length).toEqual(firstRowCount + 1);
    // check for new vote in row 1 be removed
    expect(newSecondRow?.children.length).toEqual(secondRowCount - 1);
  });

  test("it should add one vote to current row ", () => {
    render(
      <ContextProvider>
        <VotesCard />
      </ContextProvider>
    );
    const secondRow = screen.queryByTestId("row-1");
    const secondRowCount = screen.queryByTestId("row-1")?.children?.length ?? 0;
    const addButton = screen.queryByTestId("add-1");
    addButton && fireEvent.click(addButton);
    expect(secondRow?.children.length).toEqual(secondRowCount + 1);
  });

});
