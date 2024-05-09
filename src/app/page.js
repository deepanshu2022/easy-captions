import PageHeader from "@/Components/PageHeader";
import UploadForm from "@/Components/UploadForm";
import DemoSection from "@/Components/DemoSection";


export default function Home() {
  return (
    <>
      <PageHeader h1Text={'Add captions EASILY to your videos'} h2Text={'Just upload your video and we will do the rest'} />
      <UploadForm />
      <DemoSection />
    </>
  );
}

