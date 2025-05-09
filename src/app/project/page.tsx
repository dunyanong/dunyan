import { Column } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { about, person, project as projectData } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";
import { Projects } from "@/components/project/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: projectData.title,
    description: projectData.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(projectData.title)}`,
    path: projectData.path,
  });
}

export default function ProjectPage() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={projectData.path}
        title={projectData.title}
        description={projectData.description}
        image={`${baseURL}/og?title=${encodeURIComponent(projectData.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Projects />
    </Column>
  );
}
