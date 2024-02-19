-- Set on fire
RegisterNetEvent('hw_devmenumenu:client:SetOnFire', function(time)
    if not time then time = 10 end
    local timer = time * 1000
    StartEntityFire(cache.serverId)
    Wait(timer)
    StopEntityFire(cache.serverId)
end)

-- Explode player
RegisterNetEvent('hw_devmenumenu:client:ExplodePlayer', function(damage)
    local coords = GetEntityCoords(cache.serverId)
    if damage == nil then damage = "nodamage" end
    if damage == "nodamage" then
        AddExplosion(coords.x, coords.y, coords.z, 'EXPLOSION_TANKER', 2.0, true, false, 2.0)
    else
        AddExplosion(coords.x, coords.y, coords.z, 2, 0.9, 1, 0, 1065353216, 0)
    end
end)
