import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

// components to test
import Commodity from "../commodity";

describe("The Commodity page", () => {
    beforeAll(() => {
        jest.mock("../../../services/histogram", () => ({
            getHistogram: jest.fn(() => Promise.resolve({})),
        }));       
    });

    afterAll(() => {
        jest.resetModules();
        jest.restoreAllMocks();
    });


    it("should render the histogram name", async () => {
        render(<Commodity histogramData={{}} histogramName = "Test Histogram" />);
        
        const title = screen.getByText(/Test Histogram/i);

        expect(title).toBeInTheDocument();
    });

    it("should render the HistogramTable component", () => {
        render(<Commodity histogramData={{}} histogramName = "Test Histogram" />);

        const table = screen.getByTestId("histogram-table");

        expect(table).toBeInTheDocument();
    });
});

