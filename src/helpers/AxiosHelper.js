import axios from "axios";

export const fetchData = async(movieName) => {
    const apiEp = `https://www.omdbapi.com/?apikey=b62a6226&t=${movieName}`

    try{
        const { data } = await axios.get(apiEp)
        // console.log(data)
        return data
    }catch(error){
        console.log(error)
    }
}