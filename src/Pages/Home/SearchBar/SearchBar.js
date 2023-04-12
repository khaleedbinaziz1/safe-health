import React from 'react'

const SearchBar = () => {
    return (
        <div className=" flex justify-center ">

            <div className=" shadow-2xl flex justify-center p-10 round item-stretch" style={{ borderRadius: '10px' }}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">What is your name?</span>
                    </label>
                    <input type="text" placeholder="Name of doctor" className="input input-bordered mr-5   " />
                </div>
                <div className="form-control w-full max-w-xs">
                <label className="label">
                        <span className="label-text">Speciality</span>
                    </label>
                    <select className="select select-bordered mr-5 ">
                        <option disabled selected>cardiology</option>
                        <option>Gastro Liver</option>
                        <option>Greedo</option>
                    </select>
                </div>



                <button className="btn btn-primary mt-9">Button</button>
            </div>
        </div>
    )
}

export default SearchBar