import React, { CSSProperties } from 'react';
import Checkbox from '../../atoms/checkbox';
import ErrorField from '../../atoms/error-field';
import * as Styles from './styles';

export type CheckboxItem = {
  value: string;
  label?: string | React.ReactNode;
  checked?: boolean | null;
  error?: string;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  dataTestId?: string;
  required?: boolean;
};

interface ICheckboxGroupItemOnChange {
  value: string;
  checked: boolean;
}
interface ICheckboxGroupOnChange {
  event: React.ChangeEvent<HTMLInputElement>;
  /** The option item with its latest value state */
  option: ICheckboxGroupItemOnChange;
}

export interface CheckboxGroupProps {
  type?: 'row' | 'column';
  children?: React.ReactNode;
  options?: CheckboxItem[];
  error?: string;
  onChange?: (data: ICheckboxGroupOnChange) => void;
  disabled?: boolean;
}

const CheckboxGroup = (props: CheckboxGroupProps) => {
  const {
    children,
    options,
    type = 'column',
    onChange,
    error,
    disabled,
  } = props;

  return (
    <Styles.Wrapper type={type} error={error}>
      {children
        ? children
        : options && Array.isArray(options)
        ? options.map((value, index) => (
            <li key={index}>
              <Checkbox
                label={value.label}
                value={value.value}
                checked={value.checked ?? undefined}
                onChange={(event, isChecked) =>
                  onChange?.({
                    event,
                    option: {
                      value: value.value,
                      checked: isChecked,
                    },
                  })
                }
                error={!!error}
                disabled={disabled}
              />
            </li>
          ))
        : null}
      {error ? <ErrorField error={error} /> : null}
    </Styles.Wrapper>
  );
};

export default CheckboxGroup;
