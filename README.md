# Nomad coder - nextjs

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

import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavBar.module.css';

export default function NavBar() {
  const router = useRouter();

  return (
    // <nav className={styles.nav}>
    <nav>
      <Link href="/">
        <div
          className={`${styles.link} ${
            router.pathname === '/' ? styles.active : ''
          }`}
        >
          Home
        </div>
      </Link>

      <Link href="/about">
        <div
          className={[
            styles.link,
            router.pathname === '/about' ? styles.active : '',
          ].join(' ')}
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

컴포넌트 내에 style 태그를 이용해 스코프 안에서 스타일을 적용할 수 있다.

```js
<style jsx>`
  a {
    background-color:tomato;
  }
`</style>
```

<br>

### 1.6 Custom App

- how to add global style

- \_app.js 얘를 먼저 확인하고 기반하여 렌더한다. 청사진.

```js
import NavBar from '../components/NavBar';
import '../styles/globals.css'; // 여기 custom app 에만 globalstyles을 import할 수 있다.
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

<br>

### ~2.2 Fetching Data / Redirect and ReWrite

- redirenction을 허용. next.config.js 에서 설정.

<br>

### ~2.4 Server Side Rendering / recap

- fetch나 server에서 일어나는 data 관련 모든 작업이 완료되었을때 비로소 페이지를 render하고 싶을때. (loading없이) getServerSideProps를 쓴다.

- 완전한 serverside rendering은 loading같은거 없다. 소스가 무조건 html. -> 데이터 들어오기 전까지 화면에 아무것도 안보일 것.

<br>

### 2.5 Dynamic Routes

폴더구조로 routing함.

```md
-pages
--movies
---all.js
---index.js
```

이러면 baseurl/movies, baseurl/movies/all 도 가능. 중첩라우팅 같은거

페이지가 하나뿐이면 걍

```md
-pages
--movies.js
```

url에 변수 넣는법.
movies/1231 같은 url로 접속하면 나오게 될 페이지.

```md
-pages
--movies
---[id].js
```

<br>

### 2.6 Movie Detail

라우터를 이용해 화면이동, 데이터 넘기기.

- home 페이지 이미지는 onClick함수와 router로,

- home 페이지 영화제목은 Link 로 라우팅. 비교해서봐.

but,.

user가 홈에서 클릭이 아닌 url을 치고 들어온다면?

router.query.title 이 없어 loading이 뜬다.

그치만 홈->상세 로 이동했을땐 더 빠르게 렌더된다는..

<br>

### 2.7 Catch All

뭐든 캐치해내는 URL

- url에 영화제목을 넣거나 하면 SEO에 아주 좋다고 함.

- 마스킹을 없애고 title이 url에 encoding 되도록 했다.

- 그런데 누가 incognito 모드로 접속하면 에러남.
  이 페이지가 백엔드에서 pre-render되기 때문이라함.
  서버에는 router.query.params가 아직 존재하지 않아서.;

```jsx
import { useRouter } from 'next/router';

export default function Detail() {
  const router = useRouter();
  const [title, id] = router.query.params || []; // 이렇게 해주면 incoginto에서도 에러안남.
  //  clinet-side-rendering만 해준 것.
  // 검색 엔진은 저 텍스트를 찾을 수 없다.

  return (
    <>
      <h4>{title}</h4>
    </>
  );
}
```

<br>

### 404 pages

;;;
