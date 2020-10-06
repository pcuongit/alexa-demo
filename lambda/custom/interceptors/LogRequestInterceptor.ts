import { HandlerInput } from 'ask-sdk-core';

export const logRequestInterceptor = {
  process(handlerInput: HandlerInput) {
    // Log Request
    console.log('==== REQUEST ======');
    console.log(JSON.stringify(handlerInput.requestEnvelope, null, 2));
  },
};
