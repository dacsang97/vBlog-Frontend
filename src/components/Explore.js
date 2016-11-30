import React, { Component, PropTypes } from 'react';

const GITHUB_REPO = 'https://github.com/reactjs/redux';

export default class Explore extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setInputValue(nextProps.value);
    }
  }

  getInputValue = () => this.refs.input.value // eslint-disable-line

  setInputValue = (val) => {
    // Generally mutating DOM is a bad idea in React components,
    // but doing this for a single uncontrolled field is less fuss
    // than making it controlled and maintaining a state for it.
    this.refs.input.value = val; // eslint-disable-line
  }

  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.handleGoClick();
    }
  }

  handleGoClick = () => {
    this.props.onChange(this.getInputValue());
  }

  render() {
    return (
      <div>
        <p>Type a username or repo full name and hit GO:</p>
        <input
      size="45"
      ref="input" // eslint-disable-line
      defaultValue={this.props.value}
      onKeyUp={this.handleKeyUp}
    />
        <button onClick={this.handleGoClick}>
          Go!
        </button>
        <p>
          Code on <a href={GITHUB_REPO}>Github</a>.
        </p>
        <p>
          Move the DevTools with Ctrl+W or hide them with Ctrl+H.
        </p>
      </div>
    );
  }
}
