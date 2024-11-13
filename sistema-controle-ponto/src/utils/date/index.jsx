export function formatDate(dateString) {
	if (dateString === null || dateString === undefined) {
		return 'N/A';
	}
	const year = dateString.substring(0, 4);
	const month = dateString.substring(5, 7);
	const day = dateString.substring(8, 10);
	const time = dateString.substring(11, 16);
	const seconds = dateString.substring(17, 19);
	return `${day}.${month}.${year} - ${time}:${seconds}`;
}

export function unFormatDate(formattedDate) {
	if (!formattedDate) {
		return 'N/A';
	}

	const [datePart, timePart] = formattedDate.split(' - ');
	const [day, month, year] = datePart.split('.');
	const [hours, minutes, seconds] = timePart.split(':');

	return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
