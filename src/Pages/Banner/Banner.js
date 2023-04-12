import React from 'react'
import bg from '../../assets/images/bg.png'
import doctors from '../../assets/images/docs.svg'
import { Link } from 'react-router-dom'


const Banner = () => {
    return (
        <div className="hero min-h-[400px] bg-base-100"
            style={{
                backgroundColor: 'primary',
                backgroundSize: 'cover'
            }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={doctors} className="  " alt="" style={{

                    width: '100%',
                }} />
                <div>
                    <h1 className="text-5xl font-bold text-primary">WE CARE</h1>
                    <h1 className="text-5xl font-bold">about your health</h1>
                    <p className="py-6">Good health is the state of mental, physical and social well being
                        and it does not just mean absence of diseases.</p>
                    <Link to="/appointment" className="btn btn-primary">Book Appointment</Link>
                    <br />
                    <br />
                    <p>Become member of our hospital community?
                    <span className="text-primary">sign up</span></p>
                </div>
                
            </div>
        </div>
    )
}

export default Banner