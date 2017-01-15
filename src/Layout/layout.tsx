import * as React from 'react';

import NavigationBar from './NavigationBar';

export default class Layout extends React.Component<any, any>{
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