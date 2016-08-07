import moment from 'moment';

const FORMAT_STRING = 'YYYY-MM-DD-HH';
export default class TimeFormatHelper {
  static formatTime(date) {
    return moment(date).utcOffset(0).format(FORMAT_STRING);
  }

  static parseTime(dateString) {
    return moment.utc(dateString, FORMAT_STRING);
  }
}
