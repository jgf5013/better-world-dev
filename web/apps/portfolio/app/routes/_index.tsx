import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { PortfolioCard } from "@better-world-dev/elements";




export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div className="text-center h-full">
        <h1 className="text-4xl typography">JOHN FISHER</h1>
        <div id="projectsContainer">

          <PortfolioCard
            index={0}
            link="https://jgf5013.github.io/virus-visualization"
            img={{
              src: "images/bug.png",
              title: "Virus",
              alt: "Virus",
            }}
            title="Virus Simulation"
            subtext="Why do I need to stay inside??"
          />
          <PortfolioCard
            index={1}
            link="https://jgf5013.github.io/planet-mapper"
            img={{
              src: "images/planet-mapper.png",
              title: "Orbit",
              alt: "Image of planetary orbit",
            }}
            title="Planet Mapper"
            subtext="Space tells matter how to move; matter tells space how to curve"
          />
          <PortfolioCard
            index={2}
            link="https://jgf5013.github.io/angular-mono-repo"
            img={{
              src: "images/staff.png",
              title: "Staff",
              alt: "Image of staff",
            }}
            title="Staff Tools"
            subtext="Hey John, I'm seeing something weird..."
          />
          <PortfolioCard
            index={3}
            link="https://drive.google.com/file/d/1cAXXuzHCYjsgwNCbudpEZXg8P9i6GA_9/view"
            img={{
              src: "images/add.png",
              title: "Add",
              alt: "Image of add button for requesting new projects",
            }}
            title="Request"
            subtext="Check out my resume. Send me an email If you're interested in
            connecting or would like to see me build something
            interesting!"
            isAdd={true}
          />
        </div>
      </div>
    </main>
  );
}
