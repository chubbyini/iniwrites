import { useEffect, useState,useRef } from "react";
import { getDocs, collection } from "firebase/firestore";
import { PostCard, SkeletonCard } from "../components";
import { db } from "../firebase/config";
import { useTitle } from "../Hooks/useTitle";

export const HomePage = () => {
  const [nodes, setNodes] = useState(new Array(2).fill(false));
  const [toggle,setToggle]=useState(false)
  useTitle("nodes")
  const nodesRef =useRef(collection(db, "nodes"));

  useEffect(() => {
    async function getnodes() {
      const data = await getDocs(nodesRef.current);
      const nodesArray = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setNodes(nodesArray);
    }
    getnodes();
  }, [nodesRef,toggle]);

  return (
    <section>
      {nodes.map((node,index) => (
          node? 
                   ( <PostCard key={node.id} post={node} toggle={toggle}  setToggle={setToggle} />
          ):(
            <SkeletonCard key={index}/>)
      ))}
    </section>
  );
};
