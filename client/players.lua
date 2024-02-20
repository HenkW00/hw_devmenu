local NetCheck1 = false
local NetCheck2 = false
local Blip = nil
local Tag = nil
local currentPlayers = {}

local function preparePlayers()
    currentPlayers = {}
    Wait(100)
    currentPlayers = lib.callback.await('hw_devmenumenu:callback:GetPlayers')
end

-- Mute Player
RegisterNetEvent("hw_devmenumenu:client:MutePlayer", function (data, selectedData)
    if not CheckPerms(data.perms) then return end
    local playerId = selectedData["Player"].value
    if not playerId then return end
    exports["pma-voice"]:toggleMutePlayer(playerId)

    if Config.Debug then
        print("Player got muted: " .. tostring(playerId))
    end

end)

