import { useActionState } from "react";
import { SubmitButton } from "../submit-button";
import { IBlogPost } from "@/lib/models/BlogPost";
import { createBlogPostT } from "@/lib/admin-actions/blogPost";

const BlogFormServer = ({blog}:{blog:IBlogPost}) => {
  const [, formAction,] = useActionState(createBlogPostT, null);
  return (
    <div>
      <form action={formAction}>
        <input type="hidden" name="blog" value={JSON.stringify(blog)} />
        <SubmitButton />
      </form>
    </div>
  )
}

export default BlogFormServer