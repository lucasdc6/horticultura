import React, { useState, useCallback } from 'react';
import {
  Box,
  Modal,
  Container,
  Button,
  MenuItem,
  Select,
  InputLabel,
  Tooltip,
} from '@mui/material';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  esES,
} from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import useFetch from 'use-http';

import ResidualLimitFormComponent from '../components/ResidualLimitFormComponent';
import DatasetComponent from '../components/DatasetComponent';
import ResourceAlerts from '../components/ResourceAlerts';

const mapRows = (elem) => ({
  id: elem.id,
  activeIngredient: elem.active_ingredient.name,
  aptitude: elem.aptitude.name,
  crop: elem.crop.name,
  residual: elem.residual,
  harvest: elem.harvest,
});

export const ListContainer = () => {
  // State
  const [ open, setOpen ] = useState('');
  const [ selected, setSelected ] = useState([]);

  // Fetch options
  const fetchOptions = {
    data: [],
    // Disable cache
    cachePolicy: 'no-cache',
  };

  // Fetch objects
  const {
    error: residualLimitError,
    response: residualLimitResponse,
    post: residualLimitPost,
    put: residualLimitPut,
    del: residualLimitDelete,
  } = useFetch('/residual-limits', { data: {}});
  const {
    error: datasetError,
    response: datasetResponse,
    post: datasetPost,
    get: datasetGet,
    put: datasetPut,
  } = useFetch('/datasets', { cachePolicy: 'no-cache', data: {}});

  const { error: datasetsError, response: datasetsResponse, data: datasetList, loading: datasetsLoading } = useFetch('/datasets', fetchOptions, [datasetResponse.data]);
  const { error: activeIngredientError, response: activeIngredientResponse, data: activeIngredientList, loading: activeIngredientsLoading } = useFetch('/active-ingredients', fetchOptions, [open]);
  const { error: aptitudeError, response: aptitudeResponse, data: aptitudeList, loading: aptitudesLoading } = useFetch('/aptitudes', fetchOptions, [open]);
  const { error: cropError, response: cropResponse, data: cropList, loading: cropsLoading } = useFetch('/crops', fetchOptions, [open]);

  // Visual
  const CustomToolbar = () => {
    return (
      <GridToolbarContainer>
        <Button color="primary" startIcon={<AddIcon />} disabled={!Object.entries(datasetResponse.data).length} onClick={() => setOpen('residualLimit')}>
          Agregar
        </Button>
        <Button color="primary" startIcon={<DeleteIcon />} disabled={!selected.length} onClick={() => {
          const requests = selected.map((e) => residualLimitDelete(`${e}`));
          Promise.all(requests).then(() => {
            datasetGet(`${datasetResponse.data.id}`);
          });
        }}>
          Eliminar
        </Button>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  };
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 75,
      hide: true,
      sortable: false,
      disableExport: true,
    },
    {
      field: 'activeIngredient',
      headerName: 'Ingredientes activos',
      flex: 3,
      editable: true,
      type: 'singleSelect',
      valueOptions: activeIngredientResponse.ok ? activeIngredientList.map((elem) => elem.name) : [],
      sortable: false,
    },
    {
      field: 'aptitude',
      headerName: 'Aptiudes',
      flex: 2,
      editable: true,
      type: 'singleSelect',
      valueOptions: aptitudeResponse.ok ? aptitudeList.map((elem) => elem.name) : [],
      sortable: false,
    },
    {
      field: 'crop',
      headerName: 'Cultivos',
      flex: 1,
      editable: true,
      type: 'singleSelect',
      valueOptions: cropResponse.ok ? cropList.map((elem) => elem.name) : [],
      sortable: false,
    },
    {
      field: 'residual',
      headerName: 'Residuos',
      flex: 1,
      editable: true,
      type: 'number',
      sortable: false,
    },
    {
      field: 'harvest',
      headerName: 'Post-cosecha',
      flex: 1,
      editable: true,
      type: 'boolean',
      sortable: false,
    },
  ];

  // Callbacks
  const handleEdit = useCallback((params, event) => {
    let activeIngredient = activeIngredientList.find((elem) => elem.name === params.getValue(params.id, 'activeIngredient'));
    let aptitude = aptitudeList.find((elem) => elem.name === params.getValue(params.id, 'aptitude'));
    let crop = cropList.find((elem) => elem.name === params.getValue(params.id, 'crop'));
    let residualLimitBody = {
      active_ingredient: `${activeIngredient.id}`,
      aptitude: `${aptitude.id}`,
      crop: `${crop.id}`,
      residual: `${params.row.residual}`,
      harvest: `${params.row.harvest}`,
    };

    residualLimitPut(`${params.row.id}`, residualLimitBody).then(() => {
      datasetGet(`${datasetResponse.data.id}`);
    });
  }, [datasetGet, datasetResponse.data, residualLimitPut, activeIngredientList, aptitudeList, cropList]);

  const handleChange = (event) => {
    const datasetID = event.target.value;
    datasetGet(`${datasetID}`);
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ height: 600, width: '100%' }}>
        <ResourceAlerts
          data={[
            {
              msg: "Operaciones con datasets: ",
              error: datasetError,
              response: datasetResponse,
            },
            {
              msg: "Operaciones con residuos límite: ",
              error: residualLimitError,
              response: residualLimitResponse,
            },
            {
              msg: "Datasets: ",
              error: datasetsError,
              response: datasetsResponse,
            },
            {
              msg: "Ingredientes activos: ",
              error: activeIngredientError,
              response: activeIngredientResponse,
            },
            {
              msg: "Aptiudes: ",
              error: aptitudeError,
              response: aptitudeResponse,
            },
            {
              msg: "Cultivos: ",
              error: cropError,
              response: cropResponse,
            },
          ]}
        />
        <Box
          style={{ marginTop: "1em", marginBottom: "1em"}}
        >
          <InputLabel id="dataset-label">
            Dataset
            {
              datasetResponse.ok && datasetResponse.data.description && (
                <Tooltip title={datasetResponse.data.description} placement="right">
                  <sup>
                    <InfoIcon sx={{ fontSize: 15 }}/>
                  </sup>
                </Tooltip>
              )
            }
          </InputLabel>
          <Select
            style={{ width: '20em' }}
            labelId="dataset-label"
            id="dataset-select"
            value={datasetResponse.ok ? datasetResponse.data.id : ''}
            label="Dataset"
            onChange={handleChange}
          >
            {
              datasetsResponse.ok && datasetList.map((dataset) => (
                <MenuItem value={dataset.id} key={dataset.id}>{dataset.title}</MenuItem>
              ))
            }
          </Select>
          <Button color="primary" startIcon={<AddIcon />} onClick={() => setOpen('dataset')}>
            Agregar dataset
          </Button>
        </Box>
        <Modal
          open={Boolean(open)}
          onClose={() => setOpen('')}
          aria-labelledby="add-residual-limit"
          aria-describedby="add-residual-limit-form"
        >
          <>
            {
              open === 'residualLimit' && (
                <ResidualLimitFormComponent
                  closeModal={() => setOpen('')}
                  activeIngredientList={activeIngredientList}
                  activeIngredientsLoading={activeIngredientsLoading}
                  aptitudeList={aptitudeList}
                  aptitudesLoading={aptitudesLoading}
                  cropList={cropList}
                  cropsLoading={cropsLoading}
                  residualLimitPost={residualLimitPost}
                  dataset={datasetResponse.data}
                  datasetPut={datasetPut}
                />
              )
            }
            {
              open === 'dataset' && (
                <DatasetComponent
                  closeModal={() => setOpen('')}
                  datasetPost={datasetPost}
                />
              )
            }
          </>
        </Modal>
        <DataGrid
          components={{
            Toolbar: CustomToolbar,
          }}
          rows={datasetResponse.ok ? datasetResponse.data.residual_limits.map(mapRows) : []}
          columns={columns}
          checkboxSelection
          editMode="row"
          loading={datasetsLoading}
          onRowEditStop={handleEdit}
          onSelectionModelChange={(e) => setSelected(e)}
          sortModel={[{
            field: 'id',
            sort: 'asc'
          }]}
          localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        />
      </Box>
    </Container>
  );
};

export default ListContainer;
