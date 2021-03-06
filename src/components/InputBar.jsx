import React from "react";

class InputBar extends React.Component {
  constructor(props) {
    super(props);
    this.txtRef = React.createRef();
  }

  handleFocus = event => {
    event.target.select();
  };

  // TODO: Ask StackOverflow - highlight text on submit
  // highlightText = ref => {
  //   ref = this.txtRef.current;
  //   ref.target.select();
  // };

  // onClick={this.highlightText}

  render() {
    return (
      <div>
        <form onSubmit={this.props.addTodo} className="ui form">
          <div className="field">
            <label style={{ marginBottom: "1em" }}>Add a todo here:</label>
            <input
              style={{ marginBottom: "1em" }}
              className="css-comp__input-bar"
              onFocus={this.handleFocus}
              ref={this.txtRef}
              type="text"
              placeholder="Walk the dog..."
              onChange={this.props.handleInputChange}></input>
            <button className="ui button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default InputBar;
