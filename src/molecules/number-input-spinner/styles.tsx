import styled from 'styled-components';
import { lighten } from 'polished';
import { colors } from '../../ions/variables';

const { info, danger } = colors;

export const Wrapper = styled.div`
  border: 1px solid ${info};
  border-radius: 6px;
  max-width: max-content;
  height: 50px;
  display: flex;
  overflow: hidden;

  button,
  input {
    &:disabled {
      cursor: inherit;
      background-color: ${lighten(0.48, info)};
      color: ${lighten(0.35, info)};

      svg {
        fill: ${lighten(0.35, info)};
      }

      &:hover {
        pointer-events: none;
      }
    }
  }
`;

export const Input = styled.input`
  border: 0;
  width: 70px;
  height: 50px;
  padding: 10px;
  font-family: inherit;
  font-size: 1rem;
  text-align: center;

  &:invalid {
    box-shadow: none;
    background-color: ${lighten(0.2, danger)};
  }
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  border: 0;
  background-color: ${lighten(0.4, info)};
  cursor: pointer;
  transition-duration: 0.3s;

  &.remove-button {
    border-right: 1px solid ${info};
  }

  &.add-button {
    border-left: 1px solid ${info};
  }

  svg {
    width: auto;
    height: 20px;
    fill: ${info};
  }

  &:hover {
    background-color: ${lighten(0.3, info)};
  }
`;
