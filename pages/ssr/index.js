import Link from "next/link"

const SsrPage = (props) => {
  const { article } = props

  return (
    <>
      <h1>Article Lists</h1>
      { article && article.map((v) => (
        <li key={v.id}>
          <Link href={`/ssr/${v.id}`}>{v.title}</Link>
        </li>
      ))}
    </>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const article = await res.json()

  return {
    props: {
      article
    }
  }
}

export default SsrPage
