import { RequestHandler, HandlerInput } from 'ask-sdk-core';
import { RequestTypes, Strings } from '../utilities/constants';
import { IsType } from '../utilities/helpers';
import i18n from 'i18next';
import { getApiInfo } from '../api/ApiHandler';
export const launch: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return IsType(handlerInput, RequestTypes.Launch);
  },
  handle(handlerInput: HandlerInput) {
    // const speechText = i18n.t(Strings.WELCOME_MSG);
    const apiResponse = getApiInfo('ZTM1ODg0YmY5NDNmNjY0MmU4YTJlMjli');
    console.log('handle -> apiResponse', apiResponse);
    const speechText = 'Im opening';
    console.log('handle -> speechText', speechText);

    return (
      handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(speechText)
        // .withSimpleCard(i18n.t(Strings.SKILL_NAME), speechText)
        .getResponse()
    );
  },
};
