import React, { useState, useEffect } from 'react';
import quote from '../../../assets/icons/quote.svg';
import Review from './Review';

const Testimonial = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://doctors-server-sage.vercel.app/reviews')
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <section className='my-16 m-10' id="test">
            <div className="text-center mb-10">
                <h1 className='text-3xl font-bold  uppercase'>Testimonial</h1>
                <small className=''>What Our Patients Says</small>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {reviews.map(review =>
                    <Review
                        key={review._id}
                        review={review}
                    />
                )}
            </div>
        </section>
    );
};

export default Testimonial;
