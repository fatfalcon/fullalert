import {sendMessage} from '../src/telegram'

const token = ''
const chatId = ''
const message = 'test message'

setTimeout(async () =>  await sendMessage(token, chatId, message))