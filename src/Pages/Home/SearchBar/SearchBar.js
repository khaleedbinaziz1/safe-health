import React from 'react';
import partner1 from '../../../assets/images/partner1.svg';
import partner2 from '../../../assets/images/pertner2.svg';
import partner3 from '../../../assets/images/pertner3.svg';
import partner4 from '../../../assets/images/pertner4.svg';
import partner5 from '../../../assets/images/partner5.svg';

const Partners = () => {
  return (
    <div className="bg-accent p-10">
      <h2 className="text-center text-2xl font-bold mb-10">Our Partners</h2>
      <div className="flex justify-center items-center pb-10" 
      >
        <img src={partner1} alt="Partner 1" className="h-16 mx-6 " style={{width:'10%',height:'10%'}}/>
        <img src={partner2} alt="Partner 2" className="h-16 mx-6" style={{width:'10%',height:'10%'}}/>
        <img src={partner3} alt="Partner 3" className="h-16 mx-6" style={{width:'10%',height:'10%'}}/>
        <img src={partner4} alt="Partner 3" className="h-16 mx-6" style={{width:'10%',height:'10%'}}/>
        <img src={partner5} alt="Partner 3" className="h-16 mx-6" style={{width:'10%',height:'10%'}}/>
      </div>
    </div>
  );
};

export default Partners;
