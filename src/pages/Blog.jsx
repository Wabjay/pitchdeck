import { useEffect, useState } from "react";
import { getDocs, collection, orderBy, query } from "firebase/firestore";
import { db } from "../firebase-config";
import BlogCard from "../component/BlogCard";
import MetadataComponent from "../component/Metadata";
import Analytics from "../component/Analytics";

const Blog = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = query(
    collection(db, "posts"),
    orderBy("date", "desc")
  );

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setIsLoading(false);
    };

    getPosts();
  }, []);

  


  return (
    <div className="mt-[60px] w-full">
<Analytics/>
<MetadataComponent
        title="Blog Post"
        description="This is a dynamic description."
      />

      {/* // Top Section */}
      <div className="bg-[#EEFCF5]">
        <div className="w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 xl:px-0 py-[40px] tablet:py-[80px] laptop:py-[100px]">
          <p className="text-[64px] font-bold leading-[72px] tracking-[-2px] text-[#2E2E27] mx-auto w-fit">
            Blog
          </p>
        </div>
      </div>

      <div className="bg-[#FFF]">
        <div className="w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 xl:px-0 my-[40px] tablet:my-[80px] laptop:my-[100px]">
          <div className="grid gap-[54px] tablet:grid-cols-2 tablet:gap-x-8 tablet:gap-y-10 laptop:grid-cols-3 laptop:gap-y-[50px]">
            {postLists &&
              postLists.map((post) => ( 
                <>
                  <BlogCard
                    key={post.title}
                    id={post.id}
                    date={post.date}
                    image={post?.image}
                    desc={post.title}
                  />
                </>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
