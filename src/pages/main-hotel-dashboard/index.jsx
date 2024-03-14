import React, { useState } from 'react'
import HotelDashboard from './Dashboard';
// import { Route, Routes } from 'react-router-dom';
import MaindashboardSidebar from './components/sitebar';
import MainHotelMyAccount from './my-accaunt';
import HotelDashboardManageServises from './manage-serveses';
import HotelDashboardDescription from './hotel-description';
import { MainDashboardManageRooms } from './magage-rooms';
import { MainDashboardNavigation } from './components/navigation';
import MainDashboardRoomForm from './magage-rooms/addnewroom';

export const MainHotelDashboard = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <section className='w-full h-max bg-orange-500 p-5 grid gap-5 grid-cols-4'>
            {/* <Routes>
                <Route path='/MainHotelDashboard/nimadir' Component={<Dashboard/>} />
            </Routes> */}

            <MaindashboardSidebar />
            <div className='col-span-3'>
                <div className='py-5'>
                    <MainDashboardNavigation/>
                </div>
                {/* <HotelDashboardManageServises /> */}
                {/* <MainHotelMyAccount/> */}
                {/* <HotelDashboardDescription/> */}
                <MainDashboardManageRooms/>
                {/* <MainDashboardRoomForm/> */}

            </div>
        </section>
    )
}

