import React from 'react';

const Review = ({ review }) => {
    const { name, image, review: userReview, location } = review;
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <p>{userReview}</p>
                <div className="flex items-center mt-6">
                    <div className="avatar mr-6">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={image} alt="" />
                        </div>
                    </div>
                    <div>
                        <h5 className="text-lg">{name}</h5>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" disabled />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" disabled />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" disabled />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" disabled />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-primary" checked disabled />
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;