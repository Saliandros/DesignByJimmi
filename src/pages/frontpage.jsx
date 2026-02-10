import FrontpageHero from "../components/frontpage/FrontpageHero.jsx";
import FrontpageTools from "../components/frontpage/FrontpageTools.jsx";
import FrontpageLatest from "../components/frontpage/FrontpageLatest.jsx";

export default function Frontpage() {
  return (
    <main className="frontpage">
      <FrontpageHero />
      <FrontpageTools />
      <FrontpageLatest />
    </main>
  );
}
