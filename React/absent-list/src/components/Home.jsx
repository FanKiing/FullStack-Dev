export default function Home() {
  return (
    <div className="container hero">
      <div className="hero-card">
        <h1 className="hero-title">Gestion des absences</h1>
        <p className="hero-subtitle">
          Suivez vos stagiaires, enregistrez les absences et visualisez l’impact
          sur la discipline en temps réel.
        </p>

        <div className="hero-pills">
          <span className="hero-pill">React & Redux</span>
          <span className="hero-pill">Tableau des stagiaires</span>
          <span className="hero-pill">Suivi des absences</span>
        </div>
      </div>
    </div>
  );
}
