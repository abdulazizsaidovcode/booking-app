import React, { useState } from 'react'
import { FaEye, FaToolbox } from 'react-icons/fa';

export const MainDashboardManageRooms = () => {
    // Bu erda jadval ma'lumotlari bo'lishi mumkin, hozircha qattiq kodlangan
    const data = [
        {
            roomNo: 'P001',
            roomType: 'premium room',
            price: '175000 RWF',
            status: 'Room booked',
            checkIn: 'Checked in',
            checkOut: 'Not yet',
        },
        // Qo'shimcha ma'lumotlar...
    ];
    const [dats , setDats] = useState(data);

    return (
        <table className="min-w-full divide-y divide-gray-200 rounded-xl">
            <thead className="bg-gray-50 rounded-xl">
                <tr className='rounded-lg'>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Room no
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Room Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Room Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Check in
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Check out
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {dats.map((row,i) => (
                    <tr key={i}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.roomNo}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.roomType}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.price}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.status}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.checkIn}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.checkOut}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                <FaEye className="inline-block" />
                            </a>
                            <a href="#" className="text-indigo-600 hover:text-indigo-900 ml-4">
                                <FaToolbox className="inline-block" />
                            </a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};