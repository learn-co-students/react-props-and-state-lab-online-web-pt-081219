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

  handleChangeType = (event) =>{
    this.setState({
      fiters: {
        type: event.target.value
      }
    })
  }

  handleFindPetsClick = () => {
    if (this.state.filters.type !== "all"){
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(response => response.json())
      .then(data => this.setState({pets: data}))
    } else {
      fetch(`/api/pets`)
      .then(response => response.json())
      .then(data => this.setState({pets: data}))
    }
  }

  handleAdoptPet = (petId) => {
    const pets = this.state.pets.map(pet => {
      return pet.id === petId ? { ...pet, isAdopted: true } : pet
    })
    this.setState({ pets: pets })
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
              onChangeType={this.handleChangeType}
              onFindPetsClick={this.handleFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
              onAdoptPet ={this.handleAdoptPet}
              pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
