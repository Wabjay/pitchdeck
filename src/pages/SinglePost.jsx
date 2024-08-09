import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  doc,
  getDoc,
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase-config";
import { useMediaQuery } from "react-responsive";
import BlogCard from "../component/BlogCard";
import Arrow from "../assets/arrowRight.svg";
import MetadataComponent from "../component/Metadata";
import { store } from "../store";
import { createSlug } from "../component/slug";

const SinglePost = () => {
  let params = useParams();
  // const { blogId, blogTitle } = store();
// console.log(params.post)

  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [postLists, setPostList] = useState([]);
  // eslint-disable-next-line no-use-before-define
  // const getCollectionRef = doc(db, "posts", params.post);
  const postsCollectionRef = collection(db, "posts");
  const navigate = useNavigate();


  // const isSmallScreen = useMediaQuery({ query: '(max-width: 1023px)' })
  const isBigScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    // Get all Post

    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
const list = (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

list.map( post => createSlug(post.title) === params.post && setPost(post) )
      
setIsLoading(false);
    };


    getPosts();


    // Get Single Post
    // const getPost = async () => {
    //   const data = await getDoc(getCollectionRef);

    //   setPost(data.data());
    //   // console.log(data.data());
    // };
    // getPost();

    
  }, [params.post, postsCollectionRef]);

  return (
    <div className="w-full">
      {/* // Top Section */}
      
                 <div className="bg-[#EEFCF5]">
        <div className="w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 xl:px-0 py-[40px] tablet:py-[80px] laptop:py-[100px]">
          <button
            className="flex w-fit items-center bg-white p-3 rounded-[8px] border border-[#D2D2CF] shadow-backButton mb-8"
            onClick={() => navigate(-1)}
            type="button"
          >
            <img src={Arrow} alt="" className="rotate-[180deg]" />
            <p>Back</p>
          </button>
          <p className="capitalize text-24 font-bold tablet:text-32 laptop:text-48 text-[#2E2E27] w-fit">
            {post?.title}
          </p>
        </div>
      </div>

      <div className="bg-[#FFF]">
         <div className="w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 xl:px-0 py-[40px] tablet:py-[80px] laptop:py-[100px]">
           <div className="">
             <div className="my-6">
               {/* {console.log(post?.postText)} */}
               <p
                 className="singlePost"
                 dangerouslySetInnerHTML={{ __html: post?.postText }}
               ></p>
             </div>
           </div>
         </div>
       </div>


      {/* Recent Posts */}
      <div className="bg-[#F2F1E8]">
        <div className="w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 xl:px-0 py-[40px] tablet:py-[80px] laptop:py-[100px]">
          <p className="text-[24px] font-bold leading-8 tracking-[-0.96px] mb-5 tablet:text-[32px] tablet:leading-[39px] tablet:tracking-[-1px] tablet:mb-10 laptop:text-[48px] laptop:leading-10 laptop:mb-[50px]">
            Most Recent
          </p>

          <div className="grid gap-[54px] tablet:grid-cols-2 tablet:gap-x-8 tablet:gap-y-10 laptop:grid-cols-3 laptop:gap-y-[50px]">
            {postLists &&
              postLists.map(
                (post, i) =>
                  (isBigScreen ? i < 3 : i < 2) &&
                  createSlug(post.title) !== params.post && (
                    <>
                      <BlogCard
                        key={post.id}
                        id={post.id}
                        date={post.date}
                        image={post.image}
                        title={post.title}
                      />
                    </>
                   )
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
