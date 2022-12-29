import React from "react";
import { useEffect, useState } from "react";
import TopStoriesAxios from "../../services/topStories.service";

const Article = () => {
  const topStoriesAxios = new TopStoriesAxios();

  const [topStories, setTopStories] = useState([]);

  const printTopStories = () => {
    topStoriesAxios
      .homeStories()
      .then((topStoriesData) => {
        setTopStories(topStoriesData.results);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    printTopStories();
  }, []);

  return topStories.map((dataStory, indx) => {
    return (
      <div>
        <h3>{dataStory.title}</h3>
        <p>{dataStory.abstract}</p>
        <img src={dataStory.multimedia[1].url} alt={indx} />
      </div>
    );
  });
};

export default Article;
