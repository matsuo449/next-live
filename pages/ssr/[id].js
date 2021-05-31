const SsrPage = (props) => {
  const { article } = props

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const id = Number(context.params?.id)
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const article = await res.json()
  return {
    props: {
      article: article
    }
  }
}


export default SsrPage
