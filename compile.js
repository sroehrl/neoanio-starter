const sass = require('sass');
const fs = require('fs');
const { PurgeCSS } = require('purgecss')
const arguments = process.argv;

const styleSheetLocation = __dirname + '/public/css/style.css';




const renderScss = async () => {
    console.log('compiling...')
    const output = sass.compile(__dirname + '/scss/style.scss', {
        style: "compressed"
    });
    fs.writeFileSync(styleSheetLocation, output.css);
    if(arguments[2] === 'optimize'){
        console.log('Optimization...')

        const purgeCSSResult = await new PurgeCSS().purge({
            content: ['./app/View/*.html','./app/View/system/*.html'],
            css: ['./public/css/style.css'],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        })
        fs.writeFileSync(styleSheetLocation, purgeCSSResult[0].css)
    } else {
        console.log('done')
    }

}
renderScss();


