lib.addCommand('devmenu', {
    help = 'Open the admin dev menu',
    restricted = 'qbcore.mod'
}, function(source)
    TriggerClientEvent('hw_devmenumenu:client:OpenUI', source)
end)

if Config.Framework == "ESX" then
    ESX.RegisterCommand({'devmenu'}, Config.ModLevel, function(xPlayer, args, showError)
        TriggerClientEvent('hw_devmenumenu:client:OpenUI', xPlayer.source)
    end, false, {help = 'Open the admin dev menu'})
end
-- Callbacks
