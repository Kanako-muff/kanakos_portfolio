import React, { useState } from "react";
import List from "./List";
import Items from "./Items";
import { projects } from "../../Data";

const Portfolio = () => {
  const [projectItems, setMenuItems] = useState(projects);
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title text-cs">Portfolio</h2>
      <p className="section__subtitle">
        My <span>Works</span>
      </p>

      <List />

      <div className="portfolio__container container grid">
        <Items projectItems={projectItems} />
      </div>
    </section>
  );
};

export default Portfolio;
