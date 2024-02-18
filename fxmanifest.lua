fx_version 'cerulean'
game 'gta5'

author 'HenkW' 
description 'ESX Admin Performance Checker' 
version '1.0.1' 


dependency 'es_extended'

server_scripts {
    'server/@es_extended/locale.lua', 
    'server/config.lua', 
    'server/server.lua' ,
    'server/version.lua'
}

client_scripts {
    'client/@es_extended/locale.lua', 
    'client/config.lua',
    'client/client.lua' 
}

