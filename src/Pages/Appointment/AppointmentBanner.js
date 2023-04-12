import React, { useState } from 'react';
// import two from '../../assets/images/doctor.png';
import bg from '../../assets/images/bg.png';


import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
    let footer = <p>Please pick a day.</p>;
    if (selectedDate) {
        footer = <p>You picked {format(selectedDate, 'PP')}.</p>;
    }

    return (
        <div style={{
            background: `url(${bg})`,
            backgroundSize: 'cover',
        }}
            className="hero min-h-[100px] bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* <img src={two} className="max-w-sm rounded-lg shadow-2xl " alt='Dentist Chair' /> */}
                <div className='mr-6'>
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}


                    />
                </div>
            </div>

        </div>
    );
};

export default AppointmentBanner;