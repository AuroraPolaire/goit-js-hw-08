import Player from '@vimeo/player';
import _ from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function onPause(data) {
  const usersTime = data.seconds;
  localStorage.setItem('feedback-form-state', JSON.stringify(usersTime));
}

player.on('pause', _.throttle(onPause, 1000));

try {
  const lastUsersTime = localStorage.getItem('feedback-form-state');
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
