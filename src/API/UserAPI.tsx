import * as request from 'superagent';
import 'isomorphic-fetch';
export default {
    GET: (url) => {
        return new Promise((resolve, reject) => {
            request
                .get(url)
                .end((err, response) =>{
                    if(err) reject(err);
                    resolve(JSON.parse(response.text))
                })
        });
    }
}