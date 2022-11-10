import { useRouter } from 'next/router';

export default function Detail() {
  const router = useRouter();

  return (
    <>
      <h4>{router.query.title || 'Loading...'}</h4>
    </>
  );
}
