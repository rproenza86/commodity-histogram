import startHistogramProcessing, { HistogramColumns } from '../histogramProcessor';

describe('The startHistogramProcessing function', () => {
    it('should return the correct CommodityType histogram results for the default input file', async () => {
        const column = HistogramColumns.CommodityType;
        const expected = { "Crops": 2064, "Livestock/Dairy": 864 };

        const actual = await startHistogramProcessing(column);

        expect(actual).toEqual(expected);
    });

    it('should return the correct Commodity histogram results for the default input file', async () => {
        const column = HistogramColumns.Commodity;
        const expected = { "Barley": 228, "Beef": 192, "Chicken": 108, "Corn": 240, "Dairy": 72, "Egg": 132, "Oats": 228, "Per capita meat consumption, retail weight": 120, "Pork": 144, "Rice": 216, "Sorghum": 228, "Soybean meal": 120, "Soybean oil": 132, "Soybeans": 228, "Turkey": 96, "Upland Cotton": 204, "Wheat": 240 }

        const actual = await startHistogramProcessing(column);

        expect(actual).toEqual(expected);
    });

    it('should throw an error for an invalid input file', async () => {
        const column = HistogramColumns.Commodity;
        const filePath = './data/nonexistent.csv';

        startHistogramProcessing(column, filePath)
            .catch((e) => {
                expect(e).toEqual("ENOENT: no such file or directory, open './data/nonexistent.csv");
            });
    });
});