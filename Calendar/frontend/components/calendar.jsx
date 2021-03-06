import React from 'react';
import { merge } from 'lodash';
import { connect } from 'react-redux';

import CreateEventForm from './create_event_container'
import UpdateEventForm from './edit_event_container'
import EventIndex from './event_index'
import { fetchAllEvents } from '../actions/event_actions'
import { localeToInternational } from '../reducers/selectors'

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currDate: this.props.currDate,
      dateSelected: new Date(this.props.currDate),
      formStatus: "NEITHER",
      editId: null,
    }
    this.changeStatus = this.changeStatus.bind(this);
    this.changeToEdit = this.changeToEdit.bind(this);
  }

  changeMonth(direction) {
    let {currDate, dateSelected} = this.state;
    currDate = new Date(currDate);
    dateSelected = new Date(dateSelected);
    if (direction == "inc") {
      currDate.setMonth(currDate.getMonth() + 1)
      dateSelected.setMonth(dateSelected.getMonth() + 1)
      this.setState({currDate, dateSelected, formStatus:"NEITHER"})
    } else {
      currDate.setMonth(currDate.getMonth() - 1)
      dateSelected.setMonth(dateSelected.getMonth() - 1)
      this.setState({currDate, dateSelected, formStatus:"NEITHER"})
    }
  }

  changeStatus(formStatus) {
    this.setState({ formStatus });
  }

  changeToEdit(formStatus, editId) {
    this.setState({formStatus, editId});
  }

  componentDidMount() {
    let date = new Date(this.state.currDate);
    date.setDate(1);
    date = localeToInternational(date.toLocaleDateString());
    this.props.fetchAllEvents(date);
  }


  componentDidUpdate(prevProps, prevState) {
    if (this.state.currDate !== prevState.currDate) {
      let date = new Date(this.state.currDate);
      date.setDate(1);
      date = localeToInternational(date.toLocaleDateString());
      this.props.fetchAllEvents(date);
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
    let dateString = localeToInternational(dateSelected.toLocaleDateString());

    const dayHeaders = days.map(d =>
      <li key={d}>{d}</li>
    )
    const {events} = this.props;

    const dates = _.range(1, monthDays[currMonth] + 1).map(d => {
      const classlist = (d === dateSelected.getDate()) ? "selected" : "";
      return <EventIndex changeToEdit={this.changeToEdit} day={d} key={d} classlist={classlist} onClick={(e) => {
        let date = new Date(this.state.dateSelected);
        date.setDate(d);
        this.setState({dateSelected: date, formStatus: "CREATING"});
      }
    }/>
    })
    const datePadding = _.range(firstDay).map(d =>
      <li key={d} className='padding'><br></br></li>
    )

    const cal = datePadding.concat(dates)

    let form;
    switch(this.state.formStatus) {
      case "CREATING":
        form = <CreateEventForm changeStatus={this.changeStatus} dateString={dateString} />
        break;
      case "EDITING":
        form = <UpdateEventForm changeStatus={this.changeStatus} editId={this.state.editId} titleStr="Update Your Event" />
        break;
      case "NEITHER":
        form = null;
        break;
    }

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
        <br></br>
        <br></br>
        {form}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const currDate = new Date(Date.now())
  return {
    currDate,
    events: state.entities.events
  }
}

const mapDispatchToProps = (state, ownProps) => {
  return {
    fetchAllEvents: date => dispatch(fetchAllEvents(date))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
