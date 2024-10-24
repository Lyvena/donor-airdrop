import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAirdrop } from "@/hooks/useAirdrop";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";

const Dashboard = () => {
  const { csvData, isUploading, isAirdropping, handleCsvUpload, initiateAirdrop } = useAirdrop();
  const [tokenAmount, setTokenAmount] = React.useState<number>(0);
  const [message, setMessage] = React.useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleCsvUpload(file);
    }
  };

  const handleAirdrop = () => {
    initiateAirdrop(tokenAmount, message);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Donor Airdrop Dashboard</h1>
        <Tabs defaultValue="upload" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upload">Upload CSV</TabsTrigger>
            <TabsTrigger value="airdrop">Airdrop</TabsTrigger>
          </TabsList>
          <TabsContent value="upload">
            <Card>
              <CardHeader>
                <CardTitle>Upload Donor CSV</CardTitle>
                <CardDescription>Upload a CSV file containing donor information.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Upload className="h-6 w-6 text-gray-500" />
                  <Input type="file" accept=".csv" onChange={handleFileChange} disabled={isUploading} />
                </div>
                {csvData.length > 0 && (
                  <p className="text-sm text-gray-600">
                    Processed {csvData.length} rows of data.
                  </p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="airdrop">
            <Card>
              <CardHeader>
                <CardTitle>Initiate Airdrop</CardTitle>
                <CardDescription>Configure and start the airdrop process.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="token-amount">Token Amount per Donor</Label>
                  <Input
                    id="token-amount"
                    type="number"
                    placeholder="Enter token amount"
                    value={tokenAmount}
                    onChange={(e) => setTokenAmount(Number(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Airdrop Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Enter a message for the airdrop"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <Button onClick={handleAirdrop} disabled={isAirdropping || csvData.length === 0}>
                  {isAirdropping ? 'Airdropping...' : 'Start Airdrop'}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;