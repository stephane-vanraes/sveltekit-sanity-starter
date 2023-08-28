export default (date: string): string =>
	date == null ? 'Unpublished' : new Date(date).toLocaleDateString('no');
