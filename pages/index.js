import Seo from '../components/Seo';
import styles from './index.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home({ results }) {
  const { container, movieImg, h4 } = styles;
  const router = useRouter();

  const onClick = (id, title) => {
    // 영화 제목도 넘겨주지만 유저에겐 가리는 것. masking
    router.push(
      {
        pathname: `/movies/${id}`,
        query: {
          title,
        },
      },
      `/movies/${id}`, // masking. query를 가린다.
    );
  };

  return (
    <div className={container}>
      <Seo title={'Home'} />

      {results?.map((movie) => (
        <div
          key={movie.id}
          onClick={() => onClick(movie.id, movie.original_title)}
        >
          <img
            className={movieImg}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />

          <h4 className={h4}>
            <Link
              href={{
                pathname: `/movies/${movie.id}`,
                query: {
                  title: movie.original_title,
                },
              }}
              as={`/movies/${movie.id}`}
            >
              {movie.original_title}
            </Link>
          </h4>
        </div>
      ))}
    </div>
  );
}

// 꼭 이 이름을 써야함. 이 자리에 어떤 코드를 쓰던 client쪽이 아닌 server쪽에서만 작동한다.
// api 키를 여기서 써주면 rewrite도 필요없음.
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: { results },
  };
}

// getServerSideProps는 server에서 실행돼.
// 그리고 여기서 뭘 return 하던지 이걸 props로써 page에게 줘.

// 1. home에 들어올때 nextjs가 home을 받아서
// 2. render하기위해 _app.js에 넣는다.
// 3. 그리고 getServerSideProps 함수를 호출한다.
// 4. api 호출로 props를 return -> _app에서 보면 pageProps가 있는데 그 자리로 들어간다.
// 5. home에서 props를 넘겨받는다.

// 이제 이 페이지는 100% 서버사이드에서 렌더된다.
// 그러면 absoluteURL만 지원한다 라고 에러남.
// /api/movies 가 프론트에서만 작동하기 때문.
// http://localhost:3000을 앞에 추가해준다.
// seo에는 좋겠지?
