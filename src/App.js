import React from 'react';

import Calendar from "react-dates-lite";
import Pagination from "@kiwicom/orbit-components/lib/Pagination";

import Layout from "./components/Layout";

import './App.css';



const events = [
  {id: "1", date: new Date("July 11, 2019"), event: "event1"},
  {id: "2", date: new Date("July 12, 2019"), event: "event2"},
  {id: "3", date: new Date("July 13, 2019"), event: "event3"},
  {id: "4", date: new Date("July 14, 2019"), event: "event4"}
]

class Event extends React.Component {

  render(){
    return(
      <center>
      <p>{this.props.event}</p>
      </center>
    )
  }
}


class CalendarContainer extends React.Component {

  state = {
    selectedDates: []
  }
  selectDates = (dates) => {
    this.setState({ selectedDates: dates })
  }

  render() {

    const filteredEvents = events.filter(event =>
      this.state.selectedDates.find(date => date.getTime() === event.date.getTime()
      )
    )

    return (
      <div>
        <Layout>

        <Calendar
        visibleMonths={1}
        firstMonth={new Date(2019, 1, 1)}
        lastMonth={new Date(2019, 12, 1)}
        selectedDates={this.state.selectedDates}
        selectDates={this.selectDates}
        rangeSelect
        className="calendar"
        />
        

        {filteredEvents.map(FilteredEvent =>
          <Event key={FilteredEvent.id} event={FilteredEvent.event} />)}
        </Layout>
      </div>
    );
  
  }
}


class App extends React.Component{

  render(){
    return(
      <div>
        <Layout>
        </Layout>
      </div>
    )
  }
}

export default App;
