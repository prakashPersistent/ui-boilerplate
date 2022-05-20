import React, { useState } from 'react';

const Swatches = ({data}) => {

    const [active,setActive] = useState(false);

    const  isValidUrl = (_string) => {
        const matchPattern = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
        return matchPattern.test(_string);
      }

    return (
        <div>
          <div className='swatches-title'>
            Color:{active}
          </div>
          <div className='swatches-row'>
            <ul>
                {data?.map((ele,i)=>(
                    <>
                    <li>
                      <div className='swatches-item'>
                        <input type="radio" id={"color-swateche-"+i}  name="color-swateche" value={ele} onClick={()=>setActive(ele)} checked={ele === active}/>
                        <label for={"color-swateche-"+i}>
                                {isValidUrl(ele) 
                                ? <img className='swatches-type' src={ele}/>
                                :<div className='swatches-type' style={{backgroundColor:ele}}></div>}
                        </label>
                      </div>
                    </li>
                  </>
                ))}
            </ul>
          </div>
        </div>
    );

}

export default Swatches;