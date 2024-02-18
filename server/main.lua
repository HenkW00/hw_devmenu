local ESX
TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end) -- ESX Legacy and some older versions
if ESX == nil then TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end) end -- Fallback for very old versions

-- Command registration compatible with both versions
if ESX.RegisterCommand then
    -- Newer ESX version
    ESX.RegisterCommand('checkperf', 'admin', function(xPlayer, args, showError)
        checkPerformance(xPlayer.source)
    end, true, {help = 'Check server performance'})
else
    -- Fallback for older versions without ESX.RegisterCommand
    TriggerEvent('es:addCommand', 'checkperf', function(source, args, user)
        checkPerformance(source)
    end)
end

function checkPerformance(source)
    local xPlayer = ESX.GetPlayerFromId(source)
    if xPlayer.getGroup() ~= 'user' then -- Check for admin or higher; adjust accordingly
        local playerCount = #GetPlayers()
        local uptime = GetGameTimer() / 3600000 -- Convert milliseconds to hours
        TriggerClientEvent('hw_devmenu:showMenu', source, playerCount, uptime)
    else
        TriggerClientEvent('esx:showNotification', source, 'You do not have permission to use this command.')
    end
end
