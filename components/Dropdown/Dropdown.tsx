import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { FC, ReactNode } from 'react';
import * as React from 'react';
import { SelectChangeEvent } from '@mui/material';

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
  value?: string | string[];
};

const Dropdown: FC<DropdownProps> = ({ data, helperText, label, type, multiple, value, onChange }) => {
  return (
    <TextField
      select
      label={label}
      helperText={helperText}
      fullWidth
      value={value}
      SelectProps={{
        ...(onChange && {
          onChange,
        }),
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
    </TextField>
  );
};

export default Dropdown;
