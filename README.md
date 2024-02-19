# HW Scripts - Admin Dev Menu (ESX/QBCORE)


# Features

- Admin Car
- Ban Player
- Bring Player
- Change Plate
- Checking number plates before `Change Plate`
- Check Permissions
- Clear Inventory
- Copy Coordinates
- Delete Vehicle
- Delete Laser
- Explode Player
- Fix Vehicle
- Freeze Player
- Give Item
- Give Item to All
- Give Money
- Give Money to All
- Give NUI Focus
- God Mode
- Invisible
- Infinite Ammo
- Kick Player
- Kill Player
- Message Player
- Mute Player
- Max Vehicle Mods
- No Clip
- Open Inventory
- Refuel Vehicle
- Remove Money
- Revive All
- Revive Player
- Revive Radius
- Server Announcement
- Set on Fire
- Set Permissions
- Sit in Vehicle
- Spawn Vehicle
- Spectate Player
- Teleport Back
- Teleport to Coordinates
- Teleport to Marker
- Teleport to player
- Toggle Blips
- Toggle Coords
- Toggle Cuffs
- Toggle Names
- Vehicle Dev Menu
- Warn player

# Depedency

1. [qb-core](https://github.com/qbcore-framework/qb-core) OR [es_extended](https://github.com/esx-framework/esx_core)
2. [ox_lib](https://github.com/overextended/ox_lib)

# Installation

1. Download the latest release.
2. Add the files to your server resources.
3. Ensure `hw_devmenu` in your server cfg. Make sure ox_lib starts before hw_devmenu.
4. Set the config in `shared/config.lua` to your needs.


## Permissions

Make sure you've correctly configured player permissions in your server.cfg by using ACE permissions with the appropriate identifier. Otherwise, you'll be unable to access or launch the admin menu. Here's a sample configuration where the player, MonkeyWhisper, is assigned god, admin, and mod roles, you should not have all 3 permissions for a single person. For a deeper understanding of how QBCore manages permissions, refer to [this documentation.](https://docs.qbcore.org/qbcore-documentation/guides/setting-permissions)


## Setting Up Logs

1. Set up a Discord Webhook for the channel you want the logs to be.
2. Add this to `qb-smallresource/server/logs.lua` -
   `['hw_devmenu'] = 'discord webhook'`
3. Replace the place holder with your webhook link.


