import { RequestHandler, HandlerInput } from 'ask-sdk-core';
import { IsType } from '../utilities/helpers';
import { Strings, RequestTypes } from '../utilities/constants';
import i18n from 'i18next';

export const sessionEnded: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return IsType(handlerInput, RequestTypes.SessionEnded);
  },
  handle(handlerInput: HandlerInput) {
    const speechText = i18n.t(Strings.GOODBYE_MSG);
    console.log('handle -> speechText', speechText);
    return (
      handlerInput.responseBuilder
        .speak(speechText)
        // .withSimpleCard(i18n.t(Strings.SKILL_NAME), speechText)
        .getResponse()
    );
  },
};
