const strip = require('./strip')
const log = require('hexo-log')()
const ai = require('./ai')

const config = hexo.config.aiexcerpt
hexo.extend.filter.register('after_post_render', async function (data) {
    if(config.default_enable)data.aiexcerpt = data.aiexcerpt || true
    if(!data.aiexcerpt || data.excerpt || data.description)return data
    const content = strip(data.content, config.ignoreEl);
    if(content.length > config.max_token){
        log.info(`文章 ${data.title} 超过max_token限制`);
        return data
    }
    data.excerpt = await ai(config.token, config.api, content, config.prompt, config.max_token)
    log.info(`摘要 ${data.title} 完成`);
    return data
});