import React, { Component } from "react";
import "reset-css";
import "./App.css";
import axios from "axios";
const NAMES = require("./data/prayers.json");
const API_URL = "https://maroc-salat.herokuapp.com/";

const byName = (a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0);

const PrayerCard = ({ prayer, local }) => {
  return (
    <div id="times">
      <h1>{prayer.city}</h1>
      <h2>{new Date(prayer.day).toLocaleDateString(local)}</h2>
      <ul>
        {NAMES.map(name => {
          return (
            <li key={name}>
              <span className="name">{name}</span>
              <span className="time">{prayer[name]}</span>
            </li>
          );
        })}
      </ul>
      <dl />
    </div>
  );
};

const SelectCity = ({ cities, onChange }) => {
  return (
    <div>
      {/* <h1>Please choose your city</h1> */}
      <select onChange={onChange}>
        {cities.map(c => {
          return (
            <option value={c.id} key={c.id}>
              {c.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      local: "fr-FR"
    };
  }

  componentDidMount() {
    console.log(NAMES);
    axios.get(`${API_URL}city`).then(res => {
      this.setState({ cities: res.data.sort(byName), id: res.data[0].id });
      const day = new Date().getDate();
      const month = new Date().getMonth() + 1;
      axios.get(`${API_URL}prayer?month=${month}&day=${day}`).then(res => {
        this.setState({
          prayers: res.data,
          current: res.data.filter(p => p.id === this.state.id)[0]
        });
      });
    });
  }

  onChange = e => {
    const value = +e.target.value;
    const newCurrent = this.state.prayers.filter(p => p.id === value)[0];
    this.setState({
      current: newCurrent
    });
  };

  render() {
    return (
      <div id="main">
        {/* {this.state.cities && (
          <SelectCity cities={this.state.cities} onChange={this.onChange} />
        )} */}
        {this.state.current && (
          <PrayerCard local={this.state.local} prayer={this.state.current} />
        )}
      </div>
    );
  }
}
