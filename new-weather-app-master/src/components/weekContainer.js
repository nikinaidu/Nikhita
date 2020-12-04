import React from 'react';
import * as apiConfig from '../apiKeys';
import DayCard from './Card';
class WeekContainer extends React.Component {
  state = {
    fullData: [],
    dailyData: []
  }

  componentDidMount = () => {
    const weatherURL =
    `http://api.openweathermap.org/data/2.5/forecast?q=Delhi&units=imperial&APPID=${apiConfig.OWNKEY}`

    fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const dailyData = data.list.filter(reading => reading.dt_txt.includes("12:00:00"))
      this.setState({
        fullData: data.list,
        dailyData: dailyData
      }, () => console.log(this.state))
    })
  }

  render() {

    let cards=this.state.dailyData.map((reading,index)=><DayCard reading={reading} id={index} />)

    return (
        <div className="container" style={{textAlign:"center"}}>
        <h1 className="display-1 jumbotron">5-Day Forecast.</h1>
        <h5 className="display-5 text-muted">Delhi, India</h5>
          <div className="row justify-content-center">
            {cards}
          </div>
        </div>
      )
  }
}

export default WeekContainer;
//Author @Nikhita