/**CORE LIBRARIES IMPORT */
import React from "react";
import { motion } from "framer-motion";

const Information=({
  image,
  title,
  subtitle,
  description,
  showGradient = false,
})=>{
    return(
        <>
     <section className="img-text-section">
  <motion.div 
    className="img-text-wrapper"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8 }}
  >
    
    {/* LEFT IMAGE */}
    <motion.div 
      className="img-box"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <img src={image} alt={title} />
    </motion.div>

    {/* RIGHT CONTENT */}
    <motion.div 
     className={`text-box ${showGradient ? 'has-gradient' : ''}`}
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {subtitle && (
        <motion.p 
          className="section-subheading"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {subtitle}
        </motion.p>
      )}

      <motion.h2 
        className="section-heading"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        {title}
      </motion.h2>

      <motion.p 
        className="section-text"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        {description}
      </motion.p>
    </motion.div>

  </motion.div>
</section>
        </>
    )
}

export default Information;