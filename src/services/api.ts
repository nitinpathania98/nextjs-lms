import axios from "axios";

//...registerUser
export const registerUser = async (endpoint: any, payload: any) => {
    try {
        const response = await postMethod(endpoint, payload);
        return response;
    } catch (error) {
        throw error;
    }
}

//......UserLogin
export const UserLogin = async (endpoint: any, payload: any) => {
    try {
        const response = await postMethod(endpoint, payload);
        return response;
    } catch (error) {
        throw error;
    }
}

//....LEavRequest

export const RequestLeave = async (endpoint: any, payload: any) => {
    try {
        const response = await postMethod(endpoint, payload);
        return response;
    } catch (error) {
        throw error;
    }
}

const postMethod = async (endpoint: any, payload: any) => {

    try {
        const response = await axios.post(endpoint, payload);
        return response;
    } catch (error) {
        throw error;
    }
}