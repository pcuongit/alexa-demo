import { RequestHandler, HandlerInput } from 'ask-sdk-core';
import { IsIntent } from '../utilities/helpers';
import { IntentTypes, Strings } from '../utilities/constants';
import i18n from 'i18next';
import { getApiInfo } from '../api/ApiHandler';

export const getInfo: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return IsIntent(handlerInput, IntentTypes.GetInfo);
  },
  handle(handlerInput: HandlerInput) {
    const apiResponse = getApiInfo('ZTM1ODg0YmY5NDNmNjY0MmU4YTJlMjli');
    console.log('handle -> apiResponse', apiResponse);
    const speechText = i18n.t(Strings.HELLO_MSG);

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard(i18n.t(Strings.SKILL_NAME), speechText)
      .getResponse();
  },
};
