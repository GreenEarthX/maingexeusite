"use client";

import { useEffect, useMemo, useState } from "react";
import type { TeamMember } from "./types";

const buildInitials = (name?: string) => {
  if (!name) {
    return "GX";
  }

  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("")
    .padEnd(2, "X");
};

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  const [open, setOpen] = useState(false);
  const initials = useMemo(() => buildInitials(member.title), [member.title]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const title = member.title ?? "Team Member";
  const designation = member.field_designation ?? "";
  const description = member.field_descriptions ?? "";

  return (
    <div className="group max-w-sm rounded-3xl overflow-hidden bg-white shadow-md text-center p-6 relative cursor-pointer transition-colors duration-300 hover:bg-gradient-to-b hover:from-blue-600 hover:to-green-600">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className="w-full text-center focus:outline-none"
      >
        <div className="relative">
          {member.field_image ? (
            <img
              src={member.field_image}
              alt={title}
              loading="lazy"
              className="w-32 h-32 rounded-full mx-auto object-cover transition-all duration-200 group-hover:ring-4 group-hover:ring-white"
            />
          ) : (
            <div className="w-32 h-32 rounded-full mx-auto bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
              <span className="text-2xl font-semibold text-gray-500">
                {initials}
              </span>
            </div>
          )}
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold text-gray-700 transition-all duration-200 group-hover:text-white">
            {title}
          </h3>
          {designation ? (
            <p className="text-green-700 transition-all duration-200 group-hover:text-white">
              {designation}
            </p>
          ) : null}
        </div>
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            className="relative bg-white p-8 w-11/12 md:w-9/12 lg:w-7/12 rounded-3xl shadow-lg text-left"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-sm text-gray-500 hover:text-gray-800"
            >
              Close
            </button>

            <div className="flex flex-col items-center text-center">
              {member.field_image ? (
                <img
                  src={member.field_image}
                  alt={title}
                  loading="lazy"
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center mb-4">
                  <span className="text-xl font-semibold text-gray-500">
                    {initials}
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
              {designation ? (
                <p className="text-gray-500 font-medium mb-4">
                  {designation}
                </p>
              ) : null}
            </div>

            {description ? (
              <div
                className="text-gray-700"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            ) : (
              <p className="text-gray-500">Bio coming soon.</p>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
