import React, { useEffect, useState } from 'react';

const ApointmentRequest = () => {
    const [apointmentReq, setApointmentReq] = useState([])
    const [isUpdated, setIsUpdated] = useState(false)

    useEffect(() => {
        fetch('https://serene-hamlet-92817.herokuapp.com/getAppointment')
            .then(res => res.json())
            .then(data => setApointmentReq(data))
    }, [isUpdated])
    
      //handle approve modifiedCount
    const handleAccept = id => {
        const data = apointmentReq.find(d => d._id === id);
        data.status = 'Accepted';

        fetch(`https://serene-hamlet-92817.herokuapp.com/updateAppointment/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    alert('accepted request')
                    setIsUpdated(true);
                } else {
                    setIsUpdated(false);
                }
            });

    };


    return (
        <div className='container'>
            <div className='row'>
                {
                    apointmentReq.map(apointment => <div className="col-md-6">
                        <div className='shadow m-2 p-3 text-capitalize'>
                            <h3 className=''>{apointment?.doctorName}</h3>
                            <h4>Patient : <span className='fs-5'>{apointment?.userId}</span></h4>
                            <h4>Apointment Date : {apointment?.apointmentDate}</h4>
                            <h5>Status : {apointment?.status === 'pending' ? <span className='text-warning'>{apointment?.status}</span> : <span className='text-success'>{apointment?.status}</span>}</h5>
                            <button onClick={()=>handleAccept(apointment._id)} className='btn btn-success py-2 px-4 my-1 mx-2'>
                                Accept
                            </button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ApointmentRequest;