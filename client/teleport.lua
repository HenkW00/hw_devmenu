local lastCoords

local function teleport(x, y, z)
    if cache.vehicle then
        return SetPedCoordsKeepVehicle(cache.ped, x, y, z)
    end

    SetEntityCoords(cache.ped, x, y, z, false, false, false, false)
end

-- Teleport to player
RegisterNetEvent('hw_devmenumenu:client:TeleportToPlayer', function(coords)

    lastCoords = GetEntityCoords(cache.ped)
    SetPedCoordsKeepVehicle(cache.ped, coords.x, coords.y, coords.z)

    if Config.Debug then
        print("Teleported to: " .. tostring(lastCoords))
    end

end)

-- Teleport to coords
RegisterNetEvent('hw_devmenumenu:client:TeleportToCoords', function(data, selectedData)
    if not CheckPerms(data.perms) then return end

    local coords = selectedData["Coords"].value

    local x, y, z = string.match(coords, "(%S+)%s+(%S+)%s+(%S+)")

    lastCoords = GetEntityCoords(cache.ped)
    SetPedCoordsKeepVehicle(cache.ped, x, y, z)
end)


-- Teleport to Locaton
RegisterNetEvent('hw_devmenumenu:client:TeleportToLocation', function(data, selectedData)
    if not CheckPerms(data.perms) then return end
    local coords = selectedData["Location"].value

    lastCoords = GetEntityCoords(cache.ped)
    SetPedCoordsKeepVehicle(cache.ped, coords.x, coords.y, coords.z)
end)

-- Teleport back
RegisterNetEvent('hw_devmenumenu:client:TeleportBack', function(data)
    if not CheckPerms(data.perms) then return end

    if lastCoords then
        local coords = GetEntityCoords(cache.ped)
        teleport(lastCoords.x, lastCoords.y, lastCoords.z)
        lastCoords = coords
    end
end)
