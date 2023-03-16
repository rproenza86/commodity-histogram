import { Table } from "@nextui-org/react";

export default function HistogramTable({ histogramData }) {
  const generateHistogram = () => {
    const histogramElements = [];

    for (let key in histogramData) {
      histogramElements.push(
        <Table.Row key={key}>
          <Table.Cell>{key}</Table.Cell>
          <Table.Cell>{histogramData[key]}</Table.Cell>
        </Table.Row>
      );
    }

    return histogramElements;
  };

  return (
    <Table
      aria-label="Example table with static content"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
      data-testid="histogram-table"
    >
      <Table.Header>
        <Table.Column>NAME</Table.Column>
        <Table.Column>OCCURRENCES</Table.Column>
      </Table.Header>
      <Table.Body>{generateHistogram()}</Table.Body>
    </Table>
  );
}
