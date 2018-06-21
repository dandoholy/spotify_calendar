import React from 'react';
import { merge } from 'lodash';
import { connect } from 'react-redux';

import CreateEventForm from './create_event_container'

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currDate: this.props.currDate,
      dateSelected: new Date(this.props.currDate),
      creatingEvent: false
    }
  }

  changeMonth(direction) {
    let {currDate, dateSelected} = this.state
    if (direction == "inc") {
      currDate.setMonth(currDate.getMonth() + 1)
      dateSelected.setMonth(dateSelected.getMonth() + 1)
      this.setState({currDate, dateSelected})
    } else {
      currDate.setMonth(currDate.getMonth() - 1)
      dateSelected.setMonth(dateSelected.getMonth() - 1)
      this.setState({currDate, dateSelected})
    }
  }

  render() {
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'];
    const { currDate } = this.state

    let firstDay = new Date(currDate);
    firstDay.setDate(1)
    firstDay = firstDay.getDay()
    let currMonth = currDate.getMonth()
    let dateSelected = this.state.dateSelected
    let dateString = dateSelected.toISOString().split("T")[0]

    const dayHeaders = days.map(d =>
      <li>{d}</li>
    )
    const dates = _.range(monthDays[currMonth]).map(d => {
      if (d + 1 == dateSelected.getDate()) {
        return <li className='selected' onClick={() => {
            let date = new Date(this.state.dateSelected);
            date.setDate(d + 1);
            this.setState({dateSelected: date, creatingEvent: true});
          }
      }>{d+1}</li>
      } else {
        return <li onClick={() => {
            let date = new Date(this.state.dateSelected);
            date.setDate(d + 1);
            this.setState({dateSelected: date, creatingEvent: true});
          }
      }>{d+1}</li>
      }
    })
    const datePadding = _.range(firstDay).map(d =>
      <li className='padding'><br></br></li>
    )

    const cal = datePadding.concat(dates)
    return (
      <div className='calendar'>
        <ul className="month-select">
          <li onClick={() => this.changeMonth("dec")}>&#10094;</li>
          <li id="curr-month">{months[currMonth]} {currDate.getYear()+1900}</li>
          <li onClick={() => this.changeMonth("inc")}>&#10095;</li>
        </ul>
        <ul className="day-headers">{dayHeaders}</ul>
        <ul className="dates">
          {datePadding}
          {dates}
        </ul>
        <CreateEventForm creatingEvent={this.state.creatingEvent} dateString={dateString} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const currDate = new Date(Date.now())
  return {
    currDate
  }
}

const mapDispatchToProps = (state, ownProps) => {
  return {

  }
}

export default connect(mapStateToProps, null)(Calendar);
