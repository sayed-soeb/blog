import { useState , useEffect } from "react";
import { db } from "./firebase";
import { doc, collection,getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
function PostDetail() {
  const [posts, setPosts] = useState([]);
  const { postId } = useParams();

//  useEffect(() => {
//   async function fetchData() {
//     let news = {};
//     const querySnapshot=await getDocs(collection(db,"blogs"));
//     const posts=querySnapshot.docs.map((doc)=> {
//       if(doc.data().id == postId){
//       console.log("hogaya");
//       console.log(doc.id);
//       console.log(doc.data().title);
//       news=doc.data();
//       console.log(news);
//     };
//     });
//     setPosts(news);
//   }
//     fetchData();
//   }, []);
useEffect(() => {
  const fetchDocById = async () => {
    // Create DocumentReference
    const docRef = doc(db, "blogs", postId) // db = getFirestore()
    
    // Fetch document
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()) {
      setPosts({
        ...docSnap.data()
      });
    } else {
      setPosts({});
    }
  }

  fetchDocById()
}, [postId]);

    return (
     <div className="post-detail">
      <h1>{posts.title}</h1>
      <p>{posts.content}</p>
     </div>
    )
  }
  
  export default PostDetail;