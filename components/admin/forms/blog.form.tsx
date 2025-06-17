import { useActionState } from "react";
import { SubmitButton } from "../submit-button";
import { IBlogPost } from "@/lib/models/BlogPost";
import { createBlogPostT } from "@/lib/admin-actions/blogPost";

const BlogFormServer = ({event}:{event:IBlogPost}) => {
  const [, formAction,] = useActionState(createBlogPostT, null);
  return (
    <div>
      <form action={formAction}>
        <input type="hidden" name="blog" value={JSON.stringify(event)} />
        <SubmitButton />
      </form>
    </div>
  )
}

export default BlogFormServer