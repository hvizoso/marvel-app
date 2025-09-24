import React from 'react';

const NumberOfCharacters = ({ characters = [] }) => {
  const count = characters.length;
  
  if (count === 0) {
    return <div>There is no character</div>;
  }
  
  return <div>There is {count} characters</div>;
};

export default NumberOfCharacters;