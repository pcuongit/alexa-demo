import { HandlerInput } from 'ask-sdk-core';
import { Response } from 'ask-sdk-model';

/**
 * Response Interceptor to log the response made to Alexa
 */
export const logResponseInterceptor = {
  process(handlerInput: HandlerInput, response: Response) {
    // Log Response
    console.log('==== RESPONSE ======');
    console.log(JSON.stringify(response, null, 2));
  },
};
