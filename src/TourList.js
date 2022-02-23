import React from 'react'
import Tour from './Components/Tour'
export default function TourList({tourList,removeCard,toggleReadMore}) {
  return (
        <section className='tourList-container'>
           {tourList.map(item =>{
               return (
                        <Tour 
                        key = {item.id}
                        {...item}
                        toggleReadMore = {toggleReadMore}
                        removeCard = {removeCard}
                        />
               )
           })}
        </section>
  )
}
