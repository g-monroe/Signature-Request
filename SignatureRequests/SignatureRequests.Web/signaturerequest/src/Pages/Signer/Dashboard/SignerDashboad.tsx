import * as React from 'react';

export interface ISignerDashboardProps {
    
}
 
export interface ISignerDashboardState {
    
}
 
class SignerDashboard extends React.Component<ISignerDashboardProps, ISignerDashboardState> {
    state :ISignerDashboardState= {  }
    render() { 
        return (  
            <h3>Add a signature to your form</h3>
        );
    }
}
 
export default SignerDashboard;