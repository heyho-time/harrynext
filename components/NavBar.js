import Link from 'next/link';
import styles from './Navbar.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function NavBar() {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <Image alt="logo" src="/vercel.svg" width={100} height={80} />

      <Link href="/">
        <div className={`${styles.text} ${router.pathname === '/' ? styles.active : ''}`}>Home</div>
      </Link>

      <Link href="/about">
        <div className={`${styles.text} ${router.pathname === '/about' ? styles.active : ''}`}>About</div>
      </Link>
    </nav>
  );
}
