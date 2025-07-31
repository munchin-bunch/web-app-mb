import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

// export const fromNow = (timestamp: number) => dayjs.unix(timestamp).fromNow()
// export const toNow = (timestamp: number) => dayjs.unix(timestamp).toNow()
// export const unixNow = () => dayjs().unix()
// export const toUnix = (date: string) => dayjs(date).unix()
// export const unixFormat = (date: number, format = 'MMMM YYYY') => dayjs.unix(date).format(format)
// export const nowUnixFormat = (format: any) => dayjs().unix()(format)
// export const dayFormat = (date: any, format =  'MMMM YYYY') => dayjs(date).format(format)
// export const today = (format =  'MMMM YYYY') => dayjs().format(format)
// export const addFromDay = (value = 7, unit: ManipulateType = 'd', format: string) => dayjs().add(value, unit).format(format)
// export const addDay = (day: string, value = 7, unit: ManipulateType = 'd', format = 'MM-DD-YYYY') => dayjs(day).add(value, unit).format(format)
// export const subDay = (day: string, value = 7, unit: ManipulateType = 'd', format = 'MM-DD-YYYY') => dayjs(day).subtract(value, unit).format(format)
// export const dayDiff = (day1: string, day2: string, unit: ManipulateType = 'd') => dayjs(day1).diff(day2, unit, true)