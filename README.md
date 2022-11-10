# nextjs

### ~1.2 static pre rendering

- react는 library next는 framework

- next의 최고 장점 중 하나는 앱의 페이지들이 미리 렌더링 된다는 것. html을 먼저 보여주고 react가 클라이언트로 전송되고 실행 -> hydration이라고 함.

- react를 import하지않고, 또 확장자명이 jsx가 아니어도 태그를 쓸 수 있다. 하지만 hook을 쓰려면 import 해야됨.

<br>

### 1.3 Routing

- a태그를 사용해 routing 하지않는다. 다른 페이지로 가면서 새로고침 되기때문.

<br>

### 1.4 CSS Modules

```js
// 2개 이상의 className을 적용하는 두가지 방법.

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
```

<br>

### 1.5 styles JSX

deprecated?

<br>

### 1.6 Custom App

- how to add global style

- \_app.js 얘를 먼저 확인하고 기반하여 렌더한다. 청사진.

```js
import NavBar from "../components/NavBar";
import "../styles/globals.css"; // 여기 custom app 에만 globalstyles을 import할 수 있다.
// 나머지 파일들에선 cssmodules여야 한다.

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
```

<br>

---

<br>

### 2.0 Patterns

- \_app.js에서 Google Analytics, 스크립트 분석 등 글로벌 import를 한다.

- 너무 큰 app을 원치 않기 때문에 Layout 컴포넌트를 이용한다.

- Seo 파일 - head같은 작은 패키지들을 사용할 수 있다.
