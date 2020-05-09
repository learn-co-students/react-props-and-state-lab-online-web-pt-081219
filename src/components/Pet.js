import React from 'react'

class Pet extends React.Component {
  // constructor() {
  //   super()

  //   this.state = {
  //     id: this.props.petInfo.id,
  //     gender: this.props.petInfo.gender,
  //     name: this.props.petInfo.name,
  //     type: this.props.petInfo.type,
  //     age: this.props.petInfo.age,
  //     weight: this.props.petInfo.weight,
  //     isAdopted: this.props.petInfo.isAdopted
  //   }
  // }

  // updatePet = () => {
  //   this.setState({
  //     name: this.props.petInfo.name,
  //     type: this.props.petInfo.type,
  //     age: this.props.petInfo.age,
  //     weight: this.props.petInfo.weight,
  //     isAdopted: this.props.petInfo.isAdopted
  //   })
  // }

  displayGender = () => {
    return (this.props.pet.gender==='female' ? '♀' : '♂')
  }

  displayButton = () => {
    if (this.props.pet.isAdopted === true) {
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button onClick={event => { this.props.onAdoptPet(this.props.pet.id) }} className="ui primary button" id={this.props.pet.id} >Adopt pet</button>
    }
  }

  render() {
    console.log('I am a pet.')
    return (
      <div className="card">
      {console.log(this.props.pet)}
        <div className="content">
          <a className="header">
            {this.displayGender()}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.displayButton()}
        </div>
      </div>
    )
  }
}

export default Pet
