
import React from 'react';

const getUser = () =>{

    fetch('http://localhost:3000/user')
  .then(res => res.json())
}

export default function token() {
  return (
    <div className='serve'>
        <button>Get user</button>
    </div>
  )
}
