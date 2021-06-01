import Link from "next/link"

const IsrPage = (props) => {
  const {article} = props

  return (
    <>
      <h1>Article Lists</h1>
      { article && article.map((v) => (
        <li key={v.id}>
          <Link href={`/isr/${v.id}`}>{v.title}</Link>
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
    },
    revalidate: 60,
  }
}

export default IsrPage
