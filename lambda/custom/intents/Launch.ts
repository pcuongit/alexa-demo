import { RequestHandler, HandlerInput } from 'ask-sdk-core';
import { RequestTypes, Strings } from '../utilities/constants';
import { IsType } from '../utilities/helpers';
import i18n from 'i18next';
import { getApiInfo } from '../api/ApiHandler';
import { DataResponse } from '../interfaces/response';
export const launchHandler: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return IsType(handlerInput, RequestTypes.Launch);
  },
  async handle(handlerInput: HandlerInput) {
    // const speechText = i18n.t(Strings.WELCOME_MSG);
    // const speechText = 'Im opening';
    // const apiResponse: DataResponse = await getApiInfo(
    //   'ZTM1ODg0YmY5NDNmNjY0MmU4YTJlMjli'
    // );
    // const account = apiResponse.dataInfo?.accounts[0];
    // const speechText = `Okay, Your information account is below: Your Account ID is ${account?.accountId}, account Name is ${account?.accountName}, account number is ${account?.accountNumber}`;
    const speechText = 'im opening';
    return (
      handlerInput.responseBuilder
        .speak(speechText)
        // .reprompt(speechText)
        // .withSimpleCard(i18n.t(Strings.SKILL_NAME), speechText)
        .getResponse()
    );
  },
};
