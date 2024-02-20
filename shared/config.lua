-- The permissions are set to work with ESX
-- If you are gonna use the menu in qbcore is kinda pointless that u are using this version, just download the official one from Project Sloth Team

Config = Config or {}
Config.Framework = "ESX" -- "ESX", "QBCore"
Config.Fuel = "LegacyFuel" -- "ps-fuel", "LegacyFuel"
Config.ResourcePerms = 'admin' -- permission to control resource(start stop restart)
Config.ModLevel = "admin" -- Used for menu command and admin chat
Config.checkForUpdates = true -- Recommended to leave on "true"
Config.Debug = true -- For debugging purposes

Config.Actions = {
    ["ban_player"] = {
        label = "Ban Player",
        perms = "admin",
        dropdown = {
            { label = "Player", option = "dropdown", data = "players" },
            { label = "Reason", option = "text" },
            {
                label = "Duration",
                option = "dropdown",
                data = {
                    { label = "Permanent",  value = "2147483647" },
                    { label = "10 Minutes", value = "600" },
                    { label = "30 Minutes", value = "1800" },
                    { label = "1 Hour",     value = "3600" },
                    { label = "6 Hours",    value = "21600" },
                    { label = "12 Hours",   value = "43200" },
                    { label = "1 Day",      value = "86400" },
                    { label = "3 Days",     value = "259200" },
                    { label = "1 Week",     value = "604800" },
                    { label = "3 Week",     value = "1814400" },
                },
            },
            { label = "Confirm", option = "button", type = "server", event = "hw_devmenumenu:server:BanPlayer" },
        },
    },

    ["bring_player"] = {
        label = "Bring Player",
        perms = "admin",
        dropdown = {
            { label = "Player",  option = "dropdown", data = "players" },
            { label = "Confirm", option = "button",   type = "server", event = "hw_devmenumenu:server:BringPlayer" },
        },
    },

    ["change_plate"] = {
        label = "Change Plate",
        perms = "admin",
        dropdown = {
            { label = "Plate", option = "text" },
            { label = "Confirm", option = "button", type = "client", event = "hw_devmenumenu:client:ChangePlate" },
        },
    },

    ["clear_inventory"] = {
        label = "Clear Inventory",
        perms = "admin",
        dropdown = {
            { label = "Player",  option = "dropdown", data = "players" },
            { label = "Confirm", option = "button",   type = "server", event = "hw_devmenumenu:server:ClearInventory" },
        },
    },

    ["copy_coords"] = {
        label = "Copy Coords",
        perms = "admin",
        dropdown = {
            { label = "Copy Vector2", option = "button", type = "command", event = "vector2" },
            { label = "Copy Vector3", option = "button", type = "command", event = "vector3" },
            { label = "Copy Vector4", option = "button", type = "command", event = "vector4" },
            { label = "Copy Heading", option = "button", type = "command", event = "heading" },
        },
    },

    ["delete_vehicle"] = {
        label = "Delete Vehicle",
        type = "command",
        event = "dv",
        perms = "admin",
    },

    ["freeze_player"] = {
        label = "Freeze Player",
        perms = "admin",
        dropdown = {
            { label = "Player",  option = "dropdown", data = "players" },
            { label = "Confirm", option = "button",   type = "server", event = "hw_devmenumenu:server:FreezePlayer" },
        },
    },

    -- ["nui_focus"] = {
    --     label = "Give NUI Focus",
    --     perms = "admin",
    --     dropdown = {
    --         { label = "Player",  option = "dropdown", data = "players" },
    --         { label = "Confirm", option = "button",   type = "client", event = "" },
    --     },
    -- },

    ["god_mode"] = {
        label = "God Mode",
        type = "client",
        event = "hw_devmenumenu:client:ToggleGodmode",
        perms = "admin",
    },

    ["invisible"] = {
        label = "Invisible",
        type = "client",
        event = "hw_devmenumenu:client:ToggleInvisible",
        perms = "admin",
    },

    ["set_perms"] = {
        label = "Set Perms",
        perms = "admin",
        dropdown = {
            { label = "Player",  option = "dropdown", data = "players" },
            {
                label = "Permissions",
                option = "dropdown",
                data = {
                    { label = "Mod",   value = "admin" },
                    { label = "Admin", value = "admin" },
                    { label = "God",   value = "god" },
                },
            },
            { label = "Confirm", option = "button", type = "server", event = "hw_devmenumenu:server:SetPerms" },
        },
    },

    ["set_bucket"] = {
        label = "Set Routing Bucket",
        perms = "admin",
        dropdown = {
            { label = "Player",  option = "dropdown", data = "players" },
            { label = "Bucket", option = "text" },
            { label = "Confirm", option = "button", type = "server", event = "hw_devmenumenu:server:SetBucket" },
        },
    },

    ["mute_player"] = {
        label = "Mute Player",
        perms = "admin",
        dropdown = {
            { label = "Player",  option = "dropdown", data = "players" },
            { label = "Confirm", option = "button",   type = "client", event = "hw_devmenumenu:client:MutePlayer" },
        },
    },

    ["noclip"] = {
        label = "Noclip",
        type = "client",
        event = "hw_devmenumenu:client:ToggleNoClip",
        perms = "admin",
    },

    ["open_inventory"] = {
        label = "Open Inventory",
        perms = "admin",
        dropdown = {
            { label = "Player",  option = "dropdown", data = "players" },
            { label = "Confirm", option = "button",   type = "client", event = "hw_devmenumenu:client:openInventory" },
        },
    },

    ["revive_all"] = {
        label = "Revive All",
        type = "server",
        event = "hw_devmenumenu:server:ReviveAll",
        perms = "admin",
    },

    ["revive_player"] = {
        label = "Revive Player",
        perms = "admin",
        dropdown = {
            { label = "Player",  option = "dropdown", data = "players" },
            { label = "Confirm", option = "button",   type = "server", event = "hw_devmenumenu:server:Revive" },
        },
    },

    ["revive_radius"] = {
        label = "Revive Radius",
        type = "server",
        event = "hw_devmenumenu:server:ReviveRadius",
        perms = "admin",
    },

    ["refuel_vehicle"] = {
        label = "Refuel Vehicle",
        type = "client",
        event = "hw_devmenumenu:client:RefuelVehicle",
        perms = "admin",
    },

    ["give_money"] = {
        label = "Give Money",
        perms = "admin",
        dropdown = {
            { label = "Player", option = "dropdown", data = "players" },
            { label = "Amount", option = "text" },
            {
                label = "Type",
                option = "dropdown",
                data = {
                    { label = "Cash", value = "money" },
                    { label = "Bank", value = "bank" },
                    { label = "Crypto", value = "crypto" },
                },
            },
            { label = "Confirm", option = "button", type = "server", event = "hw_devmenumenu:server:GiveMoney" },
        },
    },

    ["give_money_all"] = {
        label = "Give Money to All",
        perms = "admin",
        dropdown = {
            { label = "Amount",  option = "text" },
            {
                label = "Type",
                option = "dropdown",
                data = {
                    { label = "Cash", value = "money" },
                    { label = "Bank", value = "bank" },
                    { label = "Crypto", value = "crypto" },
                },
            },
            { label = "Confirm", option = "button", type = "server", event = "hw_devmenumenu:server:GiveMoneyAll" },
        },
    },

    ["remove_money"] = {
        label = "Remove Money",
        perms = "admin",
        dropdown = {
            { label = "Player", option = "dropdown", data = "players" },
            { label = "Amount", option = "text" },
            {
                label = "Type",
                option = "dropdown",
                data = {
                    { label = "Cash", value = "money" },
                    { label = "Bank", value = "bank" },
                },
            },
            { label = "Confirm", option = "button", type = "server", event = "hw_devmenumenu:server:TakeMoney" },
        },
    },

    ["give_item"] = {
        label = "Give Item",
        perms = "admin",
        dropdown = {
            { label = "Player",  option = "dropdown", data = "players" },
            { label = "Item",    option = "dropdown", data = "items" },
            { label = "Amount",  option = "text" },
            { label = "Confirm", option = "button",   type = "server", event = "hw_devmenumenu:server:GiveItem" },
        },
    },

    ["give_item_all"] = {
        label = "Give Item to All",
        perms = "admin",
        dropdown = {
            { label = "Item",    option = "dropdown", data = "items" },
            { label = "Amount",  option = "text" },
            { label = "Confirm", option = "button",   type = "server", event = "hw_devmenumenu:server:GiveItemAll" },
        },
    },

    ["spawn_vehicle"] = {
        label = "Spawn Vehicle",
        perms = "admin",
        dropdown = {
            { label = "Vehicle",    option = "dropdown", data = "vehicles" },
            { label = "Confirm", option = "button",   type = "client",  event = "hw_devmenumenu:client:SpawnVehicle" },
        },
    },

    ["fix_vehicle"] = {
        label = "Fix Vehicle",
        type = "command",
        event = "fix",
        perms = "admin",
    },

    ["fix_vehicle_for"] = {
        label = "Fix Vehicle for player",
        perms = "admin",
        dropdown = {
            { label = "Player",  option = "dropdown", data = "players" },
            { label = "Confirm", option = "button",   type = "server", event = "hw_devmenumenu:server:FixVehFor" },
        },
    },

    ["spactate_player"] = {
        label = "Spectate Player",
        perms = "admin",
        dropdown = {
            { label = "Player",  option = "dropdown", data = "players" },
            { label = "Confirm", option = "button",   type = "server", event = "hw_devmenumenu:server:SpectateTarget" },
        },
    },

    ["telport_to_player"] = {
        label = "Teleport to Player",
        perms = "admin",
        dropdown = {
            { label = "Player",  option = "dropdown", data = "players" },
            { label = "Confirm", option = "button",   type = "server", event = "hw_devmenumenu:server:TeleportToPlayer" },
        },
    },

    ["telport_to_coords"] = {
        label = "Teleport to Coords",
        perms = "admin",
        dropdown = {
            { label = "Coords",  option = "text" },
            { label = "Confirm", option = "button", type = "client", event = "hw_devmenumenu:client:TeleportToCoords" },
        },
    },

    ["teleport_to_location"] = {
        label = "Teleport to Location",
        perms = "admin",
        dropdown = {
            { label = "Location",  option = "dropdown", data = "locations" },
            { label = "Confirm", option = "button", type = "client", event = "hw_devmenumenu:client:TeleportToLocation" },
        },
    },

    ["teleport_to_marker"] = {
        label = "Teleport to Marker",
        type = "command",
        event = "tpm",
        perms = "admin",
    },

    ["teleport_back"] = {
        label = "Teleport Back",
        type = "client",
        event = "hw_devmenumenu:client:TeleportBack",
        perms = "admin",
    },

    ["vehicle_dev"] = {
        label = "Vehicle Dev Menu",
        type = "client",
        event = "hw_devmenumenu:client:ToggleVehDevMenu",
        perms = "admin",
    },

    ["toggle_coords"] = {
        label = "Toggle Coords",
        type = "client",
        event = "hw_devmenumenu:client:ToggleCoords",
        perms = "admin",
    },

    ["max_mods"] = {
        label = "Max Vehicle Mods",
        type = "client",
        event = "hw_devmenumenu:client:maxmodVehicle",
        perms = "admin",
    },

    ["warn_player"] = {
        label = "Warn Player",
        perms = "admin",
        dropdown = {
            { label = "Player",  option = "dropdown", data = "players" },
            { label = "Reason",  option = "text" },
            { label = "Confirm", option = "button",   type = "server", event = "hw_devmenumenu:server:WarnPlayer" },
        },
    },

    ["infinite_ammo"] = {
        label = "Infinite Ammo",
        type = "client",
        event = "hw_devmenumenu:client:setInfiniteAmmo",
        perms = "admin",
    },

    ["kick_player"] = {
        label = "Kick Player",
        perms = "admin",
        dropdown = {
            { label = "Player", option = "dropdown", data = "players" },
            { label = "Reason", option = "text" },
            { label = "Confirm", option = "button", type = "server", event = "hw_devmenumenu:server:KickPlayer" },
        },
    },
}

AddEventHandler("onResourceStart", function()
    Wait(100)
	if GetResourceState('ox_inventory') == 'started' then
        Config.Inventory = 'ox_inventory'
    elseif GetResourceState('ps-inventory') == 'started' then
        Config.Inventory = 'ps-inventory'
    elseif GetResourceState('lj-inventory') == 'started' then
        Config.Inventory = 'lj-inventory'
    elseif GetResourceState('qb-inventory') == 'started' then
        Config.Inventory = 'qb-inventory'
	end
end)
