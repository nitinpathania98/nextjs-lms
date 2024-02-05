import axios from "axios";
import { BASE_URL } from "./baseUrl";

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
        const response = await axios.post(`${BASE_URL}${endpoint}`, payload);
        return response;

    } catch (error) {
        console.log("error in postMethod", error);
        throw error;
    }
}

///.....getMethod

const getMethod = async (endpoint: any) => {

    try {
        const response = await axios.get(`${BASE_URL}${endpoint}`);
        return response;

    } catch (error) {
        throw error;
    }
}

//....LeaveHistory

export const HistoryLeave = async (endpoint: any) => {
    try {
        const response = await getMethod(endpoint);
        return response;
    } catch (error) {
        throw error;
    }
}


//.....

export const UserDetails = async (endpoint: any) => {
    try {
        const response = await getMethod(endpoint);
        return response;
    } catch (error) {
        throw error;
    }
}
