// card.js
import React, { useEffect, useState } from "react";
import cardStyle from "../css/card.module.css";
import Axios from "axios";
import Header from "./Header";

const Card = () => {
  const [pics, setPics] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          `https://pixabay.com/api/?key=39756676-bf84a69d7d7e3849077f2bdfe&q=${searchQuery}`
        );
        setPics(response.data.hits);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchQuery]); // Trigger the API call when searchQuery changes

  return (
    <div>
      <Header setSearchQuery={setSearchQuery} />{" "}
      {/* Pass setSearchQuery as a prop */}
      <div className={cardStyle.cardContainer}>
        <div className={cardStyle.cards}>
          {pics.map((pic) => (
            <div className={cardStyle.cardContent} key={pic.id}>
              <img src={pic.largeImageURL} alt="cardimage" />
              <div className={cardStyle.cardProps}>
                <h1 className={cardStyle.author}>Photo by: {pic.user}</h1>
                <h4>Downloads: {pic.downloads}</h4>
                <h4>Views: {pic.views}</h4>
                <h4>Liked: {pic.likes}</h4>
                <span className={cardStyle.tag}>
                  {pic.tags.split(",").map((tag, index) => (
                    <span
                      key={index}
                      style={{
                        padding: "5px",
                        borderRadius: "10px",
                        backgroundColor: "darkgrey",
                        fontFamily:
                          "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                        fontSize: "12px",
                        marginRight: "5px",
                      }}
                    >
                      #{tag.trim()}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
