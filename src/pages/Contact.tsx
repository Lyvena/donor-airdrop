import { Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>Get in touch with our team</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-lg">
                <Mail className="h-5 w-5" />
                <a href="mailto:info@lyvena.xyz" className="text-primary hover:underline">
                  info@lyvena.xyz
                </a>
              </div>
              <p className="mt-4 text-gray-600">
                We're here to help with any questions about the AI-PGF Donor Airdrop Tool. 
                Feel free to reach out to us via email.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Contact;