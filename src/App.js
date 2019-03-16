import React, { Component } from 'react';
import cities from './data/fr/cities_fr.json'
import './App.css';
import Autocomplete from 'react-autocomplete';
import getPrayers from './getPrayers'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: '',
      value: '',
      result: null
    }
  }

  shouldItemRender = (item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1;
  getItemValue = city => {
    console.log("getting!")
    return city.name;
  }
  onSelect = value => {
    this.setState({ value: value })
    const id = cities.filter(e => e.name === value)[0].id;
    getPrayers(id);
  }

  onChange = e => {
    console.log("changing!")
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Please choose your city</h1>
          <Autocomplete
            getItemValue={this.getItemValue}
            items={cities}
            key={city => city.id}
            shouldItemRender={this.shouldItemRender}
            renderItem={(city, isHighlighted) =>
              <div key={city.id} style={{ background: isHighlighted ? '#eee' : 'transparent', borderRadius: '20' }}>
                {city.name}
              </div>
            }
            value={this.state.value}
            onChange={this.onChange}
            onSelect={this.onSelect}
          />

        </header>
        {this.state.result && <table>
          {this.result.length}
        </table>}
      </div>
    );
  }
}

