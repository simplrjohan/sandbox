import React from 'react';
import styled, { keyframes } from 'styled-components';

export const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

export const Label = styled.label`
  position: relative;
  display: inline-block;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  margin: 0.6em 1em;
`;

const rotate = keyframes`
 from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`;

export const Indicator = styled.div`
  height: 24px;
  width: 24px;
  background: #e6e6e6;
  position: absolute;
  // top: 0em;
  // left: -1.6em;
  border: 1px solid #757575;
  border-radius: 50%;

  ${Input}:not(:disabled):checked & {
    background: #d1d1d1;
  }

  ${Label}:hover & {
    background: #ccc;
  }

  &::after {
    content: '';
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
    top: 3.2px;
    left: 7.5px;
    width: 22%;
    height: 45%;
    border: solid #263238;
    border-width: 0 0.15em 0.15em 0;
    animation-name: ${rotate};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  &::disabled {
    cursor: not-allowed;
  }
`;
