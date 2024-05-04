import React from "react";

const getUserInfo = () => {
  const USER = {
    theme: "blue-hacker",
    name: "Himanshu Kumar",
    email: "himanshu.kumar5403@gmail.com",
    location: "New Delhi, Delhi, India",
    about:
      "Eager Full Stack Developer and Google DSC Lead'23 with a knack for innovation. Currently pursuing a Bachelor's degree in Computer Science. Enthusiastic about technology's transformative power to shape a better world.",
    social: {
      linkedin: "https://www.linkedin.com/in/i-himanshu/",
      github: "https://github.com/i-himanshu",
      twitter: "https://twitter.com/I_Himanshu_",
      whatsapp: "https://wa.me/918299999999",
    },
    projects: [
      {
        name: "WebMindZ - AI Chat Companion",
        description:
          "Empowering the visually impaired with an AI chatbot featuring Speech-to-Text, Text-to-Speech, unit conversion, gaming, translation, file management, real-time weather updates, and news services.",
        url: "https://webmindz.netlify.app",
        technologies: ["Accessibility", "AI", "Web Development", "Next.JS"],
        github: "https://github.com/I-Himanshu/webmindz-ai-chat-companion",
      },
      {
        name: "AI Video Generator Automation",
        description:
          "Automated script turning articles into voice, merging images, and creating captivating video content.",
        url: "https://github.com/I-Himanshu/TextToVideoPython",
        technologies: ["Python", "Automation", "AI", "Video Generation"],
        github: "https://github.com/I-Himanshu/TextToVideoPython",
      },
      {
        name: "Color Picker Chrome Extension",
        description:
          "A user-friendly Chrome extension for picking colors from the screen and saving Hex values.",
        url: "https://github.com/I-Himanshu/color-picker-chrome-extension",
        technologies: ["Chrome Extension", "JavaScript", "HTML", "CSS"],
        github: "https://github.com/I-Himanshu/color-picker-chrome-extension",
      },
      {
        name: "Maggi Weather Forecast",
        description:
          "Innovative weather web app providing hourly and weekly forecasts with a dynamic UI experience.",
        url: "https://fluffy-zuccutto-be870b.netlify.app/",
        technologies: ["Weather", "API", "Web Development", "React.JS"],
        github: "https://github.com/I-Himanshu/maggi-weather-forecast",
      },
      {
        name: "Eventify: Seamless Event Management",
        description:
          "A comprehensive event management platform for easy planning, scheduling, RSVPs, payments, and feedback.",
        url: "https://dot-io.vercel.app/",
        technologies: [
          "Event Management",
          "API",
          "Web Development",
          "Next.JS",
          "Firebase",
        ],
        github:
          "https://github.com/I-Himanshu/eventify-seamless-event-management",
      },
    ],
    skills: {
      //   languages: ["HTML", "CSS", "JavaScript", "Python", "C++"],
      frameworks: [
        "React",
        "Node.js",
        "Express.js",
        "Bootstrap",
        "Tailwind CSS",
        "Next.js",
        "Flask",
        "PhP",
      ],
      databases: ["MongoDB", "MySQL", "Firebase", "PostgreSQL"],
      tools: [
        "Git",
        "VS Code",
        "Postman",
        "Figma",
        "Docker",
        "Google Cloud Platform",
        "Heroku",
        "Netlify",
        "Vercel",
      ],
    },
    languages: ["English", "Hindi", "Bhojpuri"],
    experience: [
      {
        company: "Google Developer Student Clubs, India",
        position: "GDSC Lead",
        period: "August 2023 - Present",
        description:
          "Leading a community of developers to learn and grow together through workshops, hackathons, and projects.",
      },
      {
        company: "Bakhtiyarpur College of Engineering, Patna",
        position: "Student",
        period: "December 2021 - Present",
        description:
          "Pursuing a Bachelor's degree in Computer Science and Engineering to enhance technical skills.",
      },
      {
        company: "YBI Foundation, India",
        position: "Intern",
        period: "December 2022 - February 2023",
        description:
          "Developed a web app for tracking COVID-19 cases and vaccination drives in India.",
      },
      {
        company: "GDSC BCE Patna, Patna",
        position: "Volunteer",
        period: "January 2022 - July 2022",
        description:
          "Organized workshops, hackathons, and tech talks to foster a culture of learning and innovation.",
      },
    ],
    education: [
      {
        institution: "Bakhtiyarpur College of Engineering, Patna",
        degree: "Bachelor of Technology - BTech, Computer Science",
        duration: "December 2021 - December 2025",
        grade: "A",
      },
      {
        institution: "GSBV Nangloi",
        degree: "Intermediate, PCM",
        duration: "January 2019 - May 2021",
        grade: "A",
      },
    ],
    certifications: [
      {
        title: "Problem Solving Through Programming in C",
        issuer: "NPTEL",
        year: "2023",
        link: "https://internalapp.nptel.ac.in/NOC/noc_course_details/noc21-cs121/verify/?q=NOC23CS121S644301539",
      },
      {
        title: "Docker Certification Course",
        issuer: "Programming Hub",
        year: "2023",
        link: "https://storage.googleapis.com/programminghub/certificate%2F1678158371948.pdf",
      },
      {
        title: "Flutter Certification Course",
        issuer: "Programming Hub",
        year: "2023",
        link: "https://storage.googleapis.com/programminghub/certificate%2F1678421733493.pdf",
      },
      {
        title: "UI/UX Certification Course",
        issuer: "Programming Hub",
        year: "2023",
        link: "https://storage.googleapis.com/programminghub/certificate%2F1678376885772.pdf",
      },
    ],

    learningGoals: [
      "React Native",
      "Flutter",
      "Docker",
      "Kubernetes",
      "AWS",
      "Jira",
      "Figma",
      "Power BI",
    ],
    hobbies: ["Coding", "Reading", "Gaming", "Travelling"],
    interests: [
      "AI",
      "Web Development",
      "Problem Solving",
      "Debugging",
      "Automation",
    ],
  };

  const COMMANDS = [
    {
      id: 0,
      command: "contact",
      usage: "Type 'contact' to see my contact information.",
      description: `
            <div class="text-primary-text">
              <h2 class="text-2xl font-bold">Contact Information</h2>
              <div class="mt-4">
                <p class="text-secondary-text">
                  <i class="fa-solid fa-envelope mr-2 text-primary-color"></i>
                  ${USER.email}
                </p>
                <p class="mt-2 text-secondary-text">
                  <i class="fa-solid fa-map-marker-alt mr-2 text-primary-color"></i>
                  ${USER.location}
                </p>
              </div>
            </div>
          `,
      isAvailable: !!(USER.email && USER.location),
    },
    {
      id: 1,
      command: "about",
      usage: "Type 'about' to learn more about me.",
      description: `
            <div class="text-primary-text">
              <h2 class="text-2xl font-bold">About Me</h2>
              <p class="mt-4 text-secondary-text">
                ${USER.about}
              </p>
            </div>
          `,
      isAvailable: !!USER.about,
    },
    {
      id: 2,
      command: "projects",
      usage: "Type 'projects' to view my projects.",
      description: `
            <div class="text-primary-text">
              <h2 class="text-2xl font-bold">My Projects</h2>
              ${USER.projects
                .map(
                  (project) => `
                <div class="mt-6">
                  <h3 class="text-xl font-bold">${project.name}</h3>
                  <p class="mt-2 text-secondary-text">${project.description}</p>
                  ${
                    project.technologies && project.technologies.lenght > 0
                      ? `<div class="mt-2">
                    <span class="mr-2 bg-primary-color px-2 py-1 rounded-md text-primary-bg text-sm">
                      ${project.technologies.join(
                        '</span><span class="mr-2 bg-primary-color px-2 py-1 rounded-md text-primary-bg text-sm">'
                      )}
                    </span>
                  </div>`
                      : ""
                  }
                  <div class="mt-2 flex">
                    ${
                      project.github
                        ? `<a href="${project.github}" class="text-primary-color hover:underline">
                            <i class="fa-brands fa-github mr-1"></i>
                            GitHub
                        </a>`
                        : ""
                    }
                    ${
                      project.url
                        ? `<a href="${project.url}" class="text-primary-color hover:underline ml-4">
                            <i class="fa-solid fa-up-right-from-square mr-1"></i>
                            View Project
                        </a>`
                        : ""
                    }

                  </div>
                </div>
              `
                )
                .join("")}
            </div>
          `,
      isAvailable: !!(USER.projects && USER.projects.length > 0),
    },
    {
      id: 3,
      command: "skills",
      usage: "Type 'skills' to see my expertise.",
      description: `
            <div class="text-primary-text">
              <h2 class="text-2xl font-bold">My Skills</h2>

              ${Object.keys(USER.skills)
                .map((key) => {
                  return `<div class="mt-4">
                    <h3 class="text-xl font-bold">
                        <i class="fa-solid fa-code mr-2 text-primary-color"></i>
                        ${key.charAt(0).toUpperCase() + key.slice(1)}
                    </h3>
                    <div class="mt-2 flex flex-wrap gap-2">
                        ${USER.skills[key]
                          .map(
                            (skill) => `
                        <span class=" bg-primary-color px-2 py-1 rounded-md text-primary-bg text-sm">${skill}</span>
                        `
                          )
                          .join("")}
                    </div>
                </div>`;
                })
                .join("")}
            </div>
          `,
      isAvailable: !!USER.skills,
    },
    {
      id: 4,
      command: "social",
      usage: "Type 'social' to see my social links.",
      description: `
            <div class="text-primary-text">
              <h2 class="text-2xl font-bold mb-4">Social Links</h2>
              ${Object.keys(USER.social)
                .map((key) => {
                  return `<div class="flex items-center mb-2">
                    <i class="fa-brands fa-${key} text-primary-color mr-2"></i>
                    <a href="${USER.social[key]}" class="text-primary-color hover:underline">${key}</a>
                    </div>`;
                })
                .join("")}
            </div>
          `,
      isAvailable: Object.keys(USER.social).length > 0,
    },
    {
      id: 5,
      command: "education",
      usage: "Type 'education' to see my educational background.",
      description: `
          <div class="text-primary-text">
            <h2 class="text-2xl font-bold mb-4">Education</h2>
            ${USER.education
              .map(
                (edu) => `
                <div class="mb-6 bg-secondary-bg rounded-lg p-4">
                  <h3 class="text-xl font-bold text-primary-text">${edu.degree}</h3>
                  <p class="mt-2 text-secondary-text">${edu.institution} | ${edu.duration}</p>
                  <p class="mt-2 text-secondary-text">Grade: ${edu.grade}</p>
                </div>
                `
              )
              .join("")}
          </div>
        `,
      isAvailable: !!(USER.education && USER.education.length > 0),
    },
    {
      id: 6,
      command: "certifications",
      usage: "Type 'certifications' to see my certifications.",
      description: `
          <div class="text-primary-text">
            <h2 class="text-2xl font-bold mb-4">Certifications</h2>
            ${USER.certifications
              .map(
                (cert) => `
                <div class="mb-6 bg-secondary-bg rounded-lg p-4">
                  <h3 class="text-xl font-bold text-primary-text">${
                    cert.title
                  }</h3>
                  <p class="mt-2 text-secondary-text">Issuer: ${cert.issuer}</p>
                  <p class="mt-2 text-secondary-text">Year: ${cert.year}</p>
                  ${
                    cert.link
                      ? `<a href="${cert.link}" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">View Certificate</a>`
                      : ""
                  }
                </div>
                `
              )
              .join("")}
          </div>
        `,
      isAvailable: !!(USER.certifications && USER.certifications.length > 0),
    },
    {
      id: 7,
      command: "experience",
      usage: "Type 'experience' to see my work experience.",
      description: `
          <div class="text-primary-text">
            <h2 class="text-2xl font-bold mb-4">Work Experience</h2>
            ${USER.experience
              .map(
                (exp) => `
                <div class="mb-6 bg-secondary-bg rounded-lg p-4">
                  <h3 class="text-xl font-bold text-primary-text">${exp.position}</h3>
                  <p class="mt-2 text-secondary-text">${exp.company} | ${exp.period}</p>
                  <p class="mt-2 text-secondary-text">${exp.description}</p>
                </div>
                `
              )
              .join("")}
          </div>
        `,
      isAvailable: !!(USER.experience && USER.experience.length > 0),
    },
    {
      id: 8,
      command: "languages",
      usage: "Type 'languages' to see the languages I speak.",
      description: `
            <div class="text-primary-text">
              <h2 class="text-2xl font-bold mb-4">Languages</h2>
              <div class="flex flex-wrap">
                ${USER.languages
                  .map(
                    (lang) => `
                  <span class="mr-2 mb-2 bg-primary-color px-2 py-1 rounded-md text-white text-sm">${lang}</span>
                `
                  )
                  .join("")}
              </div>
            </div>
          `,
      isAvailable: !!(USER.languages && USER.languages.length > 0),
    },
    {
      id: 9,
      command: "hobbies",
      usage: "Type 'hobbies' to see my hobbies.",
      description: `
            <div class="text-primary-text">
              <h2 class="text-2xl font-bold mb-4">Hobbies</h2>
              <div class="flex flex-wrap">
                ${USER.hobbies
                  .map(
                    (hobby) => `
                  <span class="mr-2 mb-2 bg-primary-color px-2 py-1 rounded-md text-white text-sm">${hobby}</span>
                `
                  )
                  .join("")}
              </div>
            </div>
          `,
      isAvailable: !!(USER.hobbies && USER.hobbies.length > 0),
    },
    {
      id: 10,
      command: "interests",
      usage: "Type 'interests' to see my interests.",
      description: `
            <div class="text-primary-text">
              <h2 class="text-2xl font-bold mb-4">Interests</h2>
              <div class="flex flex-wrap">
                ${USER.interests
                  .map(
                    (interest) => `
                  <span class="mr-2 mb-2 bg-primary-color px-2 py-1 rounded-md text-white text-sm">${interest}</span>
                `
                  )
                  .join("")}
              </div>
            </div>
          `,
      isAvailable: !!(USER.interests && USER.interests.length > 0),
    },
    {
      id: 11,
      command: "welcome",
      usage: "Type 'welcome' to see the greeting.",
      description: `
          <div class="text-primary-text">
            <h1 class="text-3xl font-bold mb-4">Welcome to my Terminal Portfolio!</h1>
            <p class="text-secondary-text mb-2">
              Greetings, fellow tech enthusiast! I'm excited to share my journey with you through this interactive terminal interface.
            </p>
            <p class="text-secondary-text mb-2">
              Feel free to explore the available commands and discover more about my background, skills, projects, and social connections.
            </p>
            <p class="text-secondary-text mb-4">
              Let's embark on an adventure together and uncover the stories behind my work. Type <span class="bg-primary-color px-2 py-1 rounded-md text-white text-sm">help</span> to see the list of available commands.
            </p>
            <div class="flex items-center justify-center">
              <pre class="text-2xl text-center">┌───────────────────┐
  🚀 Let's Explore! 
└───────────────────┘
              </pre>
            </div>
          </div>
        `,
      isAvailable: true,
    },
  ];
  return {
    USER,
    COMMANDS,
  };
};

export default getUserInfo;
