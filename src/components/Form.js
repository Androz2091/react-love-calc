import { useState } from 'react';

const Form = () => {

    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');

    const getNumbers = (string) => {
        const occurences = [];
        for (let character in string.split('')) {
            const charOccurences = string.split('').filter((e) => e === character).length;
            occurences.push(charOccurences);
        }
        return occurences;
    }

    const calculateLove = () => {
        const string = firstName + secondName;
        let numbers = getNumbers(string);
        while (numbers.length > 2) {
            numbers = numbers[0] + numbers[numbers.length - 1];
        }
        return numbers.join('');
    }

    return (
        <div className="form space-x-2">
            <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Nom 1"
                className="p-2 border-pink rounded focus:outline-none"
            />
            <input
                value={secondName}
                onChange={(e) => setSecondName(e.target.value)}
                placeholder="Nom 2"
                className="p-2 border-pink rounded focus:outline-none"
            />
            <h2>{ calculateLove() }</h2>
        </div>
    )
}

export default Form;
