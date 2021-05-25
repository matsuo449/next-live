import Link from 'next/link';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter()

  return (
    <>
      <h1>home</h1>
      <a href="/about">aタグ</a>
      <br />
      <Link href="/about">Link</Link>
      <br />
      <button onClick={() => router.push('/about')}>router.push</button>
    </>
  )
}

export default Home
