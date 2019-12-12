import React from 'react';
import './styles.css';

function Guide(props) {
  return (
    <div className="content" dangerouslySetInnerHTML={{__html:props.html}}/>
  );
}

export default Guide;
