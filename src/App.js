import { useStoreState } from 'easy-peasy';
import Form from './components/Form';
import Header from './components/Header';

const App = () => {

    const percent = useStoreState((state) => state.love.percent);
    
    return (
        <div className="app" style={{ backgroundImage: percent === 100 ? 'url(https://data.photofunky.net/output/image/8/8/1/5/881593/photofunky.gif)' : '', backgroundColor: percent !== 100 ? '#F87171' : 'red' }}>
            <Header />
            <Form />
        </div>
    );
}

export default App;
