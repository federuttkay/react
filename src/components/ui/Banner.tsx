import "./Banner.css";
import Button from "../Button";
import image from "../../assets/images/illustration-working.svg";

const Banner = () => {
	return (
		<section className="banner grid grid-banner">
			<div className="banner__content">
				<h1 className="banner__title">More than just shorter links</h1>
				<p className="banner__p">
					Build your brand's recognition and get detailed insights on how your
					links are performing.
				</p>
				<Button label="Get Started" aditionalClass="btn-secondary" />
			</div>
			<div className="banner__image">
				<img src={image} alt="" />
			</div>
		</section>
	);
};

export default Banner;
