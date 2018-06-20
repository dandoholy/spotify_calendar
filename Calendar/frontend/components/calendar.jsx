import React from 'react';
import { merge } from 'lodash';
import { connect } from 'react-redux';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currDate: this.props.currDate

    }
  }

  changeMonth(direction) {
    let {currDate} = this.state
    if (direction == "inc") {
      currDate.setMonth(currDate.getMonth() + 1)
      this.setState({currDate})
    } else {
      currDate.setMonth(currDate.getMonth() - 1)
      this.setState({currDate})
    }
  }


  render() {
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'];
    const { currDate } = this.state

    let firstDay = currDate;
    firstDay.setDate(1)
    firstDay = firstDay.getDay()
    let currMonth = currDate.getMonth()

    const dayHeaders = days.map(d =>
      <li>{d}</li>
    )
    const dates = _.range(monthDays[currMonth]).map(d =>
      <li>{d+1}</li>
    )
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
