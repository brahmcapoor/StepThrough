import React from 'react';
import './styles.css';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-monokai';

const makeMarkers = highlightedLines => {
  const markers = [];
  for (let i = 0; i < highlightedLines.length; i++) {
    markers.push({
       startRow: highlightedLines[i] - 1, 
       endRow: highlightedLines[i], 
       className: 'highlighted', 
       type: 'text'
    });
  }
  return markers;
}

function Editor(props) {
  return (
    <AceEditor
      mode="python"
      theme="monokai"
      editorProps={{ $blockScrolling: true }}
      value={props.text}
      markers={makeMarkers(props.highlightedLines)}
      className={props.className}
      height="100%"
      width="100%"
      fontSize={18}
      highlightActiveLine={false}
    />
  );
}

export default Editor;
