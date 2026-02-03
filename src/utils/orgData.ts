import { org } from '../constants/constants';
export const getYearsSinceFounding = () => {
	const now = new Date();
	const founded = new Date(org.founded);
	return now.getFullYear() - founded.getFullYear();
};
