import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        <div style={{ color: router.pathname === "/" ? "red" : "gray" }}>
          Home
        </div>
      </Link>

      <Link href="/about">
        <div style={{ color: router.pathname === "/about" ? "red" : "gray" }}>
          About
        </div>
      </Link>
    </nav>
  );
}
