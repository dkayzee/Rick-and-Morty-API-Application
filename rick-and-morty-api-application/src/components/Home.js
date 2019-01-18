import React from 'react'

const Home = (props) => {
  return(
    <div>
      <button onClick={props.handleButtonClick}>Characters</button>
      <button onClick={props.handleButtonClick}>Locations</button>
      <button onClick={props.handleButtonClick}>Episodes</button>
    </div>
  )
}

export default Home
