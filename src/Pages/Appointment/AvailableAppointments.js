import React, { useEffect, useState } from 'react'
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from './BookingModal';
import { useQuery } from '@tanstack/react-query';

const AvailableAppointments = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);
    const [search, setSearch] = useState('');
    const date = format(selectedDate, 'PP')

    const { data: appointmentOption = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date, search],
        queryFn: async () => {
            const res = await fetch(`https://doctors-server-sage.vercel.app/appointmentOptions?date=${date}&q=${search}`);
            const data = await res.json();
            return data;
        }
    });

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    }


    return (
        <div className="m-6">
            <div className="flex items-center justify-center space-x-4 mb-6">

                    <div className="shadow-2xl flex justify-center p-10 round item-stretch" style={{ borderRadius: '10px',width:'70%' }}>
                        <div className="form-control w-full w-full">
                            <label className="label">
                                <span className="label-text">Search By Name</span>
                            </label>
                            <input type="text" placeholder="Name of doctor" className="input input-bordered mr-5   " value={search} onChange={handleSearchChange} />

                        </div>

                        <button className="btn btn-primary mt-9" onClick={() => refetch()}>Search</button>




             
                </div>
            </div>
            <p className="text-center text-primary font-bold">Available Appointments on {format(selectedDate, 'PP')} </p>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    appointmentOption.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&

                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch={refetch}
                />
            }
        </div>
    )
}

export default AvailableAppointments