import api from '@/services/api'

export const storeBay = async (bayData) => {
  const token = localStorage.getItem('auth_token')

  const response = await api.post('/admin/store-bays', bayData, {
    headers: { Authorization: `Bearer ${token}` },
  })

  return response.data
}
