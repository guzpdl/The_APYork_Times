import React, { useEffect, useState } from "react";
import TopStoriesAxios from "../../../services/topStories.service";

const NewsArticle = () => {
  const newStoriesAxios = new TopStoriesAxios();

  const [newStories, setNewStories] = useState([]);

  const printNewsStories = () => {
    newStoriesAxios
      .homeStories()
      .then((newStoriesData) => {
        setNewStories(newStoriesData.results);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    printNewsStories();
  }, []);

  console.log(newStories);

  return newStories.map((newsData, index) => {
    return (
      <div>
        <h1>New Story</h1>
      </div>
    );
  });
};

export default NewsArticle;
