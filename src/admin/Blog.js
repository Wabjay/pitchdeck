import React, { useState, useEffect } from "react";
import ReactQuill  from 'react-quill';
import '../../node_modules/react-quill/dist/quill.snow.css'  
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { Progress, Form, Upload, Button } from "antd";
// import { TailSpin } from 'react-loader-spinner'


function AdminBlog({ isAuth }) {
  const [antPics, setAntPics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [urls, setUrls] = useState([]);

  const handleAnt = e => {
    console.log(e.file.originFileObj);
    setAntPics(e.file.originFileObj);
  };


  const sendAnt = async e => {
    setLoading(true);
    console.log("uploading...");

    storage
      .ref("images/" + antPics.name)
      .put(antPics)
      .then(snapshot => {
        return snapshot.ref.getDownloadURL();
      })
      .then(url => {
        console.log(url);
        setUrls([...urls, url]);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  };



  const [formData, setFormData] = useState({
    title: "",
    postText: "",
    author: {},
    image: "",
    date: Timestamp.now().toDate(),
  });

  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // let navigate = useNavigate();

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.file });
    console.log(e.file)
  };


  
  const handlePublish = () => {

    // if (!formData.postText || !formData.image) {
    //   alert("Please fill all the fields");
    //   return;
    // }
    console.log(formData)
    setLoading(true)
    const storageRef = ref(
      storage,
      `/images/${Date.now()}${formData.image.name}`
    );

    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const postsCollectionRef = collection(db, "posts");
          addDoc(postsCollectionRef, {
            title: formData.title,
            postText: formData.postText,
            image: url,
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
            date:  date,
          })
            .then(() => {
              // navigate("/blogadmin");
              console.log(postsCollectionRef)
              setFormData({
                title: "",
                postText: "",
                image: "",
              });
            })
            .catch((err) => {
              // toast("Error adding article", { type: "error" });
            });
        });
      }
    );
  };

  const [body, setBody] = useState("")
   const handleBody = e => {
    console.log(e)
    setBody(e)
    setFormData({ ...formData, postText: e });
   }
   
  return (
    <div className="BlogPage">
      
      <div className="cpContainer">
    
        <h1>Create A Post</h1>

        <div className="inputGp">
      
        <Upload onChange={handleImageChange}
        maxCount={1}
        listType="picture"
        beforeUpload={() => false}
        >
            <Button>Upload picture</Button>
          </Upload>
                 </div>
     
          <ReactQuill 
    placeholder="Write a blog post........"
    modules={AdminBlog.modules}
    formats={AdminBlog.formats}
    onChange={handleBody}
    value={body} 
    />
        <button  className="btn search_btn" style={{marginTop: "40px"}} onClick={handlePublish}> Submit Post
       </button>
        

      </div>
    </div>
  );
}

AdminBlog.modules ={
  toolbar:  [
   [{ 'font': [] }],
   [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
   ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
   [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
   [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
   [{ 'header': 1 }, { 'header': 2 }, { header: [3, 4, 5, 6]}],              // custom button values
   ['blockquote', 'code-block','code'],
   [{ 'list': 'ordered'}, { 'list': 'bullet' }],
   [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
   [{ 'align': [] }],
   [{ 'direction': 'ltr' }],                         // text direction
   ['link'],
   ['image'],['video']
   ['clean'],                                       // remove formatting button
 
 
 ]
 }
 
 AdminBlog.formats = [
 "header",
 "font",
 "size",
 "bold",
 "italic",
 "underline",
 "strike",
 "blockquote",
 "list",
 "bullet",
 "link",
 "image",
 "video",
 "code-block",
 'indent',
 "color",
 'direction',
 'clean',
 'background',
 'script',
 'code',
 'align'
 ];

export default AdminBlog;
