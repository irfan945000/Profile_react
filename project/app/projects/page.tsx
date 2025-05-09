"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Calendar } from "lucide-react";

// Project data
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A modern e-commerce platform with product filtering, cart management, and secure checkout.",
    longDescription: "This comprehensive e-commerce solution features product categorization, advanced filtering, shopping cart functionality, secure payment processing via Stripe, and a responsive design that works across all devices. The admin dashboard provides inventory management, order tracking, and sales analytics.",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    demoUrl: "#",
    repoUrl: "#",
    date: "2023",
    category: "web",
  },
  {
    id: 2,
    title: "Dashboard UI",
    description: "A responsive admin dashboard with data visualization, user management, and dark mode support.",
    longDescription: "This administrative interface provides a comprehensive overview of business metrics through interactive charts and data tables. It includes user management capabilities, role-based access control, customizable widgets, and supports both light and dark modes for optimal viewing in any environment.",
    image: "https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg",
    tags: ["React", "Chart.js", "Tailwind CSS", "TypeScript"],
    demoUrl: "#",
    repoUrl: "#",
    date: "2022",
    category: "web",
  },
  {
    id: 3,
    title: "Mobile App",
    description: "A cross-platform mobile application for task management with offline support and notifications.",
    longDescription: "This productivity app helps users organize tasks with features like task categories, due dates, priority levels, and customizable notifications. It works offline and synchronizes data when connectivity is restored. The app includes daily/weekly/monthly views and productivity analytics.",
    image: "https://images.pexels.com/photos/6893988/pexels-photo-6893988.jpeg",
    tags: ["React Native", "Redux", "Firebase", "Expo"],
    demoUrl: "#",
    repoUrl: "#",
    date: "2022",
    category: "mobile",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills with a modern design.",
    longDescription: "This portfolio site features a clean, modern design with smooth animations and transitions. It includes a projects showcase with filtering, detailed case studies, an about section highlighting skills and experience, and a contact form integration. The site is fully responsive and optimized for all devices.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    tags: ["React", "Next.js", "Framer Motion", "Tailwind CSS"],
    demoUrl: "#",
    repoUrl: "#",
    date: "2021",
    category: "web",
  },
  {
    id: 5,
    title: "Weather App",
    description: "A weather application with real-time updates, location detection, and forecast visualization.",
    longDescription: "This weather application provides current conditions and forecasts for user-selected locations. It features interactive maps, hourly and 5-day forecasts, severe weather alerts, and historical weather data. The app includes beautiful visualizations for temperature, precipitation, wind, and other meteorological conditions.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
    tags: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
    demoUrl: "#",
    repoUrl: "#",
    date: "2021",
    category: "web",
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description: "A mobile application for tracking workouts, nutrition, and fitness progress over time.",
    longDescription: "This comprehensive fitness solution helps users plan and track workouts, log nutrition information, and monitor progress toward fitness goals. It includes customizable workout routines, exercise demonstrations, calorie tracking, macro counting, progress photos, and achievement badges to encourage consistent use.",
    image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg",
    tags: ["Flutter", "Firebase", "Health API", "BLoC Pattern"],
    demoUrl: "#",
    repoUrl: "#",
    date: "2020",
    category: "mobile",
  },
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const handleProjectClick = (id: number) => {
    setSelectedProject(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  return (
    <div className="container px-4 md:px-6 py-12 animate-fade-up">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Projects</h1>
        <p className="text-muted-foreground max-w-[700px]">
          A collection of my recent work, including web applications, mobile apps, and design projects.
        </p>
      </div>

      {selectedProject ? (
        <div className="mb-12">
          <Button 
            variant="ghost" 
            onClick={() => setSelectedProject(null)} 
            className="mb-6"
          >
            ← Back to all projects
          </Button>
          
          {selectedProjectData && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-video relative overflow-hidden rounded-lg">
                <Image
                  src={selectedProjectData.image}
                  alt={selectedProjectData.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">{selectedProjectData.title}</h2>
                <div className="flex items-center text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{selectedProjectData.date}</span>
                </div>
                <p className="text-muted-foreground mb-6">{selectedProjectData.longDescription}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProjectData.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Link href={selectedProjectData.demoUrl}>
                    <Button>
                      Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href={selectedProjectData.repoUrl}>
                    <Button variant="outline">
                      View Code <Github className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <>
          <Tabs defaultValue={activeCategory} onValueChange={setActiveCategory} className="w-full mb-8">
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id} 
                className="overflow-hidden transition-all hover:shadow-md cursor-pointer group"
                onClick={() => handleProjectClick(project.id)}
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <Badge variant="outline">{project.date}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
}