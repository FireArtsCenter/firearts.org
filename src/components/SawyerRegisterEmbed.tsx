// TODO fix this mess
// https://meje.dev/blog/suspense-in-nextjs

// import Script from 'next/script';

// type TypeIFrameResizeProps = {
// 	tolerance: number;
// 	heightCalculationMethod: string;
// 	checkOrigin: boolean;
// 	enablePublicMethods: boolean;
// };

// declare global {
// 	interface Window {
// 		iFrameResize: ({
// 			tolerance,
// 			heightCalculationMethod,
// 			checkOrigin,
// 			enablePublicMethods,
// 		}: TypeIFrameResizeProps) => React.ReactNode;
// 	}
// }

// export function SawyerRegisterScripts() {
// 	if (typeof window === 'undefined') {
// 		// throw Error('Chat should only render on the client.');
// 		return;
// 	}
// 	return (
// 		<>
// 			<Script id='sawyer-register-embed' src='/vendors/sawyer-embed-script.js' />
// 			<Script id='sawyer-register-embed-resize'>
// 				{window.iFrameResize &&
// 					window.iFrameResize({
// 						tolerance: 10,
// 						heightCalculationMethod: 'bodyScroll',
// 						checkOrigin: false,
// 						enablePublicMethods: true,
// 					})}
// 			</Script>
// 		</>
// 	);
// }

export default function SawyerRegisterDiv() {
	return (
		<div id='scroll_wrapper' className='sawyer-scroll-wrapper mt-4'>
			<iframe
				id='sawyer_frame'
				className='sawyer_frame'
				src='https://www.hisawyer.com/fire-arts-center-chicago/schedules'
				width='100%'
				height='100%'
				style={{border: 'none'}}
			></iframe>
		</div>
	);
}
