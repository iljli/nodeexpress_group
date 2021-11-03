import React from "react";
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
const PostForm = ({ onFile, onSubmit, onChange, userInput, onClear }) => {
  return (

    <form onSubmit={onSubmit} className="form">
      <FormControl className="form__group" color="secondary">
        <InputLabel htmlFor="component-outlined">Title</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={userInput.title}
          onChange={onChange}
          label="Title"
          name="title"

        />
      </FormControl>
      <FormControl className="form__group" color="secondary">
        <InputLabel htmlFor="headline">Headline</InputLabel>
        <OutlinedInput
          id="headline"
          value={userInput.headline}
          onChange={onChange}
          label="Headline"
          name="headline"

        />
      </FormControl>

      <Button className="form__group"
        color="secondary"
        variant="outlined"
        component="label"
      >
        Upload File
        <input
          type="file"
          hidden
          onChange={onFile}
        />
      </Button>
      <FormControl className="form__group" color="secondary">
        {/* <InputLabel htmlFor="article">Article</InputLabel> */}
        <TextField
          color="secondary"
          id="outlined-multiline-static"
          label="Article"
          multiline
          rows={4}
          onChange={onChange}
          name="text"
          value={userInput.text}

        />
      </FormControl>
      <Stack className="form__group" direction="row" spacing={2}>
        <Button className="form__group"
          color="success"
          variant="contained"
          component="label"
          type="submit"
          value="Submit"
          role="submit"
          onClick={onSubmit}
        >
          Submit to Server
        </Button>
        <Button className="form__group"
          color="error"
          variant="outlined"
          component="label"
          type="reset"
          onClick={e => onClear(e)}
        >
          Clear Input
        </Button>
      </Stack>
    </form>
  );
};

export default PostForm;
