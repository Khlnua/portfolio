import { Page1 } from "@/components/Page1";
import { Work } from "@/components/Work";
import { AboutMe } from "@/components/AboutMe";
import { Contact } from "@/components/Contact";

const Projects = [
  {
    name: "Pinetour",
    title:
      "A website that showcases detailed travel routes covering the most prominent tourist regions of Mongolia. It features an interactive map and various travel plans tailored to different budgets and conditions, helping travelers find the best options for their journey.",
    image: "./images/pinetour.png",
  },

  {
    name: "Apple",
    title:
      "This project aims to create a fully responsive website that adapts seamlessly to desktop, tablet, and mobile devices. It replicates Apple's main and store pages, maintaining core design elements while ensuring optimal user experience and smooth functionality across various screen sizes.",
    image: "./images/apple.png",
  },

  {
    name: "Solar System",
    title:
      "The Solar System website displays the planets' distance from the Sun, their order, orbital periods, and axial rotation times. It provides detailed information about each planet's characteristics, movements, and orbits through interactive features and visual presentations.",
    image: "./images/solarsystem.png",
  },

  {
    name: "Dice Game",
    title:
      "In a two-player game, each player takes turns dropping a die. The player who drops the die with the highest number of pips wins the game.",
    image: "./images/dicegame.png",
  },
];

const Home = () => {
  return (
    <div className="container">
      <Page1 />
      <Work />
      <AboutMe />
      <Contact />
    </div>
  );
};
export default Home;
