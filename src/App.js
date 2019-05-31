import React, { Component } from "react";
import "./App.css";
import axios from "axios";
const API_URL = "https://maroc-salat.herokuapp.com/";

const byName = (a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0);

const PrayerCard = ({ prayer }) => {
  return (
    <div>
      <h1>{prayer.city}</h1>
      <h2>{prayer.day}</h2>
      <ul>
        <li>Fajr : {prayer.fajr}</li>
        <li>Chorouq : {prayer.chorouq}</li>
        <li>Dhuhr : {prayer.dhuhr}</li>
        <li>Asr : {prayer.asr}</li>
        <li>Maghrib : {prayer.maghrib}</li>
        <li>Ishae : {prayer.ishae}</li>
      </ul>
    </div>
  );
};

const SelectCity = ({ cities, onChange }) => {
  return (
    <div>
      <h1>Please choose your city</h1>
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
      id: "",
      value: "",
      prayers: null,
      current: null
    };
  }

  componentDidMount() {
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
      <div className="App">
        <header className="App-header">
          {/* ADD A LOADER  */}
          {this.state.cities && (
            <SelectCity cities={this.state.cities} onChange={this.onChange} />
          )}
          {this.state.current && <PrayerCard prayer={this.state.current} />}
        </header>
      </div>
    );
  }
}
