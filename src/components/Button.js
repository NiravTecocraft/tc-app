import React from 'react';
import { Button as ThemeButton } from 'react-bootstrap';

const Button = (props) => {
  const { containerStyle, btnText } = props;
  return (
    <>
      <ThemeButton style={containerStyle}>{btnText}</ThemeButton>
    </>
  );
};

export default Button;
