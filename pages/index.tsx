import Dropdown from '@components/Dropdown';
import { Box, Checkbox, TextField } from '@mui/material';
import { FC, useState } from 'react';
import { HeroHeadingTitle } from 'styles/typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import { CURRENCIES } from '@components/Dropdown/constants';

const Home: FC = () => {
  const [multiple, setMultiple] = useState(false);
  const [value, setValue] = useState<string | string[]>('');
  const [helper, setHelper] = useState('Sample helper text');
  const [label, setLabel] = useState('Select Currency');

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
    <>
      <Box display="flex" px={8}>
        <Box width="50%">
          <HeroHeadingTitle>Dropdown</HeroHeadingTitle>
          <Dropdown
            data={CURRENCIES}
            onChange={onChange}
            multiple={multiple}
            value={value}
            helperText={helper}
            label={label}
          />
        </Box>
        <Box width="50%" px={8}>
          <HeroHeadingTitle>Options</HeroHeadingTitle>

          <TextField label="Helper Text" value={helper} onChange={(e): void => setHelper(e.target.value)} />
          <Box mt={2} />
          <TextField label="Select Label" value={label} onChange={(e): void => setLabel(e.target.value)} />
          <Box mt={2} />
          <FormControlLabel
            control={
              <Checkbox
                checked={multiple}
                onChange={(e): void => {
                  setValue(e.target.checked ? [] : '');
                  setMultiple(e.target.checked);
                }}
              />
            }
            label="Multiple"
          />
        </Box>
      </Box>
    </>
  );
};

export default Home;
