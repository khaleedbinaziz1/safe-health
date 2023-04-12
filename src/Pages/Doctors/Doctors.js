import React from 'react'
import { Link } from 'react-router-dom'
import gyno from '../../assets/images/gyno.svg'

const Doctors = () => {
    return (
       <div className="">
         <div className="text-center mb-10">
         <h1 className='text-3xl font-bold  uppercase'>Meet Our Doctors</h1>
                <small className=''>Well  qualified doctors are ready to serve you
                </small>
         </div>
         <div className="flex justify-center ">
            <div className="text-center grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={gyno} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <small className="text-gray-[600]">gynecologist</small>
                        <div className="card-actions">
                            <button className="btn btn-primary btn-outline">Book Appointment</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={gyno} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <small className="text-gray-[600]">gynecologist</small>
                        <div className="card-actions">
                            <button className="btn btn-primary btn-outline">Book Appointment</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={gyno} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <small className="text-gray-[600]">gynecologist</small>
                        <div className="card-actions">
                            <button className="btn btn-primary btn-outline">Book Appointment</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={gyno} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <small className="text-gray-[600]">gynecologist</small>
                        <div className="card-actions">
                            <button className="btn btn-primary btn-outline">Book Appointment</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={gyno} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <small className="text-gray-[600]">gynecologist</small>
                        <div className="card-actions">
                            <button className="btn btn-primary btn-outline">Book Appointment</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={gyno} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <small className="text-gray-[600]">gynecologist</small>
                        <div className="card-actions">
                            <button className="btn btn-primary btn-outline">Book Appointment</button>
                        </div>
                    </div>
                </div>


                
                

            </div>
           
           
        </div>
        <div className="text-center flex-justify-center mt-10">
                    <Link className="btn btn-primary">see more</Link>
                </div>
       </div>
    )
}

export default Doctors