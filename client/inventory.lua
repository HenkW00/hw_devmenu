-- Open Inventory
RegisterNetEvent('hw_devmenumenu:client:openInventory', function(data, selectedData)
    if not CheckPerms(data.perms) then return end
    local player = selectedData["Player"].value

    if Config.Inventory == 'ox_inventory' then
        TriggerServerEvent("hw_devmenumenu:server:OpenInv", player )
    else
        TriggerServerEvent("inventory:server:OpenInventory", "otherplayer", player )
    end
end)

-- Open Stash
RegisterNetEvent('hw_devmenumenu:client:openStash', function(data, selectedData)
    if not CheckPerms(data.perms) then return end
    local stash = selectedData["Stash"].value

    if Config.Inventory == 'ox_inventory' then
        TriggerServerEvent("hw_devmenumenu:server:OpenStash", stash)
    else
        TriggerServerEvent("inventory:server:OpenInventory", "stash", tostring(stash))
        TriggerEvent("inventory:client:SetCurrentStash", tostring(stash))
    end
end)
