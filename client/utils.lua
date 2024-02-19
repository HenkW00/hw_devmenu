--- @param bool boolean
function ToggleUI(bool)
	SetNuiFocus(bool, bool)
	SendNUIMessage({
		action = "setVisible",
		data = bool
	})
end

--- @param perms table
function CheckPerms(perms)
    return lib.callback.await('hw_devmenumenu:callback:CheckPerms', false, perms)
end

--- @param title string
--- @param message string
function Log(title, message)
    TriggerServerEvent("qb-log:server:CreateLog", "hw_devmenumenu", title, "red", message)
end