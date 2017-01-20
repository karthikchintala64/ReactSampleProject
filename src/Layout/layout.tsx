import * as React from 'react';
import { connect } from 'react-redux';

import NavigationBar from './NavigationBar';


class Layout extends React.Component<any, any>{
    render(){
        
        return(
            <div>
                <NavigationBar/>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

const mapStateToProps= (state, ownProps) => {
        return {};
}

export default connect(mapStateToProps)(Layout);