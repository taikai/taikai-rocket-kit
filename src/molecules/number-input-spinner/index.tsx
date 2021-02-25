import React, { useState, useEffect, useRef } from 'react';
import * as Styles from './styles';
import { Icon } from '../..';

export interface NumberInputSpinnerProps {
  decreaseAriaLabel?: string;
  increaseAriaLabel?: string;
  increment?: number;
  min?: number;
  max?: number;
  value?: number;
  onChange?: (value: number) => void;
  disabled?: boolean;
}

const NumberInputSpinner = (props: NumberInputSpinnerProps) => {
  const {
    decreaseAriaLabel = 'Decrease Value',
    increaseAriaLabel = 'Increase Value',
    increment = 1,
    min = 0,
    max = 10,
    value = 0,
    onChange,
    disabled = false,
  } = props;

  const [number, setNumber] = useState(value);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (onChange) {
      onChange(number);
    }
  }, [number]);

  return (
    <Styles.Wrapper>
      <Styles.Button
        className="remove-button"
        aria-label={decreaseAriaLabel}
        onClick={() => {
          setNumber(number - increment > min ? number - increment : min);
        }}
        disabled={number <= min || disabled}
      >
        <Icon icon="remove" />
      </Styles.Button>
      <Styles.Input
        type="number"
        min={min}
        max={max}
        value={number}
        onChange={e => {
          setNumber(parseInt(e.target.value));
        }}
        disabled={disabled}
      />
      <Styles.Button
        className="add-button"
        aria-label={increaseAriaLabel}
        onClick={() => {
          setNumber(number + increment < max ? number + increment : max);
        }}
        disabled={number >= max || disabled}
      >
        <Icon icon="add" />
      </Styles.Button>
    </Styles.Wrapper>
  );
};

export default NumberInputSpinner;