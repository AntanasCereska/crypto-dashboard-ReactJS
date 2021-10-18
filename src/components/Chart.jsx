import React from "react";
import { Line } from "react-chartjs-2";

const Chart = ({ CRhistory, CRname }) => {
  const priceArr = [];
  const timestampArr = [];

  for (let i = 0; i < CRhistory?.data?.history.length; i++) {
    priceArr.push(CRhistory?.data?.history[i].price);
    timestampArr.push(
      new Date(CRhistory?.data?.history[i].timestamp).toLocaleDateString()
    );
  }

  const state = {
    labels: timestampArr,
    datasets: [
      {
        label: CRname,
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgb(21, 88, 195)",
        borderColor: "rgb(21, 88, 195)",
        borderWidth: 1,
        data: priceArr,
        pointBorderWidth: 0.1,
      },
    ],
  };

  return (
    <div>
      <div>
        <Line
          data={state}
          options={{
            title: {
              display: true,
              fontSize: 20,
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Chart;
