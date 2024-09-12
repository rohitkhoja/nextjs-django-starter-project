import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from "react-google-charts";

const PieChartComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

    axios.get(`${BASE_URL}/api/pie-chart-data/`)
      .then(response => {
        const transformedData = [["Color", "Value"], ...response.data.data.map((val, i) => [response.data.labels[i], val])];
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
        chartType="PieChart"
        loader={<div>Loading Chart...</div>}
        data={data}
        options={{
          title: 'Pie Chart',
          colors: ['#E53935', '#1E88E5', '#FB8C00'],
          legend: { position: 'right', textStyle: { color: '#333', fontSize: 14 } },
        }}
      />
    )
  );
};

export default PieChartComponent;
