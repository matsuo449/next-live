import Link from "next/link"

const SsgPage = ({ article }) => {
  return (
    <>
      <h1>Article Lists</h1>
      {article && article.map((v) => (
        <li key={v.id}>
          <Link href={`/ssg/${v.id}`}>{v.title}</Link>
        </li>
      ))}
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const article = await res.json()
  return {
    props: {
      article
    }
  }
}

export default SsgPage
