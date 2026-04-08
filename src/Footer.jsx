
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { database, ref, get, runTransaction } from "./firebase";

const Footer = () => {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const likesRef = ref(database, "likes/count");
    get(likesRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setLikes(snapshot.val());
        }
      })
      .catch((error) => console.error("Error fetching like count:", error));
  }, []);

  const handleLikes = () => {
    const likesRef = ref(database, "likes/count");
    runTransaction(likesRef, (currentLikes) => {
      return (currentLikes || 0) + 1;
    }).then((result) => {
      if (result.committed) {
        setLikes(result.snapshot.val());
      }
    });
  };

  return (
    <footer className="footer">
      <hr className="footer-hr" />
      <div className="footer-content">
        <div className="like-container" onClick={handleLikes}>
          <p className="like-message">
            Did you like my portfolio? <FaHeart className="heart-icon" />
            <span className="like-count">{likes}</span>
          </p>
        </div>

        <div className="footer-bottom">
          <p className="footer-bottom-left">
            &copy; {new Date().getFullYear()} Vishal Songara. All rights reserved.
          </p>
          <div className="footer-bottom-right">
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <a href="#contact">Connect with me</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
