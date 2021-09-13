import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

interface IFormInput {
  checkBox: boolean;
  textBox: string;
  pullDown: string;
}

const Basic: React.FC = () => {
  const { control, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = data => {
    alert(JSON.stringify(data));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <List>
          <ListItem>
            <Controller
              control={control}
              name="checkBox"
              render={({ field: {value, onChange }}) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={value}
                      onChange={onChange}
                      color='primary'
                    />
                  }
                  label="チェックボックス"
                />
              )}
            />
          </ListItem>
        </List>

        <Divider />

        <List>
          <ListItem>
            <Controller
              control={control}
              name="textBox"
              render={({ field }) => (
                <TextField
                  {...field}
                  label="テキストフィールド"
                  fullWidth
                  margin="normal"
                  placeholder="プレースホルダー"
                />
              )}
            />
          </ListItem>
        </List>

        <Divider />

        <List>
          <ListItem>
            <Controller
              control={control}
              name="pullDown"
              render={({ field }) => (
                <TextField
                  {...field}
                  label="プルダウンリスト"
                  fullWidth
                  margin="normal"
                  id="select"
                  select
                >
                  <MenuItem value="one">選択肢1</MenuItem>
                  <MenuItem value="two">選択肢2</MenuItem>
                  <MenuItem value="three">選択肢3</MenuItem>
                </TextField>
              )}
            />
          </ListItem>
        </List>

        <Divider />

        <List>
          <ListItem>
            <Button
              variant="contained"
              color="primary"
              type="submit"
            >
              Next
            </Button>
          </ListItem>
        </List>

      </form>
    </div>
  );
}

export default Basic;
