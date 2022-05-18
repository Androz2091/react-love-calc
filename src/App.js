import { useStoreState } from 'easy-peasy';
import Form from './components/Form';
import Header from './components/Header';

const App = () => {

    const percent = useStoreState((state) => state.love.percent);
    
    return (
        <div className="app" style={{ backgroundImage: percent === 100 ? 'url(https://love-calc.androz2091.fr/bg-heart.gif)' : '', backgroundColor: percent !== 100 ? percent === 0 ? '#9CA3AF' : '#F87171' : 'red' }}>
            <Header />
            <Form />
        </div>
    );
}

export default App;
