import React, { useEffect } from "react";

function About() {
  useEffect(() => {
    document.querySelector("title").innerText = "Country Finder | About";
  });
  return (
    <div className="container">
      <h1>About</h1>
      <p>This is a simple project done with React Js</p>
      <p>I used Rest Countries API for fetching data about countries</p>
      <p>In order to show map of the countries, I used Google Map API</p>
      <p> To create this project, I used Modern React concepts like Hooks</p>
    </div>
  );
}

export default About;
