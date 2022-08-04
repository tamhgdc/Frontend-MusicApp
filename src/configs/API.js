export const url = 'https://127.0.0.1:8000/'
// get data
export const getFetch = (path, token) => {
    const config = {
        method: 'GET',
        headers: {
            "authorization": `Bearer ${token}`
        }
    }
    return fetch(url + path, config)
}
// create data
export const postFetch = (path, data, token = '') => {
    const config = {
        method: 'POST',
        headers: {
            "authorization": `Bearer ${token}`,
            "content-type": 'application/json',
        },
        body: JSON.stringify(data)
    }
    return fetch(url + path, config)
}
// update data
export const putFetch = (path, data, token) => {
    const config = {
        method: 'PUT',
        headers: {
            "Content-Type": 'application/json',
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ ...data })
    }
    return fetch(url + path, config)
}

export const patchFetch = (path, data, token) => {
    const config = {
        method: 'PATCH',
        headers: {
            "Content-Type": 'application/json',
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ ...data })
    }
    return fetch(url + path, config)
}
//delete data
export const deleteFetch = (path, token) => {
    const config = {
        method: 'DELETE',
        headers: {
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ ...data })
    }
    return fetch(url + path, config)
}

// get token
export const getTokenFetch = (path, data) => {
    const config = {
        method: 'POST',
        body: JSON.stringify(data)
    }
    return fetch(url + path, config)
}

