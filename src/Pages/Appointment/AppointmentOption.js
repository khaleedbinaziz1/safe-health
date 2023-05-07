import React from 'react'
import bg from '../../assets/images/docbg.svg'

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots,specialty,hospital,image} = appointmentOption;
    return (

        <div className="card   shadow-xl p-10">
         <div className="justify-center flex"  style={{backgroundImage: `url(${bg})`,backgroundRepeat: 'no-repeat',width:'100%',borderRadius:'10px'}}>
                <img src={image} alt="doc"  />
              </div>


              <div className="card-body items-center text-center">

              <h2 className="card-title justify-center">Dr.{name}</h2>
                <p className="text-primary border">{specialty}</p>
                <p className="">{hospital}</p>
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