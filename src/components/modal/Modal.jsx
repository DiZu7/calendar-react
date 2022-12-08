import React, { useEffect } from 'react';
import moment from 'moment/moment';

import './modal.scss';

class Modal extends React.Component {
  state = {
    title: '',
    description: '',
    date: '',
    startTime: '',
    endTime: '',
  };

  handleTitleChange = e => {
    this.setState({
      title: e.target.value,
    });
  };

  handleDateChange = e => {
    this.setState({
      date: e.target.value,
    });
  };

  handleStartTimeChange = e => {
    this.setState({
      startTime: e.target.value,
    });
  };

  handleEndTimeChange = e => {
    this.setState({
      endTime: e.target.value,
    });
  };

  handleDescriptionChange = e => {
    this.setState({
      description: e.target.value,
    });
  };

  handleEventCreate = () => {
    this.props.onCreateEvent(this.state);
  };
  render() {
    return (
      <div className="modal overlay">
        <div className="modal__content">
          <div className="create-event">
            <button className="create-event__close-btn" onClick={this.props.closeModal}>
              +
            </button>
            <form className="event-form" onSubmit={this.handleEventCreate}>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="event-form__field"
                value={this.state.title}
                onChange={this.handleTitleChange}
              />
              <div className="event-form__time">
                <input
                  type="date"
                  name="date"
                  className="event-form__field"
                  value={this.state.date}
                  onChange={this.handleDateChange}
                />
                <input
                  type="time"
                  name="startTime"
                  className="event-form__field"
                  value={this.state.startTime}
                  onChange={this.handleStartTimeChange}
                />
                <span>-</span>
                <input
                  type="time"
                  name="endTime"
                  className="event-form__field"
                  value={this.state.endTime}
                  onChange={this.handleEndTimeChange}
                />
              </div>
              <textarea
                name="description"
                placeholder="Description"
                className="event-form__field"
                value={this.state.description}
                onChange={this.handleDescriptionChange}
              ></textarea>
              <button type="submit" className="event-form__submit-btn">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
