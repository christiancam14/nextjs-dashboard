import AccordionCourses from "@/app/ui/dashboard/accordionCourses";

export default function CertificationsPage() {
  return (
    <section className="w-screen ">
      <div className="flex flex-col items-center max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="my-12 w-full">
          <AccordionCourses />
        </div>
      </div>
    </section>
  );
}
