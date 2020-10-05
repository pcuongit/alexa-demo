import { RequestHandler, getIntentName, HandlerInput } from 'ask-sdk-core';
import { IsType } from '../utilities/helpers';
import { Strings, RequestTypes } from '../utilities/constants';
import i18n from 'i18next';

export const reflector: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return IsType(handlerInput, RequestTypes.Intent);
  },
  handle(handlerInput: HandlerInput) {
    const speechText = i18n.t(Strings.REFLECTOR_MSG, {
      intentName: getIntentName(handlerInput.requestEnvelope),
    });

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard(i18n.t(Strings.SKILL_NAME), speechText)
      .getResponse();
  },
};
