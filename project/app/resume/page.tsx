"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Calendar, Building, GraduationCap, Award } from "lucide-react";

export default function ResumePage() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="container px-4 md:px-6 py-12 animate-fade-up">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl mb-2">Resume</h1>
          <p className="text-muted-foreground max-w-[700px]">
            A summary of my professional experience, education, and skills.
          </p>
        </div>
        <Button className="hidden md:flex">
          <Download className="mr-2 h-4 w-4" /> Download PDF
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
        <div className="order-2 lg:order-1">
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Skills</h2>
              <div className="space-y-4">
                <SkillCategory 
                  title="Programming Languages" 
                  skills={["JavaScript", "TypeScript", "HTML5", "CSS3/SCSS"]} 
                />
                <SkillCategory 
                  title="Frameworks & Libraries" 
                  skills={["React", "Next.js", "Vue.js", "Tailwind CSS", "Material UI"]} 
                />
                <SkillCategory 
                  title="Tools & Platforms" 
                  skills={["Git", "Webpack", "Docker", "Vercel", "Netlify", "Firebase"]} 
                />
                <SkillCategory 
                  title="Design" 
                  skills={["Figma", "Adobe XD", "Responsive Design", "UI/UX Principles"]} 
                />
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Languages</h2>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between">
                    <span>English</span>
                    <span>Native</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full mt-1">
                    <div className="h-full bg-primary rounded-full" style={{ width: "100%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span>Spanish</span>
                    <span>Fluent</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full mt-1">
                    <div className="h-full bg-primary rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span>French</span>
                    <span>Intermediate</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full mt-1">
                    <div className="h-full bg-primary rounded-full" style={{ width: "60%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Certifications</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Award className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <div>
                    <p className="font-medium">AWS Certified Developer</p>
                    <p className="text-sm text-muted-foreground">Amazon Web Services, 2023</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <div>
                    <p className="font-medium">Professional Web Developer</p>
                    <p className="text-sm text-muted-foreground">Google, 2022</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <div>
                    <p className="font-medium">UI/UX Design Specialization</p>
                    <p className="text-sm text-muted-foreground">Coursera, 2021</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Button className="w-full mt-6 md:hidden">
            <Download className="mr-2 h-4 w-4" /> Download PDF
          </Button>
        </div>

        <div className="order-1 lg:order-2">
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>
            <TabsContent value="experience" className="mt-6 space-y-6">
              <ExperienceItem 
                title="Senior Frontend Developer"
                company="TechGlobe Inc."
                period="2021 - Present"
                location="San Francisco, CA"
                description="Lead the development of complex web applications using React and Next.js. Implemented responsive designs, optimized performance, and mentored junior developers."
                achievements={[
                  "Reduced page load time by 40% through code optimization and modern rendering techniques",
                  "Led the migration from a legacy codebase to Next.js, improving developer productivity by 30%",
                  "Implemented comprehensive test coverage resulting in 80% fewer production bugs"
                ]}
              />
              
              <ExperienceItem 
                title="Frontend Developer"
                company="InnovateSoft"
                period="2019 - 2021"
                location="New York, NY"
                description="Developed and maintained multiple client-facing web applications. Collaborated with designers to implement pixel-perfect UI components."
                achievements={[
                  "Created a component library that reduced development time for new features by 50%",
                  "Integrated third-party APIs and services to enhance application functionality",
                  "Implemented CI/CD pipelines that streamlined the deployment process"
                ]}
              />
              
              <ExperienceItem 
                title="Junior Web Developer"
                company="StartupHub"
                period="2017 - 2019"
                location="Boston, MA"
                description="Worked on frontend development for early-stage startups. Built responsive websites and contributed to UI/UX improvements."
                achievements={[
                  "Developed and launched websites for 5 startup clients, meeting all project deadlines",
                  "Implemented analytics tracking that provided valuable user behavior insights",
                  "Improved site accessibility to meet WCAG 2.1 AA standards"
                ]}
              />
            </TabsContent>
            
            <TabsContent value="education" className="mt-6 space-y-6">
              <EducationItem 
                degree="Master of Science in Computer Science"
                institution="Stanford University"
                period="2015 - 2017"
                location="Stanford, CA"
                description="Specialized in Human-Computer Interaction and Web Technologies. Thesis on improving web application performance through modern rendering techniques."
                courses={[
                  "Advanced Web Development",
                  "User Experience Design",
                  "Algorithms and Data Structures",
                  "Cloud Computing"
                ]}
              />
              
              <EducationItem 
                degree="Bachelor of Science in Software Engineering"
                institution="Massachusetts Institute of Technology"
                period="2011 - 2015"
                location="Cambridge, MA"
                description="Graduated with honors. Focused on software development methodologies and programming fundamentals."
                courses={[
                  "Introduction to Computer Science",
                  "Object-Oriented Programming",
                  "Database Systems",
                  "Software Engineering Principles"
                ]}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div>
      <h3 className="font-medium mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ExperienceItem({ 
  title, 
  company, 
  period, 
  location, 
  description, 
  achievements 
}: { 
  title: string; 
  company: string; 
  period: string; 
  location: string; 
  description: string; 
  achievements: string[] 
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between mb-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="flex items-center text-muted-foreground">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{period}</span>
          </div>
        </div>
        <div className="flex items-center text-muted-foreground mb-4">
          <Building className="h-4 w-4 mr-1" />
          <span>{company} • {location}</span>
        </div>
        <p className="mb-4">{description}</p>
        {achievements && (
          <div>
            <h4 className="font-medium mb-2">Key Achievements:</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function EducationItem({ 
  degree, 
  institution, 
  period, 
  location, 
  description, 
  courses 
}: { 
  degree: string; 
  institution: string; 
  period: string; 
  location: string; 
  description: string; 
  courses: string[] 
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between mb-2">
          <h3 className="text-xl font-bold">{degree}</h3>
          <div className="flex items-center text-muted-foreground">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{period}</span>
          </div>
        </div>
        <div className="flex items-center text-muted-foreground mb-4">
          <GraduationCap className="h-4 w-4 mr-1" />
          <span>{institution} • {location}</span>
        </div>
        <p className="mb-4">{description}</p>
        {courses && (
          <div>
            <h4 className="font-medium mb-2">Relevant Coursework:</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {courses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}