import { useEffect, useState } from 'react';


import Table from './Table';
import axios from 'axios';

function Search() {
  const[query,setQuery] =useState("");
  const [data,setData] = useState([])
  useEffect(()=>{
    const fetchUsers = async()=>{
      const res = await axios.get(`https://doctors-server-sage.vercel.app/appointmentOptions/?q=${query}`)
      setData(res.data);
    };
   if(query.length === 0 || query.length >1 ) fetchUsers();
  },[query])

  return (
    <div className="mx-5">
      <input type="text" className="search" placeholder="Search" onChange={(e)=>setQuery(e.target.value)} />
    {<Table data={data}/>}
    <button className="btn">Button</button>

    </div>
  );
}

export default Search;
