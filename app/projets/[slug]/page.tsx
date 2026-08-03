import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Arrow, Footer, Mockup } from "@/components/site";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project
    ? { title: `${project.name} | Projet In-Dev`, description: project.description }
    : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex(({ slug }) => slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="case-page">
      <Header />
      <section className={`case-hero tone-${project.tone}`}>
        <div className="case-hero-inner shell">
          <div className="case-heading">
            <Link className="back-link" href="/#projets">← Tous les projets</Link>
            <span>{project.label}</span>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <a className="button button-light" href={project.url} target="_blank" rel="noreferrer">
              Visiter le site <span className="button-icon"><Arrow /></span>
            </a>
          </div>
          <div className="case-facts">
            {project.facts.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}
          </div>
        </div>
      </section>

      <section className="case-mockup shell section-pad">
        <Mockup project={project} />
      </section>

      <section className="case-story shell section-pad">
        <div><span>LE DÉFI</span><h2>{project.challenge}</h2></div>
        <div><span>NOTRE RÉPONSE</span><p>{project.response}</p></div>
      </section>

      <section className="case-scope section-pad">
        <div className="shell">
          <h2>Périmètre du projet</h2>
          <ul>{project.scope.map((item) => <li key={item}>{item}<Arrow /></li>)}</ul>
        </div>
      </section>

      <section className="next-project">
        <Link href={`/projets/${nextProject.slug}`}>
          <span>Projet suivant</span>
          <h2>{nextProject.name}</h2>
          <Arrow />
        </Link>
      </section>
      <Footer />
    </main>
  );
}
