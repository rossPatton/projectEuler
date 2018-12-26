/*
  You've decided you want your computer to keep you updated on the time so you're never late again. A talking clock takes a 24-hour time and translates it into words. An hour (0-23) followed by a colon followed by the minute (0-59). The output should be the time in words, using 12-hour format, followed by am or pm.

  sample inputs:
  00:00
  01:30
  12:05
  14:01
  20:29
  21:00

  sample outputs:
  It's twelve am
  It's one thirty am
  It's twelve o' five pm
  It's two o' one pm
  It's eight twenty nine pm
  It's nine pm
*/

const {
  arr,
  digitMap,
  hoursMap,
  tensMap,
} = require('./constants');

const getMinutes = (minutes) => {
  const minutesArr = minutes.split('');
  const [ tensPlace, digitsPlace ] = minutesArr;
  const isLessThanTen = parseInt(tensPlace, 10) === 0;
  const digitMapped = digitMap[digitsPlace];
  const tensMapped = tensMap[tensPlace];

  if (isLessThanTen) {
    if (digitsPlace === '0') return '';
    return `o' ${digitMapped}`;
  }

  const isTens = !!tensMapped && !digitMapped;
  if (isTens) return tensMapped;

  const includeDigits = parseInt(digitsPlace, 10) > 0;
  return `${tensMapped} ${includeDigits ? digitMapped : ''}`;
}

const talkingClock = arr.forEach((time = '') => {
  const splitTime = time.split(':');
  const amOrPm = parseInt(splitTime[0], 10) < 12 ? 'AM' : 'PM';
  const hour = hoursMap[splitTime[0]];
  const output = `It's ${hour} ${getMinutes(splitTime[1])} ${amOrPm}`;
  console.log(output);
  return output;
});

module.exports = talkingClock;
