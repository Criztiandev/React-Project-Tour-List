import React, { useState } from 'react'

export default function Tour(props) {
  const [readMore,setReadMore] = useState(false)
  const text = props.readMore ? "Show Less" : "Read More"

  return (
    <article className='tour-container'>
        <img src={props.image} alt={props.name} />

        <footer className='tour-footer'>
            <section className='tour-details'>
                <h3 className='name'>{props.name}</h3>
                <h4 className='price'>{props.price}</h4>
            </section>

            <p className='info'>{readMore ? props.info : props.info.substr(0,200)}</p>
            <div className="tour-btns">
            <button 
              onClick={() => setReadMore(!readMore)}
            className='readmore'>{text}</button>
            <button 
            onClick={() => props.removeCard(props.id)}
            className='interested'>Not Interested</button>
            </div>
        </footer>
    </article>
  )
}
