import "./App.css";
import VideoCard from "./VideoCard";
import { useState, useEffect } from "react";
import db from "./firebase";

function App() {
  const [reels, setReels] = useState([]);
  useEffect(() => {
    db.collection("insta-clone").onSnapshot((snapshot) =>
      setReels(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="app">
      <div className="app__top">
        {/* image at top */}
        <img className="app__icon" src="/images/mingle.png" alt="me" />
        <h1> 중스타그램 </h1>
      </div>
      {/* Container of app__videos  */}
      <div className="app__videos">
        {reels.map(({ channel, avatarSrc, song, url, likes, shares }) => (
          <VideoCard
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
