import * as React from 'react';
import { IndexLink, Link, withRouter } from 'react-router';

class NavItem extends React.Component<any,any>{
    render(){
        const { router, to, children } =this.props;
        
        const isActive= router.isActive(to, true);
        
        return (
            <li className={isActive? 'active': ''}>
                <Link to={to}>{children}</Link>
            </li>
        );
    }
}

var nav = withRouter(NavItem);

export default nav;