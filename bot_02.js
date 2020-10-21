const env = require('./.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date - start
    const dataEHora = new Date().toLocaleString();
        console.log(`${dataEHora} \n Tempo de resposta: ${ms}ms`)
})

//Evento de escuta do comando /start
bot.start(async ctx => {
    const from = ctx.message.from
    from.id = undefined
    console.log(from)
    if(from.username === 'GustGodoi'){
        await ctx.reply(`Olá ${from.username}, o seu nome é: ${from.first_name} ${from.last_name}! \n Em que posso ajudá-lo`)
    }else{
        await ctx.reply(`Não estou autorizado a conversar com estranhos`)
    }
    
})

//Evento de recepção de texto
bot.on('text', ctx => ctx.reply('Alo Ha Mundo SENAI 2020'))

bot.launch()