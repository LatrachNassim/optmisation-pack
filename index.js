const clear = require('clear')
const chalk = require('chalk')
const args = require('minimist')(process.argv.slice(2))
const imagemin = require('imagemin') // https://www.npmjs.com/package/imagemin
const imageminOptipng = require('imagemin-optipng')
const imageminJpegtran = require('imagemin-jpegtran')

const phrase = require('./phrase')

const dossier = args.dossier;
const images = args.images;
const destination = args.dest;
const options = {
    use: [imageminOptipng({ optimizationLevel: 7 })]
}
const racc = { use: [imageminJpegtran()] }


if (!dossier) {
    return console.error(chalk.red('Vous devez fournir un --dossier'));

}
//if (Images) {
   // return console.error('Avez vous mis vos images avec l\'extension .png ou .jpg dans votre dossier ?');
//}


imagemin([dossier + '*.png'], destination, options).then(function () {
    console.log('C\'est ok ! Image optimiser !');
})
imagemin([images + '*.jpg'], destination, racc).then(function () {
    console.log("C'est ok ! Image optimiser !");
})