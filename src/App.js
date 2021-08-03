import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { elements: [], type: "text", name: "", nameDisabled: false, text: "" };
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
  }

  render() {
    return (
      <div>
        <h2>Story to JSON</h2>
        <label>Type:</label> <br />
        <input type="radio" id="text" name="type" value="text" onChange={this.handleTypeChange}/>
        <label for="text">text</label><br />
        <input type="radio" id="choose" name="type" value="choose" onChange={this.handleTypeChange}/>
        <label for="choose">choose</label><br />
        <input type="radio" id="goto" name="type" value="goto" onChange={this.handleTypeChange}/>
        <label for="goto">goto</label><br />
        <input type="radio" id="unite" name="type" value="unite" onChange={this.handleTypeChange}/>
        <label for="unite">unite</label> <br /> <br />
        <label>Name:</label> <br />
        <input type="text" id="name" onChange={this.handleNameChange} disabled={this.state.nameDisabled}/> <br /> <br />
        <label>Text:</label> <br />
        <textarea rows="5" onChange={this.handleTextChange}></textarea> <br />
        <input type="button" id="submit" value="Submit" onClick={this.handleSubmitButton} /> <br /> <br />
        <div id="json">Copy this:<br/>{JSON.stringify(this.state.elements)}</div>
      </div>
    );
  }

  handleTypeChange(e) {
    this.setState({ type: e.target.value });
    if (e.target.value === "text") {
      this.setState({ nameDisabled: false });
    } else {
      this.setState({ nameDisabled: true });
    }
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmitButton(e) {
    e.preventDefault();
    if (this.state.text.length === 0 && (this.state.type === "goto" || this.state.type === "unite")) {
      return;
    }
    const newLine = {
      type: this.state.type,
      name: this.state.name,
      text: this.state.text
    };
    this.state.elements.push(newLine)
    this.setState(state => ({
      type: 'text',
      nameDisabled: false,
      name: '',
      text: ''
    }));
  }
}

/*
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>Story to JSON</h3>
        <JSON items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class JSON extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}
*/

export default App;
