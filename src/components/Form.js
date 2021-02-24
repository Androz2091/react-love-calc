import MD5 from 'crypto-js/md5';
import { useState } from 'react';

const Form = () => {

    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');

    const calculateLove = (name1, name2) => {
        if (!firstName || !secondName) return '';
        const string = [name1.trim(), name2.trim()].sort((a, b) => a.localeCompare(b)).join('');
        const numbers = MD5(string).toString().split('').filter((c) => !isNaN(c));
        const baseResult = parseInt(numbers[0] + numbers[1]);
        return baseResult + 30 > 100 ?
            baseResult
            : baseResult + 30;
    }

    return (
        <div className="form space-x-2 text-white">
            <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Nom 1"
                className="p-2 border-pink rounded focus:outline-none"
            />
            <p>+</p>
            <input
                value={secondName}
                onChange={(e) => setSecondName(e.target.value)}
                placeholder="Nom 2"
                className="p-2 border-pink rounded focus:outline-none"
            />
            <p> =</p>
            <h2 className="text-2xl">{(firstName && secondName) ? calculateLove(firstName, secondName) : '... '}%</h2>
            <p>d'amour</p> 
        </div>
    )
}

export default Form;
