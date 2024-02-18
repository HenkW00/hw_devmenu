RegisterNetEvent('esx_adminperf:showMenu')
AddEventHandler('esx_adminperf:showMenu', function(playerCount, uptime)
    local message = ('Server Performance:\nPlayers: %s\nUptime: %.2f hours'):format(playerCount, uptime)
    -- Display the message using whichever notification system your version of ESX uses
    ESX.ShowNotification(message)
end)
