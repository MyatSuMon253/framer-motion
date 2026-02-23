import { motion } from "framer-motion";

function App() {
  return (
    <main className="m-10">
      <motion.div
        className="bg-black px-3 py-2 rounded-md text-red-500 text-center w-40 h-20"
        animate={{ x: "500px", y: "200px" }}
      >
        Hello World
      </motion.div>
    </main>
  );
}

export default App;
