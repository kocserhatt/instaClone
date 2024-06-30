import {supabase} from '../supabase/supabase.js';
import { useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from './authContext.js';

export const AuthProvider = ({ children }) => {
    const [session, setSession] = useState(null)

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })

      return () => subscription.unsubscribe()
    }, [])
    return (
        
        <AuthContext.Provider value={{session, setSession}}>
            {children}
        </AuthContext.Provider>
    )
}