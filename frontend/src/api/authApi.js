import api from '@/services/api';

export const  loginUser = async(credentials) => {
    const response = await api.post('/admin/login',credentials)
    return response.data
}