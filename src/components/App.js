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

  handleChange = event => {
    this.setState({
      filters:{
        type: event.target.value
      }
    })
    console.log(`State Changed`)
  }

  fetchPets = () => {
    console.log(`Fetching Pets with value of: ${this.state.filters.type}`)
    let url = '/api/pets'
    let query = this.state.filters.type
    if (query !== 'all') {
      url = `/api/pets?type=${this.state.filters.type}`
    }
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState({
        pets: data
      })
      console.log(this.state.pets)
    })
  }

  matchPet = id => {
    // console.log(`Matching this pets id: ${id}`)
    const pet = this.state.pets.find(pet => pet.id === id)
    pet.isAdopted = true;
    console.log(pet)
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
              <Filters onChangeType={this.handleChange} onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={id => this.matchPet(id)} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
