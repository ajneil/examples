var randomNumber = function(settingsOption){
  return Math.floor(Math.random() * settings[settingsOption] || 510);
};