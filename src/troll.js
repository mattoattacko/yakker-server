import React from 'react';
import io from 'socket.io-client';

const url = 'http://localhost:8080';
// const url = 'https://js-401-socket-io-server.herokuapp.com';
const socket = io.connect(url);

class TrollJohn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typedInput: '',
      words: [],
      wordCount: 0,
    };
    console.log(this.state.words)
    socket.on('incoming', payload => this.updateWords(payload));
  }

  updateWords = words => {
    this.setState({ words: [...this.state.words, words] });
    this.setState({ wordCount: this.state.wordCount + 1 });
    console.log(this.state.wordCount);
    if (this.state.wordCount > 9) {
        this.state.words.shift();
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    socket.emit('troll', this.state.typedInput);
  };

  handleNewWords = event => {
    this.setState({ typedInput: event.target.value });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            name="typedInput"
            placeholder="New Words"
            onChange={this.handleNewWords}
          />
        </form>
        <h2>{this.state.words[9]}</h2>
        <h2>{this.state.words[8]}</h2>
        <h2>{this.state.words[7]}</h2>
        <h2>{this.state.words[6]}</h2>
        <h2>{this.state.words[5]}</h2>
        <h2>{this.state.words[4]}</h2>
        <h2>{this.state.words[3]}</h2>
        <h2>{this.state.words[2]}</h2>
        <h2>{this.state.words[1]}</h2>
        <h2>{this.state.words[0]}</h2>
      </>
    );
  }
}

export default TrollJohn;