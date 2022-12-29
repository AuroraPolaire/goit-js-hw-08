import Player from '@vimeo/player';
import _ from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function onPause(data) {
  const usersTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', JSON.stringify(usersTime));
}

player.on('pause', _.throttle(onPause, 1000));

try {
  const lastUsersTime = localStorage.getItem('videoplayer-current-time');
  const parsedLastUsersTime = JSON.parse(lastUsersTime);

  player
    .setCurrentTime(parsedLastUsersTime)
    .then(function (seconds) {})
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          break;
        default:
          break;
      }
    });
} catch (error) {
  console.log(parsedUsersTime);
}

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});