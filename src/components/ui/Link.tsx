import Button from "../Button";
import "./Link.css";

interface Props {
	fullAddress: string;
	shortAddress: string;
	isCopied?: boolean;
	onCopyItem?: () => void;
}

const Link = ({ fullAddress, shortAddress, isCopied, onCopyItem }: Props) => {
	return (
		<div className="link">
			<p className="link__full-address">{fullAddress}</p>
			<p className="link__short-address">{shortAddress}</p>
			<Button
				label={isCopied ? "Copied!" : "Copy"}
				aditionalClass={"btn-secondary " + (isCopied ? "copied" : "")}
				isSquare={true}
				onClick={onCopyItem}
			/>
		</div>
	);
};

export default Link;
