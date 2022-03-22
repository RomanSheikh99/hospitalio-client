import React from 'react';

const Card = ({ card, handleDelete }) => {
    return (
        <div className='card mb-3'>
            <div className="row">
                <div className="col-sm-4">
                    <div className="card-img">
                        <img
                            className='img-thumbnail'
                            src={card?.serviceImg}
                            alt="" />
                    </div>
                </div>
                <div className="col-sm-6 text-capitalize py-4">
                    <h3 className='mb-4'>{card?.serviceName}</h3>
                    <h3>$ {card?.serviceCost}</h3>
                </div>
                <div
                    className="col-sm-2"
                    style={{ display: 'flex', justifyContent: 'center', alignItem: 'center' }}
                >
                    <button
                        onClick={()=> handleDelete(card._id)}
                        style={{ fontSize: '20px', fontWeight: '700', color: 'red' }}
                        className='btn py-0'
                    >X
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;