import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { topic, getPhotosByTopicId } = props;

  return (
    <div
      className="topic-list__item"
      onClick={() => getPhotosByTopicId(topic.id)}
    >
      <span>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
