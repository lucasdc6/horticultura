const httpStatusToMessage = (status) => {
  let msg = '';
  switch(status) {
    case 401:
      msg = 'Acceso no autorizado';
      break;
    case 403:
      msg = 'Acceso denegado';
      break;
    case 404:
      msg = 'Recurso no encontrado';
      break;
    case 405:
    case 406:
    case 407:
    case 408:
    case 409:
    case 410:
    case 411:
    case 412:
    case 413:
    case 414:
    case 415:
    case 416:
    case 417:
    case 418:
      msg = 'Error desconocido, por favor, contacte con el administrador del sitio';
      break;
    case 500:
    case 501:
    case 502:
    case 503:
    case 505:
    case 511:
      msg = 'Error interno del servidor, por favor, contacte con el administrador del sitio';
      break;
    case 504:
      msg = 'Se esperó demasiado tiempo la respuesta, por favor, intentelo más tarde';
      break;
    default:
      msg = 'Problema de conexión';
      break;
  }

  return msg;
};

export default httpStatusToMessage;
