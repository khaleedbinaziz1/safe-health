import React from 'react'
import gyno from '../../assets/images/gyno.svg'

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots,speciality} = appointmentOption;
    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body text-center">
            <img src={gyno} alt="Shoes" className="rounded-xl" />
                <h2 className="card-title justify-center">{name}</h2>
                <div className="badge badge-primary badge-outline w-1/2">{speciality}</div>
                <p>{slots.length > 0 ? slots[0] : 'Try another day please'}</p>
                <p>{slots.length} {slots.length > 1 ? 'slots' : 'slot'} available</p>
                <div className="card-actions justify-center">
                    <label

                        disabled={slots.length === 0}
                        htmlFor="booking-modal" className="btn btn-primary right-2"
                        onClick={() => setTreatment(appointmentOption)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    )
}

export default AppointmentOption