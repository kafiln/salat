import React from "react";
import moment from "moment";
import "moment/locale/fr";
import "moment/locale/ar-ma";
const NAMES = require("../data/prayers");

//TODO: extract to a lib
const toTitleCase = str =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.charAt(0).toUpperCase() + x.slice(1))
    .join(" ");

const PrayerCard = ({ prayer, local }) => {
  let date = moment(prayer.date)
    .locale(local)
    .format("dddd LL");

  if (local === "fr") {
    date = toTitleCase(date);
  }
  return (
    <div className="card">
      <h1>{prayer.city}</h1>
      <h2>{date}</h2>
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

export default PrayerCard;
