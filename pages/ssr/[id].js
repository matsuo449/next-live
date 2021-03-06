const SsrPage = ({ article }) => {
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const id = context.params?.id
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const article = await res.json()

  return {
    props: {
      article
    }
  }
}


export default SsrPage
