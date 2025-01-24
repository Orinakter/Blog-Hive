import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from 'next/navigation';

const Page = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  const user = await getUser();
 
  if (user && isUserAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className=" max-w-md w-full p-8 rounded-lg shadow-lg bg-white">
          <h1 className="text-3xl font-bold text-[#F98866] mb-6">
            Welcome to Your Profile!
          </h1>
          <p className="text-gray-600 mb-6">
            We're glad to see you again. Feel free to explore your profile or continue your journey.
          </p>
          
        </div>
      </div>
    );
  }
  redirect('/api/auth/login?post_login_redirect_url=/profile')
};

export default Page;
