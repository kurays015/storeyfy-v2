import { blogCards } from "@/lib/blogCards";
import BlogCard from "@/components/BlogCard";

export default function Blogs() {
  return (
    <div className="grid grid-cols-4 gap-8">
      {blogCards.map(blog => (
        <BlogCard key={blog.title} {...blog} />
      ))}
    </div>
  );
}
