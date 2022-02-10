// axios
import axios from 'axios'

// swr
import useSWR from 'swr'


// init fetcher
const fetcher = url => axios.get(url).then(res => res.data)



// init useReporting
const useReporting = () => {

    // make request to
    const { data, error } = useSWR(`${process.env.API_ROOT}/reporting`, fetcher)


    // return 
    return {
        reporting: data,
        isLoading: !error && !data,
        isError: error
    }
}



// export 
export default useReporting