import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const getCurrentMonthIndex = (): number => {
  const currentMonth = new Date().getMonth();
  return currentMonth;
};

const BarChart: React.FC = () => {
  const currentMonthIndex = getCurrentMonthIndex();

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Dataset',
        data: [100, 200, 450, 300, 400, 2431, 1200, 600, 900, 1200, 800, 1500],
        backgroundColor: (context: any) => {
          const index = context.dataIndex;
          return index === currentMonthIndex ? 'rgba(54, 162, 235, 1)' : 'rgba(54, 162, 235, 0.2)';
        },
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        borderRadius: 10,
        borderSkipped: false,
        barPercentage: 0.6,
        categoryPercentage: 0.6,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 2500,
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          maxRotation: 90,
          minRotation: 90,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
