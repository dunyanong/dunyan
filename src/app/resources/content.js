import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Dun Yan",
  lastName: "Ong",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Electrical Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "ong.dy2004@gmail.com",
  location: "Asia/Singapore", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Mandarin", "Cantonese", "Malay"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&aposs Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/dunyanong",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/dunyan",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}&aposs Portfolio`,
  description: `Portfolio website showcasing my project as a ${person.role}`,
  headline: <>Robotics, Softwares, Artificial Intelligence</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/project/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I&aposm Dun Yan, an Electrical Software Engineer specializing in AI, 
      software development, and robotics. I build intelligent systems that bridge hardware and software to solve real-world challenges.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Electrical & Electronic Engineering student at NTU, Singapore, 
        blending robotics, artificial intelligence, and circuit design to build 
        intelligent systems that push the boundaries of innovation

      </>
    ),
  },
  project: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "A* Star Singapore",
        timeframe: "May 2025 - Present",
        role: "Robotics Research Engineer Intern",
        achievements: [
          // <>
          //   Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
          //   engagement and 30% faster load times.
          // </>,
          // <>
          //   Spearheaded the integration of AI tools into design projectflows, enabling designers to
          //   iterate 50% faster.
          // </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Halogen Capital",
        timeframe: "May 2024 - August 2024",
        role: "Software Engineer Intern",
        achievements: [
        ],
        images: [],
      },
      {
        company: "DoctorOnCall",
        timeframe: "Apr 2023 - Jun 2023",
        role: "Software Engineer Intern",
        achievements: [
        ],
        images: [],
      },
      {
        company: "Lambdatest",
        timeframe: "Dec 2022 - Mar 2023",
        role: "Software Apprentice",
        achievements: [
        ],
        images: [],
      },          
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Nanyang Technological University",
        description: <>Bachelor of Electrical and Electronics Engineering (EEE)</>,
      },
      {
        name: "Methodist College Kuala Lumpur",
        description: <>A Level</>,
      },      
      // {
      //   name: "Build the Future",
      //   description: <>Studied online marketing and personal branding.</>,
      // },      
    ],
    images: [
  //         {
  //           src: "/images/projects/project-01/cover-04.jpg",
  //           alt: "Project image",
  //           width: 16,
  //           height: 9,
  //         },      
    ],
  },
  // technical: {
  //   display: true, // set to false to hide this section
  //   title: "Technical skills",
  //   skills: [
  //     {
  //       title: "Figma",
  //       description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
  //       // optional: leave the array empty if you don't want to display images
  //       images: [
  //         {
  //           src: "/images/projects/project-01/cover-02.jpg",
  //           alt: "Project image",
  //           width: 16,
  //           height: 9,
  //         },
  //         {
  //           src: "/images/projects/project-01/cover-03.jpg",
  //           alt: "Project image",
  //           width: 16,
  //           height: 9,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Next.js",
  //       description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
  //       // optional: leave the array empty if you don't want to display images
  //       images: [
  //         {
  //           src: "/images/projects/project-01/cover-04.jpg",
  //           alt: "Project image",
  //           width: 16,
  //           height: 9,
  //         },
  //       ],
  //     },
  //   ],
  // },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Some Experiences!",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const hackathon = {
  path: "/hackathon",
  label: "Hackathon",
  title: "Hackathon",
  description: `Read what ${person.name} has been up to recently`,

};

const project = {
  path: "/project",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /project routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/halogen_photo.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Naz_JiaYing.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/doctoroncall_adam_farewell.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/hackathon_pitch.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, project, gallery };
