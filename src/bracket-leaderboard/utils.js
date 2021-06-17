export const calculateVerticalStartingPoint = (columnIndex, height) =>
  2 ** columnIndex * (height / 2) - height / 2;

export const columnIncrement = (columnIndex, height) =>
  2 ** columnIndex * height;

export const calculateHeightIncrease = (columnIndex, rowIndex, height) =>
  columnIncrement(columnIndex, height) * rowIndex;

export const calculateVerticalPositioning = ({
  rowIndex,
  columnIndex,
  rowHeight: height,
}) => {
  return (
    calculateHeightIncrease(columnIndex, rowIndex, height) +
    calculateVerticalStartingPoint(columnIndex, height)
  );
};

export const calculatePositionOfMatch = (
  rowIndex,
  columnIndex,
  { canvasPadding, rowHeight, columnWidth }
) => {
  const result = calculateVerticalPositioning({
    rowHeight,
    rowIndex,
    columnIndex,
    canvasPadding,
  });

  return {
    x: columnIndex * columnWidth + canvasPadding,
    y: result + canvasPadding,
  };
};
