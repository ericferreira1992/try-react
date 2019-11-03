export default class Helper {

    static dateFormat(date, format = 'yyyy-MM-dd') {
        if (!date instanceof Date)
            date = this.strToDate(date);

        if (date) {
            let year = date.getFullYear().toString();
            let month = (date.getMonth() + 1).toString();
            let day = date.getDate().toString();

            let dateStr = format;
            dateStr = dateStr.replace('yyyy', year);
            dateStr = dateStr.replace('MM', (month.length < 2 ? '0' : '') + month);
            dateStr = dateStr.replace('dd', (day.length < 2 ? '0' : '') + day);
            return dateStr;
        }
        return '';
    }

    static strToDate(dateStr) {
        if (dateStr && !dateStr instanceof Date) {
            let separator = dateStr.includes('-') ? '-' : '\/';
            let splitted = dateStr.split(separator)
            let year = parseInt(splitted[0].length > 2 ? splitted[0] : splitted[2]);
            let month = parseInt(splitted[1]);
            let day = parseInt(splitted[0].length > 2 ? splitted[2] : splitted[0]);

            return new Date(year, month - 1, day, 0, 0, 0, 0)
        }
        return dateStr
    }
}