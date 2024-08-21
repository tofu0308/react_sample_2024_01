import { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  color: 'blue',
  border: 'solid 1px',
}));

export const SimpleButton: () => JSX.Element = () => {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState((prevState) => !prevState);
  };
  return <StyledButton onClick={handleClick}>{state ? 'ON' : 'OFF'}</StyledButton>;
};
