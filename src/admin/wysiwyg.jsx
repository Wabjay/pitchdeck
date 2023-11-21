import React, { useState, useCallback } from 'react';
// import './style.css';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html'; // convert the editorState to plain html

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'; // style

export default function EditorConvertToHTML() {
  const [value, setValue] = useState(EditorState.createEmpty());

  // function for show the plain html and save editorState
  const handleChange = useCallback((editorState) => {
    const raw = convertToRaw(editorState.getCurrentContent()) // get raw data from editor state
    console.log(draftToHtml(raw)) // plain html from editor state
    setValue(editorState);
  }, []);

  return (
    <section>
      <h1>React Draft Wysiwyg</h1>
      <Editor
  editorState={value}
  toolbarClassName="toolbarClassName"
  wrapperClassName="wrapperClassName"
  editorClassName="editorClassName"
  onEditorStateChange={handleChange}
/>;
    </section>
  );
}