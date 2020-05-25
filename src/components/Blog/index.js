import React, { useState, useEffect } from "react";
import Card from "./card";
import { CardsWrapperCss, LinkCss } from "./index.css";
const FEED = "https://medium.com/feed/kappa-london";

const BlogComponent = () => {
  const [posts, setPosts] = useState([]);

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

  return (
    <CardsWrapperCss>
      {posts.map((post) => {
        const guidArray = post.guid.split("/");
        const id = guidArray[guidArray.length - 1];
        return (
          <LinkCss key={id} to={`/blog/${id}`}>
            <Card post={post} />
          </LinkCss>
        );
      })}
    </CardsWrapperCss>
  );
};

export default BlogComponent;
