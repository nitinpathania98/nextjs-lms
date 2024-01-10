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
        console.log("response in USerLogin", response);
        return response;
    } catch (error) {
        console.log("error in UserLogin", error);
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

//....Post method
const postMethod = async (endpoint: any, payload: any) => {

    try {
        const response = await axios.post(endpoint, payload);
        console.log("response in postMethod", response);
        return response;

    } catch (error) {
        console.log("error in postMethod", error);
        throw error;
    }
}

///.....getMethod

const getMethod = async (endpoint: any, payload: any) => {

    try {
        const response = await axios.get(endpoint, payload);
        console.log("response in getMethod", response);
        return response;

    } catch (error) {
        console.log("error in getMethod", error);
        throw error;
    }
}

//....LeaveHistory

export const HistoryLeave = async (endpoint: any, payload: any) => {
    try {
        const response = await getMethod(endpoint, payload);
        return response;
    } catch (error) {
        throw error;
    }
}


//.....

export const UserDetails = async (endpoint: any, payload: any) => {
    try {
        const response = await getMethod(endpoint, payload);
        return response;
    } catch (error) {
        throw error;
    }
}