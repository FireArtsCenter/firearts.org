import {NextResponse} from 'next/server';
import {getClassById} from '@/lib/classes';

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
