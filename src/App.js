import React, { Component } from 'react';
import 'reset-css';
import './App.css';
import axios from 'axios';
import moment from 'moment';

import PrayerCard from './components/prayerCard';
import Spinner from './common/spinner';
import SelectList from './components/selectList';

const API_URL = 'https://maroc-salat.herokuapp.com/';

const byName = (a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0);

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      local: 'fr'
    };
  }

  async componentDidMount() {
    //TODO: Refactor this mess
    if (!localStorage.getItem('cities')) {
      const cities = (await axios.get(`${API_URL}city`)).data.sort(byName);
      localStorage.setItem('cities', JSON.stringify(cities));
    }
    const cities = JSON.parse(localStorage.getItem('cities'));

    if (!localStorage.getItem('id')) {
      localStorage.setItem('id', cities[0].id);
    }
    const id = +localStorage.getItem('id');

    const day = moment().date();
    const month = moment().month() + 1;

    const PRAYERS_KEY = `prayers_${day}_${month}`;
    if (!localStorage.getItem(PRAYERS_KEY)) {
      const prayers = (await axios.get(
        `${API_URL}prayer?month=${month}&day=${day}`
      )).data;
      localStorage.setItem(PRAYERS_KEY, JSON.stringify(prayers));
    }
    const prayers = JSON.parse(localStorage.getItem(PRAYERS_KEY));
    this.setState({
      cities,
      id,
      prayers,
      current: prayers.filter(p => p.id === id)[0]
    });
  }

  onChange = e => {
    const id = +e.target.value;
    localStorage.setItem('id', id);
    const current = this.state.prayers.filter(p => p.id === id)[0];
    this.setState({ current, id });
  };

  render() {
    return (
      <div id="main">
        {this.state.prayers ? (
          <React.Fragment>
            <PrayerCard local={this.state.local} prayer={this.state.current} />
            <SelectList
              value={this.state.id}
              values={this.state.cities}
              onChange={this.onChange}
            />
          </React.Fragment>
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}
