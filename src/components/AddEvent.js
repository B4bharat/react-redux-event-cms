import React, { Component } from "react";

class AddEvent extends Component {
  render() {
    return (
      <form class="ui form">
        <h4 class="ui dividing header">Add Event</h4>
        {/* Event Name */}
        <div class="field">
          <label for="event_name">Name</label>
          <div class="field">
            <input
              type="text"
              id="event_name"
              name="event-name"
              placeholder="Event Name"
            />
          </div>
        </div>
        {/* Speaker */}
        <div class="field">
          <label for="event_speaker">Speaker Name</label>
          <div class="field">
            <input
              type="text"
              id="event_speaker"
              name="event-speaker"
              placeholder="Event Speaker"
            />
          </div>
        </div>
        {/* Event Category */}
        <div class="field">
          <label for="event_category">Category</label>
          <div class="field">
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
