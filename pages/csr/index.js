import { useState, useEffect } from "react"

const CSRPage = () => {
  const [article, setArticle] = useState([])

  useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts")
      const article = await res.json()
      setArticle(article)
    })()
  }, [])

  return (
    <>
      <h1>Article Lists</h1>
      {article.length > 0 && article.map((v) => (
        <li key={v.id}>{v.title}</li>
      ))}
    </>
  )
}

export default CSRPage
