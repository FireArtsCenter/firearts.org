import {classes} from './constants';

export function getAllClasses() {
	return classes ?? [];
}

export function getClassById(id: string) {
	// in the future grab this data from contentful or other headless cms with try/catch block
	return classes.find((classData) => classData.id === id);
}
