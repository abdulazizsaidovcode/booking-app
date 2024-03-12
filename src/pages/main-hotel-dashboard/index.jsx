import React, { useState } from 'react'
import MainHotelDashboardModal from './components/modal';
import MainHotelDashboardButton from './components/button';
import Dashboard from './Dashboard';

export const MainHotelDashboard = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <section className='w-full h-max bg-orange-500 p-5'>
            {/* <button
                className="rounded bg-blue-500 text-white p-2 hover:bg-blue-400"
                onClick={() => setModalOpen(!isModalOpen)}
            >
                Open Modal
            </button>
            <div>
                <MainHotelDashboardButton width="w-32" height="h-10" icon={<i className="fa fa-user" />}>UPDATE</MainHotelDashboardButton>
            </div>
            <MainHotelDashboardModal isOpen={isModalOpen} closeModal={() => setModalOpen(false)} /> */}
            <Dashboard/>
        </section>
    )
}

