import React, { useEffect, useRef } from 'react';
import { Book, Activity, CheckCircle } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const Overview = () => {
  const chartRef = useRef(null);

  const statCards = [
    { title: 'Enrolled Courses', value: 12, icon: Book, color: 'bg-blue-100 text-blue-600' },
    { title: 'Active Courses', value: 3, icon: Activity, color: 'bg-green-100 text-green-600' },
    { title: 'Completed Courses', value: 13, icon: CheckCircle, color: 'bg-purple-100 text-purple-600' },
  ];

  const progressData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Courses Completed',
        data: [3, 2, 2, 5, 4, 5, 6],
        fill: false,
        borderColor: '#065535',
        tension: 0.1,
      },
    ],
  };

  useEffect(() => {
    return () => {
      // Destroy the chart instance when the component unmounts
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-[#065535] mb-8">Dashboard Overview</h1>
      
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {statCards.map((card, index) => (
          <div key={index} className={`p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 ${card.color}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold mb-2">{card.title}</p>
                <p className="text-3xl font-bold">{card.value}</p>
              </div>
              <card.icon className="w-12 h-12 opacity-80" />
            </div>
          </div>
        ))}
      </div>

      {/* Progress Chart Section */}
      <div>
        <h2 className="text-2xl font-bold text-[#065535] mb-6">Course Progress</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <Line
            ref={chartRef}
            data={progressData}
            options={{ maintainAspectRatio: false }}
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
