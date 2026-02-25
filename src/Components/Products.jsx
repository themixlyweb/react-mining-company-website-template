/**CORE LIBRARIES IMPORT */
import React from "react";
import { motion } from "framer-motion";

/**IMAGE IMPORTS */
import sand1 from "../Images/sand-1.webp";
import sand2 from "../Images/sand-2.webp";
import sand3 from "../Images/sand-3.webp";

const fadeOnly = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Products = () => {
  return (
    <motion.section
      className="expertise-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="expertise-wrapper">
  {/* HEADER */}
  <motion.div className="expertise-header" variants={fadeOnly}>
    <span className="sub-title">Precision in Every Grain</span>
    <h2 className="section-heading">
      Mineriq’s Expertise in Silica Sand Processing
    </h2>
  </motion.div>

  {/* CARDS */}
  <motion.div className="expertise-cards" variants={stagger}>
    {[
      "Premium Quality Grade Silica Sand",
      "Superior Quality Silica Sand",
      "Containerized Quality Silica Sand",
    ].map((title, index) => {
      // array of images corresponding to each product
      const images = [sand1, sand2, sand3];
      const imgSrc = images[index];

      return (
        <motion.div className="expertise-card" key={index} variants={fadeOnly}>
          <div className="frame-box"></div>

      
          <img src={imgSrc} alt={title} />

          <motion.div
            className="img-fade-overlay"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          <h3>
            {title.split(" ").slice(0, 2).join(" ")} <br />
            {title.split(" ").slice(2).join(" ")}
          </h3>
        </motion.div>
      );
    })}
  </motion.div>
</div>

    </motion.section>
  );
};

export default Products;
