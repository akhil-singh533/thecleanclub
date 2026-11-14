import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {loginUser} from '@/api/authApi'



export function useLogin() {
    const router = useRouter()
    const email = ref('')
    const password = ref('')
    const message = ref('')
    const loading = ref(false)


    async function login() {
        loading.value = true
        message.value = ''
        try{
            const response = await loginUser({
                email: email.value,
                password:password.value
            })

            message.value = response.message
            localStorage.setItem('auth_token',response.token)
            await router.push('/admin/dashboard')
        }
        catch(error){
            message.value = error.response?.data?.message || 'Login Failed'
        } finally {
            loading.value = false
        }
    }

    function handleLogout() {
        localStorage.removeItem('auth_token')
        router.push('/admin')
    }
    return {
        email,
        password,
        message,
        loading,
        login,
        handleLogout
    }
}
