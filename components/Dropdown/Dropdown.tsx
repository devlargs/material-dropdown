import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { FC } from 'react';
import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';

const StyledTextField = styled(TextField)`
  margin-top: 10px;
`;

export type SelectStatus = 'error' | 'success' | '';

type SelectProps = {
  value: string;
  label: string;
};

type DropdownProps = {
  data: SelectProps[];
  helperText?: string;
  label?: string;
  type?: SelectStatus;
  multiple?: boolean;
  onChange?: (value: SelectProps[]) => void;
  className?: string;
};

const Dropdown: FC<DropdownProps> = ({ data, helperText, label, type, multiple, className, onChange }) => {
  const [value, setValue] = useState<string | string[]>(multiple ? [] : '');

  useEffect(() => {
    setValue(multiple ? [] : '');
  }, [multiple]);

  const onDropdownSelect = (event): void => {
    const temp = event.target.value;

    if (multiple) {
      if (value.includes(temp)) {
        setValue((items: string[]) => {
          return items.filter((item) => item !== temp);
        });
      } else {
        setValue((prev) => [...prev, ...temp]);
      }
    }

    setValue(temp);
    onChange?.(temp);
  };

  return (
    <StyledTextField
      className={className}
      select
      label={label}
      helperText={helperText}
      fullWidth
      value={multiple ? (value.length ? value : []) : value}
      SelectProps={{
        onChange: onDropdownSelect,
        multiple: multiple || false,
      }}
      {...(type && {
        color: type,
        focused: true,
      })}
    >
      {data.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </StyledTextField>
  );
};

export default Dropdown;
