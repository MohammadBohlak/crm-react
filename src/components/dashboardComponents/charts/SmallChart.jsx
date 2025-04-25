import React from 'react';
import { Bar } from 'react-chartjs-2';
import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SmallChart = ({chartColor}) => {
  const data = {
    labels: [' ', ' ', ' '],
    datasets: [
      {
        label: '', // إفراغ نص التسمية
        data: [50, 70, 23],
        backgroundColor: chartColor,
        borderColor: chartColor,
        borderWidth: 1,
      },
      {
        label: '', // إفراغ نص التسمية
        data: [25, 40, 60],
        backgroundColor: chartColor,
      },
    ],
  };

  const options = {
    responsive: false,
    plugins: {
      legend: {
        display: false, // إخفاء وسيلة الإيضاح
      },
      tooltip: {
        enabled: false, // إخفاء التلميحات
      },
    },
    scales: {
      x: {
        display: false, // إخفاء المحور الأفقي بالكامل
        grid: {
          display: false, // إخفاء شبكة المحور الأفقي
        },
      },
      y: {
        display: false, // إخفاء المحور العمودي بالكامل
        grid: {
          display: false, // إخفاء شبكة المحور العمودي
        },
      },
    },
  };

  return (
    <div >
      <Bar 
        data={data} 
        options={options}
        width={null}
        height={null}
      />
    </div>
  );
};

export default SmallChart;