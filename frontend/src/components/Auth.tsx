import { SignIn as ClerkSignIn, SignUp as ClerkSignUp } from "@clerk/clerk-react";

export const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <ClerkSignIn 
          routing="path" 
          path="/sign-in" 
          signUpUrl="/sign-up"
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "bg-white shadow-md rounded-lg p-6",
              headerTitle: "text-2xl font-bold text-center text-gray-900",
              headerSubtitle: "text-center text-gray-600",
              formButtonPrimary: "bg-blue-500 hover:bg-blue-600 text-white",
              footerAction: "text-blue-500 hover:text-blue-600"
            }
          }}
        />
      </div>
    </div>
  );
};

export const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <ClerkSignUp 
          routing="path" 
          path="/sign-up" 
          signInUrl="/sign-in"
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "bg-white shadow-md rounded-lg p-6",
              headerTitle: "text-2xl font-bold text-center text-gray-900",
              headerSubtitle: "text-center text-gray-600",
              formButtonPrimary: "bg-blue-500 hover:bg-blue-600 text-white",
              footerAction: "text-blue-500 hover:text-blue-600"
            }
          }}
        />
      </div>
    </div>
  );
};