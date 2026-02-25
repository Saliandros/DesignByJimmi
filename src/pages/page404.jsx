import { useState, useEffect } from "react";

export default function Page404() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const levenshteinDistance = (a, b) => {
    const matrix = Array(b.length + 1)
      .fill(null)
      .map(() => Array(a.length + 1).fill(0));

    for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
    for (let j = 0; j <= b.length; j++) matrix[j][0] = j;

    for (let j = 1; j <= b.length; j++) {
      for (let i = 1; i <= a.length; i++) {
        const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
        matrix[j][i] = Math.min(
          matrix[j][i - 1] + 1,
          matrix[j - 1][i] + 1,
          matrix[j - 1][i - 1] + indicator
        );
      }
    }

    return matrix[b.length][a.length];
  };

  const findClosestMatch = (input, routes) => {
    return routes.reduce((closest, route) => {
      const distance = levenshteinDistance(input, route);
      const closestDistance = levenshteinDistance(input, closest);
      return distance < closestDistance ? route : closest;
    });
  };

  const currentPath = window.location.pathname.toLowerCase().slice(1);
  const validRoutes = ["projects", "cv", "about", "contact", "privacy-policy"];
  const bestMatch = currentPath ? findClosestMatch(currentPath, validRoutes) : null;
  const suggestion = bestMatch && levenshteinDistance(currentPath, bestMatch) <= 2 ? bestMatch : null;

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <main className="frontpage">
      <section>
        <h2 className="heading-2">404 - Side ikke fundet</h2>
        {!isOnline ? (
          <p className="projects-description">
            Siden var ikke i stand til at levere den ønskede side. Tjek din internetforbindelse og prøv igen.
          </p>
        ) : (
          <p className="projects-description">
            Siden du leder efter kunne ikke blive fundet. Det kan skyldes, at
            siden er blevet slettet, flyttet eller har fået et nyt navn.
            {suggestion && ` Måske du mente ${suggestion}?`}
          </p>
        )}
        {isOnline && (
          <div className="page404-button-wrapper">
            {suggestion && (
              <a href={`/${suggestion}`} className="button-primary button-primary--accent">
                Gå til {suggestion}
              </a>
            )}
            <a href="/" className="button-primary">
              Tilbage til forsiden
            </a>
          </div>
        )}
      </section>
    </main>
  );
}