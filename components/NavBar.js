import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();

  return (
    // <nav className={styles.nav}>
    <nav>
      <Link href="/">
        <div
          className={`${styles.link} ${
            router.pathname === "/" ? styles.active : ""
          }`}
        >
          Home
        </div>
      </Link>

      <Link href="/about">
        <div
          className={[
            styles.link,
            router.pathname === "/about" ? styles.active : "",
          ].join(" ")}
        >
          About
        </div>
      </Link>
    </nav>
  );
}

// 2개 이상의 className을 적용하는 두가지 방법.
