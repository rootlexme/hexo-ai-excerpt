# hexo-ai-excerpt
> 为您的hexo博客提供ai摘要

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=25&pause=1000&color=F7ADAD&repeat=false&width=435&lines=npm+i+hexo-ai-excerpt)](https://git.io/typing-svg)
```
npm i hexo-ai-excerpt
```

## 配置文件
```
aiexcerpt:
  default_enable: false
  custom: false
  api: 
  token: IZEDTwtrhWX23ayVl0Pl
  model: 
  prompt: '你是一个摘要生成工具，你需要解释我发送给你的内容，不要换行，不要超过200字，只需要介绍文章的内容，不需要提出建议和缺少的东西。请用中文回答，输出的内容开头为“ai: 这篇文章介绍了”'
  ignoreEl: [
    'table', 'pre', 'figure'
  ]
  max_token: 2000,
```

**配置解析**
| 配置           | 描述                    |
| -------------- | ----------------------- |
| default_enable | 是否默认开启摘要        |
| custom         | 是否自定义接口(默认使用tianliGPT)        |
| api            | chatgpt接口地址         |
| token          | api密钥                 |
| model          | gpt模型(默认为GPT3.5-turbo)                 |
| prompt         | 前置要求内容            |
| ignoreEl       | 要排除的 `content` 内容 |
| max_token      | 最大字符限制            |

## API推荐

[tianliGPT](https://afdian.net/item/f18c2e08db4411eda2f25254001e7c00)

[晚安GPT](https://www.cartafi.org/)

[api2d](https://api2d.com/r/195259)
