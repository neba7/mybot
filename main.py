import time
from telegram import Bot
from telegram.ext import Updater, CommandHandler, MessageHandler, Filters

# Replace 'YOUR_BOT_TOKEN' with the token you got from BotFather
TOKEN = '6902572266:AAHwnqhf1vZjcZZq-XwaSNoyCnZ3lsXBoiI'

# Function to update the bio
def update_bio(bot: Bot):
    count = 0
    while True:
        try:
            count += 1
            bio = f"Time =>  {count} seconds"
            bot.set_bio(bio)
            time.sleep(1)  # Wait for 1 second
        except Exception as e:
            print(f"An error occurred: {e}")

# Command handler for the /start command
def start(update, context):
    update.message.reply_text("Bio update has started!")

def main():
    bot = Bot(token=TOKEN)
    updater = Updater(bot=bot, use_context=True)

    # Add command handlers
    updater.dispatcher.add_handler(CommandHandler("start", start))

    # Start updating the bio
    update_bio(bot)

    # Start the bot
    updater.start_polling()
    updater.idle()

if __name__ == '__main__':
    main()
