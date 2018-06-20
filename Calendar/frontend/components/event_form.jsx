import React from 'react';
import { merge } from 'lodash';


class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.defaultEvent;


    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const event = merge({}, this.state);
    this.props.action(event);
    this.setState({ description: ''})
  }

  update(field){
    return e => {
      this.setState({ [field]: e.target.value });
    }
  }

  render() {
    const hours = _.range(24);
    const minutes = ["00", "15", "30", "45"];

    const hourOptions = hours.map((hr, idx) => {
      return ( <option key={idx} value={(hr < 10) ? `0${hr}` : String(hr)}>{hr}</option>)
    });
    const minOptions = minutes.map((min, idx) => {
      return ( <option key={idx} value={(min < 10) ? `0${min}` : String(min)}>{min}</option>)
    });

    return (
      <div className='time-options'>
        <form onSubmit={this.handleSubmit}>
          <select className='hour-options'>
            {hourOptions}
          </select>
          :
          <select className='min-options'>
            {minOptions}
          </select>
          <select className='hour-options'>
            {hourOptions}
          </select>
          :
          <select className='min-options'>
            {minOptions}
          </select>

          <textarea value={this.state.body} onChange={this.update('description')}></textarea>
          <input className='submit-button' type='submit' value='Create Event' />
        </form>
      </div>
    )
  }

}

export default EventForm;
