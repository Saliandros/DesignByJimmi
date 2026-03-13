import FrontpageHero from "../components/frontpage/FrontpageHeroNew.jsx";
import FrontpageBio from "../components/frontpage/FrontpageBio.jsx";
import FrontpageTools from "../components/frontpage/FrontpageTools.jsx";
import FrontpageLatest from "../components/frontpage/FrontpageLatest.jsx";
import FrontpageContact from "../components/frontpage/FrontpageContact.jsx";

export default function Frontpage() {
  return (
    <div className="frontpage">
      <FrontpageHero />
      <FrontpageBio />
      <FrontpageTools />
      <FrontpageLatest />
      <FrontpageContact />
    </div>
  );
}
