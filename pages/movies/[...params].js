import { useRouter } from 'next/router';
import Seo from '../../components/Seo';

export default function Detail() {
  const router = useRouter();
  const [title, id] = router.query.params || [];

  return (
    <>
      <Seo title={title} />
      <h4>{title}</h4>
    </>
  );
}

// export default function Detail({params}) {
//   const router = useRouter();
//   const [title, id] = params || [];

//   return (
//     <>
//       <h4>{title}</h4>
//     </>
//   );
// }

// export function getServerSideProps({params:{params}}) {
//   console.log(ctx);
//   return {
//     props: {
//        params
//      },
//   };
// }

// 여기 또한 서버사이드렌더링 해주면 incognito모드에서 봐도 title,id 부분 에러가 안생길 수 있다.
// user에게 로딩 단계를 보여주지않고 SEO에 아주 최적화되게 만들고 싶다면 getServerSideProps를 사용한다.
