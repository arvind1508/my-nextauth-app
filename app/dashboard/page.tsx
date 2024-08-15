"use client"; // Ensure the file is treated as a client component

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();

  // Redirect to login page if not authenticated
  if (!session) {
    router.push('/auth/login');
    return null; // or a loading spinner
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-black shadow-md p-4 flex items-center justify-between">
        <div className="text-lg font-semibold text-white">
          Hello, {session.user?.name || 'User'}
        </div>
        <button
          onClick={() => signOut()}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </header>
      <main className="flex-1 p-6 ">
        <h2 className="text-3xl font-normal text-black">Welcome to Your Dashboard</h2>
        {/* Additional content goes here */}
      </main>
    </div>
  );
};

export default Dashboard;
