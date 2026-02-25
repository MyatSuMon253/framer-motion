import { motion } from "framer-motion";

const DraggableBox = () => {
  return (
    <motion.div
      className="bg-black text-white font-mono px-3 py-2 rounded-md"
      drag
      dragConstraints={{ top: 0, bottom: 100 }}
    >
      Draggable Box
    </motion.div>
  );
};

export default DraggableBox;
