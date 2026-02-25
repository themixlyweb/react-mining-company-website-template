/**CORE LIBRARIES IMPORT */
import React from "react";
import { motion } from "framer-motion";

/**IOCNS IMPORT */
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const fadeOnly = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerCols = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Footer = () => {
  return (
    <motion.section
      className="footer-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="footer-top"></div>

      <motion.div className="footer-container" variants={staggerCols}>
        {/* COL 1 */}
        <motion.div className="footer-col col-1" variants={fadeOnly}>
          <h2>Mineriq</h2>
          <p>
          Mineriq is a trusted leader in premium silica sand solutions, serving diverse industries with precision and innovation. Committed to quality and sustainability, we provide reliable solutions that help businesses grow and succeed globally.
          </p>

         
          <div className="social-icons-row">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>

            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>

            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>
          </div>
        </motion.div>

        {/* COL 2 */}
        <motion.div className="footer-col col-2" variants={fadeOnly}>
          <h2>Contact Us</h2>
          <p>
            <strong>Address</strong> :   Survey No. 101/5, Village Dhordo, Taluka Bhuj, Kutch 370450, Gujarat, India
          </p>
       <p>
  <strong>Email</strong> :<br />
  <a href="mailto:info@mineriq.com">info@mineriq.com</a> <br />
  <a href="mailto:mineriq@yahoo.com">mineriq@yahoo.com</a>
</p>
<p>
  <strong>Phone</strong> :<br />
  <a href="tel:+919867523412">+91 98675 23412</a> <br />
  <a href="tel:+919844221356">+91 98442 21356</a>
</p>
        </motion.div>

        {/* COL 3 */}
        <motion.div className="footer-col col-3" variants={fadeOnly}>
          <h2>Quick Links</h2>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About Us</a></li>
            <li><a href='/products'>Products</a></li>
            <li><a href='/contact-us'>Contact Us</a></li>
            <li><a href='/product-enquiry'>Enquiry Form</a></li>
          </ul>
        </motion.div>

        {/* COL 4 */}
        <motion.div className="footer-col col-4" variants={fadeOnly}>
          <h2>Products</h2>
          <ul>
         <li><a href='/application-detail'>Premium Grade Silica Sand</a></li>
<li><a href='/application-detail'>Industrial Quality Silica Sand</a></li>
<li><a href='/application-detail'>Ultra-Clear Float Silica Sand</a></li>
<li><a href='/application-detail'>High-Purity Float Silica Sand</a></li>
<li><a href='/application-detail'>Container Grade Silica Sand</a></li>
<li><a href='/application-detail'>Borosilicate-Grade Silica Sand</a></li>
          </ul>
        </motion.div>
      </motion.div>

      {/* BOTTOM BAR */}
      <motion.div className="footer-bottom" variants={fadeOnly}>
        <p>Copyright © 2026 Mineriq. All Rights Reserved.</p>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
