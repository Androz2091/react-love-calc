import MD5 from 'crypto-js/md5';
import { useState, useEffect } from 'react';

const Form = () => {

    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');

    const [copied, setCopied] = useState('');

    useEffect(() => {
        if (copied) {
            setTimeout(() => {
                setCopied(false);
            }, 1000);
        }
    }, [copied])

    const calculateLove = () => {
        if (!firstName || !secondName) return '';
        const string = [firstName.toLowerCase().trim(), secondName.toLowerCase().trim()].sort((a, b) => b.localeCompare(a)).join('');
        const numbers = MD5(string).toString().split('').filter((c) => !isNaN(c)).reverse();
        const baseResult = parseInt(numbers[2] + numbers[3]) === 99 ? parseInt(numbers[0]) > 4 ? 100 : 99 : parseInt(numbers[2] + numbers[3]);
        return baseResult === 91 ? 98 : baseResult;
    }

    const copy = () => {
        const content = `Hey, ${firstName} et ${secondName} sont compatibles à ${calculateLove()}%! Calcule ton pourcentage sur https://love-calc.androz2091.fr!`;
        const copyInput = document.querySelector('#copy-input');
        copyInput.setAttribute('type', 'text')
        copyInput.setAttribute('value', content);
        copyInput.select()
        document.execCommand('copy');
        copyInput.setAttribute('type', 'hidden')
        window.getSelection().removeAllRanges()
        setCopied(true);
    }

    return (
        <>
        <input type="hidden" id="copy-input"></input>
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
        <div style={{ textAlign: 'center', height: '300px', color: 'white' }} className="mt-5 md:mt-0">
            <button className="p-5 bg-red-700 rounded text-2xl focus:outline-none" onClick={copy} style={{ backgroundColor: copied ? 'green' : '#B91C1C' }}>{ copied ? 'Score copié!' : 'Partagez votre score!' }</button>
        </div>
        </>
    )
}

export default Form;
