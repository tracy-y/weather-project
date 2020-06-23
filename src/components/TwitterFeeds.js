import React from 'react';
import styles from "./TwitterFeeds.module.scss";

const TwitterFeed = props => {
  state= {
    name: "",
    description:"",
    timeline_order:"",

 }

componentDidMount(){
  fetch("https://api.twitter.com/1.1/statuses/home_timeline.json?screen_name=twittermusic&count=2")
    .then (
      (response)=>{
        return response.json()
      } 
    ) 
    .then (
      (json)=>{
        console.log(json)
        this.setState({
          ...jason.timelines,
        })
      }
    )
  }

  render(){
    return (
        <div id="twitter-feeds" className={styles.wrapper}> 
        <div ><i class="fab fa-twitter"></i> 
        <span className={styles.Twitter}> Twitter Feed </span>#city</div>
        <div>{this.state.name}</div>
        <div>{this.state.description}</div>
        <div className={styles.next}>Next</div>
      </div>
      )
    }

};

export default TwitterFeed;
