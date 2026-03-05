"use client";

import Image from "next/image";
import { X } from "lucide-react";

type Project = {
  slug: string;
  title: string;
  category: string;
  desc: string;
  stack: string[];
  cover: string;
  links: {
    live: string;
    github: string;
  };
};

type Props = {
  open: boolean;
  onClose: () => void;
  project: Project | null;
};

export function ProjectModal({ open, onClose, project }: Props) {
  if (!open || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur">

      {/* MODAL CONTAINER */}
      <div className="relative w-[90%] max-w-5xl bg-[#0f172a] rounded-2xl overflow-hidden">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
        >
          <X size={18} />
        </button>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-6 p-6">

          {/* IMAGE */}
          <div className="flex items-center justify-center bg-black/20 rounded-xl p-4">
            <Image
              src={project.cover}
              alt={project.title}
              width={900}
              height={600}
              className="object-contain max-h-[420px] w-auto"
              priority
            />
          </div>

          {/* TEXT SIDE */}
          <div className="space-y-4">

            <h2 className="text-xl font-semibold text-white">
              {project.title}
            </h2>

            <p className="text-gray-400">
              {project.desc}
            </p>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex gap-3 pt-3">

              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition"
              >
                Live
              </a>

              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition"
              >
                Code
              </a>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}