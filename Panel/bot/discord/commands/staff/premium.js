exports.run = async (client, message, args) => {
    if (!['137624084572798976', '293841631583535106'].includes(message.author.id)) return;
    if (args.lenght < 4) return;

    if (args[1].toLowerCase() === 'donated') {
        let amount = Number.parseInt(args[3])
        if (isNaN(amount)) return;
        let userid = args[2]

        userPrem.set(userid + '.donated', amount)
    }

    if (args[1].toLowerCase() === 'boosted') {
        let amount = Number.parseInt(args[3])
        if (isNaN(amount)) return;
        let userid = args[2]

        userPrem.set(userid + '.boosted', amount)
    }

    message.reply('done')
}