import {NextResponse} from 'next/server';
import {getAllClasses} from '@/lib/classes';

export async function GET() {
	// in the future grab this data from contentful or other headless cms with try/catch block
	return NextResponse.json(
		{
			message: 'OK',
			classes: getAllClasses(),
		},
		{status: 200},
	);
}
