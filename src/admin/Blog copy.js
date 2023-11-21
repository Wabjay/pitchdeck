

// import ReactQuill  from 'react-quill';
// import '../node_modules/react-quill/dist/quill.snow.css'  
// import React, { useState} from "react";

//   function Blog() {
//    const [body, setBody] = useState("")
//    const handleBody = e => {
//     console.log(e)
//     setBody(e)
//    }
    
//   const handlePublish = () => {
//    console.log("Show" + body)
//   };
//     return (
//       <div className='px-8 py-2'>
//         <h2 className='bg-slate-200 p-4 font-bold pl-10 text-xl '>PPT Blog Post</h2>
//         <ReactQuill 
//         placeholder="Write a blog post........"
//         modules={Blog.modules}
//         formats={Blog.formats}
//         onChange={handleBody}
//         value={body} 
//         />
//     <button  className="text-white bg-blue-700 p-2 rounded-md mt-4  " onClick={handlePublish}> Submit Post</button>

//         {/* <div dangerouslySetInnerHTML={{ __html: (body) }}
// >
          
//         </div> */}
//       </div>
   
//     );
//   }



// Blog.modules ={
//  toolbar:  [
//   [{ 'font': [] }],
//   [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
//   ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
//   [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
//   [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
//   [{ 'header': 1 }, { 'header': 2 }, { header: [3, 4, 5, 6]}],              // custom button values
//   ['blockquote', 'code-block','code'],
//   [{ 'list': 'ordered'}, { 'list': 'bullet' }],
//   [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
//   [{ 'align': [] }],
//   [{ 'direction': 'ltr' }],                         // text direction
//   ['link'],
//   ['image'],['video']
//   ['clean'],                                       // remove formatting button


// ]
// }

// Blog.formats = [
// "header",
// "font",
// "size",
// "bold",
// "italic",
// "underline",
// "strike",
// "blockquote",
// "list",
// "bullet",
// "link",
// "image",
// "video",
// "code-block",
// 'indent',
// "color",
// 'direction',
// 'clean',
// 'background',
// 'script',
// 'code',
// 'align'
// ];
  
//   export default Blog;