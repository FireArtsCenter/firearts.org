import {artists} from './constants';

export function getAllArtists() {
	return artists ?? [];
}

export function getArtistById(id: string) {
	// in the future grab this data from contentful or other headless cms with try/catch block
	return artists.find((artist) => artist.id === id);
}
