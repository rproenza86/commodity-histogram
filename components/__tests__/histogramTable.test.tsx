import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

// component to test
import HistogramTable from "../histogramTable";

describe("The histogramTable component", function () {
  let histogramDataMock;

  beforeEach(function () {
    histogramDataMock = {
      Crops: 2064,
      "Livestock/Dairy": 864,
    };
  });

  it('should renders a table with all the data', () => {
    render(<HistogramTable histogramData={histogramDataMock}/>)
    
    const nameHeader = screen.getByText('NAME')
    const occurrenceHeader = screen.getByText('OCCURRENCES')
    const cropsName = screen.getByText('Crops')
    const livesStockValue = screen.getByText('864')

    expect(nameHeader).toBeInTheDocument()
    expect(occurrenceHeader).toBeInTheDocument()
    expect(cropsName).toBeInTheDocument()
    expect(livesStockValue).toBeInTheDocument()
  })
});
