"use client";

import { useState } from "react";

const categories = [
  {
    label: "Languages",
    color: "#534AB7",
    bgColor: "#EEEDFE",
    skills: [
      { name: "JavaScript (ES6+)", level: "expert" },
      { name: "Java", level: "proficient" },
      { name: "SQL", level: "proficient" },
    ],
  },
  {
    label: "Frontend",
    color: "#185FA5",
    bgColor: "#E6F1FB",
    skills: [
      { name: "React.js", level: "expert" },
      { name: "Next.js (SSG/SSR)", level: "expert" },
      { name: "Tailwind CSS", level: "expert" },
    ],
  },
  {
    label: "Backend",
    color: "#0F6E56",
    bgColor: "#E1F5EE",
    skills: [
      { name: "Node.js", level: "expert" },
      { name: "Express.js", level: "expert" },
      { name: "REST APIs", level: "expert" },
      { name: "JWT Authentication", level: "proficient" },
    ],
  },
  {
    label: "Databases",
    color: "#993C1D",
    bgColor: "#FAECE7",
    skills: [
      { name: "MongoDB", level: "proficient" },
      { name: "MySQL", level: "proficient" },
      { name: "Firebase Firestore", level: "proficient" },
    ],
  },
  {
    label: "AI / Cloud",
    color: "#854F0B",
    bgColor: "#FAEEDA",
    skills: [
      { name: "Google Gemini API", level: "expert" },
      { name: "Anthropic Claude", level: "proficient" },
      { name: "Firebase", level: "proficient" },
      { name: "Vercel", level: "expert" },
    ],
  },
  {
    label: "Tools",
    color: "#5F5E5A",
    bgColor: "#F1EFE8",
    skills: [
      { name: "Git & GitHub", level: "expert" },
      { name: "Postman", level: "proficient" },
      { name: "CI/CD", level: "proficient" },
      { name: "VS Code", level: "expert" },
      { name: "Vercel Analytics", level: "proficient" },
    ],
  },
  {
    label: "Core CS",
    color: "#3B6D11",
    bgColor: "#EAF3DE",
    skills: [
      { name: "DSA (Java)", level: "proficient" },
      { name: "OOP", level: "proficient" },
      { name: "System Design", level: "familiar" },
      { name: "SEO Optimization", level: "proficient" },
    ],
  },
];

const levelConfig = {
  expert:     { label: "Expert",     bar: "w-full", color: "#378ADD", bg: "#E6F1FB", tc: "#0C447C" },
  proficient: { label: "Proficient", bar: "w-4/5",  color: "#1D9E75", bg: "#E1F5EE", tc: "#085041" },
  familiar:   { label: "Familiar",   bar: "w-3/5",  color: "#EF9F27", bg: "#FAEEDA", tc: "#633806" },
};

export default function TechnicalSkills() {
  const [active, setActive] = useState("Frontend");

  const current = categories.find((c) => c.label === active);

  return (
    <section id="skills" className="py-16 px-4 max-w-4xl mx-auto">
      <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-2">
        Technical skills
      </p>
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8">
        What I work with
      </h2>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.label}
            onClick={() => setActive(cat.label)}
            style={
              active === cat.label
                ? { backgroundColor: cat.bgColor, color: cat.color, borderColor: "transparent" }
                : {}
            }
            className={`px-4 py-1.5 rounded-full text-sm border transition-all duration-150 ${
              active === cat.label
                ? "font-medium border-transparent"
                : "border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-gray-400"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {current.skills.map((skill) => {
          const lvl = levelConfig[skill.level];
          return (
            <div
              key={skill.name}
              className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-4 flex flex-col gap-3 hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
                  {skill.name}
                </span>
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{ backgroundColor: lvl.bg, color: lvl.tc }}
                >
                  {lvl.label}
                </span>
              </div>
              <div className="h-1 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${lvl.bar}`}
                  style={{ backgroundColor: lvl.color }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex gap-5 mt-6 flex-wrap">
        {Object.entries(levelConfig).map(([key, val]) => (
          <div key={key} className="flex items-center gap-2 text-xs text-gray-500">
            <span
              className="w-2 h-2 rounded-full inline-block"
              style={{ backgroundColor: val.color }}
            />
            {val.label}
          </div>
        ))}
      </div>
    </section>
  );
}