import { lazy, Suspense } from "react";
import FrontpageHero from "../components/frontpage/FrontpageHeroNew.jsx";
import FrontpageBio from "../components/frontpage/FrontpageBio.jsx";

const FrontpageTools = lazy(() => import("../components/frontpage/FrontpageTools.jsx"));
const FrontpageLatest = lazy(() => import("../components/frontpage/FrontpageLatest.jsx"));
const FrontpageContact = lazy(() => import("../components/frontpage/FrontpageContact.jsx"));

export default function Frontpage() {
  return (
    <main className="frontpage">
      <FrontpageHero />
      <FrontpageBio />
      <Suspense fallback={null}>
        <FrontpageTools />
        <FrontpageLatest />
        <FrontpageContact />
      </Suspense>
    </main>
  );
}
