const { convert } = require('html-to-text');

module.exports = function strip(content, ignoreEl){
    const selectors = []
    for(const el of ignoreEl){
        selectors.push({
            selector: el, 
            format: 'skip'
        })
    }
    const options = {
        wordwrap: false,
        ignoreImage: true,
        selectors
    };
    return convert(content, options);
}