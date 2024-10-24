import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Activity, Star, Heart, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              AI-PGF Donor Airdrop Tool
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Revolutionize your token distribution with our AI-powered airdrop platform. 
              Smart analytics, automated processing, and seamless integration for efficient donor management.
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-xl shadow-lg"
              >
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Smart Analytics</h3>
                <p className="text-gray-600">AI-powered insights for optimal token distribution strategies</p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-xl shadow-lg"
              >
                <Activity className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Real-time Processing</h3>
                <p className="text-gray-600">Instant CSV analysis and automated validation checks</p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-xl shadow-lg"
              >
                <Rocket className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
                <p className="text-gray-600">Easy integration with existing blockchain systems</p>
              </motion.div>
            </div>

            <div className="mt-12 flex justify-center gap-4">
              <Link to="/auth">
                <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
                  Get Started
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">Contact Us</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Landing;