const SsgPage = ({ article }) => {
  return (
    <>
      {article && !Object.keys(article).length && <div>データがありません。</div>}
      <h1>{article && article.title}</h1>
      <p>{article && article.body}</p>
    </>
  )
}

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const articles = await res.json()

  return {
    paths: articles.map((v) => ({
      params: { id: v.id.toString() }}
    )),
    fallback: true
  }
}

export const getStaticProps = async (context) => {
  const id = context.params?.id
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const article = await res.json()

  return {
    props: {
      article
    }
  }
}


export default SsgPage
