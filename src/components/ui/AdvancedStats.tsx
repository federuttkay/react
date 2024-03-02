import "./AdvancedStats.css";
import Card from "./Card";
import brand from "../../assets/images/icon-brand-recognition.svg";
import records from "../../assets/images/icon-detailed-records.svg";
import custom from "../../assets/images/icon-fully-customizable.svg";

const AdvancedStats = () => {
	return (
		<section className="adv-stats">
			<h2 className="adv-stats__title">Advanced Statistics</h2>
			<p className="adv-stats__intro">
				Track how your links are performing across the web with our advanced
				statistics dashboard.
			</p>
			<div className="adv-stats__cards grid">
				<div className="line"></div>
				<Card title="Brand Recognition" image={brand}>
					Boost your brand recognition with each click. Generic links don't mean
					a thing. Branded links help instil confidence in your content.
				</Card>
				<Card title="Detailed Records" image={records}>
					Gain insights into who is clicking your links. Knowing when and where
					people engage with your content helps inform better decisions.
				</Card>
				<Card title="Fully Customizable" image={custom}>
					Improve brand awareness and content discoverability through
					customizable links, supercharging audience engagement.
				</Card>
			</div>
		</section>
	);
};

export default AdvancedStats;
