import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section className="w-screen ">
      <div className="flex flex-col max-w-screen-xl mx-auto px-6 md:px-12">
        <h3 className="text-2xl mb-12 text-center">About me</h3>
      </div>
    </section>
  );
}
