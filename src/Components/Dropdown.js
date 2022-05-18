import React, { useState } from 'react';

const Dropdown = ({ArrowDown,data,disabled}) => {

    const [isOpen,setIsOpen] = useState(false);
    const [active,setActive] = useState(false);

    const handleActive = (e,ele) => {
        setActive(ele);
    }

    return (
        <div className='typography-wrap row'>
              <div className='grid-md-12'>
                 <div className={`custom-dropdown ${isOpen ? "open" : ""}` } onClick={()=>setIsOpen(!isOpen)}>
                   <div className='dropdown-lable'>Select your size: {active ? active :"" }<img src={ArrowDown}></img></div>
                   <div className='dropdown-list'>
                     <ul>
                         {data.map((ele,i)=>(
                            <li key={i} className={disabled.includes(ele) ? "disable" :active === ele ? `active` : "" } onClick={(e)=>handleActive(e,ele)}>{ele}</li>
                         ))}
                     </ul>
                   </div>
                 </div>
              </div>
            </div>
    );

}

export default Dropdown;