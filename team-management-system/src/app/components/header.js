import Link from 'next/link';
import { useRouter } from 'next/router';
import { auth } from '../utils/firebase';

const Header = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      router.push('/sign-in');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/teams">
              <a>Teams</a>
            </Link>
          </li>
          {auth.currentUser ? (
            <li>
              <button onClick={handleSignOut}>Sign Out</button>
            </li>
          ) : (
            <>
              <li>
                <Link href="/sign-in">
                  <a>Sign In</a>
                </Link>
              </li>
              <li>
                <Link href="/sign-up">
                  <a>Sign Up</a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;