import type { Metadata } from "next";
import ProjectsClient from "@/components/projects/ProjectsClient";

export const metadata: Metadata = {
  title: "Projects | Obiettivo",
  description: "Explore the photography and media projects by Obiettivo, NIT Silchar.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
