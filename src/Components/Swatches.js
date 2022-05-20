import React, { useState } from 'react';

const Swatches = ({data}) => {

    const [active,setActive] = useState(false);

    const  isValidUrl = (_string) => {
        const matchPattern = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
        return matchPattern.test(_string);
      }

    return (
        <div className='typography-wrap row'>
              <div className='grid-md-12'>
                  {data?.map((ele,i)=>(
                      <>
                        <input type="radio" id={"radio"+i}  name="radio" value={ele} onClick={()=>setActive(ele)} checked={ele === active}/>
                        <label for={"radio"+i}>
                                {isValidUrl(ele) 
                                ? <img src={ele} height={20} width={20}/>
                                :ele}
                        </label>
                    </>
                  ))}
              </div>
            </div>
    );

}

export default Swatches;