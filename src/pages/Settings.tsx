import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useAIStore } from '@/lib/openai';
import { Brain } from 'lucide-react';

const Settings = () => {
  const { toast } = useToast();
  const { apiKey, setApiKey, removeApiKey } = useAIStore();
  const [key, setKey] = React.useState(apiKey || '');

  const handleSave = () => {
    if (!key.startsWith('sk-')) {
      toast({
        title: "Invalid API Key",
        description: "Please enter a valid OpenAI API key starting with 'sk-'",
        variant: "destructive",
      });
      return;
    }

    setApiKey(key);
    toast({
      title: "Settings Saved",
      description: "Your OpenAI API key has been saved securely.",
    });
  };

  const handleRemove = () => {
    removeApiKey();
    setKey('');
    toast({
      title: "API Key Removed",
      description: "Your OpenAI API key has been removed.",
    });
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] p-8">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-primary" />
              <CardTitle>AI Configuration</CardTitle>
            </div>
            <CardDescription>
              Configure your OpenAI API key to enable AI-powered features
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="apiKey" className="text-sm font-medium">
                OpenAI API Key
              </label>
              <Input
                id="apiKey"
                type="password"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                placeholder="sk-..."
                className="font-mono"
              />
              <p className="text-sm text-muted-foreground">
                Your API key will be stored securely in your browser.
              </p>
            </div>
            <div className="flex gap-2">
              <Button onClick={handleSave}>Save API Key</Button>
              {apiKey && (
                <Button variant="destructive" onClick={handleRemove}>
                  Remove API Key
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;