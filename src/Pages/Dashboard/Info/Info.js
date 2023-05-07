import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const Info = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(`https://doctors-server-sage.vercel.app/users2?email=${user.email}`);
      const data = await response.json();
      setUserData(data[0]);
    };

    if (user.email) {
      fetchUserData();
    }
  }, [user.email]);

  const patient = {
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '01/01/1970',
    address: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zipCode: '12345',
    phone: '(555) 555-1234',
  };

  const treatments = [    {      id: 1,      date: '04/01/2023',      doctor: 'Dr. Smith',      notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',    },    {      id: 2,      date: '03/15/2023',      doctor: 'Dr. Johnson',      notes: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',    },  ];

  const reports = [    {      id: 1,      date: '05/01/2023',      doctor: 'Dr. Johnson',      notes: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',    },    {      id: 2,      date: '04/15/2023',      doctor: 'Dr. Smith',      notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',    },    {      id: 3,      date: '04/01/2023',      doctor: 'Dr. Smith',      notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',    },  ];

  return (
    <div className="flex flex-col items-center">
      {userData && (
        <div className="flex items-center">
          <img src={userData.image} alt="User Profile" className="w-16 h-16 rounded-full object-cover mr-4" />
          <div>
            <h2 className="text-xl font-bold">{userData.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
      )}

      <div className="my-8 w-full max-w-3xl border-t-2 border-gray-300 pt-8">
        <h3 className="text-lg font-bold mb-4">Personal Information</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-medium">Date of Birth:</p>
            <p>{patient.dateOfBirth}</p>
          </div>
          <div>
            <p className="font-medium">Address:</p>
            <p>{`${patient.address}, ${patient.city}, ${patient.state} ${patient.zipCode}`}</p>
          </div>
          <div>
            <p className="font-medium">Phone:</p>
            <p>{patient.phone}</p>
          </div>
          <div>
            <p className="font-medium">Email:</p>
            <p>{user.email}</p>
          </div>
       
          <div>
        <p className="font-medium">Full Name:</p>
        <p>{`${patient.firstName} ${patient.lastName}`}</p>
      </div>
    </div>
  </div>

  <div className="my-8 w-full max-w-3xl border-t-2 border-gray-300 pt-8">
    <h3 className="text-lg font-bold mb-4">Treatments</h3>
    <div className="grid grid-cols-4 gap-4 font-medium">
      <p>ID</p>
      <p>Date</p>
      <p>Doctor</p>
      <p>Notes</p>
      {treatments.map((treatment) => (
        <React.Fragment key={treatment.id}>
          <p>{treatment.id}</p>
          <p>{treatment.date}</p>
          <p>{treatment.doctor}</p>
          <p>{treatment.notes}</p>
        </React.Fragment>
      ))}
    </div>
  </div>

  <div className="my-8 w-full max-w-3xl border-t-2 border-gray-300 pt-8">
    <h3 className="text-lg font-bold mb-4">Reports</h3>
    <div className="grid grid-cols-4 gap-4 font-medium">
      <p>ID</p>
      <p>Date</p>
      <p>Doctor</p>
      <p>Notes</p>
      {reports.map((report) => (
        <React.Fragment key={report.id}>
          <p>{report.id}</p>
          <p>{report.date}</p>
          <p>{report.doctor}</p>
          <p>{report.notes}</p>
        </React.Fragment>
      ))}
    </div>
  </div>
</div>
);
};

export default Info;