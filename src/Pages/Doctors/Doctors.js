import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bg from '../../assets/images/docbg.svg'

const Doctors = () => {
  const [doctorData, setDoctorData] = useState([]);

  useEffect(() => {
    fetch('https://doctors-server-sage.vercel.app/appointmentOptions')
      .then((response) => response.json())
      .then((data) => {
        setDoctorData(data.slice(0, 3)); // extract the first three elements
      });
  }, []);

  return (
    <div className="">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold uppercase">Meet Our Doctors</h1>
        <small className="">
          Well qualified doctors are ready to serve you
        </small>
      </div>
      <div className="flex justify-center ">
        <div className="text-center grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {doctorData.map((doctor) => (
            <div key={doctor.id} className="card   shadow-xl p-5" >
              <div className="justify-center flex"  style={{backgroundImage: `url(${bg})`,backgroundRepeat: 'no-repeat',width:'100%',borderRadius:'10px'}}>
                <img src={doctor.image} alt={doctor.specialization}  />
              </div>

              <div className="card-body items-center text-center">
              <small className="text-primary border">{doctor.specialty}</small>
                <p className="bold">Dr. {doctor.name}</p>
               
                <small className="text-gray-[600] ">{doctor.hospital}</small>
                <div className="card-actions">
                  <Link to="/appointment" className="btn btn-primary btn-outline">
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center flex-justify-center mt-10">
        <Link to="/appointment" className="btn btn-primary">
          see more
        </Link>
      </div>
    </div>
  );
};

export default Doctors;
