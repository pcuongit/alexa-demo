import * as Alexa from 'ask-sdk-core';
import { launchHandler } from './intents/Launch';
import { help } from './intents/Help';
import { stop } from './intents/Stop';
import { reflector } from './intents/Reflector';
import { fallback } from './intents/Fallback';
import { helloWorld } from './intents/HelloWorld';
import { errorProcessor } from './errors/ErrorProcessor';
import { sessionEnded } from './intents/SessionEnded';
import { localizationRequestInterceptor } from './interceptors/LocalizationRequestInterceptor';
import { getInfoHandler } from './intents/GetInfo';
import { logRequestInterceptor } from './interceptors/LogRequestInterceptor';
import { logResponseInterceptor } from './interceptors/LogResponseInterceptor';

export const handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    // launchHandler,
    helloWorld,
    getInfoHandler,
    help,
    stop,
    sessionEnded,
    reflector,
    fallback
  )
  .addErrorHandlers(errorProcessor)
  .addRequestInterceptors(localizationRequestInterceptor, logRequestInterceptor)
  .addResponseInterceptors(logResponseInterceptor)
  .lambda();
