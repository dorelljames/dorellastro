import { formatDistanceToNow } from 'date-fns/formatDistanceToNow'
import { isAfter } from 'date-fns/isAfter'

export const toNow = (date: string | Date) => {
	let result
	try {
		result = formatDistanceToNow(new Date(date), {
			addSuffix: true
		})
	} catch (err) {
		console.log('[ERR] Unable to format input', date, err)
	}

	return result
}

export const isAfterToday = (date: string | Date) => {
	let result = false
	try {
		result = isAfter(new Date(date), new Date())
	} catch (err) {
		console.log('[ERR] Unable to format input', date, err)
	}

	return result
}
