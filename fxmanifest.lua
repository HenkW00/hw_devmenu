fx_version 'cerulean'
game 'gta5'

author 'HenkW' 
description 'ESX Admin Performance Checker' 
version '1.0.0' 


dependency 'es_extended'

server_scripts {
    '@es_extended/locale.lua', 
    'config.lua', 
    'server.lua' 
}

client_scripts {
    '@es_extended/locale.lua', 
    'config.lua',
    'client.lua' 
}

