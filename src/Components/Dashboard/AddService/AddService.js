import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {

    axios.post('https://serene-hamlet-92817.herokuapp.com/addService', data).then(res => {
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
            Add Service
          </h1>
          <form
            className="d-flex flex-column  "
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              style={{
                border: '2px solid #32AEB1',
                borderRadius: '5px',
                padding: '10px',
              }}
              className="mt-2"
              placeholder="Service Title"
              {...register('title', { required: true })}
            />
            <input
              style={{
                border: '2px solid #32AEB1',
                borderRadius: '5px',
                padding: '10px',
              }}
              className="mt-2"
              placeholder="Cost Of Service"
              {...register('cost', { required: true })}
            />
            <input
              style={{
                border: '2px solid #32AEB1',
                borderRadius: '5px',
                padding: '10px',
              }}
              className="mt-2"
              placeholder="Image link"
              {...register('img', { required: true })}
            />
            <textarea
              style={{
                border: '2px solid #32AEB1',
                borderRadius: '5px',
                padding: '10px',
              }}
              className="mt-2"
              placeholder="Description"
              {...register('description', { required: true })}
            />
            <input className="mt-2 btn login-btn" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
