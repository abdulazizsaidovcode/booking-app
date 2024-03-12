import React from 'react';

// Har bir statistika kartochkasini ifodalovchi komponent
const StatCard = ({ icon, number, label }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow p-4">
      <div className={`text-4xl ${iconColor(icon)}`}>{icon}</div>
      <div className="mt-2 text-3xl font-semibold">{number}</div>
      <div className="text-md text-gray-700">{label}</div>
    </div>
  );
};

// Ikon rangini qaytaruvchi yordamchi funksiya
const iconColor = (icon) => {
  let color;
  switch (icon) {
    case '🛏️':
      color = 'text-blue-500';
      break;
    case '🧳':
      color = 'text-red-500';
      break;
    // Boshqa ikonlar uchun ranglar qo'shing
    default:
      color = 'text-gray-500';
  }
  return color;
};

// Asosiy dashboard komponenti
const Dashboard = () => {
  // Statistik ma'lumotlarni o'z ichiga oluvchi massiv
  const stats = [
    { icon: '🛏️', number: 31, label: 'Total Rooms' },
    { icon: '🧳', number: 4, label: 'Room Types' },
    // Qolgan statistik ma'lumotlar qo'shing
  ];

  return (
    <div className="p-6 bg-orange-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} icon={stat.icon} number={stat.number} label={stat.label} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
