import { motion, useMotionValue, useTransform } from "framer-motion";

const DraggableBox = () => {
  const y = useMotionValue(0);
  const scale = useTransform(y, [-100, 0, 100], [1.6, 1, 1.6]);
  const borderRadius = useTransform(y, [-100, 0, 100], ["50%", "0%", "50%"]);
  const backgroundColor = useTransform(
    y,
    [-100, 0, 100],
    ["#219FFC", "#99FFCE", "#219FFC"],
  );
  return (
    <motion.div
      className="bg-black h-20 w-20 rounded-md"
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      style={{ y, scale, borderRadius, backgroundColor }}
    />
  );
};

export default DraggableBox;
