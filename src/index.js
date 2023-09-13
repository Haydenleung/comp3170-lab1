import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import newsJson from "../src/sample_news_stories.json";
import "./styles.css";

// import App from "./App";

function App() {
  return (
    <div className="mainContainer">
      <h1>My News Feed</h1>
      <NewsFeed>
        {newsJson.results.map((item, index) => (
          <News
            image={item.image_url}
            title={item.title}
            link={item.link}
            creator={item.creator}
            description={item.description}
            full={item.full_description}
            key={index}
          />
        ))}
      </NewsFeed>
    </div>
  );
}

function NewsFeed(props) {
  return <div className="newsFeed">{props.children}</div>;
}

function News(props) {
  let img;
  if (!props.image || props.image.includes("mp4")) {
    img = "https://picsum.photos/id/180/200";
  } else {
    img = props.image;
  }
  let description;
  if (!props.description) {
    description = props.full;
  } else {
    description = props.description;
  }
  let author;
  if (!props.creator) {
    author = "Author: None";
  } else {
    author = "Author: " + props.creator;
  }
  return (
    <div className="news">
      <img className="image" src={img} alt="" />
      <a className="title" href={props.link}>
        {props.title}
      </a>
      <h4 className="creator">{author}</h4>
      <p className="description">{description}</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
