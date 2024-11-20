import { ReactNode } from 'react';
import { useAppSelector } from '../redux/hooks'
import { Navigate } from 'react-router-dom';

const Protected_Routes = ({ children }: { children: ReactNode }) => {
    const { role } = useAppSelector(state => state.auth);
    if (role === "ADMIN") {
        return children;
    }
    return <Navigate to={'/login'} replace={true} />
}

export default Protected_Routes
