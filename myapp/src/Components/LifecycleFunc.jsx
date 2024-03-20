import React, { useState } from 'react';
import { useEffect } from 'react';

function LifecycleFunc() {
    let [place, setPlace] = useState('');
    let [index, setIndex] = useState(0);
    let placesArr=['Pune', 'Mumbai', 'Gurgaon'];

    useEffect(() => {  
        setPlace(placesArr[index])         
        if(place=='Gurgaon')       
        document.querySelector('.placeName').style.color = "teal";
        else
        document.querySelector('.placeName').style.color = "magenta";               
    }, [index,place])

 return (
    <div>
        <h2 className='placeName'>Name of place {place}</h2>        
            <button className='btn btn-outline-primary'
            onClick={()=>setIndex(prevIndex => (prevIndex +1 ) % placesArr.length)}>Change place</button>
    </div>
  )
}

export default LifecycleFunc