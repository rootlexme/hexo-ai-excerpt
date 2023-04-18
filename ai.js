module.exports = async function ai(custom ,token, api, model, content, prompt, max_token) {
  const { ChatGPTAPI } = await import('chatgpt')
  const chatapi = new ChatGPTAPI({
    apiKey: token,
    apiBaseUrl: api || 'https://summary.tianli0.top',
    completionParams: {
      model: model || 'gpt-3.5-turbo',
    },
    fetch: (async(url, options) => {
      if(!custom) options.body = options.body.slice(0, -1) + `, "key": "${token}"}`
      return fetch(url, {
        keepalive: true,
        ...options
      })
    })
  })
  const res = await chatapi.sendMessage(content, {
    systemMessage: prompt,
    maxModelTokens:Number(max_token),
  })
  return res.text
}