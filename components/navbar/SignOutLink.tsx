'use client';

import { SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';

const SignOutLink = () => {
  const handleLogout = () => {
    return <h2>you just signed out</h2>;
  };
  return (
    <SignOutButton>
      <Link href="/" className="w-full text-left" onClick={handleLogout}>
        Logout
      </Link>
    </SignOutButton>
  );
};
export default SignOutLink;
