import { Column } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { about, person, project } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";
import { Projects } from "@/components/project/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: project.title,
    description: project.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(project.title)}`,
    path: project.path,
  });
}

export default function project() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={project.path}
        title={project.title}
        description={project.description}
        image={`${baseURL}/og?title=${encodeURIComponent(project.title)}`}
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
