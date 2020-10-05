import { HandlerInput } from 'ask-sdk-core';
import { Response } from 'node-fetch';
import { RequestTypes } from './constants';

/**
 * Checks if the request matches any of the given intents.
 *
 * @param handlerInput
 * @param intents
 */
export function IsIntent(
  handlerInput: HandlerInput,
  ...intents: string[]
): boolean {
  if (handlerInput.requestEnvelope.request.type === RequestTypes.Intent) {
    for (let i = 0; i < intents.length; i++) {
      if (handlerInput.requestEnvelope.request.intent.name === intents[i]) {
        return true;
      }
    }
  }
  return false;
}

/**
 * Checks if the request matches any of the given types.
 *
 * @param handlerInput
 * @param types
 */
export function IsType(
  handlerInput: HandlerInput,
  ...types: string[]
): boolean {
  for (let i = 0; i < types.length; i++) {
    if (handlerInput.requestEnvelope.request.type === types[i]) {
      return true;
    }
  }
  return false;
}

export function handlePromise(
  promise: Promise<Response>,
  isArrayBuffer = false
) {
  promise
    .then(
      (response): Promise<string | ArrayBuffer> => {
        if (response.type === 'basic') {
          // for test only
        }
        if (isArrayBuffer) {
          return response.arrayBuffer();
        } else {
          return response.text();
        }
      }
    )
    .then((text: string | ArrayBuffer) => {
      console.log(text);
    });
}
