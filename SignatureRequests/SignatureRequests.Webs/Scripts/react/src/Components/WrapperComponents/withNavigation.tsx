import * as React from 'react';
import {Layout} from 'antd';
import Navigation from '../../Pages/Navigation';
import {UserConsumer} from '../../Pages/MainPage'

export interface IWithNavigationProps {
    
}
 
export interface IWithNavigationState {

}

const WithNavigation = (Component: any) => {
    class WithNavigation extends React.Component<IWithNavigationProps, IWithNavigationState> {
        render() { 
    
            return (  

                    <Layout>
                        <Layout.Header>
                            <UserConsumer>
                                {user => <Navigation userType = {user.user.type}></Navigation>}
                            </UserConsumer>
                            
                        </Layout.Header>
                        <Layout.Content>
                            <Component/>
                        </Layout.Content>
                    </Layout>  
             );
        }
    }
    return WithNavigation;
}
 
export default WithNavigation;