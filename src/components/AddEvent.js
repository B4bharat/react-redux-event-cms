import React, { Component } from "react";

class AddEvent extends Component {
  render() {
    return (
      <form className="ui form">
        <h4 className="ui dividing header">Add Event</h4>
        {/* Event Name */}
        <div className="field">
          <label for="event_name">Name</label>
          <div className="field">
            <input
              type="text"
              id="event_name"
              name="event-name"
              placeholder="Event Name"
            />
          </div>
        </div>
        {/* Speaker */}
        <div className="field">
          <label for="event_speaker">Speaker Name</label>
          <div className="field">
            <input
              type="text"
              id="event_speaker"
              name="event-speaker"
              placeholder="Event Speaker"
            />
          </div>
        </div>
        {/* Event Category */}
        <div className="field">
          <label for="event_category">Category</label>
          <div className="field">
            <input
              type="text"
              id="event_category"
              name="event-category"
              placeholder="Event Category"
            />
          </div>
        </div>

        <div class="ui button" tabindex="0">
          Submit
        </div>
      </form>
    );
  }
}

export default AddEvent;
