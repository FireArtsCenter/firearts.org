import { type TypeScheduleIds } from '@/lib/classes/constants';

const scheduler: { days: Record<string, string> } = {
	days: {
		mo: 'Monday',
		tu: 'Tuesday',
		we: 'Wednesday',
		th: 'Thursday',
		fr: 'Friday',
		sa: 'Saturday',
	},
};

// not sure why this is the way it is
export default function TimeString({
	weirdString,
}: {
	weirdString: TypeScheduleIds;
}) {
	if (weirdString === 'call') {
		return 'Call for availablilty';
	}
	const pieces = weirdString.split('-');
	const [dow, times] = pieces;
	const moreTimes = times.includes('+') ? times.split('+') : [times];

	const generateTimeString = (times: string[]) => {
		const availableTimes: Record<string, string> = {
			'12': '12:00 p.m.–3:00 p.m.',
			'15': '3:00 p.m.–6:00 p.m.',
			'19': '7:00 p.m.–10:00 p.m.',
			'20': '8:00 p.m.–10:00 p.m.',
			'930': '9:30 a.m.–12:30 p.m.',
		};
		return times.length === 1
			? availableTimes[times[0]]
			: times.reduce((acc, curr, index, array) => {
					let separator = '';
					if (index === array.length - 1) {
						separator = ' and ';
					} else if (acc !== '') {
						separator = ', ';
					}
					return `${acc}${separator}${availableTimes[curr]}`;
				}, '');
	};

	return (
		<li
			className={`day-${dow}`}
		>{`${scheduler.days[dow]} at ${generateTimeString(moreTimes)}`}</li>
	);
}
