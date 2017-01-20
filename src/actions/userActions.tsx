import { GET_USER_DETAILS, SET_USER_DETAILS } from './actiontypes';

import {store} from '../store'

import * as request from 'superagent';

export const GetUserDetails = () => {
    return {
        type: GET_USER_DETAILS
    };
}

export const SetUserDetails= (jsonData)=>{
    alert(jsonData  )
    return {
        type:SET_USER_DETAILS,
        payload:{
            data: jsonData
        }
    }
}

export const FetchUserDetails = () => {
    return (dispatch:Function, getState:Function) => {
        return new Promise((resolve, reject) => {
            request
                .get('https://chintalasharepoint.sharepoint.com/_api/web/currentuser')
                .set('Authorization','Bearer '+localStorage.getItem('access-token'))
                .end((err, response) =>{
                    if(err) reject(err);
                    dispatch({type:SET_USER_DETAILS, payload:JSON.parse(response.text)})
                })
        });
    };
}