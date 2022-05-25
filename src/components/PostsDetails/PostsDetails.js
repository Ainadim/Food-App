import React, { useEffect, useState } from "react";
import allData from "../../FakeData/MOCK_DATA.json";
import PostData from "../../PostData/PostData";

const PostsDetails = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setPosts(allData);
  });
  return (
    <div>
      <div>
        {posts.map((dataHere) => (
          <PostData allData={dataHere} key={dataHere.id} />
        ))}
      </div>
    </div>
  );
};

export default PostsDetails;
