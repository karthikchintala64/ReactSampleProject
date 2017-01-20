import { LOGIN, GET_ACCESS_TOKEN, SET_ACCESS_TOKEN } from './actiontypes';

export const Login = () => {
    return {
        type: LOGIN
    }
}

export const GetAccessToken = () => {
    return {
        type: GET_ACCESS_TOKEN
    }
}

export const SetAccessToken = (accessToken) => {
    return {
        type: SET_ACCESS_TOKEN,
        payload:{
            accessToken:accessToken
        }
    }
}