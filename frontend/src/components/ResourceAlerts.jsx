import React from 'react';
import {
  Alert,
  AlertTitle,
} from '@mui/material';
import httpStatusToMessage from '../helpers/httpStatus';

export const ResourceAlerts = ({
  residualLimit,
  residualLimitList,
  activeIngredient,
  aptitude,
  crop,
}) => {
  if (!residualLimitList.error &&
      !residualLimit.error &&
      !activeIngredient.error &&
      !aptitude.error &&
      !crop.error
  ) {
    return null;
  }

  return (
    <Alert style={{ marginTop: "1em", marginBottom: "1em"}} severity="error">
      <AlertTitle>Algo salió mal</AlertTitle>
      <ul>
        {
          residualLimit.error && (
            <li>
              <b>Operaciones con residuos límite:</b> { httpStatusToMessage(residualLimit.response.status) }
            </li>
          )
        }
        {
          residualLimitList.error && (
            <li>
              <b>Residuos límite:</b> { httpStatusToMessage(residualLimitList.response.status) }
            </li>
          )
        }
        {
          activeIngredient.error && (
            <li>
              <b>Ingredientes activos:</b> { httpStatusToMessage(activeIngredient.response.status) }
            </li>
          )
        }
        {
          aptitude.error && (
            <li>
              <b>Aptitudes:</b> { httpStatusToMessage(aptitude.response.status) }
            </li>
          )
        }
        {
          crop.error && (
            <li>
              <b>Cultivos:</b> { httpStatusToMessage(crop.response.status) }
            </li>
          )
        }
      </ul>
    </Alert>
  );
}

export default ResourceAlerts
