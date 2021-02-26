const MD5 = require('crypto-js/md5');
const fs = require('fs');

const nomsRaw = fs.readFileSync('noms.txt', 'utf-8').split('\n');
const noms = nomsRaw.map((n) => n.split(';')[0]);

let found = 0;

for (let i = 0; i < noms.length; i++) {
    const nom = noms[i];
    for (let ii = 0; ii < noms.length; ii++) {
        const nouveauNom = noms[ii];
        const string = [nom.toLowerCase().trim(), nouveauNom.toLowerCase().trim()].sort((a, b) => b.localeCompare(a)).join('');
        const numbers = MD5(string).toString().split('').filter((c) => !isNaN(c)).reverse();
        const baseResult = parseInt(numbers[2] + numbers[3]) === 99 ? parseInt(numbers[0]) > 4 ? 100 : 99 : parseInt(numbers[2] + numbers[3]);
        if (baseResult === 0) {
            if (nom === 'Maëlle') {
                console.log(nouveauNom)
            }
            found++;
        }
    }
}
