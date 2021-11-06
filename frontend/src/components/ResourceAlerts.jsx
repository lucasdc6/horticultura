import React from 'react';
import {
  Alert,
  AlertTitle,
} from '@mui/material';
import httpStatusToMessage from '../helpers/httpStatus';

export const ResourceAlerts = ({ data }) => {
  // Check for errors
  const hasError = data.reduce((acc, elem) => (
    acc || elem.error
  ), false);

  if (!hasError) {
    return null;
  }

  return (
    <Alert style={{ marginTop: "1em", marginBottom: "1em"}} severity="error">
      <AlertTitle>Algo salió mal</AlertTitle>
      <ul>
        {
          data.map((elem) => (
            elem.error && (
              <li>
                <b>{elem.msg}</b> { httpStatusToMessage(elem.response.status) }
              </li>
            )
          ))
        }
      </ul>
    </Alert>
  );
}

export default ResourceAlerts
