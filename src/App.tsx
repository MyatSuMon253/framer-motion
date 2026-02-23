import { motion, useMotionValue } from "framer-motion";

function App() {
  const scale = useMotionValue(2);

  return (
    <main className="h-screen flex items-center justify-center">
      <motion.h2 style={{scale}}>Hello World</motion.h2>
    </main>
  );
}

export default App;
