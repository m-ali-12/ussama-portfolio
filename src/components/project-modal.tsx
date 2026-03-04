"use client";

import Image from "next/image";
import { X } from "lucide-react";

export function ProjectModal({ open, onClose, project }: any) {
  if (!open || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur">

      <div className="relative w-[90%] max-w-5xl bg-[#0f172a] rounded-2xl overflow-hidden">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20"
        >
          <X size={18} />
        </button>

        {/* MODAL CONTENT */}
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

          {/* TEXT */}
          <div className="space-y-4">

            <h2 className="text-xl font-semibold">
              {project.title}
            </h2>

            <p className="text-gray-400">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((t: string) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs rounded-full border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3 pt-3">
              <a
                href={project.links.live}
                target="_blank"
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500"
              >
                Live
              </a>

              <a
                href={project.links.github}
                target="_blank"
                className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10"
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