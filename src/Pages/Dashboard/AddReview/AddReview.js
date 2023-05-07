import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider'

const AddReview = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imageHostKey);




    const handleAddReview = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const doctor = {
                        name: data.name,
                        review: data.review,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }

                    // save doctor information to the database
                    fetch('https://doctors-server-sage.vercel.app/reviews', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`);

                        })
                }
            })
    }



    return (
        <div className='w-96 p-7'>
            <h2 className="text-4xl">Give Us A Review</h2>
            <form onSubmit={handleSubmit(handleAddReview)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Write review</span></label>
                    <textarea type="text" {...register("review", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs p-5" />
                    {errors.review && <p className='text-red-500'>{errors.review.message}</p>}
                </div>
     

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Your photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='btn btn-primary w-full mt-4' value="Submit" type="submit" />
            </form>
        </div>
    );
};


/**
 * Three places to store images
 * 1. Third party image hosting server 
 * 2. File system of your server
 * 3. mongodb (database)
*/

export default AddReview;