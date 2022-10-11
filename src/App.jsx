import Box from './component/Box';
import Home from './component/Home';
import Navbar from './component/Navbar';

function App() {
    return (
        <div className='bg-[url("assets/bg.jpg")] min-h-screen bg-cover bg-center grid place-content-center'>
            <Box>
                <Navbar />
                <Home />
            </Box>
        </div>
    );
}

export default App;
