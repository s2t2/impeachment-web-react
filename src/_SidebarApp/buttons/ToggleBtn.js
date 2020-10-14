
import React from 'react';


function shoot() {
  alert("Great Shot!");
}

function ToggleBtn() {
  return (
    <button onClick={shoot}>Take the shot!</button>
  );
}

export default ToggleBtn;



