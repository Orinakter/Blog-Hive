import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from 'next/navigation';

const Page = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  const user = await getUser();
 
  if (user && isUserAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-10 rounded-lg shadow-md text-center">
          <h1 className="text-2xl font-bold text-[#F98866] mb-4">
            Welcome Back !
          </h1>
        </div>
      </div>
    );
  }
  redirect('/api/auth/login?post_login_redirect_url=/profile')
};

export default Page;
