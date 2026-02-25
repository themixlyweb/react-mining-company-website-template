/**CORE LIBRARIES IMPORT */
import React from "react";
import { motion } from "framer-motion";

/**COMPONENTS IMPORT */
import Products from "../Components/Products";
import Information from "../Components/Information";

/**IMAGES IMPORT */
import welcomeInfo from '../Images/welcome-info.webp';
import heroImg from '../Images/hero-img.webp';
import dividerImg from '../Images/divider-vector.webp';

const Home=()=>{
    return(
        <>  
       <section className="hero-section">
  <div className="hero-wrapper">

    {/* TEXT CONTENT */}
    <motion.div
      className="hero-content"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.p
        className="section-subheading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
       Innovating Excellence Across Every Grain of Silica Sand
      </motion.p>

      <motion.h1
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Leaders in Premium Silica Sand Production Across Kutch Region
      </motion.h1>
    </motion.div>

    {/* HERO IMAGE */}
    <motion.div
      className="hero-image"
      initial={{ opacity: 0, x: 120 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <img src={heroImg} alt="Leaders in Premium Silica Sand Production Across Kutch Region" />
    </motion.div>

  </div>
</section>

{/* ===== BLACK DIAGONAL DIVIDER ===== */}
<div
  className="section-divider"
>
  <img src={dividerImg} alt="" />
</div>

         <Information 
         image={welcomeInfo}
 subtitle="Experts in Superior-Grade Silica Sand Manufacturing"
title=" Welcome to Mineriq"
description="Welcome to Mineriq, a name synonymous with innovation and excellence in silica sand production. As pioneers in delivering high-quality silica sand, we take pride in our role as industry leaders, providing solutions tailored to diverse industrial applications. Our journey, rooted in the vibrant region of Kutch, Gujarat, has been marked by a commitment to sustainability, innovation, and quality. From glass production to oil and gas, our silica sand is trusted for its consistency, purity, and reliability. With a steadfast focus on customer satisfaction, we ensure timely deliveries and tailored solutions that meet the dynamic needs of our global clientele. At Mineriq, we are not just suppliers but partners in your success, shaping a future built on trust and excellence."
showGradient={true}
/>

        <Products />

        </>
    )
};

export default Home;