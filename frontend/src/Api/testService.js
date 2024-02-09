import axios from "axios";
const BASE_URL = `http://localhost:4300/`
export const fetchQuestions = async () => {
    async function getData () {
        try {
            const response = await axios.get(BASE_URL+'questions');
            return response.data
        } catch (error) {
            console.log(error)
            return null
        } finally {

        }
    }
    return await getData()
};

export const beginTest = async (data) => {
    async function getData (data) {
        try {
            const response = await axios.post(BASE_URL+'startTest', data);
            return response.data
        } catch (error) {
            console.log(error)
            return null
        } finally {

        }
    }
    return await getData(data)
}

export const endUserTest = async (data) => {
    async function getData (data) {
        try {
            const response = await axios.post(BASE_URL+'endTest', data);
            return response.data
        } catch (error) {
            console.log(error)
            return null
        } finally {

        }
    }
    return await getData(data)
}