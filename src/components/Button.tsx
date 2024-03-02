import "./Button.css";

interface Props {
	label: string;
	onClick?: () => void;
	index?: number;
	isSquare?: boolean;
	aditionalClass?: string;
}

const Button = ({ label, isSquare, aditionalClass, onClick }: Props) => {
	return (
		<button
			onClick={onClick}
			className={
				"btn " +
				(aditionalClass ? aditionalClass : "") +
				(isSquare ? " btn-square" : "")
			}
		>
			{label}
		</button>
	);
};

export default Button;
