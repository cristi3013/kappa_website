import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
export const BlogPageWrapperCss = styled.div`
  margin: 100px auto;
  max-width: 700px;
  background: #f5f5f5;
  padding: 15px;
  img {
    width: 100%;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a {
    color: #0e0e0e;
  }
`;

const FEED = "https://medium.com/feed/kappa-london";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  let { id } = useParams();
  console.log("id", id);

  useEffect(() => {
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${FEED}`)
      .then((response) => {
        if (!response.ok) {
          debugger;
          throw Error("Network request failed");
        }

        return response;
      })
      .then((data) => data.json())
      .then((data) => {
        const dataItems = data.items;

        setPosts(dataItems);
      });
  }, []);

  let post = null;
  posts.forEach((p) => {
    if (p.guid.includes(id)) {
      post = p;
    }
  });

  if (!post) return null;
  return (
    <BlogPageWrapperCss>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </BlogPageWrapperCss>
  );
};

export default BlogPage;
