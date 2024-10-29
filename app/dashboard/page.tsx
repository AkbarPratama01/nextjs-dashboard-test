'use client'; // Untuk menggunakan hook React di Next.js
import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useState, useEffect } from 'react';

// Daftarkan elemen PieChart
ChartJS.register(ArcElement, Tooltip, Legend);

// Definisikan tipe state data chart
interface ChartDataset {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
}

interface ChartState {
  labels: string[];
  datasets: ChartDataset[];
}


const DashboardPage: React.FC = () => {
  // Inisialisasi data income dan expense
  const [data, setData] = useState({
    labels: ['Income', 'Expense'],
    datasets: [
      {
        label: 'Total Transactions',
        data: [0, 0], // Awalnya kosong, diupdate nanti
        backgroundColor: ['#4caf50', '#f44336'], // Warna pie chart
        hoverOffset: 4,
      },
    ],
  });

  // Simulasikan pengambilan data transaksi (misalnya dari API)
  useEffect(() => {
    const fetchTransactionData = async () => {
      // Contoh data total transaksi
      const income = 10000;
      const expense = 7000;

      setData((prev) => ({
        ...prev,
        datasets: [
          {
            ...prev.datasets[0],
            data: [income, expense], // Set data baru
          },
        ],
      }));
    };

    fetchTransactionData();
  }, []);

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Income</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Pemasukkan dalam satu tahun.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Lihat
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
      </div>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Expanse</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Pengeluaran dalam satu tahun.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Lihat
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
      </div>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Transaksi</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Transaksi dalam satu tahun.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Lihat
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
      </div>
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-xl font-semibold text-center mb-6">Transaksi</h1>
        <Pie data={data} />
      </div>
    </div>
  );

}

export default DashboardPage;