// @ts-check

import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all",
      },
    };
  }

  handleChangeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value,
      },
    });
  };

  handleFindPetsClick = (event) => {
    if (this.state.filters.type !== "all") {
      fetch(`/api/pets?type=${this.state.filters.type}`)
        .then((response) => response.json())
        .then((data) =>
          this.setState({
            pets: data,
          })
        );
    } else {
      fetch(`/api/pets`)
        .then((response) => response.json())
        .then((data) =>
          this.setState({
            pets: data,
          })
        );
    }
  };

  handleAdoptPet = (id) => {
    // this.state.pets.find((pet) => pet.id === id);
    console.log("handleAdoptPet happening", id);
    this.setState({
      pets: this.state.pets.map((pet) => {
        if (pet.id === id) {
          return { ...pet, isAdopted: true };
        } else {
          return pet;
        }
      }),
    });
  };

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
                onAdoptPet={this.handleAdoptPet}
                pets={this.state.pets}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
