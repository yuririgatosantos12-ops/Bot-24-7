const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'voidrealmss.falixsrv.me',
    port: 25565,
    username: 'BotAFK_Render'
  })

  bot.on('login', () => {
    console.log('Bot entrou no servidor!')
  })

  bot.on('spawn', () => {
    console.log('Bot spawnou no mundo!')
  })

  bot.on('end', () => {
    console.log('Bot caiu. Reconectando em 10 segundos...')
    setTimeout(createBot, 10000)
  })

  bot.on('error', (err) => {
    console.log('Erro:', err)
  })
}

createBot()
