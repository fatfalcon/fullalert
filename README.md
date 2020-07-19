# full-alert

- Sends telegram message to a channel
- To setup, create a bot with BotFather - type /newbot in BotFather
- Then, create a channel and add the bot as an admin
- Send a message on the channel - like "hello" for example
- Navigate to https://api.telegram.org/bot<bot http token>/getUpdates
- Note the chat id
- Update the scripts/send_message_test.ts with the values you have
- Run `npm run test-send-message` to see if connectivity exists and you are getting the alerts
- Store your token secretly somewhere