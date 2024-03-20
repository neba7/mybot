const { Telegraf } = require('telegraf');
const { sleep } = require('sleep');

// Replace 'YOUR_BOT_TOKEN' with the token you got from BotFather
const TOKEN = '6902572266:AAHwnqhf1vZjcZZq-XwaSNoyCnZ3lsXBoiI';

client.login(process.env.TOKEN);

// Function to update the bio
async function updateBio(ctx) {
    let count = 0;
    while (true) {
        try {
            count++;
            const bio = `Time => ${count} seconds`;
            await ctx.telegram.setMyCommands(bio);
            await sleep.sleep(1); // Wait for 1 second
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }
}

// Command handler for the /start command
function start(ctx) {
    ctx.reply('Bio update has started!');
}

// Create a new instance of Telegraf bot
const bot = new Telegraf(TOKEN);

// Add command handlers
bot.command('start', start);

// Start updating the bio
bot.on('text', updateBio);

// Start the bot
bot.launch().then(() => console.log('Bot started'));
package.json