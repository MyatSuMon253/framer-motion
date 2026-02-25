import { motion, useMotionValue, useSpring } from "framer-motion";
import { type ChangeEvent } from "react";

const MotionValueExample = () => {
  const scale = useMotionValue(1);
  const scaleSpring = useSpring(scale, {
    stiffness: 10,
    damping: 30,
    mass: 10,
    velocity: 3,
  });

  const onRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    scale.set(Number(e.target.value));
  };

  return (
    <div className="flex items-center justify-center flex-col gap-8 min-h-screen">
      <motion.div
        className="bg-black text-white font-mono px-3 py-2 rounded-md"
        style={{ scale: scaleSpring }}
      >
        Scale me
      </motion.div>
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2">
        <input
          type="range"
          min={1}
          max={5}
          defaultValue={1}
          onChange={onRangeChange}
        />
      </div>
    </div>
  );
};

export default MotionValueExample;
