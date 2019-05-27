import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import cities from "./data/cities";

const PrayerCard = ({ prayer }) => {
  return (
    <div>
      <h1>
        {prayer.city} - {prayer.date}
      </h1>
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

const SelectCity = ({ onChange }) => {
  return (
    <select onChange={onChange}>
      {cities.map(c => {
        return (
          <option value={c.id} key={c.id}>
            {c.name}
          </option>
        );
      })}
    </select>
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
    axios.get("https://maroc-salat.herokuapp.com/prayer").then(res => {
      console.log(res.data[0]);
      this.setState({ prayers: res.data, current: res.data[0] });
    });
  }

  onChange = e => {
    console.log("value changed");
    const value = +e.target.value;
    const newCurrent = this.state.prayers.filter(p => p.id === value)[0];
    console.log(newCurrent);
    this.setState({
      current: newCurrent
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Please choose your city</h1>
          <SelectCity onChange={this.onChange} />
          {this.state.current && <PrayerCard prayer={this.state.current} />}
        </header>
      </div>
    );
  }
}
