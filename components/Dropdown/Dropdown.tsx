import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { FC, ReactNode } from 'react';
import * as React from 'react';
import { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';

const StyledTextField = styled(TextField)`
  margin-top: 10px;
`;

export type SelectStatus = 'error' | 'success' | '';

type DropdownProps = {
  data: Array<{
    value: string;
    label: string;
  }>;
  helperText?: string;
  label?: string;
  type?: SelectStatus;
  multiple?: boolean;
  onChange?: ((event: SelectChangeEvent<unknown>, child: ReactNode) => void) | undefined;
  className?: string;
};

const Dropdown: FC<DropdownProps> = ({ data, helperText, label, type, multiple, className }) => {
  const [value, setValue] = useState<string | string[]>(multiple ? [] : '');

  const onChange = (event): void => {
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
  };

  return (
    <StyledTextField
      className={className}
      select
      label={label}
      helperText={helperText}
      fullWidth
      value={value}
      SelectProps={{
        onChange,
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
