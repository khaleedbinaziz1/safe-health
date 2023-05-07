import React from 'react'
import Banner from '../../Banner/Banner'
import Services from '../Services/Services'
import SearchBar from '../SearchBar/SearchBar'
import Testimonial from '../../Home/Testimonial/Testimonial'
import Doctors from '../../Doctors/Doctors'


export const Home = () => {
  return (
    <div className="">
        <Banner></Banner>
        <SearchBar></SearchBar>
        <Services></Services>
        <Doctors />

        <Testimonial></Testimonial>
    </div>
  )
}
