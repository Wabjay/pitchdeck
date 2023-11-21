import React, { useState } from 'react';
import { Editor, EditorState, RichUtils }  from 'draft-js';
import 'draft-js/dist/Draft.css';

const TextEditor = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const handleKeyCommand = (command:string) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return 'handled';
    }

    return 'not-handled';
  };

  const onBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };

  const onItalicClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  };

  return (
    <div>
      <div>
        <button onClick={onBoldClick}>Bold</button>
        <button onClick={onItalicClick}>Italic</button>
      </div>
      <div style={{ border: '1px solid #ccc', padding: '10px' }}>
        <Editor
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          onChange={setEditorState}
        />
      </div>
    </div>
  );
};

export default TextEditor;
