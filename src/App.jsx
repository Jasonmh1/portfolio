import { lazy, Suspense } from "react";
import ParticleBackground from "./components/ParticleBackground.jsx";
const PortfolioPage = lazy(() => import("./pages/PortfolioPage.jsx"));
const TermsOfService = lazy(() => import("./pages/TermsOfService.jsx"));

const App = () => {
    const isTermsPage = window.location.pathname.replace(/\/+$/, "") === "/terms";
    const Page = isTermsPage ? TermsOfService : PortfolioPage;

    return (
        <>
            <ParticleBackground />
            <Suspense
                fallback={(
                    <main className="relative z-10 flex min-h-screen items-center justify-center text-sm text-slate-300">
                        Loading page…
                    </main>
                )}
            >
                <Page />
            </Suspense>
        </>
    );
};

export default App
