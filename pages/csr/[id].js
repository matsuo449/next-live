import { useState, useEffect } from "react"
import { useRouter } from 'next/router';

const CsrPage = () => {
  const [article, setArticle] = useState([])
  const router = useRouter();

  useEffect(() => {
    const f = async () => {
      const id = router.query.id
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      const article = await res.json()
      setArticle(article)
    }
    f()
  }, [router.query.id])

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
    </>
  )
}

export default CsrPage
