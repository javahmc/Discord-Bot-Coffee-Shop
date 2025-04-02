# Coffee-Shop Bot

A lightweight, just-for-fun Discord bot built with JavaScript and [Discord.js](https://discord.js.org/), originally created for my friend group’s server.

This bot responds to dynamic commands, auto-replies with jokes, and handles quirky inside-joke banter. Hosted on Glitch, it was my first end-to-end scripting project—and it sparked my deeper interest in automation, bots, and coding for real-world use.

## Features

- Simple command-based responses (`!joke`, `!game`, and more)
- Auto-replies to custom phrases
- Customizable command set
- Built-in funniness (your mileage may vary)

## Tech Stack

- **Language:** JavaScript (Node.js)
- **Library:** Discord.js
- **Hosting:** Glitch
- **Package Management:** npm

## How to Run Locally

1. Clone the repository.
2. Create a `.env` file in the root folder with this variable:

```env
DISCORD_TOKEN=your_bot_token_here

## Project structure
Below is a basic overview of the project structure:

```
├── examples    -> short, feature-specific sample apps
│   ├── app.js  -> finished app.js code
│   ├── button.js
│   ├── command.js
│   ├── modal.js
│   ├── selectMenu.js
├── .env.sample -> sample .env file
├── app.js      -> main entrypoint for app
├── commands.js -> slash command payloads + helpers
├── game.js     -> logic specific to RPS
├── utils.js    -> utility functions and enums
├── package.json
├── README.md
└── .gitignore
```

