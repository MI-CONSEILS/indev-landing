import Link from "next/link";
import { LocalClock } from "@/components/clock";
import { ExpertiseRail } from "@/components/expertise-rail";
import { Header } from "@/components/header";
import { Arrow, Footer, Mockup } from "@/components/site";
import { MAILTO } from "@/lib/brand";
import { projects } from "@/lib/projects";



const processSteps = [
  ["Comprendre", "Nous cadrons vos objectifs, vos utilisateurs et les flux métier qui feront réellement la différence."],
  ["Concevoir", "Nous transformons ce cadre en parcours, interfaces et prototype testable avant d’engager le développement."],
  ["Déployer", "Nous développons, connectons vos outils et livrons une base solide qui peut évoluer avec votre activité."],
];

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero" id="agence">
        <div className="hero-content shell">
          <p className="hero-eyebrow"><i aria-hidden="true" /> Studio de produits digitaux — Alger</p>
          <h1 className="hero-title">
            <span>Concevoir.</span>
            <span>Construire.</span>
            <span className="hero-title-accent">Accélérer.</span>
          </h1>
          <div className="hero-bottom">
            <div className="hero-coordinate">
              <LocalClock />
              <span>ALGER · 36°45&apos;N</span>
              <strong>IN/DEV — STUDIO PRODUIT</strong>
            </div>
            <p>ERP, CRM et expériences web conçus autour de vos usages, de vos équipes et de vos objectifs.</p>
            <a className="hero-contact" href={MAILTO}>
              Parler du projet <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="manifesto section-pad">
        <div className="manifesto-inner shell">
          <p className="section-index">01 / Positionnement</p>
          <h2>Nous aidons les entreprises à remplacer les outils dispersés par des produits clairs, rapides et construits pour leur façon de travailler.</h2>
        </div>
      </section>

      <section className="clients section-pad">
        <div className="clients-inner shell">
          <div className="section-title">
            <h2>Des équipes qui nous confient leur produit</h2>
          </div>
          <div className="clients-marquee" aria-label="Ils nous ont confié leur produit">
            {[0, 1].map((row) => (
              <div className="clients-row" key={row}>
                <div className="clients-track">
                  {[...projects, ...projects].map((project, index) => (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      key={`${project.slug}-${index}`}
                      src={project.logo}
                      alt={project.name}
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ExpertiseRail />

      <section className="work" id="projets">
        <div className="work-head shell">
          <div>
            <p className="section-index">03 / Réalisations</p>
            <h2>Nos réalisations</h2>
            <p>Des produits accessibles, des plateformes métier et des expériences e-commerce conçus pour des usages concrets.</p>
          </div>
          <a className="button button-dark" href="#contact">
            Lancer un projet <span className="button-icon"><Arrow /></span>
          </a>
        </div>
        <div className="project-list shell">
          {projects.map((project) => (
            <article className={`project-card tone-${project.tone}`} key={project.slug}>
              <div className="project-info">
                <div className="project-meta">
                  <strong>{project.name}</strong>
                  <span>{project.status}</span>
                </div>
                <h3><Link href={`/projets/${project.slug}`}>{project.title}</Link></h3>
                <p>{project.description}</p>
                <div className="project-facts">
                  {project.facts.map(([label, value]) => (
                    <div key={label}><span>{label}</span><strong>{value}</strong></div>
                  ))}
                </div>
                <div className="project-links">
                  <Link href={`/projets/${project.slug}`}>Voir l’étude <Arrow /></Link>
                  <a href={project.url} target="_blank" rel="noreferrer">Site en ligne <Arrow /></a>
                </div>
              </div>
              <Link href={`/projets/${project.slug}`} className="project-visual" aria-label={`Voir le projet ${project.name}`}>
                <Mockup project={project} compact />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="method section-pad" id="methode">
        <div className="method-inner shell">
          <div className="section-title">
            <p className="section-index">04 / Méthode</p>
            <h2>De la complexité à la clarté en 3 étapes</h2>
          </div>
          <ol className="method-list">
            {processSteps.map(([title, copy]) => (
              <li key={title}>
                <span className="method-orb" aria-hidden="true" />
                <h3>{title}</h3>
                <p>{copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="proof section-pad">
        <div className="proof-head shell">
          <div>
            <p className="section-index">05 / Écosystème IN</p>
            <h2>La branche technologique de l’univers Maison IN</h2>
          </div>
          <p>Produit, design et développement réunis dans une équipe qui garde le contexte du début à la fin, adossée aux autres expertises du groupe.</p>
        </div>
        <div className="proof-grid shell">
          <div><span>PROJETS PRÉSENTÉS</span><strong>5</strong><p>Des références en France et en Algérie, du produit accessible à la plateforme industrielle.</p></div>
          <div><span>APPROCHE</span><strong>100%</strong><p>Chaque interface et chaque règle métier sont adaptées au contexte du projet.</p></div>
          <div><span>EXPERTISES</span><strong>Web + Métier</strong><p>Le même niveau de soin pour la logique opérationnelle et l’expérience visible.</p></div>
          <div><span>CONTINUITÉ</span><strong>1 équipe</strong><p>Un échange direct entre cadrage, design, développement et suivi.</p></div>
        </div>
      </section>

      <section className="engagements section-pad">
        <div className="engagement-head shell">
          <div>
            <p className="section-index">06 / Contact</p>
            <h2>Trois façons de travailler avec nous</h2>
          </div>
          <p>Le périmètre s’adapte au produit. Le niveau d’attention reste le même.</p>
        </div>
        <div className="engagement-grid shell">
          <article>
            <h3>Produit métier</h3>
            <strong>Sur devis</strong>
            <p>ERP, CRM, portail ou plateforme construits autour de vos flux.</p>
            <a href={`${MAILTO}?subject=Projet%20métier`}>Décrire le produit <Arrow /></a>
            <ul><li>Cadrage fonctionnel</li><li>Design UI/UX</li><li>Développement</li><li>Intégrations</li><li>Maintenance</li></ul>
          </article>
          <article className="engagement-featured">
            <h3>Site & landing page</h3>
            <strong>Sur devis</strong>
            <p>Une présence digitale rapide, claire et pensée pour la conversion.</p>
            <a href={`${MAILTO}?subject=Projet%20web`}>Présenter le besoin <Arrow /></a>
            <ul><li>Direction créative</li><li>Contenu et structure</li><li>Développement responsive</li><li>SEO technique</li><li>Mise en ligne</li></ul>
          </article>
          <article>
            <h3>Évolution & renfort</h3>
            <strong>Sur mesure</strong>
            <p>Un appui ciblé pour reprendre, accélérer ou fiabiliser un produit.</p>
            <a href={`${MAILTO}?subject=Renfort%20produit`}>Échanger avec l’équipe <Arrow /></a>
            <ul><li>Audit technique</li><li>Refonte d’interface</li><li>Nouvelles fonctionnalités</li><li>Performance</li><li>Suivi continu</li></ul>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
