import { TelegramClient } from 'messaging-api-telegram'

// Description of how to get the bot to setup correctly - https://stackoverflow.com/questions/32423837/telegram-bot-how-to-get-a-group-chat-id
export const sendMessage = async (token: string, chatId: string, message: string) => {
    const client = TelegramClient.connect(token)
    await client.sendMessage(chatId, message)
}