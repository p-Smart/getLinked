import axios from 'axios'

const fetchData = async (endpoint, payload, method='POST') => {

    if(method==='POST'){
        const {data} = await axios.post(`${process.env.NEXT_PUBLIC_API}${endpoint}`, {...payload})
        return data
    }
    if(method==='GET'){
        const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API}${endpoint}`)
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