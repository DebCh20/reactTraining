import React from 'react'

function ConditionalRendering() {
  let login= true;
  let name= 'Deb'; 
  let cars = ["Audi", "BMW", "Tesla"];
  if(login) 
  return (
    <div>
        <h3 style={{color:'teal'}}>Welcome {name=="" ? "Guest": name}</h3>
        {cars.length !== 0 && (
          <h3>
            {name} likes {cars.join(", ")} cars
          </h3>
        )}
    </div>
  )
  else
  return (
    <div>
        <h3>Please login</h3>
    </div>
  )
}

export default ConditionalRendering