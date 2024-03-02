import Button from "../Button";
import "./BoostCTA.css";

const BoostCTA = () => {
	return (
		<section className="boost grid">
			<div className="boost__content grid">
				<h2 className="boost__title">Boost your links today</h2>
				<Button label="Get Started" aditionalClass="btn-secondary" />
			</div>
		</section>
	);
};

export default BoostCTA;
