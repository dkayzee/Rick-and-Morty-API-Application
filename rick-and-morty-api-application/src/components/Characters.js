import React from 'react'

import axios from 'axios'

class Characters extends React.Component {
  state = {
    info: '',
    characters: '',
    init: false,
    URL: 'https://rickandmortyapi.com/api/character/'
  }

  fetchCharacter = async (URL) => {
    const resp = await axios(URL)
    this.setState({
      info: resp.data.info,
      characters: resp.data.results,
      init: true
    })
    console.log(resp.data)
    window.scrollTo(0, 0)
  }

  componentDidMount(){
    this.fetchCharacter(this.state.URL)
  }


  render(){
    return(
      <div>
        <div className = "character">
          {this.state.init && this.state.characters.map(char => {
            return (
              <div className="characterContainer" key={char.id}>
                <div className="characterImg" key={'characterImg' + char.id}>
                  <img src={char.image} alt=""/>
                </div>
                <div className="characterInfo" key={'characterContainer' + char.id}>
                  <ul key={'ul' + char.id}>
                    <li key={'name' + char.id}>Name: {char.name}</li>
                    <li key={'species' + char.id}>Species: {char.species}</li>
                    <li key={'gender' + char.id}>Gender: {char.gender}</li>
                    <li key={'status' + char.id}>Status: {char.status}</li>
                    <li key={'origin' + char.id}>Origin: {char.origin.name}</li>
                    <li key={'location' + char.id}>Current Location: {char.location.name}</li>
                    <li key={'TV' + char.id}>Appearance: {char.episode.length} episodes</li>
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
        <footer>
          <button onClick={()=>{
            this.state.info.prev && this.fetchCharacter(this.state.info.prev)
          }}>Prev</button>
          <button onClick={()=>{
            this.state.info.next && this.fetchCharacter(this.state.info.next)
          }}>Next</button>
        </footer>
      </div>
    )
  }
}

export default Characters
