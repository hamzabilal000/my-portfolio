import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import CursorSmoke from './components/CursorSmoke'

function App() {
    return (
        <>
            <CursorSmoke />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
