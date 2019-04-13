import React, { Component } from 'react';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import { INITIAL_EDITOR_DATA } from './consts/initialEditorData';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {editorData: INITIAL_EDITOR_DATA};
  }

  onChange = (e) => this.setState({editorData: e.target.value});

  render() {
    return (
      <div className="App" style={{width: '100%'}}>
        <Editor positionStyle={{float: 'left', width: '50%', height: '80%'}} onChange={this.onChange}/>
        <Previewer positionStyle={{float: 'right', width: '50%', height: '80%'}} editorData={this.state.editorData}/>
      </div>
    );
  }
}

export default App;
