import axios from "axios";

export default  axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '8569706638714b38bf7ced4a5deed75f'
    }
})  