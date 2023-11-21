import Photo from "./assets/blogImg.png"
import Photo2 from "./assets/blogImg2.png"
import BlogCard from "./component/BlogCard";

const Blog = () => {

  const posts = [
    {
      img: Photo2,
      desc: "How long does it take to create a beautiful presentation  design?",
      date: "November 20, 2023",
      id: 12
    },
    {
      img: Photo,
      desc: "How long does it take to create a beautiful presentation  design?",
      date: "November 20, 2023",
      id: 1
    },
    {
      img: Photo2,
      desc: "How long does it take to create a beautiful presentation  design?",
      date: "November 20, 2023",
      id: 2
    },
    {
      img: Photo2,
      desc: "How long does it take to create a beautiful presentation  design?",
      date: "November 20, 2023",
      id: 3
    },
    {
      img: Photo2,
      desc: "How long does it take to create a beautiful presentation  design?",
      date: "November 20, 2023",
      id: 4
    },
    {
      img: Photo,
      desc: "How long does it take to create a beautiful presentation  design?",
      date: "November 20, 2023",
      id: 5
    },
    {
      img: Photo2,
      desc: "How long does it take to create a beautiful presentation  design?",
      date: "November 20, 2023",
      id: 6
    },
    {
      img: Photo,
      desc: "How long does it take to create a beautiful presentation  design?",
      date: "November 20, 2023",
      id: 7
    },
    {
      img: Photo2,
      desc: "How long does it take to create a beautiful presentation  design?",
      date: "November 20, 2023",
      id: 8
    },
    {
      img: Photo,
      desc: "How long does it take to create a beautiful presentation  design?",
      date: "November 20, 2023",
      id: 9
    },
    {
      img: Photo2,
      desc: "How long does it take to create a beautiful presentation  design?",
      date: "November 20, 2023",
      id: 10
    },
  ]


  return (
    <div className="mt-[60px] w-full">
      {/* // Top Section */}
      <div className="bg-[#EEFCF5]">
        <div className="w-full lg:max-w-[1152px] mx-auto px-4 md:px-6 lg:px-8 xl:px-0 py-[40px] md:py-[80px] lg:py-[100px]">
          <p className="text-[64px] font-bold leading-[72px] tracking-[-2px] text-[#2E2E27] mx-auto w-fit">
            Blog
          </p>
        </div>
      </div>

      <div className="bg-[#FFF]">
        <div className="w-full lg:max-w-[1152px] mx-auto px-4 md:px-6 lg:px-8 xl:px-0 py-[40px] md:py-[80px] lg:py-[100px]">
          <div className="grid gap-[54px] md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3 lg:gap-y-[50px]">
            {posts.map(post => <BlogCard key={post.id} id={post.id} date={post.date} image={post.img} desc={post.desc} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
