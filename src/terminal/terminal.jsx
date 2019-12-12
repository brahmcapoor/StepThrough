import React from 'react';
import './styles.css';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-sh';
import 'ace-builds/src-noconflict/theme-pastel_on_dark';

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


function Terminal(props) {
  return (
    <AceEditor
      mode="text"
      theme="pastel_on_dark"
      editorProps={{ $blockScrolling: true, $displayIndentGuides: false }}
      className={props.className}
      height="100%"
      width="100%"
      value={props.text}
      fontSize={18}
      showGutter={false}
      highlightActiveLine={false}
      markers={makeMarkers(props.highlightedLines)}
      readOnly
    />
  );
}

export default Terminal;
