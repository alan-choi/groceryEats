import React from 'react';
import autobind from 'class-autobind';
import {Editor,
        EditorState,
        RichUtils,
        DefaultDraftBlockRenderMap,convertToRaw, convertFromRaw} from 'draft-js';

export default class PostContent extends React.Component {
  constructor(){
    super()
  }
  componentDidMount(){

    console.log(EditorState.createWithContent(this.props.content));
  }
  render(){
    return (
      <div>
        {/* <Editor
          editorState={this.props.content}
          readOnly={true}
        /> */}
      </div>
    )
  }
}
