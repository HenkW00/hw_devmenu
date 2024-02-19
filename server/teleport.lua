-- Teleport To Player
RegisterNetEvent('hw_devmenumenu:server:TeleportToPlayer', function(data, selectedData)
    if not CheckPerms(data.perms) then return end

    local src = source
    local player = selectedData["Player"].value
    local targetPed = GetPlayerPed(player)
    local coords = GetEntityCoords(targetPed)

    CheckRoutingbucket(src, player)
    TriggerClientEvent('hw_devmenumenu:client:TeleportToPlayer', src, coords)
end)

-- Bring Player
RegisterNetEvent('hw_devmenumenu:server:BringPlayer', function(data, selectedData)
    if not CheckPerms(data.perms) then return end

    local src = source
    local targetPed = selectedData["Player"].value
    local admin = GetPlayerPed(src)
    local coords = GetEntityCoords(admin)
    local target = GetPlayerPed(targetPed)

    CheckRoutingbucket(targetPed, src)
    SetEntityCoords(target, coords)
end)