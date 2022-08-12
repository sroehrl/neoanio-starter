const sass = require('sass');
const fs = require('fs');

const renderScss = () => {
    console.log('compiling...')
    const output = sass.compile(__dirname + '/scss/style.scss', {
        style: "compressed"
    });
    fs.writeFileSync(__dirname + '/public/css/style.css', output.css);
    console.log('done')
}
renderScss();
