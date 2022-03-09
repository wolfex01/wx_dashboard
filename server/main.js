let ESX = null
emit('esx:getSharedObject', (obj) => (ESX = obj));


ESX.RegisterServerCallback('getInfos',(source,cb) => {
    const xPlayer = ESX.GetPlayerFromId(source)
    const money = xPlayer.getMoney()
    const job = xPlayer.getJob().name
    const bank = xPlayer.getAccount('bank').money
    cb(job, money, bank)
})