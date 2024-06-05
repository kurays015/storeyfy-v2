import SignUpForm from "@/components/forms/SignUpForm";

export default function SignUpPage() {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%]">
      <div className="px-16 py-6 rounded-2xl border border-gray-300">
        <h1 className="text-center text-2xl font-semibold mb-8">
          Sign up now!
        </h1>
        <SignUpForm />
      </div>
    </div>
  );
}
