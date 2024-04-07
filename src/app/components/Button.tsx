import Link, {type LinkProps} from 'next/link';

type BaseProps = {
	children: React.ReactNode;
	className?: string;
	styleType: 'primary' | 'secondary' | 'tertiary';
};

type ButtonAsButton = BaseProps &
	Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
		as?: 'button';
	};

type ButtonAsUnstyled = Omit<ButtonAsButton, 'as' | 'styleType'> & {
	as: 'unstyled';
	styleType?: BaseProps['styleType'];
};

type ButtonAsLink = BaseProps &
	Omit<LinkProps, keyof BaseProps> & {
		as: 'link';
	};

type ButtonAsExternal = BaseProps &
	Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
		as: 'externalLink';
	};

type ButtonProps = ButtonAsButton | ButtonAsExternal | ButtonAsLink | ButtonAsUnstyled;

export default function Button(props: ButtonProps): JSX.Element {
	let styleTypeClassNames = '';
	switch (props.styleType) {
		case 'primary':
			styleTypeClassNames = 'bg-fac-red text-white hover:text-white focus:text-white hover:brightness-150';
			break;
		case 'secondary':
		case 'tertiary':
			styleTypeClassNames = 'bg-grey-darkest text-white hover:text-white focus:text-white hover:brightness-150';

		default:
	}
	const defaultButtonStyles = `border-b-0 font-semibold inline-block px-8 py-3 no-underline hover:border-b-0 focus:border-b-0 ${styleTypeClassNames}`;

	const allClassNames = `${props.styleType ? props.styleType : ''} ${
		props.className ? props.className : ''
	} ${defaultButtonStyles}`;

	if (props.as === 'link') {
		// don't pass unnecessary props to component
		const {className, styleType, as, ...rest} = props;
		return <Link className={allClassNames} {...rest} />;
	} else if (props.as === 'externalLink') {
		const {className, styleType, as, ...rest} = props;
		return (
			<a
				className={allClassNames}
				// provide good + secure defaults while still allowing them to be overwritten
				target='_blank'
				rel='noopener noreferrer'
				{...rest}
			>
				{props.children}
			</a>
		);
	} else if (props.as === 'unstyled') {
		const {className, styleType, as, ...rest} = props;
		return <button className={className} {...rest} />;
	} else {
		const {className, styleType, as, ...rest} = props;
		return <button className={allClassNames} {...rest} />;
	}
}
