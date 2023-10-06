import './globals.css';
import { Inter } from 'next/font/google';
import { OPTIONS } from './api/auth/[...nextauth]/route';
import { prisma } from '@/ulitiles/prisma/db';
import { getServerSession, Session } from 'next-auth';
import { Suspense } from 'react';
import Link from 'next/link';
import CartCount from '@/components/LayoutComponents/mainlayout/CartCount';
import LogoutButton from '@/components/LayoutComponents/mainlayout/navbar/LogoutButton/LogoutButton';
import LoginButton from '@/components/LayoutComponents/mainlayout/navbar/LoginButton/LoginButton';
import Loading from './loading';
import NavMenu from '@/components/LayoutComponents/navMenue/NavMenu';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Access Pharm Ordering',
  description: 'Inter orginizational ordering for Access Pharmacies',
};

const getCart = async (session: Session | null) => {
  if (!session) {
    return [];
  }
  const userData = await prisma.user.findFirst({
    where: { email: session?.user?.email },
    include: { accounts: { include: { Order: { include: { items: {} } } } } },
  });
  return userData?.accounts[0]?.Order[0]?.items ?? [];
};

export default async function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const session = await getServerSession(OPTIONS);
  const cartData = await getCart(session);
  const cartQuantity =
    cartData?.reduce((t, c) => {
      return (t += c.quantity);
    }, 0) ?? 0;

  console.log('This is the session', session);

  return (
    <html lang="en" data-theme="cupcake">
      <body className={`${inter.className}`}>
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Navbar */}
            <div className="navbar bg-base-100 shadow-2xl">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
              <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-xl" href={'/'}>
                  ACCESS
                </Link>
              </div>
              <div className="flex-none">
                {!session ? <LoginButton /> : ''}

                {session ? (
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                      <div className="indicator">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                    </label>
                    <div
                      tabIndex={0}
                      className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                    >
                      <CartCount />
                    </div>
                  </div>
                ) : (
                  ''
                )}
                <div className="dropdown dropdown-end">
                  {session ? (
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img
                          src={
                            session.user?.image
                              ? session.user.image
                              : 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
                          }
                        />
                      </div>
                    </label>
                  ) : (
                    ''
                  )}

                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <Link href={'./profile'} className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </Link>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <LogoutButton />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Page content here */}
            <div className="min-h-screen flex flex-col">
              {modal}
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </div>
          </div>
          <div className="drawer-side flex">
            <div className="w-full h-full bg-opacity-0 flex flex-1">
              {/* Sidebar content here */}
              <NavMenu session={session} />
            </div>
          </div>
        </div>
        <footer className="footer p-10 bg-base-200 text-base-content">
          <div>
            <span className="footer-title">Services</span>
            <Link href={'./'} className="link link-hover">
              Prescriptions
            </Link>
            <Link href={'./compounding'} className="link link-hover">
              Compounding
            </Link>
            <Link
              href={'./access-specialized-care'}
              className="link link-hover"
            >
              Long Term Care
            </Link>
            <Link href={'./dme'} className="link link-hover">
              Durable Medical Equipment
            </Link>
            <Link href={'./dme/personal-mobility'} className="link link-hover">
              Personal Mobility
            </Link>
            <Link href={'./dme/cpap-oxygen'} className="link link-hover">
              CPAP & Oxygen
            </Link>
            <Link href={'./dme/cpap-oxygen'} className="link link-hover">
              Pink Petal Boutique
            </Link>
            <Link href={'./dme/cpap-oxygen'} className="link link-hover">
              CPAP & Oxygen
            </Link>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
          <div>
            <span className="footer-title">Newsletter</span>
            <div className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered w-full pr-16"
                />
                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
