import  {useRouter} from "next/router"

const BlogPage = () => {
	const router = useRouter();
  return <h1>ID：{router.query.id}</h1>
}

export default BlogPage
