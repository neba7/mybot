// Import the necessary library
const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with your actual bot token
const token = '';

// Create a bot instance with polling enabled
const bot = new TelegramBot(token, { polling: true });

// Initialize a counter
let counter = 0;

// Function to update the user's bio
function updateBio(chatId) {
    const bio = `Time ${counter} minutes`;
    bot.setMyProfile({ bio }).then(() => {
        console.log(`Bio updated to: ${bio}`);
    }).catch((error) => {
        console.error('Error updating bio:', error);
    });
}

// Start listening for messages
bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    // Handle user commands (you can add more commands as needed)
    if (msg.text === '/start') {
        bot.sendMessage(chatId, 'Welcome to the bot! Bio will be updated every minute.');
        updateBio(chatId); // Initial bio update
    }
});

// Update the bio every minute
setInterval(() => {
    counter++;
    updateBio(); // Update bio for all users
}, 600000); // 60,000 milliseconds = 1 minute
