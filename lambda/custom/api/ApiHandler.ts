import * as axios from 'axios';
import { environment } from '../environment/environment';

export function getApiInfo(xAccessToken: string) {
  const response = axios.default
    .get(`${environment.dev.api}/accounts`, {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': xAccessToken,
      },
    })
    .then(res => {
      return {
        status: 200,
        dataInfo: res.data,
      };
    })
    .catch(err => {
      return {
        status: 500,
        err: JSON.stringify(err),
      };
    });
  return response;
}
