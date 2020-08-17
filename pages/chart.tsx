import React from "react";
import { sdgeChartData } from "../utils/sample-data";

const ChartPage = () => {
  //const [chartData, setChartData] = useState(sdgeChartData[0].chartData.dataset[0].data);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const onPeakData = sdgeChartData[0].chartData.dataset[0].data;
  const superOffPeakData = sdgeChartData[0].chartData.dataset[1].data;
  const offPeakData = sdgeChartData[0].chartData.dataset[2].data;

  const onPeakTotalHours = onPeakData.reduce(
    (totalHours: number, data: any) => {
      return totalHours + parseFloat(data.value);
    },
    0
  );
  const superOffPeakTotalHours = superOffPeakData.reduce(
    (totalHours: number, data: any) => {
      return totalHours + parseFloat(data.value);
    },
    0
  );
  const offPeakTotalHours = offPeakData.reduce(
    (totalHours: number, data: any) => {
      return totalHours + parseFloat(data.value);
    },
    0
  );

  const chartDataDatasetArray = sdgeChartData[0].chartData.dataset;

  const offPeak = 0.29;
  const superOffPeak = 0.09;
  const peak = 0.50;

  return (
    <div>
      <div>
        TOTAL:{" "}
        {formatter.format(
          onPeakTotalHours * peak +
            superOffPeakTotalHours * offPeak +
            offPeakTotalHours * superOffPeak
        )}
      </div>
      <br />
      <div>
        onPeakTotalHours: {onPeakTotalHours} :{" "}
        {formatter.format(onPeakTotalHours * peak)}
      </div>
      <div>
        superOffPeakTotalHours:{" "}
        {formatter.format(superOffPeakTotalHours * offPeak)}
      </div>
      <div>
        offPeakTotalHours: {formatter.format(offPeakTotalHours * superOffPeak)}
      </div>
      <br />

      {chartDataDatasetArray.map(function (dataset: any, iCnt2: number) {
        return (
          <div key={iCnt2}>
            {dataset.seriesname}
            {dataset.data.map(function (rrr: any, iCnt2: number) {
              return (
                <div key={iCnt2}>
                  {rrr.tooltext} {rrr.value}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ChartPage;