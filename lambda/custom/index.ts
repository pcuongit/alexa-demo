import * as Alexa from 'ask-sdk-core';
import { launch } from './intents/Launch';
import { help } from './intents/Help';
import { stop } from './intents/Stop';
import { reflector } from './intents/Reflector';
import { fallback } from './intents/Fallback';
import { helloWorld } from './intents/HelloWorld';
import { errorProcessor } from './errors/ErrorProcessor';
import { sessionEnded } from './intents/SessionEnded';
import { localizationRequestInterceptor } from './interceptors/LocalizationRequestInterceptor';

export const handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    // Default intents
    launch,
    helloWorld,
    help,
    stop,
    sessionEnded,
    reflector,
    fallback
  )
  .addErrorHandlers(errorProcessor)
  .addRequestInterceptors(localizationRequestInterceptor)
  .lambda();
