import { useState } from 'react'
import './App.css'

function App() {
  const superheroes = [
    {
      name: "Batman",
      powers: ["Rich", "Fly", "Genius"],
      address: {
        street: "Gotham St",
        city: "Gotham",
        country: "USA",
      },
      age: 21,
      isBachelor: true,
      imageUrl:
        "https://rukminim2.flixcart.com/image/850/1000/poster/7/d/g/batman-portrait-bt455566-medium-original-imaekp86fhb3fhxf.jpeg"
    },
    {
      name: "Superman",
      powers: ["Laser Fry", "Fly", "Runs Fast"],
      address: {
        street: "Central St",
        city: "New York",
        country: "USA",
      },
      age: 41,
      isBachelor: false,
      imageUrl:
        "https://c8.alamy.com/comp/2R7EMM0/portrait-of-a-drawing-of-superman-superhero-warner-dc-and-comics-concept-2R7EMM0.jpg"
    },
  ];

  function SuperHEroCards(props) {
    return (
      <>
        {
          props.superheroes.map((ele) => {
            return (

              <div className='card'>
                <div className="imgBox">
                  <img src={ele.imageUrl} alt="batman" />
                </div>
                <h1>{ele.name}</h1>
                <h3>Age : {ele.age}</h3>
                <h2>Powers</h2>
                <ul>
                  {ele.powers.map((ele, ind) => {
                    return <li id={"listItem" + ind}>{ele}</li>
                  })}
                </ul>
              </div>

            )
          })
        }
      </>
    )
  }

  return (
    <>
      <SuperHEroCards superheroes={superheroes}/>
    </>
  )
}

export default App
