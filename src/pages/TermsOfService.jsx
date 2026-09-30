import { useEffect } from "react";

const terms = [
    {
        title: "Payments",
        points: [
            "We agree on weekly or monthly pay before I start working.",
            "Pay on time. If pay is late, I pause work until it is sent.",
            "Once I work for a week or month, or a goal is completed, payments are non-refundable.",
        ],
    },
    {
        title: "What You Need to Provide",
        points: [
            "You must give me clear instructions, files, and goals from day one.",
            "If you want extra features or big changes later, the price and deadline will go up.",
        ],
    },
    {
        title: "Delays & Team Communication",
        points: [
            "I need you and your team to reply and give feedback.",
            "If deadlines slip because someone on your team takes too long to reply or goes missing, that is not on me.",
        ],
    },
    {
        title: "Stopping the Project",
        points: [
            "Either of us can stop working together at any time by sending a message.",
            "You still have to pay for any work or time done up to that point.",
        ],
    },
];

const TermsOfService = () => {
    useEffect(() => {
        const previousTitle = document.title;
        document.title = "Terms of Service | Jasonmh";
        return () => {
            document.title = previousTitle;
        };
    }, []);

    return (
        <main className="relative z-10 min-h-screen px-5 py-8 text-white md:px-10 md:py-12">
            <div className="mx-auto w-full max-w-4xl">
                <header className="mb-12 flex items-center justify-between gap-4 border-b border-white/10 pb-6">
                    <a href="/" className="text-xl font-semibold tracking-wide text-white transition-opacity hover:opacity-75">
                        Jasonmh
                    </a>
                    <a
                        href="/"
                        className="rounded-full border border-white/20 px-4 py-2 text-sm text-slate-200 transition-colors hover:border-white/50 hover:bg-white/5"
                    >
                        Back to portfolio
                    </a>
                </header>

                <section aria-labelledby="terms-title">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-slate-400">
                        Working together
                    </p>
                    <h1 id="terms-title" className="text-4xl font-bold tracking-tight md:text-6xl">
                        Terms of Service
                    </h1>
                    <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
                        Please review these terms before starting a project. They explain our payment,
                        communication, and project expectations.
                    </p>

                    <ol className="mt-10 space-y-5">
                        {terms.map(({ title, points }, index) => (
                            <li
                                key={title}
                                className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 md:p-8"
                            >
                                <div className="flex items-start gap-4 md:gap-6">
                                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-sm font-semibold text-slate-300">
                                        {index + 1}
                                    </span>
                                    <div>
                                        <h2 className="text-xl font-semibold md:text-2xl">{title}</h2>
                                        <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 md:text-base">
                                            {points.map((point) => (
                                                <li key={point} className="flex gap-3">
                                                    <span className="mt-3 size-1.5 shrink-0 rounded-full bg-white/70" aria-hidden="true" />
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>

                    <p className="mt-8 rounded-xl border border-white/15 bg-white/6 p-5 text-sm font-medium leading-7 text-white md:p-6 md:text-base">
                        Hiring me, paying a deposit, or starting work means you agree to these rules.
                    </p>
                </section>

                <footer className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-500">
                    © {new Date().getFullYear()} Jasonmh. All rights reserved.
                </footer>
            </div>
        </main>
    );
};

export default TermsOfService;
