import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Landing = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
              AI-PGF Donor Airdrop Tool
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Efficiently manage and distribute tokens to your donors with our advanced airdrop tool. 
              Upload CSV files, configure distributions, and execute airdrops seamlessly.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link to="/auth">
                <Button size="lg">Get Started</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;