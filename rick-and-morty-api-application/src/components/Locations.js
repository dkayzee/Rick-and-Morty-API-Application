import React from 'react'

import axios from 'axios'

class Locations extends React.Component {
  state = {
    info: '',
    locations: '',
    init: false,
    URL: 'https://rickandmortyapi.com/api/location/'
  }

  fetchLocation = async (URL) => {
    const resp = await axios(URL)
    this.setState({
      info: resp.data.info,
      locations: resp.data.results,
      init: true
    })
    console.log(resp.data)
    window.scrollTo(0, 0)
  }

  componentDidMount(){
    this.fetchLocation(this.state.URL)
  }

  render(){
    return(
      <div>
        {this.state.init && this.state.locations.map(loc => {
          return (
                <ul key={'ul' + loc.id}>
                  <li key={'loc' + loc.id}>Name: {loc.name}</li>
                  <li key={'type' + loc.id}>Type: {loc.type}</li>
                  <li key={'dimension' + loc.id}>Dimension: {loc.dimension}</li>
                  <li key={'residents' + loc.id}>Residents: {loc.residents.length}</li>
                </ul>
          )
        })}

        <footer>
          <button onClick={()=>{
            this.state.info.prev && this.fetchLocation(this.state.info.prev)
          }}>Prev</button>
          <button onClick={()=>{
            this.state.info.next && this.fetchLocation(this.state.info.next)
          }}>Next</button>
        </footer>
    </div>
    )
  }

}

export default Locations
