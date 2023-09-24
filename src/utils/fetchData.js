import axios from 'axios'

const fetchData = async (endpoint, payload, method='POST') => {

    if(method==='POST'){
        const {data} = await axios.post(`https://backend.getlinked.ai${endpoint}`, {...payload})
        return data
    }
    if(method==='GET'){
        const {data} = await axios.get(`https://backend.getlinked.ai${endpoint}`)
        return data
    }

    // if(data?.success){
    //     return data
    // }
    // else{
    //     throw new Error(data?.error?.message || 'An error occurred')
    // }
}

export default fetchData