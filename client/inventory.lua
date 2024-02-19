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

