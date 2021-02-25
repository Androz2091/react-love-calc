import MD5 from 'crypto-js/md5';
import { useState } from 'react';

const Form = () => {

    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');

    const calculateLove = (name1, name2) => {
        if (!name1 || !name2) return '';
        const string = [name1.toLowerCase().trim(), name2.toLowerCase().trim()].sort((a, b) => b.localeCompare(a)).join('');
        const numbers = MD5(string).toString().split('').filter((c) => !isNaN(c)).reverse();
        const baseResult = parseInt(numbers[2] + numbers[3]) === 99 ? parseInt(numbers[0]) > 4 ? 100 : 99 : parseInt(numbers[2] + numbers[3]);
        return baseResult === 91 ? 98 : baseResult;
    }

    return (
        <div className="form space-x-2 text-white flex-col md:flex-row text-2xl">
            <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Nom 1"
                className="p-6 text-2xl border-pink rounded focus:outline-none"
            />
            <p>+</p>
            <input
                value={secondName}
                onChange={(e) => setSecondName(e.target.value)}
                placeholder="Nom 2"
                className="p-6 text-2xl border-pink rounded focus:outline-none"
            />
            <p> =</p>
            <h2 className="text-6xl">{(firstName && secondName) ? calculateLove(firstName, secondName) : '... '}%</h2>
            <p>d'amour</p>
            <svg class="heart" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ fill: `rgb(255,0,0,${calculateLove(firstName, secondName) / 100})` }}>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                </path>
            </svg>
        </div>
    )
}

export default Form;
