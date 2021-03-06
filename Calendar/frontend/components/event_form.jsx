import React from 'react';
import { merge } from 'lodash';


class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.defaultEvent;
    this.state.creatingEvent = this.props.creatingEvent;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.updateTime = this.updateTime.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.dateString !== prevProps.dateString) {
      let start_time = this.state.start_time.split(" ")
      let end_time = this.state.end_time.split(" ")
      start_time[0] = this.props.dateString
      end_time[0] = this.props.dateString
      this.setState({
        start_time: start_time.join(" "),
        end_time: end_time.join(" ")
      })
    }

    if (this.props.creatingEvent !== prevProps.creatingEvent) {
      this.setState({ creatingEvent: this.props.creatingEvent })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const event = merge({}, this.state);
    delete event["creatingEvent"];
    this.props.action(event);
    this.props.changeStatus("NEITHER");
    // this.setState({ description: '', creatingEvent: [false] })
  }

  update(field){
    return e => {
      this.setState({ [field]: e.target.value });
    }
  }

  updateTime(field) {
    return e => {
      let date = this.props.dateString;
      date += " " + e.target.value;
      this.setState({ [field]: date });
    }
  }

  render() {
    // const classes = (this.state.creatingEvent[0]) ? ["event-form"] : ["event-form hidden"];
    return (
      <div className="event-form">
        <span>{this.props.titleStr}</span>
        <br></br><br></br>
        <form onSubmit={this.handleSubmit}>
          Date: {this.props.dateString}
          <br></br>
          Start Time:
          <input type="time" onChange={this.updateTime("start_time")} value={this.state.start_time.split(" ")[1]}/>
          <br></br>
          End Time:
          <input type="time" onChange={this.updateTime("end_time")} value={this.state.end_time.split(" ")[1]}/>
          <br></br>
          Description:
          <br></br>
          <textarea value={this.state.description} onChange={this.update('description')}></textarea>
          <br></br>
          <input className='submit-button' type='submit' value='Create Event' />
        </form>
      </div>
    )
  }

}

export default EventForm;
