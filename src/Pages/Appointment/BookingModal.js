import React, { useContext } from 'react'
import { format } from 'date-fns'
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
const BookingModal = ({ treatment, setTreatment, selectedDate ,refetch}) => {

    //treatment is appointment option
    const { name: treatmentName, slots } = treatment;
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext)

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;



        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            name,
            slot,
            email,
            phone,

        }
        fetch('http://localhost:500/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking confirmed');
                    refetch()
                }
                else{
                    toast.error(data.message);
                }
            })


    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                
                <div className="modal-box relative">
                <label htmlFor="booking-modal" className="btn btn-sm btn-primary btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="text-lg font-bold"> {treatmentName}</h3>
                    <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-10">
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" disabled value={date} />
                        <select name="slot" className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input name="name" type="text"  defaultValue={user?.displayName} placeholder="your name" className="input input-bordered w-full" />
                        <input name="email" type="email" defaultValue={user?.email} placeholder="email" className="input input-bordered w-full" />
                        <input name="phone" type="text" placeholder="phone" className="input input-bordered w-full" />
                        <br />
                        <input type="submit" value="submit" className="btn btn-primary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default BookingModal