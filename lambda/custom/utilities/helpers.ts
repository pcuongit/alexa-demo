import { HandlerInput } from 'ask-sdk-core';
import { RequestTypes } from './constants';

/**
 * Checks if the request matches any of the given intents.
 *
 * @param handlerInput
 * @param intents
 */
export function IsIntent(
  handlerInput: HandlerInput,
  ...intents: string[]
): boolean {
  if (handlerInput.requestEnvelope.request.type === RequestTypes.Intent) {
    for (let i = 0; i < intents.length; i++) {
      if (handlerInput.requestEnvelope.request.intent.name === intents[i]) {
        return true;
      }
    }
  }
  return false;
}

/**
 * Checks if the request matches any of the given types.
 *
 * @param handlerInput
 * @param types
 */
export function IsType(
  handlerInput: HandlerInput,
  ...types: string[]
): boolean {
  for (let i = 0; i < types.length; i++) {
    if (handlerInput.requestEnvelope.request.type === types[i]) {
      return true;
    }
  }
  return false;
}
// // Generic function to check interface availability on calling device
// function supportsInterface(handlerInput: HandlerInput, interfaceName: string) {
//   const interfaces: SupportedInterfaces =
//     (((handlerInput.requestEnvelope.context || {}).System || {}).device || {})
//       .supportedInterfaces || {};
//   return (
//     interfaces["Alexa.Presentation.APL"] !== null &&
//     interfaces[interfaceName] !== undefined
//   );
// }
// // Check for AudioPlayer Interface availability on calling device
// function supportsAudioPlayer(handlerInput: HandlerInput) {
//   return supportsInterface(handlerInput, 'AudioPlayer');
// }
// // Check for APL Interface availability on calling device
// function supportsAPL(handlerInput: HandlerInput) {
//   return supportsInterface(handlerInput, 'Alexa.Presentation.APL');
// }
// // Check for Display Interface availability on calling device
// function supportsDisplay(handlerInput: HandlerInput) {
//   return supportsInterface(handlerInput, 'Display');
// }
