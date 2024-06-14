import SignUpForm from "@/app/signup/sign-up-form";

export default function SignUpPage() {
  return (
    <div className="flex justify-center my-12">
      <div className="px-16 py-6 rounded-2xl border border-gray-300">
        <h1 className="text-center text-2xl font-semibold mb-8">
          Sign up now!
        </h1>
        <SignUpForm />
      </div>
    </div>
  );
}
