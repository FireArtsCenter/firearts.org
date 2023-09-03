import {NextResponse} from 'next/server';
import {classes} from '../constants';

function getClassById(id: string) {
	// in the future grab this data from contentful or other headless cms with try/catch block
	return classes.find((classData) => classData.id === id);
}

export async function GET(request: Request, context: {params: {id: string}}) {
	const {id} = context.params;
	try {
		const foundClass = getClassById(id);
		if (!foundClass) {
			return NextResponse.json(
				{
					message: 'Error: Class not found',
				},
				{status: 404},
			);
		}
		return NextResponse.json(
			{
				message: 'OK',
				class: foundClass,
			},
			{status: 200},
		);
	} catch (error) {
		return NextResponse.json(
			{
				message: 'Error',
			},
			{status: 500},
		);
	}
}
