import moment from 'moment';

const FORMAT_STRING = 'YYYY-MM-DD-HH-mm';

export default class TimeFormatHelper {
  static formattedTimestampFromAt(at) {
    const mAt = moment.unix(Number(at) / 1000);

    const WHEN_STARTED_TO_CRAWL_RATE_5_MIN = this.parseTime('2016-08-09-16-30');

    let formattedTimestamp = '';
    if (WHEN_STARTED_TO_CRAWL_RATE_5_MIN.valueOf() < mAt.valueOf()) {
      mAt.minute( mAt.minute() - mAt.minute() % 5 );
      formattedTimestamp = mAt.utcOffset(0).format('YYYY/MM/DD/HH/mm');
    } else if (WHEN_STARTED_TO_CRAWL_RATE_5_MIN.valueOf() > mAt.valueOf()) {
      formattedTimestamp = mAt.utcOffset(0).format('YYYY/MM/DD/HH');
    }
    return formattedTimestamp;
  }

  static parseTime(dateString) {
    return moment.utc(dateString, FORMAT_STRING);
  }

  static closestSiteCrawledAt(dateString) {
    const date = this.parseTime(dateString).toDate();

    const WHEN_STARTED_TO_CRAWL_RATE_5_MIN = this.parseTime('2016-08-09-16-30');

    if (date >= WHEN_STARTED_TO_CRAWL_RATE_5_MIN) {
      const minute = date.getMinutes();
      date.setMinutes(minute - minute % 5);
    }

    return this.formatTime(dateString);
  }
}
