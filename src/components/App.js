import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = ({ target: { value } }) => {
    this.setState({ filters: { ...this.state.filters, type: value } });
    // console.log(value)
  };



  fetchPets = () => {
    if (this.state.filters.type === 'all') {
      fetch('/api/pets')
      .then(resp => {
        return resp.json()
      })
      .then(json => {
        this.setState({
          pets: json 
        })
      })
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(resp => {
        return resp.json()
      })
      .then(json => {
        this.setState({
          pets: json 
        })
      })
    }
  }

  adopt = (id) => {
    // console.log(id);
    let x = this.state.pets.find( pet => pet['id'] === id);
    x.isAdopted = true;
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
              onChangeType={this.onChangeType}
              onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                onAdoptPet={this.adopt}
                pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
