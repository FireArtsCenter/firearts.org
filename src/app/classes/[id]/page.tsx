import {getClassById} from '@/lib/classes';
import {type TypeClassPageProps} from '@/lib/classes/constants';
import ClassInfo from '@/app/components/ClassInfo';
import FigureStudyPrefix from '@/app/components/FigureStudyPrefix';

export default async function Page({params}: TypeClassPageProps) {
	const {id} = params;
	const classData = getClassById(id);
	if (!classData) return <p>There was a problem accessing this class info (class id requested: {params.id})</p>;
	return (
		<>
			{id === 'figure-study-sculpture' && <FigureStudyPrefix />}
			<ClassInfo {...classData} />
		</>
	);
}
