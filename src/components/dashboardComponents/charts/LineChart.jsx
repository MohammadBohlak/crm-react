import { useEffect, useRef } from 'react';
import { Chart } from "chart.js/auto"; // استخدم auto لتسجيل المكونات تلقائياً

const LineChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // تدمير المخطط السابق إذا وجد
    }

    const ctx = chartRef.current.getContext('2d');
    
    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "New Customers",
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // تنظيف المخطط عند إلغاء تركيب المكون
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
      <canvas ref={chartRef}></canvas>
  );
};

export default LineChart;