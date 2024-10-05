import { useContext, createContext, ReactNode } from "react";

interface AuthContextType {
    user: any;
    logout: any;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
    value: AuthContextType | any;
}

export const AuthProvider = ({ children, value }: AuthProviderProps) => {
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export const useAuthValue = () => {
    return useContext(AuthContext);
}
