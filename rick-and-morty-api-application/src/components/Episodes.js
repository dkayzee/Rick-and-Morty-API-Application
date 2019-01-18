import React from 'react'

import axios from 'axios'

class Episodes extends React.Component {
  state = {
    info: '',
    locations: '',
    init: false,
    URL: 'https://rickandmortyapi.com/api/episode/'
  }

  fetchEpisode = async (URL) => {
    const resp = await axios(URL)
    this.setState({
      info: resp.data.info,
      episodes: resp.data.results,
      init: true
    })
    console.log(resp.data)
    window.scrollTo(0, 0)
  }

  componentDidMount(){
    this.fetchEpisode(this.state.URL)
  }

  render(){
    return(
      <div>
        {this.state.init && this.state.episodes.map(ep => {
          return (
                <ul key={'ul' + ep.id}>
                  <li key={'epName' + ep.id}>Name: {ep.name}</li>
                  <li key={'airDate' + ep.id}>Air Date: {ep.air_date}</li>
                  <li key={'ep' + ep.id}>Episode: {ep.episode}</li>
                  <li key={'characters' + ep.id}>Characters: {ep.characters.length}</li>
                </ul>
          )
        })}

        <footer>
          <button onClick={()=>{
            this.state.info.prev && this.fetchEpisode(this.state.info.prev)
          }}>Prev</button>
          <button onClick={()=>{
            this.state.info.next && this.fetchEpisode(this.state.info.next)
          }}>Next</button>
        </footer>
    </div>
    )
  }

}

export default Episodes
