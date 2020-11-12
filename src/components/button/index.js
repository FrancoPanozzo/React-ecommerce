import { ButtonContainer } from './styles';
import React from 'react';

export default function Button({ children, ...props }) {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
}
