import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data'
import people from './data'
function App() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

  function getPrev() {
    index === 0 ? setIndex(people.length - 1) : setIndex(index - 1)
  }
  function getNext() {
    index === people.length - 1 ? setIndex(0) : setIndex(index + 1)
  }
  // useEffect(() => {
  //   let slider= setInterval(() => {
  //     getNext()
  //   }, 3000)
  
  //    return()=> clearInterval(slider)
  // }, [index])
  return (
    <div className="section-center">
      <article key={people[index].id}>
        <img src={people[index].image} className="person-img" alt="" />
        <h4>{people[index].name}</h4>
        <p className="title">{people[index].title}</p>
        <p className="text">{people[index].quote}</p>
        <FaQuoteRight className="icon" />
      </article>

      <button className="prev" onClick={getPrev}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={getNext}>
        <FiChevronRight />
      </button>
    </div>
  )
}

export default App
