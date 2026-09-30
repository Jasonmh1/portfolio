import TitleHeader from "../components/TitleHeader";

const reviews = [
	{
		text: "Jason is a reliable financial manager with strong analytical skills and great business insight. He’s supportive, easy to work with, and a valuable member of the team. I highly recommend him.",
	},
	{
		text: "caters to creators needs been working with him for a year now very consistent and outstanding guy love working with him.",
	},
	{
		text: "He has good communication skills, he puts the interest of his hire first, he’s careful about how you spend your money and who you’re paying it to, and has good knowledge of today’s market",
	},
	{
		text: "jasonmh is very good to work , a very nice guy to talk to , always listens to the ustomer and the customers concerns.",
	},
	{ text: "NONE" },
	{ text: "NONEma" },
];

const Star = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		className="size-4 fill-cyan-300"
		aria-hidden="true"
	>
		<path d="M12 2.25l2.955 6.03 6.645.967-4.8 4.677 1.133 6.606L12 17.77l-5.933 3.137 1.133-6.606-4.8-4.677 6.645-.967L12 2.25z" />
	</svg>
);

const Reviews = () => (
	<section id="reviews" className="section-padding scroll-mt-24">
		<div className="mx-auto w-full max-w-7xl">
			<TitleHeader
				title="Client Reviews"
				sub="Feedback from studios & clients"
			/>

			<div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
				{reviews.map(({ text }, index) => {
					const hasWrittenReview = !/^na\.?$/i.test(text.trim());

					return (
						<article
							key={`review-${index + 1}`}
							className="group relative flex min-h-64 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/5.5 md:p-7"
						>
							<div className="mb-5 flex items-center justify-between gap-4">
								<span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
									Client feedback
								</span>
								{hasWrittenReview ? (
									<div
										className="flex shrink-0 items-center gap-1"
										role="img"
										aria-label="5 out of 5 stars"
									>
										{Array.from({ length: 5 }, (_, star) => (
											<Star key={star} />
										))}
									</div>
								) : (
									<span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-400">
										{text}
									</span>
								)}
							</div>

							{hasWrittenReview ? (
								<p className="text-base leading-7 text-slate-200 md:text-[1.05rem]">
									{text}
								</p>
							) : (
								<p className="flex flex-1 items-center text-sm leading-6 text-slate-500">
									No written review was provided for this entry.
								</p>
							)}
						</article>
					);
				})}
			</div>
		</div>
	</section>
);

export default Reviews;
