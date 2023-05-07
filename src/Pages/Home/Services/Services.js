import React from 'react';
import fluoride from '../../../assets/images/fluoride.svg'
import cavity from '../../../assets/images/whitening.svg'
import whitening from '../../../assets/images/cavity.svg'
import Service from './Service';

const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Well equipped lab',
            img: fluoride
        },
        {
            id: 2,
            name: 'Online Appointment',
            img: cavity
        },
        {
            id: 3,
            name: 'Health Store',
            img: whitening
        },
       
    ]

    return (
        <div className='m-12'>
            <div className='text-center mb-5 mt-10'>
                <h1 className='text-3xl font-bold  uppercase'>Our Medical Services</h1>
                <small className=''>We are dedicated to serve you
                <br />
                    best medical services</small>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;