import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const card = this.props.pets.map( pet => (
      < Pet pet={pet} id={pet.id} onAdoptPet={this.props.onAdoptPet} />
    ))
    return <div className="ui cards">{card}</div>
  }
}

export default PetBrowser
