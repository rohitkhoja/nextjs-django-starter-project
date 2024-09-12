import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from "react-google-charts";

const LineChartComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

    axios.get(`${BASE_URL}/api/line-chart-data/`)
      .then(response => {
        const transformedData = [["Month", "Value"], ...response.data.data.map((val, i) => [response.data.labels[i], val])];
        setData(transformedData);
      })
      .catch(error => setError("Could not reach the server to get the data"));
  }, []);

  if (error) {
    return <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>;
  }

  return (
    data && (
      <Chart
        width={'100%'}
        height={'400px'}
        chartType="LineChart"
        loader={<div>Loading Chart...</div>}
        data={data}
        options={{
          title: 'Line Chart',
          hAxis: { title: 'Month' },
          vAxis: { title: 'Value' },
          colors: ['#1E88E5'],
          legend: 'none',
        }}
      />
    )
  );
};

export default LineChartComponent;
