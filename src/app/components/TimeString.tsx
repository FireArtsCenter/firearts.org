import {type TypeScheduleIds} from '../classes/constants';

const scheduler = {
	days: {
		mo: 'Monday',
		tu: 'Tuesday',
		we: 'Wednesday',
		th: 'Thursday',
		fr: 'Friday',
		sa: 'Saturday',
		su: 'Sunday',
	},
};

// not sure why this is the way it is
export default function TimeString({weirdString}: {weirdString: TypeScheduleIds}) {
	const pieces = weirdString.split('-');
	const [dow, times] = pieces;
	const moreTimes = times.includes('+') ? times.split('+') : [times];

	const generateTimeString = (times: string[]) => {
		const availableTimes = {
			'10': '10:00 a.m.–1:00 p.m.',
			'12': '12:00 p.m.–3:00 p.m.',
			'15': '3:00 p.m.–6:00 p.m.',
			'19': '7:00 p.m.–10:00 p.m.',
			'20': '8:00 p.m.–10:00 p.m.',
			'1830': '6:30 p.m.–9:30 p.m.',
		};
		return times.reduce((acc, curr, index, array) => {
			let separator = '';
			if (index === array.length - 1) {
				separator = ' and ';
			} else if (acc !== '') {
				separator = ', ';
			}
			return `${acc}${separator}${availableTimes[curr]}`;
		}, '');
	};

	return <li className={`day-${dow}`}>{`${scheduler.days[dow]} at ${generateTimeString(moreTimes)}`}</li>;
}
