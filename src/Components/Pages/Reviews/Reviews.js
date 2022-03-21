import React from 'react';

const Reviews = ({review}) => {
    return (
        <div className='col-md-3'>
            <div className="p-3 m-2 shadow rounded">
                <h4>{review.name}</h4>
                <p>{review.review.slice(0, 95)}...</p>
            </div>
        </div>
    );
};

export default Reviews;