import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Download, ExternalLink, Github } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none animate-fade-up">
                  John Doe
                </h1>
                <p className="text-xl text-muted-foreground animate-fade-up [animation-delay:0.2s]">
                  Frontend Developer & UI/UX Designer
                </p>
              </div>
              <div className="max-w-[600px] text-muted-foreground animate-fade-up [animation-delay:0.3s]">
                <p className="mb-4">
                  I build exceptional digital experiences that are fast, accessible, and visually appealing. With a focus on user experience and cutting-edge technologies, I help businesses connect with their audiences in meaningful ways.
                </p>
                <p>
                  Currently specializing in React, Next.js, and modern front-end frameworks to create responsive and performant web applications.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row animate-fade-up [animation-delay:0.4s]">
                <Link href="/contact">
                  <Button size="lg" className="btn-hover-effect">
                    Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/resume">
                  <Button variant="outline" size="lg" className="btn-hover-effect">
                    View Resume <Download className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] animate-fade-left [animation-delay:0.5s]">
                <Image
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
                  alt="John Doe"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="container px-4 md:px-6 py-12 animate-fade-up bg-white">
        <h2 className="text-3xl font-bold tracking-tighter mb-8">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard
            title="Frontend Development"
            description="Building responsive, accessible, and performant user interfaces with modern JavaScript frameworks."
            skills={["React", "Next.js", "TypeScript", "Tailwind CSS"]}
          />
          <SkillCard
            title="UI/UX Design"
            description="Creating beautiful and intuitive user experiences with a focus on usability and aesthetics."
            skills={["Figma", "Adobe XD", "User Research", "Prototyping"]}
          />
          <SkillCard
            title="Backend Integration"
            description="Connecting frontend applications with robust backend services for full-stack solutions."
            skills={["RESTful APIs", "GraphQL", "Node.js", "Authentication"]}
          />
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-white py-12 animate-fade-up">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter">Featured Projects</h2>
            <Link href="/projects">
              <Button variant="ghost" className="btn-hover-effect">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="E-commerce Platform"
              description="A modern e-commerce platform with product filtering, cart management, and secure checkout."
              image="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg"
              tags={["Next.js", "TypeScript", "Stripe", "Tailwind CSS"]}
              demoUrl="#"
              repoUrl="#"
            />
            <ProjectCard
              title="Dashboard UI"
              description="A responsive admin dashboard with data visualization, user management, and dark mode support."
              image="https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg"
              tags={["React", "Chart.js", "Tailwind CSS", "TypeScript"]}
              demoUrl="#"
              repoUrl="#"
            />
            <ProjectCard
              title="Mobile App"
              description="A cross-platform mobile application for task management with offline support and notifications."
              image="https://images.pexels.com/photos/6893988/pexels-photo-6893988.jpeg"
              tags={["React Native", "Redux", "Firebase", "Expo"]}
              demoUrl="#"
              repoUrl="#"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container px-4 md:px-6 py-12 animate-fade-up bg-white">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Work Together?</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Link href="/contact">
            <Button size="lg" className="mt-4 btn-hover-effect">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function SkillCard({ title, description, skills }: { title: string; description: string; skills: string[] }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function ProjectCard({ 
  title, 
  description, 
  image, 
  tags, 
  demoUrl, 
  repoUrl 
}: { 
  title: string; 
  description: string; 
  image: string; 
  tags: string[]; 
  demoUrl: string; 
  repoUrl: string; 
}) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md group">
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-2">
          <Link href={demoUrl}>
            <Button variant="outline" size="sm" className="btn-hover-effect">
              Live Demo <ExternalLink className="ml-1 h-3 w-3" />
            </Button>
          </Link>
          <Link href={repoUrl}>
            <Button variant="outline" size="sm" className="btn-hover-effect">
              Code <Github className="ml-1 h-3 w-3" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}