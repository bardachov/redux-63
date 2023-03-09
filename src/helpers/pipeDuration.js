const pipeDuration = (durationMinutes) => {
	let hours = '' + Math.trunc(durationMinutes / 60);
	let minutes = '' + (durationMinutes % 60);

	hours.padStart(2, 0);
	minutes.padStart(2, 0);

	return `${hours} : ${minutes}`;
};

export default pipeDuration;
