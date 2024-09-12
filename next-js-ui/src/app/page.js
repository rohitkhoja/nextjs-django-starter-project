'use client'
import React from 'react';
import BarChartComponent from "./components/BarChart";
import LineChartComponent from "./components/LineChart";
import PieChartComponent from './components/PieChart';
import CandlestickChartComponent from './components/CandlestickChart';

const chartContainerStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  borderRadius: '10px',
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};


export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
      <div style={{
        backgroundColor: '#000',
        color: '#fff',
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <h2 style={{ margin: 0 }}>Dashboard</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', padding: '20px' }}>
        <div style={chartContainerStyle}>
          <CandlestickChartComponent />
        </div>
        <div style={chartContainerStyle}>
          <LineChartComponent />
        </div>
        <div style={chartContainerStyle}>
          <BarChartComponent />
        </div>
        <div style={chartContainerStyle}>
          <PieChartComponent />
        </div>
      </div>
    </div>
  );
};

