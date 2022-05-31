const token = localStorage.getItem('my-token')
export const AuthToken = {
    headers: { Authorization: `Bearer ${token}` }
}

export const apiRouteBase = 'http://localhost:8000'
// export const apiRouteBase = 'http://yquehagodecomerhoy.xyz:8000'