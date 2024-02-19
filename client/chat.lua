-- Staff Chat
RegisterNUICallback("GetMessages", function(data, cb)
	local data = lib.callback.await('hw_devmenumenu:callback:GetMessages', false)
	SendNUIMessage({
		action = "setMessages",
		data = data
	})
end)

RegisterNUICallback("SendMessage", function(data, cb)
	local message = data.message
	-- print(message, PlayerData.citizenid, PlayerData.charinfo.firstname .. " " .. PlayerData.charinfo.lastname )
 
	TriggerServerEvent("hw_devmenumenu:server:sendMessageServer", message, PlayerData.citizenid, PlayerData.charinfo.firstname .. " " .. PlayerData.charinfo.lastname)

	local data = lib.callback.await('hw_devmenumenu:callback:GetMessages', false)
	SendNUIMessage({
		action = "setMessages",
		data = data
	})
end)