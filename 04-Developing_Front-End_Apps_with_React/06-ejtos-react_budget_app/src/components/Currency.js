import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { dispatch, currency } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
    <div className='dropdown'>
      <button className='btn btn-secondary dropdown-toogle' type='button' data-bs-toggle="dropdown" style={{ background: "green", borderColor: "green"}}>
        <div> 
          Currency {<select name="Currency" id="Currency" style={{background: 'green'}} onChange={event=>changeCurrency(event.target.value) }>
          <option value="$">$ USD</option>
          <option value="£">£ Pound</option>
          <option value="€">€ Euro</option>
          <option value="₹">₹ Ruppee</option>
          </select>	
          }	
        </div>
      </button>
    </div>
  );

  
};

export default Currency;
