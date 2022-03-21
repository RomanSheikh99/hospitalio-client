import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const GiveReview = ({ doctor,updateReview }) => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    const giveReview = (data) => {

        const review = {};
        review.doctorId = doctor[0]._id;
        review.name = data.name;
        review.review = data.review;
        review.userId = user.email;

        axios.post('https://serene-hamlet-92817.herokuapp.com/giveReview', review).then(res => {
            if (res.data.insertedId) {
                reset();
                updateReview();
                alert('Review Send');
            }
        });
    };


    return (
        <div className='border border-2 p-3 border-dark rounded-2'>
                                <h4>Give Review</h4>
                                <form
                                    className="d-flex flex-column"
                                    onSubmit={handleSubmit(giveReview)}
                                >
                                    <input
                                        type="text"
                                        style={{
                                            border: '2px solid #32AEB1',
                                            borderRadius: '5px',
                                            padding: '10px',
                                        }}
                                        placeholder='Your Name'
                                        className="mt-2"
                                        {...register('name', { required: true })}
                                    />
                                    <textarea
                                        style={{
                                            border: '2px solid #32AEB1',
                                            borderRadius: '5px',
                                            padding: '10px',
                                        }}
                                        placeholder='Your Review'
                                        className="mt-2"
                                        {...register('review', { required: true })}
                                    />
                                    <input
                                        value='Submit'
                                        style={{ outline: '2px solid #12C1AD', color: '#12C1AD' }}
                                        className="mt-4 mx-auto btn rounded-pill border-0 px-4 text-bold w-75"
                                        type="submit" />
                                </form>
                            </div>
    );
};

export default GiveReview;