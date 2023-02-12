import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import { save, load } from './storage';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const TIME_DATA_PLAYER = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(function (data) {
    const timeSave = data.seconds;
    console.log(timeSave);
    save(TIME_DATA_PLAYER, data.seconds);
  }, 1000)
);

const timeLoad = +load(TIME_DATA_PLAYER);
player.setCurrentTime(timeLoad).catch(function (error) {
  switch (error.name) {
    case 'RangeError':
      alert('the time was less than 0 or greater than the video’s duration');
      break;

    default:
      alert('some other error occurred');
      break;
  }
});
