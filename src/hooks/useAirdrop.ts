import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";

interface DonorData {
  address: string;
  amount: number;
  history?: string[];
}

export const useAirdrop = () => {
  const [csvData, setCsvData] = useState<DonorData[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isAirdropping, setIsAirdropping] = useState(false);
  const { toast } = useToast();

  const analyzeData = (data: DonorData[]) => {
    const totalDonors = data.length;
    const averageAmount = data.reduce((acc, curr) => acc + curr.amount, 0) / totalDonors;
    const uniqueAddresses = new Set(data.map(d => d.address)).size;

    return {
      totalDonors,
      averageAmount,
      uniqueAddresses,
      recommendation: averageAmount > 100 ? 'High value airdrop detected. Consider splitting into multiple transactions.' : 'Standard airdrop recommended.'
    };
  };

  const handleCsvUpload = async (file: File) => {
    setIsUploading(true);
    try {
      const text = await file.text();
      const rows = text.split('\n').map(row => {
        const [address, amount] = row.split(',');
        return { address, amount: Number(amount) };
      });

      const analysis = analyzeData(rows);
      
      setCsvData(rows);
      toast({
        title: "CSV Analysis Complete",
        description: `Processed ${analysis.totalDonors} donors. ${analysis.recommendation}`,
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
      // Simulate AI-powered optimization
      const optimizedAmount = Math.ceil(tokenAmount * 1.05); // 5% buffer for gas fees
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Airdrop Optimized",
        description: `Successfully configured airdrop with ${optimizedAmount} tokens (including gas optimization)`,
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