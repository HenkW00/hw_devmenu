-- Ban Player
RegisterNetEvent('hw_devmenumenu:server:BanPlayer', function(data, selectedData)
    if not CheckPerms(data.perms) then return end
    if Config.Framework == "ESX" then return end -- ESX doesn't have a ban function (?)
    local player = selectedData["Player"].value
    local reason = selectedData["Reason"].value or ""
    local time = selectedData["Duration"].value

    local banTime = tonumber(os.time() + time)
    local timeTable = os.date('*t', banTime)

    MySQL.insert('INSERT INTO bans (name, license, discord, ip, reason, expire, bannedby) VALUES (?, ?, ?, ?, ?, ?, ?)', { GetPlayerName(player), QBCore.Functions.GetIdentifier(player, 'license'), QBCore.Functions.GetIdentifier(player, 'discord'), QBCore.Functions.GetIdentifier(player, 'ip'), reason, banTime, GetPlayerName(source)})

    if time == 2147483647 then
        DropPlayer(player, locale("banned") .. '\n' .. locale("reason") .. reason .. locale("ban_perm"))
    else
        DropPlayer(player, locale("banned") .. '\n' .. locale("reason") .. reason .. '\n' .. locale("ban_expires") .. timeTable['day'] .. '/' .. timeTable['month'] .. '/' .. timeTable['year'] .. ' ' .. timeTable['hour'] .. ':' .. timeTable['min'])
    end

    showNotification(source, locale("playerbanned", player, banTime, reason), 'success', 7500)
end)

-- Warn Player
RegisterNetEvent('hw_devmenumenu:server:WarnPlayer', function(data, selectedData)
    if not CheckPerms(data.perms) then return end
    if Config.Framework == "ESX" then return end -- player_warns doesn't exist in ESX
    local targetId = selectedData["Player"].value
    local target = QBCore.Functions.GetPlayer(targetId)
    local reason = selectedData["Reason"].value
    local sender = QBCore.Functions.GetPlayer(source)
    local warnId = 'WARN-' .. math.random(1111, 9999)
    if target ~= nil then
        showNotification(target.PlayerData.source, locale("warned") .. ", for: " .. locale("reason") .. ": " .. reason, 'inform', 10000)
        showNotification(source, locale("warngiven") .. GetPlayerName(target.PlayerData.source) .. ", for: " .. reason)
        MySQL.insert('INSERT INTO player_warns (senderIdentifier, targetIdentifier, reason, warnId) VALUES (?, ?, ?, ?)', {
            sender.PlayerData.license,
            target.PlayerData.license,
            reason,
            warnId
        })
    else
        showNotification(source, locale("not_online"), 'error')
    end
end)

RegisterNetEvent('hw_devmenumenu:server:KickPlayer', function(data, selectedData)
    if not CheckPerms(data.perms) then return end
    local src = srouce
    local target = getPlayerFromId(selectedData["Player"].value)
    local reason = selectedData["Reason"].value
        
    if not target then
        showNotification(src, locale("not_online"), 'error', 7500)
        return
    end
        
    DropPlayer(tonumber(selectedData["Player"].value), locale("kicked") .. '\n' .. locale("reason") .. reason)
end)

-- Revive Player
RegisterNetEvent('hw_devmenumenu:server:Revive', function(data, selectedData)
    if not CheckPerms(data.perms) then return end
    local player = selectedData["Player"].value

    TriggerClientEvent('hospital:client:Revive', player)
end)

-- Revive All
RegisterNetEvent('hw_devmenumenu:server:ReviveAll', function(data)
    if not CheckPerms(data.perms) then return end

    TriggerClientEvent('hospital:client:Revive', -1)
end)

-- Revive Radius
RegisterNetEvent('hw_devmenumenu:server:ReviveRadius', function(data)
    if not CheckPerms(data.perms) then return end

    local src = source
    local ped = GetPlayerPed(src)
    local pos = GetEntityCoords(ped)
    local players = getAllPlayers()

    for k, v in pairs(players) do
        local target = false
        if Config.Framework == "QBCore" then
            target = GetPlayerPed(v.PlayerData.source)
        end
        if Config.Framework == "ESX" then
            target = GetPlayerPed(v.source)
        end
        local targetPos = GetEntityCoords(target)
        local dist = #(pos - targetPos)

        if dist < 15.0 then
            if Config.Framework == "QBCore" then
                TriggerClientEvent("hospital:client:Revive", v.PlayerData.source)
            end
            if Config.Framework == "ESX" then
                TriggerEvent('esx_ambulancejob:revive', v.source)
            end
        end
    end
end)

-- Set RoutingBucket
RegisterNetEvent('hw_devmenumenu:server:SetBucket', function(data, selectedData)
    if not CheckPerms(data.perms) then return end

    local src = source
    local player = selectedData["Player"].value
    local bucket = selectedData["Bucket"].value
    local currentBucket = GetPlayerRoutingBucket(player)

    if bucket == currentBucket then
        return showNotification(src, locale("target_same_bucket",  player), 'error', 7500)
    end

    SetPlayerRoutingBucket(player, bucket)
    showNotification(src, locale("bucket_set_for_target", player, bucket), 'success', 7500)
end)

-- Give Money
RegisterNetEvent('hw_devmenumenu:server:GiveMoney', function(data, selectedData)
    if not CheckPerms(data.perms) then return end
    if not selectedData["Player"] or not selectedData["Amount"] or not selectedData["Type"] then
        return
    end
    local src = source
    local target, amount, moneyType = selectedData["Player"].value, selectedData["Amount"].value, selectedData["Type"].value
    if not tonumber(amount) or not moneyType then return end
    local res = addMoney(tonumber(target), moneyType, amount)
    if res then
        local fullName = getName(tonumber(target))
        showNotification(src, locale((moneyType == "crypto" and "give_money_crypto" or "give_money"), tonumber(amount), fullName), "success")
    else
        showNotification(src, locale("not_online"), 'error', 7500)
    end
end)

-- Give Money to all
RegisterNetEvent('hw_devmenumenu:server:GiveMoneyAll', function(data, selectedData)
    if not CheckPerms(data.perms) then return end
    if not selectedData["Amount"] or not selectedData["Type"] then
        return
    end
    local src = source
    local amount, moneyType = selectedData["Amount"].value, selectedData["Type"].value
    if not amount or not moneyType then return end
    local players = getAllPlayers()
    for _, Player in pairs(players) do
        if Config.Framework == "QBCore" then
            addMoney(Player.PlayerData.source, tostring(moneyType), tonumber(amount))
        end
        if Config.Framework == "ESX" then
            addMoney(Player.source, tostring(moneyType), tonumber(amount))
        end
    end
    showNotification(src, locale((moneyType == "crypto" and "give_money_all_crypto" or "give_money_all"), tonumber(amount), ""), "success")
end)

-- Take Money
RegisterNetEvent('hw_devmenumenu:server:TakeMoney', function(data, selectedData)
    if not CheckPerms(data.perms) then return end
    if not selectedData["Player"] or not selectedData["Amount"] or not selectedData["Type"] then
        return
    end
    local src = source
    local target, amount, moneyType = selectedData["Player"].value, selectedData["Amount"].value, selectedData["Type"].value
    local Player = getPlayerFromId(tonumber(target))
    
    if Player == nil then
        return showNotification(src, locale("not_online"), 'error', 7500)
    end
    if not tonumber(amount) or not moneyType then return end
    if getMoney(tonumber(target), moneyType) >= tonumber(amount) then
        removeMoney(tonumber(target), moneyType, amount, "state-fees")
    else
        showNotification(src, locale("not_enough_money"), "primary")
    end
    local fullName = getName(tonumber(target))
    showNotification(src, locale((moneyType == "crypto" and "take_money_crypto" or "take_money"), tonumber(amount) .. "$", fullName), "success")
end)


-- Toggle Cuffs
RegisterNetEvent('hw_devmenumenu:server:CuffPlayer', function(data, selectedData)
    if not CheckPerms(data.perms) then return end

    local target = selectedData["Player"].value

    TriggerClientEvent('hw_devmenumenu:client:ToggleCuffs', target)
    showNotification(source, locale("toggled_cuffs"), 'success')
end)

-- Give Clothing Menu
RegisterNetEvent('hw_devmenumenu:server:ClothingMenu', function(data, selectedData)
    if not CheckPerms(data.perms) then return end

    local src = source
    local target = tonumber(selectedData["Player"].value)

    if target == nil then
        return showNotification(src, locale("not_online"), 'error', 7500)
    end

    if target == src then
        TriggerClientEvent("hw_devmenumenu:client:CloseUI", src)
    end

    TriggerClientEvent('qb-clothing:client:openMenu', target)
end)
