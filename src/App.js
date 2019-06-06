import React, { Component } from "react";
import "reset-css";
import "./App.css";
import axios from "axios";
import moment from "moment";

import PrayerCard from "./components/prayerCard";
import Spinner from "./common/spinner";
import SelectList from "./components/selectList";

const API_URL = "https://maroc-salat.herokuapp.com/";

const byName = (a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0);

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      local: "fr"
    };
  }

  async componentDidMount() {
    const cities = (await axios.get(`${API_URL}city`)).data.sort(byName);
    this.setState({ cities, id: cities[0].id });
    const day = moment().date();
    const month = moment().month() + 1;
    const prayers = (await axios.get(
      `${API_URL}prayer?month=${month}&day=${day}`
    )).data;

    this.setState({
      prayers,
      current: prayers.filter(p => p.id === this.state.id)[0]
    });
  }

  onChange = e => {
    const current = this.state.prayers.filter(p => p.id === +e.target.value)[0];
    this.setState({ current });
  };

  render() {
    return (
      <div id="main">
        {this.state.prayers ? (
          <React.Fragment>
            <PrayerCard local={this.state.local} prayer={this.state.current} />
            <SelectList values={this.state.cities} onChange={this.onChange} />
          </React.Fragment>
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}
