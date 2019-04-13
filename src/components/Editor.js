import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { INITIAL_EDITOR_DATA } from '../consts/initialEditorData';

const style = {
    backgroundColor: '#EEEEEE',
    color: '#000000',
    fontWeight: 'bold',
    fontSize: '15px',
    border: '2px solid #333333'
};

class Editor extends Component {
    constructor(props){
        super(props);

        this.state = {text: INITIAL_EDITOR_DATA};
    }

  render() {
    return (
      <div>
          <textarea id='editor' defaultValue={this.state.text} style={{...style, ...this.props.positionStyle}} rows={50} onChange={this.props.onChange}/>
      </div>
    );
  }
}

Editor.propTypes = {
    positionStyle: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Editor;
