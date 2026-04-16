import './App.css'

const features = [
  { title: "NBA", desc: "Nacional Basket Association." },
  {  title: "Alta Performance esportiva", desc: "A liga obriga os atletas a ficarem em boa condição quase o ano tode sob pouco tempo de descanço, ja que são 82, apenas em temporada regular" },
  {  title: "Regras não escritas", desc: "Mesmo que não estejam no livro oficial da NBA, quebrar essas regras pode gerar brigas, multas e uma péssima reputação entre os colegas." },
  {  title: "Conferências e Divisões", desc: "A NBA divide suas 30 franquias(West Coast & East Coast) para facilitar a logística de viagens e fomentar rivalidades regionais." },
];

export default function App() {
  return (
     <div className="page">
      <header className="hero">
        <a href='https://www.nba.com/' className="hero-title">
          <span className="super-nba">NBA</span>
        </a>
        <p className="hero-sub">
          A liga de basquete mais disputada do planeta.
        </p>
      </header>
 
      <section className="features">
        {features.map((f) => (
          <div className="card" key={f.title}>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
 