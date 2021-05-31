const SsgPage = (props) => {
  const {article} = props

  return (
    <>
      <h1>Article Lists</h1>
      { article.length > 0 && article.map((v) => (
        <li key={v.id}>{v.title}</li>
      ))}
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const article = await res.json()
  return {
    props: {
      article: article
    }
  }
}

export default SsgPage
