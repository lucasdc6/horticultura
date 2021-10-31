import React, { useState, forwardRef, useCallback } from 'react';
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
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


export const ResidualLimitFormComponent = forwardRef(({
  closeModal,
  activeIngredientList,
  activeIngredientsLoading,
  aptitudeList,
  aptitudesLoading,
  cropList,
  cropsLoading,
  residualLimitPost,
  residualLimitGet,
  dataset,
  datasetPut,
}, ref) => {
  // State
  const [ activeIngredient, setActiveIngredient ] = useState(null);
  const [ aptitude, setAptitude ] = useState(null);
  const [ crop, setCrop ] = useState(null);
  const [ residual, setResidual ] = useState(0);
  const [ harvest, setHarvest ] = useState(false);

  // Callbacks
  const onActiveIngredientChange = (e, value) => {
    setActiveIngredient(value ? value.id : null);
  };
  const onAptitudeChange = (e, value) => {
    setAptitude(value ? value.id : null);
  };
  const onCropChange = (e, value) => {
    setCrop(value ? value.id : null);
  };
  const onResidualChange = (e, value) => {
    setResidual(e.target.value);
  };
  const onHarvestChange = (e, value) => {
    setHarvest(value);
  };

  const handleAdd = useCallback((params, event) => {
    let residualLimit = {
      active_ingredient: `${activeIngredient}`,
      aptitude: `${aptitude}`,
      crop: `${crop}`,
      residual: `${residual}`,
      harvest: `${harvest}`,
    };
    residualLimitPost(residualLimit).then(({ id }) => {
      const residualLimitIds = dataset.residual_limits.map((elem) => elem.id);
      datasetPut(`${dataset.id}`, { residual_limits: [ ...residualLimitIds, id] });
    });
    closeModal();
  }, [residualLimitPost, activeIngredient, aptitude, crop, residual, harvest, closeModal]);

  return (
    <Box
      sx={box}
      ref={ref}
    >
      <h2>Agregar</h2>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 1, md: 2 }}
      >
        <Autocomplete
          sx={{ width: "100%"}}
          id="activeIngredient"
          options={activeIngredientList}
          getOptionLabel={(option) => option.name}
          onChange={onActiveIngredientChange}
          loading={activeIngredientsLoading}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          renderInput={(params) => <TextField {...params} label="Ingrediente activo" variant="outlined" />}
        />
        <Autocomplete
          sx={{ width: "100%"}}
          id="aptitudes"
          options={aptitudeList}
          getOptionLabel={(option) => option.name}
          onChange={onAptitudeChange}
          loading={aptitudesLoading}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          renderInput={(params) => <TextField {...params} label="Aptitud" variant="outlined" />}
        />
        <Autocomplete
          sx={{ width: "100%"}}
          id="crops"
          options={cropList}
          getOptionLabel={(option) => option.name}
          onChange={onCropChange}
          loading={cropsLoading}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          renderInput={(params) => <TextField {...params} label="Cultivos" variant="outlined" />}
        />
      </Stack>
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
        id="residual"
        label="Residuos"
        type="number"
        inputProps={{ min: 0 }}
        onChange={onResidualChange}
        endadornment={<InputAdornment position="end">g</InputAdornment>}
      />
        <FormControlLabel control={
          <Checkbox checked={harvest} onChange={onHarvestChange} />
        } label="Post Cosecha" />
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
          disabled={!(activeIngredient && aptitude && crop && residual)}
          onClick={handleAdd}
        >Guardar</Button>
      </Stack>
    </Box>
  );
});

export default ResidualLimitFormComponent;
