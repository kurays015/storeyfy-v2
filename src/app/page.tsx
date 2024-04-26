import UploadButton from "@/components/UploadButton";

//need to know how to make the upload img to secure_url

export default async function Home() {
  return (
    <main>
      <h1>Cloudinary Test</h1>
      <UploadButton />
    </main>
  );
}
