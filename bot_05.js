const env = require('./.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

const gifTelegram = 'https://media.giphy.com/media/ya4eevXU490Iw/giphy.gif'

bot.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date - start
    const dataEHora = new Date().toLocaleString();
        console.log(`${dataEHora} \n Tempo de resposta: ${ms}ms`)
})

//Diferentes tipos de respostas
bot.start(async ctx => {
    //Resposta do tipo texto
    await ctx.reply(`Seja bem vindx, ${ctx.message.from.first_name}!`)

    //Resposta do com vídeo do youtube
    await ctx.reply(`Veja o vídeo https://www.youtube.com/watch?v=d_HlPboLRL8&list=RDd_HlPboLRL8&start_radio=1`)

    //Resposta com HTML
    await ctx.replyWithHTML(`Pode ser usado tags <strong>Para negrito</strong> ou para <em>Itálico</em>. <a href="http://sc.senai.br/">SENAI</a> <code>Código</code>`)

    //Resposta com Markdown
    await ctx.replyWithMarkdown('Dá para escrever em *Negrito*, em _itálico_, em `Código` ou ``` Bloco de código```. também é possível Link [SENAI](http://sc.senai.br/)')

    //Resposta com foto
    await ctx.replyWithPhoto('https://picsum.photos/200/300/?random',{caption: 'Foto Aleatória'})

    //Resposta com Localização
    await ctx.replyWithLocation(-27.1156927, -48.9123907)

    //Resposta com GIF animation
    await ctx.replyWithAnimation(gifTelegram)
})  
    

bot.launch()