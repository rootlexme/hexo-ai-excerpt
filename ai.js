module.exports = async function ai(token, api, content, prompt, max_token) {
  const { ChatGPTAPI } = await import('chatgpt')
  const chatapi = new ChatGPTAPI({
    apiKey: token,
    apiBaseUrl: api,
  })

  const res = await chatapi.sendMessage(content, {
    systemMessage: prompt,
    maxModelTokens:Number(max_token),
  })
  return res.text
}