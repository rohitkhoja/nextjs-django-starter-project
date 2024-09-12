import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from "react-google-charts";

const CandlestickChartComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

    axios.get(`${BASE_URL}/api/candlestick-data/`)
      .then(response => setData([
        ['x', 'low', 'open', 'close', 'high'],
        ...response.data.data.map(item => [item.x, item.low, item.open, item.close, item.high])
      ]))
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
        chartType="CandlestickChart"
        loader={<div>Loading Chart...</div>}
        data={data}
        options={{
          title: 'Candlestick Chart',
          legend: 'none',
        }}
      />
    )
  );
};

export default CandlestickChartComponent;
