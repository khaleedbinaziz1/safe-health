import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const DoctorProfile = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [doctorData, setDoctorData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(`https://doctors-server-sage.vercel.app/users2?email=${user.email}`);
      const data = await response.json();
      setUserData(data[0]);
    };

    const fetchDoctorData = async () => {
      const response = await fetch(`https://doctors-server-sage.vercel.app/doctors?email=${user.email}`);
      const data = await response.json();
      setDoctorData(data[0]);
    };

    if (user.email) {
      fetchUserData();
      fetchDoctorData();
    }
  }, [user.email]);

  const patient = {
    firstName: doctorData?.firstName || '',
    lastName: doctorData?.lastName || '',
    dateOfBirth: doctorData?.dateOfBirth || '',
    address: doctorData?.address || '',
    city: doctorData?.city || '',
    state: doctorData?.state || '',
    zipCode: doctorData?.zipCode || '',
    phone: doctorData?.phone || '',
    specialty: doctorData?.specialty || '',
    hospital: doctorData?.hospital || '',
  };

  const treatments = [
    {
      id: 1,
      date: '04/01/2023',
      patient: 'John Doe',
      diagnosis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      treatment: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
    },
    {
      id: 2,
      date: '03/15/2023',
      patient: 'John Doe',
      diagnosis: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
      treatment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  const reports = [
    {
      id: 1,
      date: '05/01/2023',
      patient: 'John Doe',
      notes: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
    },
    {
      id: 2,
      date: '04/15/2023',
      patient: 'John Doe',
      notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 3,
      date: '04/01/2023',
      patient: 'John Doe',
      notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  return (
    <div className="flex flex-col items-center  ">
      {userData && (
        <div className="flex items-center  ">
          <img src={userData.image} alt="User Profile" className="w-16 h-16 rounded-full object-cover mr-4" />
          <div>
            <h2 className="text-xl font-bold">{userData.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
      )}

      <div className="my-8">
<h2 className="text-2xl font-bold">Doctor Profile</h2>
<table className="table-fixed mt-4">
<tbody>
<tr>
<td className="font-bold w-1/4">Name:</td>
<td>{doctorData?.firstName} {doctorData?.lastName}</td>
</tr>
<tr>
<td className="font-bold">Date of Birth:</td>
<td>{doctorData?.dateOfBirth}</td>
</tr>
<tr>
<td className="font-bold">Address:</td>
<td>{doctorData?.address}</td>
</tr>
<tr>
<td className="font-bold">City:</td>
<td>{doctorData?.city}</td>
</tr>
<tr>
<td className="font-bold">State:</td>
<td>{doctorData?.state}</td>
</tr>
<tr>
<td className="font-bold">Zip Code:</td>
<td>{doctorData?.zipCode}</td>
</tr>
<tr>
<td className="font-bold">Phone:</td>
<td>{doctorData?.phone}</td>
</tr>
<tr>
<td className="font-bold">Specialty:</td>
<td>{doctorData?.specialty}</td>
</tr>
<tr>
<td className="font-bold">Hospital:</td>
<td>{doctorData?.hospital}</td>
</tr>
</tbody>
</table>
</div>
<div className="my-8">
    <h2 className="text-2xl font-bold">Treatments</h2>
    <table className="table-fixed mt-4">
      <thead>
        <tr>
          <th className="w-1/6">#</th>
          <th className="w-1/6">Date</th>
          <th className="w-2/6">Patient</th>
          <th className="w-3/6">Diagnosis</th>
          <th className="w-3/6">Treatment</th>
        </tr>
      </thead>
      <tbody>
        {treatments.map((treatment) => (
          <tr key={treatment.id}>
            <td>{treatment.id}</td>
            <td>{treatment.date}</td>
            <td>{treatment.patient}</td>
            <td>{treatment.diagnosis}</td>
            <td>{treatment.treatment}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <div className="my-8">
    <h2 className="text-2xl font-bold">Reports</h2>
    <table className="table-fixed mt-4">
      <thead>
        <tr>
          <th className="w-1/6">#</th>
          <th className="w-1/6">Date</th>
          <th className="w-2/6">Patient</th>
          <th className="w-3/6">Notes</th>
        </tr>
      </thead>
      <tbody>
        {reports.map((report) => (
          <tr key={report.id}>
            <td>{report.id}</td>
            <td>{report.date}</td>
            <td>{report.patient}</td>
            <td>{report.notes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

</div>
);
};

export default DoctorProfile;
