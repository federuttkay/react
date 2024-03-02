import "./Card.css";

interface Props {
	title: string;
	children: string;
	image: string;
}

const Card = ({ title, children, image }: Props) => {
	return (
		<div className="card">
			<div className="card__img">
				<img src={image} alt="" />
			</div>
			<h3 className="card__title">{title}</h3>
			<p className="card__info">{children}</p>
		</div>
	);
};

export default Card;
