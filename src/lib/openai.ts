import OpenAI from 'openai';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AIStore {
  apiKey: string | null;
  setApiKey: (key: string) => void;
  removeApiKey: () => void;
}

export const useAIStore = create<AIStore>()(
  persist(
    (set) => ({
      apiKey: null,
      setApiKey: (key) => set({ apiKey: key }),
      removeApiKey: () => set({ apiKey: null }),
    }),
    {
      name: 'ai-storage',
    }
  )
);

let openaiInstance: OpenAI | null = null;

export const getOpenAIInstance = () => {
  const apiKey = useAIStore.getState().apiKey;
  if (!apiKey) return null;
  
  if (!openaiInstance) {
    openaiInstance = new OpenAI({
      apiKey,
      dangerouslyAllowBrowser: true
    });
  }
  return openaiInstance;
};

export const analyzeWithAI = async (data: any) => {
  const openai = getOpenAIInstance();
  if (!openai) return null;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are an AI assistant analyzing airdrop data. Provide insights and recommendations."
        },
        {
          role: "user",
          content: `Analyze this airdrop data and provide recommendations: ${JSON.stringify(data)}`
        }
      ]
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('AI analysis failed:', error);
    return null;
  }
};