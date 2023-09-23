import axios from 'axios'

const fetchData = async (endpoint, payload) => {

    const {data} = await axios.post(`${process.env.NEXT_PUBLIC_API}${endpoint}`, payload, {
        headers: {
            Authorization: sessionId
        }
    })
    return data

    // if(data?.success){
    //     return data
    // }
    // else{
    //     throw new Error(data?.error?.message || 'An error occurred')
    // }
}

export default fetchData