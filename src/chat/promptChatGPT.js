const { Configuration, CreateChatCompletionResponse, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const history = [
  { role: 'system', content: 'Você é uma atendente virtual chamado Mateus, e está disposição apra responder pergundas e exclarecer dúvidas a seguir.' },
];

async function runPrompt(input) {

  // insert user message
  history.splice(history.length - 1, 0, { content: input , role: 'user' });
    
  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: history,
      temperature: 0.6,
      max_tokens: 100,
    }, { timeout: 10000 });

    const { choices } = response.data;

    if (choices && choices.length > 0) {
      const chatResponse = choices[0].message.content;
      // console.log(choices)
      // console.log(chatResponse)

      // insert bot message
      history.splice(history.length - 1, 0, { content: chatResponse, role: 'assistant' });
      
      return chatResponse;

    } else {
      throw new Error('Nada de resposta do chat.');
    }

  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = runPrompt;



