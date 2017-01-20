import * as React from 'react';
import { connect } from 'react-redux';

import {store} from '../store';

import { FetchUserDetails } from '../actions/userActions';

export interface IHomeContainerProps extends React.Props<any>{
    displayName:string
}

class Home extends React.Component<IHomeContainerProps, any>{
    
    componentWillMount(){
        if(this.props.displayName=='')
            store.dispatch(FetchUserDetails());
    }

    render(){
        
        return(
            <div>Welcome, {this.props.displayName}</div>
        )
    }
}

const mapStateToProps= (state, ownProps) => {
        return ({ 
            displayName:state.user.name
        });
}

export default connect(mapStateToProps)(Home);
