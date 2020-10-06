import { RequestHandler, HandlerInput } from 'ask-sdk-core';
import { IsIntent } from '../utilities/helpers';
import { IntentTypes, Strings } from '../utilities/constants';
import i18n from 'i18next';
import { getApiInfo } from '../api/ApiHandler';
import { DataResponse } from '../interfaces/response';

export const getInfoHandler: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return IsIntent(handlerInput, IntentTypes.GetInfo);
  },
  async handle(handlerInput: HandlerInput) {
    const apiResponse: DataResponse = await getApiInfo(
      'ZTM1ODg0YmY5NDNmNjY0MmU4YTJlMjli'
    );
    const account = apiResponse.dataInfo?.accounts[0];
    const speechText = `Okay, Your information account is below: Your Account ID is ${account?.accountId}, account Name is ${account?.accountName}, account number is ${account?.accountNumber}`;
    console.log('handle -> speechText', speechText);
    // console.log('handle -> apiResponse', apiResponse);
    // const speechText = i18n.t(Strings.HELLO_MSG);

    return handlerInput.responseBuilder
      .speak(speechText)
      .withShouldEndSession(false)
      .withSimpleCard(i18n.t(Strings.SKILL_NAME), speechText)
      .getResponse();
  },
};
