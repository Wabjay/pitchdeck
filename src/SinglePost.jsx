import { useParams, useNavigate  } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import Photo from "./assets/blogImg.png"
import Photo2 from "./assets/blogImg2.png"
import BlogCard from "./component/BlogCard";
import Arrow from "./assets/arrowRight.svg"

const SinglePost = () => {

  let params  = useParams();
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery({ query: '(max-width: 1023px)' })


   console.log(params)
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
          <button
        className="flex w-fit items-center bg-white p-3 rounded-[8px] border border-[#D2D2CF] shadow-backButton mb-8"
        onClick={()=> navigate(-1)}
        type="button" >
           <img src={Arrow} alt="" />
        <p>Back</p>
      </button>
          <p className="text-[24px] font-bold leading-[32px] tracking-[-0.96px] md:text-[32px] md:leading-[39px] md:tracking-[-1px] lg:text-[48px] lg:leading-[40px] text-[#2E2E27] w-fit">
            How long does it take to create a beautiful presentation  design?
          </p>
        </div>
      </div>

      <div className="bg-[#FFF]">
        <div className="w-full lg:max-w-[1152px] mx-auto px-4 md:px-6 lg:px-8 xl:px-0 py-[40px] md:py-[80px] lg:py-[100px]">
          <div className="">

          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-[#F2F1E8]">
        <div className="w-full lg:max-w-[1152px] mx-auto px-4 md:px-6 lg:px-8 xl:px-0 py-[40px] md:py-[80px] lg:py-[100px]">
         <p className="text-[24px] font-bold leading-8 tracking-[-0.96px] mb-5 md:text-[32px] md:leading-[39px] md:tracking-[-1px] md:mb-10 lg:text-[48px] lg:leading-10 lg:mb-[50px]">Most Recent</p>
          <div className="grid gap-[54px] md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3 lg:gap-y-[50px]">
          {posts.map((post, i) =>( isSmallScreen ? i < 2 : i < 3) && <BlogCard key={post.id} id={post.id} date={post.date} image={post.img} desc={post.desc} />)}

          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
