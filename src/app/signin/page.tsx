import SignInForm from "@/app/signin/sign-in-form";

export default function LoginPage() {
  return (
    <div className="my-12 flex justify-center p-2">
      <div className="rounded-2xl border customSm:w-full customSm:p-6 600px:max-w-[600px] lg:px-16 lg:py-6">
        <h1 className="mb-8 text-center text-2xl font-semibold customSm:text-xl">
          Welcome to Storeyfy!
        </h1>
        <SignInForm />
      </div>
    </div>
  );
}
