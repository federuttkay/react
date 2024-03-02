import { useState } from "react";
import Button from "../Button";
import Link from "./Link";
import "./LinkInput.css";

const LinkInput = () => {
	const getShortURL = async (urlInput: string) => {
		const url = new URL("https://t.ly/api/v1/link/shorten");

		const headers = {
			Authorization:
				"Bearer orNFhSLYV28JJQHMtnyBs2Ut3ktStaHuDhu8Wma0bVftbfCKoAeXHjChTSqq",
			"Content-Type": "application/json",
			Accept: "application/json",
		};

		let body = {
			long_url: encodeURIComponent(urlInput),
			domain: "https://t.ly/",
			expire_at_datetime: "2035-01-17 15:00:00",
			description: "Social Media Link",
			public_stats: true,
		};

		let output;

		try {
			const response = await fetch(url, {
				method: "POST",
				headers,
				body: JSON.stringify(body),
			});
			console.log(response);

			if (!response.ok) throw new Error("Error occurred.");

			const data = await response.json();

			output = data.short_url;
		} catch (error) {
			console.error(error);
			output = "An error ocurred, please try later.";
		}
		return output;
	};

	interface LinksProps {
		longUrl: string;
		shortUrl: string;
	}

	const [allLinks, setAllLinks] = useState<LinksProps[]>([]);
	const [copiedIndex, setCopiedIndex] = useState(1);
	const [linkError, setLinkError] = useState(false);

	const ejemploURL = [
		{ longUrl: "http://ejemplo3.com", shortUrl: "ej3.com" },
		{ longUrl: "http://ejemplo2.com", shortUrl: "ej2.com" },
		{ longUrl: "http://ejemplo1.com", shortUrl: "ej1.com" },
	];
	if (allLinks.length === 0) setAllLinks(ejemploURL);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const longURL = formData.get("longURL") as string;

		if (longURL === "") {
			setLinkError(true);
			return;
		}

		const shortURL = await getShortURL(longURL);

		if (typeof shortURL === "string")
			setAllLinks([{ longUrl: longURL, shortUrl: shortURL }, ...allLinks]);
	};

	return (
		<section className="link-input grid">
			<div className="link-input__input">
				<form
					action="submit"
					className={"link-input__form grid " + (linkError ? "link-error" : "")}
					onSubmit={(event) => handleSubmit(event)}
				>
					<div>
						<input
							type="text"
							placeholder="Shorten a link here..."
							name="longURL"
							onChange={() => setLinkError(false)}
						/>
						<p className="error-p">Please add a link</p>
					</div>
					<Button
						label="Shorten It!"
						aditionalClass="btn-secondary"
						isSquare={true}
					/>
				</form>
			</div>
			<div className="link-input__links grid">
				{allLinks.map((link, index) => (
					<Link
						fullAddress={link.longUrl}
						shortAddress={link.shortUrl}
						isCopied={index === copiedIndex}
						key={index}
						onCopyItem={() => {
							navigator.clipboard.writeText(link.shortUrl);
							setCopiedIndex(index);
						}}
					/>
				))}
			</div>
		</section>
	);
};

export default LinkInput;
