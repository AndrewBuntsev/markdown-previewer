import React, { Component } from 'react';
import { INITIAL_EDITOR_DATA } from '../consts/initialEditorData';
import PropTypes from 'prop-types';
import marked from 'marked';




const style = {
    backgroundColor: '#CCAADD',
    color: '#000000',
    fontWeight: 'bold',
    padding: '5px',
    fontSize: '15px',
    display: 'inline-block',
    border: '2px solid #333333'
};

const renderer = new marked.Renderer();
marked.setOptions({ breaks: true });

class Previewer extends Component {
  
  componentDidMount(){
    document.getElementById('preview').innerHTML = marked(this.props.editorData, { renderer: renderer });
  }
    
  render() {
    return <div id='preview' style={style}></div>;
  }

  componentDidUpdate(){
      console.log(marked(this.props.editorData, { renderer: renderer }));
    document.getElementById('preview').innerHTML = marked(this.props.editorData, { renderer: renderer });
  }
}

Previewer.propTypes = {
    editorData: PropTypes.string.isRequired
};

export default Previewer;
