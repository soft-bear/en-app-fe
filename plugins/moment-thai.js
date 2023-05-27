import moment from 'moment'
import 'moment/locale/th'

export default ({ app }, inject) => {
  moment.locale('th')

  inject('convertToThaiDate', (date) => {
    const thaiTime = moment(date)
    const buddhistYear = thaiTime.year() + 543
    const formattedThaiDate = thaiTime.format('DD MMM ') + buddhistYear

    return formattedThaiDate
  })

  inject('convertToThaiTime', (utcTime) => {
    const thaiTime = moment.utc(utcTime).utcOffset(7)
    const buddhistYear = thaiTime.year() + 543
    const formattedThaiTime = thaiTime.format('DD MMM ') + buddhistYear

    return formattedThaiTime
  })
}
