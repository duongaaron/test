import { PineconeClient } from '@pinecone-database/pinecone';

if (!process.env.PINECONE_ENVIRONMENT || !process.env.PINECONE_API_KEY) {
  throw new Error('Pinecone environment or api key vars missing');
}

async function initPinecone() {
  try {
    const pinecone = new PineconeClient();

    await pinecone.init({
      environment: process.env.PINECONE_ENVIRONMENT ?? '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', //this is in the dashboard
      apiKey: process.env.PINECONE_API_KEY ?? '6eb09a79-1e33-4cfd-99fd-a3ca7597c86d',
    });

    return pinecone;
  } catch (error) {
    console.log('error', error);
    throw new Error('Failed to initialize Pinecone Client');
  }
}

export const pinecone = await initPinecone();
