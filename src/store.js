import MD5 from 'crypto-js/md5';
import { action, createStore, computed } from "easy-peasy";

const calculateLove = (firstName, secondName) => {
    if (!firstName.trim().length || !secondName.trim().length) return '';
    const string = [firstName.toLowerCase().trim(), secondName.toLowerCase().trim()].sort((a, b) => b.localeCompare(a)).join('');
    const numbers = MD5(string).toString().split('').filter((c) => !isNaN(c)).reverse();
    const baseResult = parseInt(numbers[1] + numbers[2]) === 99 ? parseInt(numbers[0]) > 4 ? 100 : 99 : parseInt(numbers[1] + numbers[2]);
    return baseResult;
}

const store = createStore({
    love: {
        percent: computed(state => calculateLove(state.firstName, state.secondName)),
        firstName: '',
        secondName: '',
        setFirstName: action((state, payload) => {
            state.firstName = payload;
        }),
        setSecondName: action((state, payload) => {
            state.secondName = payload;
        })
    }
});

export default store;
