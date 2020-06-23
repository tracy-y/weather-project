import React from "react";
import styles from "./CityDetails.module.scss";

class CityDetails extends React.Component {
  state = {
    temp_c: "",
    text: "",
    humidity: "",
    humidityRate: "",
    wing: "",
    wingSpeed: "",
    city: "",
  };

  componentDidMount() {
    fetch(
      "https://api.apixu.com/v1/current.json?key=1eb8b1de06614af3a3423418171609&q=Paris"
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        this.setState({
          ...json.current,
          ...json.location,
          ...json.current.condition,
          // text: json.current.condition.text
        });
      });
  }

  render() {
    return (
      <div id="city-details" className={styles.wrapper}>
        <div className={styles.detailInfo}>
          <div className={styles.div1}>
            <div className={styles.temp_c}> {this.state.temp_c}° </div>
            <span className={styles.text}> {this.state.text} </span>
            {/* {props.weather} */}
          </div>
          <div className={styles.inline}>
            <label> HUMIDITY </label>
            <div>{this.state.humidity}%</div>
          </div>
          <div className={styles.inline}>
            <label> WIND </label>
            <div>{this.state.wind_kph}km/h</div>
          </div>
        </div>
        <div className={styles.country}>{this.state.country}</div>
      </div>
    );
  }
}

export default CityDetails;
