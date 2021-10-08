import { useState, useEffect } from "react"
import Link from "next/link"

const CSRPage = () => {
  const [article, setArticle] = useState([])

  useEffect(() => {
    const f = async() => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts")
      const article = await res.json()
      setArticle(article)
    }
    f()
  }, [])

  return (
    <>
      <h1>Article Lists</h1>
      {article && article.map((v) => (
        <li key={v.id}>
          <Link href={`/csr/${v.id}`}>{v.title}</Link>
        </li>
      ))}
    </>
  )
}

export default CSRPage
