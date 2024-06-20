import SignUpForm from "@/app/signup/sign-up-form";

export default function SignUpPage() {
  return (
    <div className="my-12 flex justify-center p-2">
      <div className="rounded-2xl border customSm:w-full customSm:p-6 600px:max-w-[600px] lg:px-16 lg:py-6">
        <h1 className="mb-8 text-center text-2xl font-semibold customSm:text-xl">
          Sign up now!
        </h1>
        <SignUpForm />
      </div>
    </div>
  );
}
