const { OpenAIClient, AzureKeyCredential } = require("@azure/openai");

// You will need to set these environment variables or edit the following values
const endpoint = "https://open-ai-test-sample.openai.azure.com/"//process.env.ENDPOINT;
const azureApiKey = "2c43d893423c4713977d4e427b5d7d54"//process.env.AZURE_API_KEY;

const messages = [
  { role: "system", content: "You are a helpful assistant. You will talk like a pirate." },
  { role: "user", content: "Can you help me?" },
  { role: "assistant", content: "Arrrr! Of course, me hearty! What can I do for ye?" },
  { role: "user", content: "What's the best way to train a parrot?" },
];

async function main() {
  console.log("== Chat Completions Sample ==");

  const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
  const deploymentId = "test";
  const result = await client.getChatCompletions(deploymentId, messages);

  for (const choice of result.choices) {
    console.log(choice.message);
  }
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});

module.exports = { main };