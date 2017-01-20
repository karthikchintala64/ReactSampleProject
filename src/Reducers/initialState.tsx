import { List } from 'immutable';

export default{
    counter:List.of(0),
    auth:{
        accessToken:''
    },
    user:{
        name:'',
        isFetching:false
    }
} 