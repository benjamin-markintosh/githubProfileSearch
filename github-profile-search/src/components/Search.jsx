import { useState } from "react";
import { useNavigate } from "react-router-dom";
import githubIcon from "../assets/github-mark/github-mark.svg";

function SearchComponent() {
  let [username, setUsername] = useState("");
  let navigate = useNavigate();
  function KeyDownHandler(e) {
    if (e.key === "Enter") {
      console.log(e.target.value);
      let inputText = e.target.value;
      setUsername(inputText);

      localStorage.setItem("githubUsername", inputText);
      navigate("/profile");
    }
  }

  return (
    <div>
      <div className="searchField">
        <img src={githubIcon} alt="" className="headerIcon" />
        <input
          type="text"
          className="searchInput"
          placeholder="Enter Github profile..."
          onKeyDown={KeyDownHandler}
          //value={username}
        />
      </div>
    </div>
  );
}

export default SearchComponent;
