import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";

export const useAirdrop = () => {
  const [csvData, setCsvData] = useState<string[][]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isAirdropping, setIsAirdropping] = useState(false);
  const { toast } = useToast();

  const handleCsvUpload = async (file: File) => {
    setIsUploading(true);
    try {
      const text = await file.text();
      const rows = text.split('\n').map(row => row.split(','));
      setCsvData(rows);
      toast({
        title: "CSV Uploaded",
        description: `Successfully processed ${rows.length} rows of data.`,
      });
    } catch (error) {
      toast({
        title: "Upload Error",
        description: "There was an error processing the CSV file.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const initiateAirdrop = async (tokenAmount: number, message: string) => {
    setIsAirdropping(true);
    try {
      // Simulate airdrop process
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast({
        title: "Airdrop Successful",
        description: `Airdropped ${tokenAmount} tokens to ${csvData.length} donors with message: "${message}"`,
      });
    } catch (error) {
      toast({
        title: "Airdrop Error",
        description: "There was an error during the airdrop process.",
        variant: "destructive",
      });
    } finally {
      setIsAirdropping(false);
    }
  };

  return {
    csvData,
    isUploading,
    isAirdropping,
    handleCsvUpload,
    initiateAirdrop,
  };
};