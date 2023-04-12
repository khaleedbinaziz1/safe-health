import React, { useState } from 'react';
import axios from 'axios';

const AddDoctors = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [slots, setSlots] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('slots', slots);

    try {
      const response = await axios.post('http://localhost:500/appointmentOptions', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mx-auto my-8 p-8 rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-medium mb-4">Add Doctor</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="slots" className="block text-gray-700 font-medium mb-2">Slots:</label>
        <input
          type="text"
          id="slots"
          value={slots}
          onChange={(e) => setSlots(e.target.value)}
          className="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block text-gray-700 font-medium mb-2">Image:</label>
        <input
          type="file"
          id="image"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <button type="submit" className="w-full btn-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
    </form>
  );
};

export default AddDoctors;
