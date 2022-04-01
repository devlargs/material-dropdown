import { FC, useState } from 'react';
import { HeroHeadingTitle } from 'styles/typography';
import Dropdown from '@components/Dropdown';
import CURRENCIES from 'constants/currencies';
import { Box, TextField } from '@mui/material';
import GENDERS from 'constants/gender';

const Form: FC = () => {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <HeroHeadingTitle>Sample Form</HeroHeadingTitle>
      <Box width="50%">
        <form>
          <TextField
            placeholder="Enter Name"
            style={{ width: '100%' }}
            value={name}
            onChange={handleChange}
          ></TextField>
          <Dropdown data={CURRENCIES} label="Select Multiple Currencies" multiple className="multi-currency" />
          <Dropdown data={CURRENCIES} label="Select Single Currency" className="currency" />
          <Dropdown data={GENDERS} label="Select Gender" helperText="Sample helper text" className="gender" />
        </form>
      </Box>
    </>
  );
};

export default Form;
