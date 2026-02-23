import { motion } from "framer-motion";

function App() {
  return (
    <main className="h-screen flex items-center justify-center">
      <motion.button
        className="bg-black text-white p-4 rounded-md font-mono"
        whileHover={{ scale: 2 }}
        whileTap={{ scale: 2.5 }}
      >
        Click Me!
      </motion.button>
    </main>
  );
}

export default App;
