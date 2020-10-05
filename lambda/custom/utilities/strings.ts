import { Strings, LocaleTypes } from './constants';

interface JustStrings {
  [Strings.SKILL_NAME]: string;
  [Strings.WELCOME_MSG]: string;
  [Strings.GOODBYE_MSG]: string;
  [Strings.HELLO_MSG]: string;
  [Strings.HELP_MSG]: string;
  [Strings.ERROR_MSG]: string;
  [Strings.REFLECTOR_MSG]: string;
  [Strings.FALLBACK_MSG]: string;
}

export const strings = {
  [LocaleTypes.enUs]: {
    translation: {
      SKILL_NAME: 'Hello world',
      WELCOME_MSG: 'Welcome, you can say Hello or Help. Which prefer?',
      HELLO_MSG: 'Hello world! Sunabarrrrrrrrrrrrrr',
      HELP_MSG: 'Can you say hello How can I help you?',
      GOODBYE_MSG: 'See you later!',
      REFLECTOR_MSG: 'You just activated {{intentName}}',
      FALLBACK_MSG:
        "Sorry, I don't know anything about that. Please try again.",
      ERROR_MSG: 'Sorry, there was an error. Please try again.',
    } as JustStrings,
  },
};
