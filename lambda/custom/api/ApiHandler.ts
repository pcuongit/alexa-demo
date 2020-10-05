import { LoginInput } from '../interfaces/login';
import { environment } from '../environment/environment';
import { handlePromise } from '../utilities/helpers';
import fetch, { Headers, RequestInit } from 'node-fetch';

function setHeaders(xAccessToken: string) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('x-access-token', xAccessToken);
  return headers;
}
function setReq(headers: Headers, method: string) {
  const requestOptions: RequestInit = {
    headers,
    method: method.toUpperCase(),
  };
  return requestOptions;
}
export function getApiInfo(xAccessToken: string) {
  const headers = setHeaders(xAccessToken);
  const req = setReq(headers, 'get');
  handlePromise(fetch(environment.dev.api + '/accounts', req));
}
