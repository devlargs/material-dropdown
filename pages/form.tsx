import { FC, useState } from 'react';
import { HeroHeadingTitle } from 'styles/typography';
import Dropdown from '@components/Dropdown';
import CURRENCIES from 'constants/currencies';
import { Box, Divider, TextField } from '@mui/material';
import GENDERS from 'constants/gender';

const Form: FC = () => {
  const [name, setName] = useState('');
  const [formValues, setFormValues] = useState({});

  const handleChange = (event): void => {
    const { value } = event.target;
    setName(value);
    setFormValues((prev) => ({
      ...prev,
      name: value,
    }));
  };

  const onChange = (key: string, value: string | string[]): void => {
    setFormValues((prev) => ({
      ...prev,
      [key]: value,
    }));
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
            id="name"
          />
          <Dropdown
            data={CURRENCIES}
            label="Select Multiple Currencies"
            multiple
            className="multi-currency"
            onChange={(e): void => onChange('multiCurrency', e)}
          />
          <Dropdown
            data={CURRENCIES}
            label="Select Single Currency"
            className="currency"
            onChange={(e): void => onChange('currency', e)}
          />
          <Dropdown
            data={GENDERS}
            label="Select Gender"
            helperText="Sample helper text"
            className="gender"
            onChange={(e): void => onChange('gender', e)}
          />
        </form>

        <Divider style={{ marginTop: '2rem', marginBottom: '2rem' }} />

        <code>
          Form Values
          <pre id="form-values">{JSON.stringify(formValues, null, 2)}</pre>
        </code>
      </Box>
    </>
  );
};

export default Form;
