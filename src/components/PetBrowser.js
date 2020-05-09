import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {


renderPetCards = pet => {
  //console.log(`Creating Pet Card: ${pet}`)
  return (<Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} /> )
}

  render() {
    return (
    <div className="ui cards">
        {this.props.pets.map(pet => this.renderPetCards(pet))}
    </div>
    )
  }
}

export default PetBrowser
