import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const TourCard = ({ tour }) => {
  return (
    <motion.div 
      className="bg-white p-4 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0,0,0,0.3)" }}
    >
     
      <img src={tour.image} alt={tour.name} className="w-full h-48 object-cover rounded-lg" />

      <h3 className="text-xl font-bold text-primary mt-4">{tour.name}</h3>
      <p className="text-accent font-semibold text-lg">₹{tour.price}</p>

      <Link to="/contact">
        <button className="mt-4 w-full bg-accent text-white py-2 rounded-lg hover:bg-secondary transition-all">
          More Information
        </button>
      </Link>
    </motion.div>
  );
};

export default TourCard;
