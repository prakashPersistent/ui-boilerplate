import React, { useState } from 'react';

const Accordion = ({PlusIcon,data}) => {

    const [isOpen,setIsOpen] = useState(false);
    const [active,setActive] = useState();

    return (
        <div className='typography-wrap row'>
              <div className='grid-md-12'>
                <div className='custom-accordion'>
                    {data?.map((ele,i)=>(
                        <div className={`accordion-item ${(isOpen && ele.title === active) && "open"}`} onClick={()=>{setIsOpen(!isOpen);setActive(ele.title)}}>
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