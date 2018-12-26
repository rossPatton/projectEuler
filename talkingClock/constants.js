const hoursMap = Object.freeze({
  '00': 'twelve',
  '01': 'one',
  '02': 'two',
  '03': 'three',
  '04': 'four',
  '05': 'five',
  '06': 'six',
  '07': 'seven',
  '08': 'eight',
  '09': 'nine',
  '10': 'ten',
  '11': 'eleven',
  '12': 'twelve',
  '13': 'one',
  '14': 'two',
  '15': 'three',
  '16': 'four',
  '17': 'five',
  '18': 'six',
  '19': 'seven',
  '20': 'eight',
  '21': 'nine',
  '22': 'ten',
  '24': 'eleven',
});

const digitMap = Object.freeze({
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine',
});

const tensMap = Object.freeze({
  '1': 'ten',
  '2': 'twenty',
  '3': 'thirty',
  '4': 'forty',
  '5': 'fifty',
});

const times = ['00:00', '01:30', '12:05', '14:01', '20:29', '21:00'];

module.exports = {
  digitMap,
  hoursMap,
  tensMap,
  times,
};
