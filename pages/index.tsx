import Dropdown from '@components/Dropdown';
import { Box, Checkbox, FormControl, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { FC, useState } from 'react';
import { HeroHeadingTitle } from 'styles/typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import CURRENCIES from '@components/Dropdown/constants/currencies';
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { SelectStatus } from '@components/Dropdown/Dropdown';

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

const Home: FC = () => {
  const [multiple, setMultiple] = useState(false);
  const [value, setValue] = useState<string | string[]>('');
  const [helper, setHelper] = useState('Sample helper text');
  const [label, setLabel] = useState('Select Currency');
  const [type, setType] = useState<SelectStatus>('');

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
    <Grid container>
      <Grid item xs px={8}>
        <HeroHeadingTitle>Dropdown</HeroHeadingTitle>
        <Dropdown
          data={CURRENCIES}
          onChange={onChange}
          multiple={multiple}
          value={value}
          helperText={helper}
          label={label}
          type={type}
        />
      </Grid>
      <Divider orientation="vertical" flexItem></Divider>
      <Grid item xs px={8}>
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

        <Box />
        <FormControl>
          <FormLabel id="status">Status</FormLabel>
          <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="status">
            {['Success', 'Error', ''].map((item) => (
              <FormControlLabel
                key={item}
                value={item}
                control={<Radio onChange={(e) => setType(e.target.value.toLowerCase() as SelectStatus)} />}
                label={item === '' ? 'None' : item}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default Home;
