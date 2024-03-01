import api from '@/utils/api';
import { useMutation } from '@tanstack/react-query';
import useSession from './state/useSession';
import { useRouter } from 'expo-router';
import Toast from 'react-native-toast-message';
import { AxiosResponse } from 'axios';
import { useState } from 'react';

const useLogin = ()=>{    
    const { setSession, setLoading } = useSession()
    const [errorMessage, setErrorMessage] = useState("حدث خطأ ما")
    const router = useRouter()
    return useMutation({
        mutationFn: async({email, password}:{email: string, password: string}): Promise<any>=> {
            setLoading(true)    
            await api.post<Session, AxiosResponse<Session, {msg: string}>>(`/Auth/login`, {email:email, password:password},{
                headers:{
                    'Content-Type':'application/json'
                }
            }).then((res)=>{
                setSession(res.data)
                setLoading(false)
                router.replace('/(tabs)/home')
            }).catch((err)=>{
                setLoading(false)
                Toast.show({
                    type:'error',
                    text1:'خطأ',
                    text2:err.response.data
                })
                console.log(err.response);
            })
        }
    })
}
export default useLogin