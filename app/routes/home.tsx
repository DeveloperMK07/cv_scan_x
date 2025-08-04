import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
// import { resumes } from "constants";
import ResumeCard from "~/components/ResumeCard";
import { resumes } from "./constants";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CV_SCAN" },
    { name: "description", content: "Analyze yourself for dream jobs!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
    <section className="main-section">
      <div className="page-heading">
        <h1>Track Your Applications & Resume Ratings</h1>
        <h2>Review your Resume and check AI-powered feedback.</h2>
      </div>
    </section>

    {resumes.length >0 && (

    <div className='resumes-section'>
    {resumes.map((resume: Resume) => (
        <ResumeCard key={resume.id} resume={resume}/>
    ))}

    </div>
    )}

  </main>
}
