import 'dotenv/config';
import { getRPSChoices } from './game.js';
import { capitalize, InstallGlobalCommands } from './utils.js';

// Get the game choices from game.js
function createCommandChoices() {
  const choices = getRPSChoices();
  const commandChoices = [];

  for (let choice of choices) {
    commandChoices.push({
      name: capitalize(choice),
      value: choice.toLowerCase(),
    });
  }

  return commandChoices;
}

// Simple test command
const TEST_COMMAND = {
  name: 'siren',
  description: 'monke',
  type: 1,
};


// Simple test command
const SHAI_COMMAND = {
  name: 'shai',
  description: 'shai',
  type: 1,
};

const DUMB_COMMAND = {
  name: 'owo',
  description: 'im sorry',
  type: 1,
};

const DUMB_QUOTES = {
  name: 'quotes',
  description: 'Words of wisdom from Coffee-Shop' ,
  type: 1,
};

const DUMB_JOKES = {
  name: 'jokes',
  description: 'dumbest jokes youve ever heard' ,
  type: 1,
};

const RANDOM_CAT= {
  name: 'cat images',
  description: 'meow mow mow' ,
  type: 1,
};

// Command containing options
const CHALLENGE_COMMAND = {
  name: 'challenge',
  description: 'Challenge to a match of rock paper scissors',
  options: [
    {
      type: 3,
      name: 'object',
      description: 'Pick your object',
      required: true,
      choices: createCommandChoices(),
    },
  ],
  type: 1,
};





const ALL_COMMANDS = [TEST_COMMAND, CHALLENGE_COMMAND, SHAI_COMMAND, DUMB_COMMAND, DUMB_QUOTES, DUMB_JOKES, RANDOM_CAT];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);