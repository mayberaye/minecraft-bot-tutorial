const mineflayer = require('mineflayer')

const options = {
    host: 'localhost', // Change this to the ip you want.
    port: 34643 , // Change this to the port you want.
    username: "Bot"
  }
  
  const bot = mineflayer.createBot(options)

  function lookAtNearestPlayer() {
    const playerFilter = (entity) => entity.type = 'player'
    const playerEntity = bot.nearestEntity(playerFilter)

    if (!playerEntity) return

    const pos = playerEntity.position.offset(0, playerEntity.height, 0)
    bot.lookAt(pos)

  }

  bot.on('physicTick', lookAtNearestPlayer)