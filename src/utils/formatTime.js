export const formatTime = (arg) => { 
  if(arg == undefined ||isNaN(arg) || typeof(arg) == 'function' || arg < 0) {
    return null;
  }
  else {
    let input = arg;

    let seconds = Math.floor(input%60).toString();
    let minutes = Math.floor((input/60)%60).toString();
    let hours = Math.floor(input/3600).toString();

    
    return hours.padStart(2, '0') + ':' + minutes.padStart(2, '0') + ':' + seconds.padStart(2, '0');
  }
};
