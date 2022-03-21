import React from 'react';

const Apointment = ({ apointment, handleDelete }) => {
    return (
        <div className='card mb-3'>
            <div className="row">
                <div className="col-sm-4">
                    <div className="card-img">
                        <img
                            className='img-thumbnail w-50'
                            src={apointment?.doctorImg}
                            alt="" />
                    </div>
                </div>
                <div className="col-sm-6 text-capitalize py-4">
                    <h3 className='mb-4'>{apointment?.doctorName}</h3>
                    <h4>Apointment Date : {apointment?.apointmentDate}</h4>
                    <h5>Status : {apointment?.status === 'pending'? <span className='text-warning'>{apointment?.status}</span>:<span className='text-success'>{apointment?.status}</span>}</h5>
                </div>
                <div
                    className="col-sm-2"
                    style={{ display: 'flex', justifyContent: 'center', alignItem: 'center' }}
                >
                    <button
                        onClick={()=> handleDelete(apointment._id)}
                        style={{ fontSize: '20px', fontWeight: '700', color: 'red' }}
                        className='btn py-0'
                    >X
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Apointment;