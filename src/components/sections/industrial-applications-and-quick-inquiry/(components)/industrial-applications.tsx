"use client";

import { Button } from "@/components/ui";
import Header from "./header";
import { Silder } from "./silder";

export function IndustrialApplications() {
  return (
    <section>
      <Header
        title="Industrial Applications"
        subtitle="Explore our comprehensive range of industrial solutions tailored to meet your specific needs across various sectors."
      />

      <div className="w-full md:rounded-[var(--border-radius-lg)] md:bg-[var(--brand-white)] md:px-5 md:py-8 md:shadow-[var(--shadow-lg)] flex flex-col gap-2">
        <div className="flex-1 mb-8">
          <Silder />
        </div>

        <div className="flex justify-center">
          <Button variant="primary">
            SEE MORE INDUSTRIES
          </Button>
        </div>
      </div>
    </section>
  );
}