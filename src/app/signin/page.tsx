import SignInForm from "./sign-in-form";

export default function LoginPage() {
  return (
    <div className="flex justify-center my-12">
      <div className="px-16 py-6 rounded-2xl border border-gray-300">
        <h1 className="text-center text-2xl font-semibold mb-8">
          Welcome to Storeyfy!
        </h1>
        <SignInForm />
      </div>
    </div>
  );
}
