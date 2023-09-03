'use client'
import Script from 'next/script';

type TypeIFrameResizeProps = {
	tolerance: number;
	heightCalculationMethod: string;
	checkOrigin: boolean;
	enablePublicMethods: boolean;
};

declare global {
	interface Window {
		iFrameResize: ({
			tolerance,
			heightCalculationMethod,
			checkOrigin,
			enablePublicMethods,
		}: TypeIFrameResizeProps) => React.ReactNode;
	}
}

export default function SawyerRegisterEmbed() {
	return (
		<>
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
			<Script id='sawyer-register-embed' src='/vendors/sawyer-embed-script.js' />

			<Script id='sawyer-register-embed-resize'>
				{window.iFrameResize &&
					window.iFrameResize({
						tolerance: 10,
						heightCalculationMethod: 'bodyScroll',
						checkOrigin: false,
						enablePublicMethods: true,
					})}
			</Script>
		</>
	);
}
