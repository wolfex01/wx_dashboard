let ESX = null
let focus = false
emit('esx:getSharedObject', (obj) => (ESX = obj));

RegisterCommand('dash', () => {
    focus = !focus
    ESX.TriggerServerCallback('getInfos', (job,money,bank) => {
        SendNUIMessage({
            type: 'dashboard',
            name: GetPlayerName(PlayerId()),
            id: GetPlayerServerId(PlayerId()),
            job: job,
            money: money,
            bank: bank
            })
            SetNuiFocus(focus,focus)
    })
})
