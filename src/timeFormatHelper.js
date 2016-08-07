import moment from 'moment';

export default class TimeFormatHelper {
  static formatTime(date) {
    return moment(date).utcOffset(0).format('YYYY-MM-DD-HH');
  }
}
