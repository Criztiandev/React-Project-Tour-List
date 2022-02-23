import React from 'react'
import './EndPoint.css'
export default function EndPoint({refresh}) {
  return (
    <div className='End-Point'>
        <h1>0 Tour List</h1>
        <button onClick={refresh}>Refresh</button>
    </div>
  )
}
