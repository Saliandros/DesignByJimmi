import { Component } from "react";
import { Link } from "react-router-dom";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="frontpage">
          <section>
            <h2 className="heading-2">Noget gik galt</h2>
            <p className="projects-description">
              Der opstod en uventet fejl. Prøv at genindlæse siden.
            </p>
            <div className="page404-button-wrapper">
              <Link to="/" className="button-primary">
                Tilbage til forsiden
              </Link>
            </div>
          </section>
        </div>
      );
    }
    return this.props.children;
  }
}
