import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    axios.post('https://serene-hamlet-92817.herokuapp.com/makeAdmin', data).then(res => {
      if (res.data.insertedId) {
        alert('added successfully');
        reset();
      }
    });
  };
  return (
    <div>
      <div className=" w-50 mx-auto">
        <div style={{ borderRadius: '10px' }} className="shadow p-3 mt-3">
          <h1 style={{ color: '#32AEB1', fontWeight: 'bold' }}>
            Make An Admin
          </h1>
          <form
            className="d-flex flex-column"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              style={{
                border: '2px solid #32AEB1',
                borderRadius: '5px',
                padding: '10px',
              }}
              className="mt-2"
              placeholder="Admin Name"
              {...register('name', { required: true })}
            />
            <input
              style={{
                border: '2px solid #32AEB1',
                borderRadius: '5px',
                padding: '10px',
              }}
              className="mt-2"
              placeholder="Admin Email"
              {...register('email', { required: true })}
            />
            <input className="mt-2 btn login-btn" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;