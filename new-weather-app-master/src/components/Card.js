import React from 'react';
var moment = require('moment');

const DayCard = ({ reading, id }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)
//Author @Nikhita
  const imgURL = `owf owf-${reading.weather[0].id} owf-5x`

  return (
    <div className="col-sm-2">
      <div className="card">
        <h3 className="card-title">{moment(newDate).subtract(330,'minutes').format('dddd')}</h3>
        <p className="text-muted">{moment(newDate).subtract(330,'minutes').format('MMMM Do, h:mm a')}</p>
        <i className={imgURL}></i>
        <div style={{display:"flex", justifyContent:"space-around"}}>
            <p>{Math.round(reading.main.temp_min)} °F  </p>
            <p>  {Math.round(reading.main.temp_max)} °F</p>
        </div>
        <div className="card-body">
          <p className="card-text">{reading.weather[0].description}</p>
        </div>
      </div>
    </div>
  )
}

export default DayCard;
//Author @Nikhita