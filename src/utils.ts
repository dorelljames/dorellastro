import { formatDistanceToNow } from 'date-fns/formatDistanceToNow'

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
