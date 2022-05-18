import React, { useState } from 'react';

const Accordion = ({PlusIcon,data}) => {

    const [isOpen,setIsOpen] = useState(false);
    const [active,setActive] = useState();
   
    const handleClick = (i)=>{

        if(i === active ){
            setIsOpen(!isOpen);
        }else{
            setIsOpen(true);
            setActive(i)
        }
    }

    
    return (
        <div className='typography-wrap row'>
              <div className='grid-md-12'>
                <div className='custom-accordion'>
                    {data?.map((ele,i)=>(
                        <div key={i} className={`accordion-item ${(isOpen && i === active) && "open"}`} onClick={()=>handleClick(i)}>
                        <div className='accordion-head'>{ele?.title} <img src={PlusIcon}></img></div>
                        <div className='accordion-body'>
                        {ele?.body}
                        </div>
                        </div>
                    ))}
                </div>
              </div>
            </div>
    );

}

export default Accordion;