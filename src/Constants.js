const token = localStorage.getItem('my-token')
export const AuthToken = {
    headers: { Authorization: `Bearer ${token}` }
}