import 'dotenv/config';
import fetch from 'node-fetch';
import { verifyKey } from 'discord-interactions';

export function VerifyDiscordRequest(clientKey) {
  return function (req, res, buf, encoding) {
    const signature = req.get('X-Signature-Ed25519');
    const timestamp = req.get('X-Signature-Timestamp');

    const isValidRequest = verifyKey(buf, signature, timestamp, clientKey);
    if (!isValidRequest) {
      res.status(401).send('Bad request signature');
      throw new Error('Bad request signature');
    }
  };
}

export async function DiscordRequest(endpoint, options) {
  // append endpoint to root API URL
  const url = 'https://discord.com/api/v10/' + endpoint;
  // Stringify payloads
  if (options.body) options.body = JSON.stringify(options.body);
  // Use node-fetch to make requests
  const res = await fetch(url, {
    headers: {
      Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
      'Content-Type': 'application/json; charset=UTF-8',
      'User-Agent': 'DiscordBot (https://github.com/discord/discord-example-app, 1.0.0)',
    },
    ...options
  });
  // throw API errors
  if (!res.ok) {
    const data = await res.json();
    console.log(res.status);
    throw new Error(JSON.stringify(data));
  }
  // return original response
  return res;
}

export async function InstallGlobalCommands(appId, commands) {
  // API endpoint to overwrite global commands
  const endpoint = `applications/${appId}/commands`;

  try {
    // This is calling the bulk overwrite endpoint: https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-global-application-commands
    await DiscordRequest(endpoint, { method: 'PUT', body: commands });
  } catch (err) {
    console.error(err);
  }
}

// Simple method that returns a random emoji from list
export function getRandomEmoji() {
  const emojiList = ['😭','😄','😌','🤓','😎','😤','🤖','😶‍🌫️','🌏','📸','💿','👋','🌊','✨'];
  return emojiList[Math.floor(Math.random() * emojiList.length)];
}

export function getRandomString() {
  const stringList = ['If global warming is real, whats all this ice on my wrist?'
                    ,'I aint said nothing yet but u gonna hear this pistol talk🔫🔫🔫'
                    ,'You can call me the manager, cus im runnin shit'
                    ,'Call me an engyption pyramid the way im bricked up with no explanation 🥶'
                    ,'Go ahead and block me, I already *screenshotted* those feet pics'
                    ,'They must call me pubes, because im a level above you dickheads'
                    ,'Dont mess with me, im ready to unleash the BEAST INSIDE, AWOOOOOOOOOOOOO'
                    ,'Sometimes I facetime myself, just to hear what a real one gonna say💯'
                    ,'A real one always finds time to brush up on quantum field theory fr'
                    ,'They think I got testicular cancer cuz it abormal the way my sack growing 💰'
                    ,'I must be a water type pokemon the way I stay drippin'
                    ,'Fuck Godzilla vs. King Kong, I need a thotzilaa on my ding dong 😔'
                    ,'My dentist a real one, he said im grinding even in my sleep'
                    ,'If booty not supposed to be ate, how come its already cut in half? be fr'];
  return stringList[Math.floor(Math.random() * stringList.length)];
}

export function getRandomString2() {
  const stringList2 = ['working hard? or hardly working?'
                      ,'# bomboclat'
                      ,'no fuck you, all you do is order me around ive had ENOUGH'
                      ,'# RAASSSCLAAAAATTTTTTTTTT'
                      ,'get a dad'
                      ,'A monkey is sitting in a tree , smoking a blunt , when the lizard walks past the lizard looks up and says “hey , what are you doing? “ the monkey says “smoking a blunt “'];
  return stringList2[Math.floor(Math.random() * stringList2.length)];
}

export function getRandomString3() {
  const stringList3 = ['jumps up and down too'
                      ,'eating 3 bannanas at once'
                      ,'cant stop making monkey noises...'
                      ,'loves bannanas and wont admit it'];
  return stringList3[Math.floor(Math.random() * stringList3.length)];
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
