import React, { Component } from "react";
import { connect } from "react-redux";
import { addEvent } from "../actions";

class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      speaker: "",
      category: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  submitForm() {
    this.props.addEvent(this.state);
    this.setState({
      name: "",
      speaker: "",
      category: ""
    });
  }

  render() {
    return (
      <form className="ui form">
        <h4 className="ui dividing header">Add Event</h4>
        {/* Event Name */}
        <div className="field">
          <label htmlFor="event_name">Name</label>
          <div className="field">
            <input
              type="text"
              id="event_name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              placeholder="Event Name"
            />
          </div>
        </div>
        {/* Speaker */}
        <div className="field">
          <label htmlFor="event_speaker">Speaker Name</label>
          <div className="field">
            <input
              type="text"
              id="event_speaker"
              name="speaker"
              value={this.state.speaker}
              onChange={this.handleInputChange}
              placeholder="Event Speaker"
            />
          </div>
        </div>
        {/* Event Category */}
        <div className="field">
          <label htmlFor="event_category">Category</label>
          <div className="field">
            <input
              type="text"
              id="event_category"
              name="category"
              value={this.state.category}
              onChange={this.handleInputChange}
              placeholder="Event Category"
            />
          </div>
        </div>

        <button className="ui button" type="button" onClick={this.submitForm}>
          Submit
        </button>
      </form>
    );
  }
}

// How to do empty mapStateToProps?
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {
  addEvent
})(AddEvent);
