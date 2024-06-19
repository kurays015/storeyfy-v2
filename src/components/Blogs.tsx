import { blogCards } from "@/lib/blogCards";
import BlogCard from "@/components/BlogCard";
import HeaderTitle from "@/components/HeaderTitle";

export default function Blogs() {
  return (
    <div>
      <HeaderTitle className="mb-6 border-b text-lg font-semibold tracking-wide text-slate-700 dark:text-white">
        Blogs
      </HeaderTitle>
      <div className="grid customSm:grid-cols-1 600px:grid-cols-2 600px:gap-6 md:grid-cols-4 lg:grid-cols-4 lg:gap-8">
        {blogCards.map((blog) => (
          <BlogCard key={blog.title} {...blog} />
        ))}
      </div>
    </div>
  );
}
