import { useContext, createContext, ReactNode } from "react";

const AuthContext = createContext<any>(undefined);

interface AuthProviderProps {
    children: ReactNode;
    value: any;
}

export function AuthProvider({ children, value }: AuthProviderProps) {
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuthValue() {
    return useContext(AuthContext);
}