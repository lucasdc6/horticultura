import React, { useState, forwardRef, useCallback } from 'react';
import {
  Box,
  Button,
  TextField,
  Stack,
} from '@mui/material';

const box = {
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  height: {
    xs: '65%',
    md: '30%',
  },
  position: 'absolute',
  bgcolor: '#FFF',
  padding: '2em',
};


export const DatasetComponent = forwardRef(({
  closeModal,
  datasetPost,
}, ref) => {
  // State
  const [ title, setTitle ] = useState('');
  const [ description, setDescription] = useState('');

  // Callbacks
  const onTitleChange = (e, value) => {
    setTitle(e.target.value);
  };
  const onDescriptionChange = (e, value) => {
    setDescription(e.target.value);
  };

  const handleAdd = useCallback((params, event) => {
    let dataset = {
      title: title,
      description: description,
    };
    datasetPost(dataset);
    closeModal();
  }, [title, description, datasetPost, closeModal]);

  return (
    <Box
      sx={box}
      ref={ref}
    >
      <h2>Agregar</h2>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="left"
        alignItems="center"
        spacing={{ xs: 1, md: 2 }}
        sx={{
          paddingTop: "1em"
        }}
      >
        <TextField
          sx={{
            width: {
              xs: "100%",
              md: "32%",
              lg: "32.5%",
            }
          }}
          id="title"
          label="Título"
          onChange={onTitleChange}
        />
        <TextField
          sx={{
            width: {
              xs: "100%",
              md: "32%",
              lg: "32.5%",
            }
          }}
          id="description"
          label="Descripción"
          multiline
          maxRows={4}
          onChange={onDescriptionChange}
        />
      </Stack>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="flex-end"
        alignItems="flex-end"
        spacing={{ xs: 1, md: 2 }}
        sx={{
          paddingTop: "1em"
        }}
      >
        <Button
          variant="contained"
          disabled={!title}
          onClick={handleAdd}
        >Guardar</Button>
      </Stack>
    </Box>
  );
});

export default DatasetComponent;
