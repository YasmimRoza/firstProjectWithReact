import { Routes, Route, Navigate, Router } from 'react-router-dom'

export const AppRputes = () => {
    return (
        <Routes>
            <Route path='/pagina-inicial' element={<p>Página inicial</p>} />

            <Route path='*' element={<Navigate to='/pagina-inicial' />}/>
        </Routes>
    );
}