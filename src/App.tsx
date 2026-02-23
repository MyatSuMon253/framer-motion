import { motion } from "framer-motion";

function App() {
  return (
    <main className="h-screen flex items-center justify-center">
      <motion.div
        className="bg-black w-40 h-40"
        animate={{
          scale: [1, 2, 2.5, 2, 1],
          rotate: [0, 0, 100, 0, 0],
          borderRadius: ["0%", "50%", "0%"],
        }}
        transition={{
          delay: 2,
          repeat: Infinity,
          repeatDelay: 1,
          duration: 2,
          times: [0, 0.1, 0.2, 0.5],
        }}
      ></motion.div>
    </main>
  );
}

export default App;
