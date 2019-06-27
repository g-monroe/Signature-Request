import * as React from 'react';
import {withFormik} from 'formik';
import {InjectedFormikProps} from 'formik';
import * as yup from 'yup';
import { Form, Input, Button, Icon } from 'antd';
import "./Login-SignUp.css"
import { IUserHandler } from '../../Handlers/UserHandler';
import UserEntity from '../../Entities/UserEntity';

export interface ISignUpFormProps {
    handler:IUserHandler
}
 
export interface ISignUpFormState {
    userName:string;
    role?:string;
    email:string;
    passwordOne:string;
    passwordTwo:string;
}
 

const yupValidation = yup.object().shape<ISignUpFormState>({
     userName: yup.string().required("You must provide a username").label("Username").typeError("This is a required field") ,
     role: yup.string().label("Role") ,
     email: yup.string().required().label("Email").typeError("Must be a valid email").email() ,
     passwordOne: yup.string().required().label("Password").typeError("This is a required field"),
     passwordTwo: yup.string().required().label("Password").typeError("This is a required field").oneOf([yup.ref('passwordOne'),null], "Passwords must match")
})

// object().shape<ISignUpFormState>({
//     userName: yup.string().required().label("Username").typeError("This is a required field") ,
//     role: yup.string().required().label("Role").typeError("This is a required field") ,
//     email: yup.string().required().label("Email").typeError("Must be a valid email").email() ,
//     passwordOne: yup.string().required().label("Password").typeError("This is a required field"),
//     passwordTwo: yup.string().required().label("Password").typeError("This is a required field")
// });

class SignUpForm extends React.Component<InjectedFormikProps<ISignUpFormProps, ISignUpFormState>> {
    
    state : ISignUpFormState= {  
        userName: "",
        role: "",
        email: "",
        passwordOne: "",
        passwordTwo: ""
    }

    getValidateStatus = (Value:any)=>{
        return !! Value ?  'error' : 'success'
      }
      
      public clearForm = () =>{
        this.props.resetForm();
      }

    render() { 

        const {values,errors,handleChange,handleSubmit,isSubmitting,touched} = this.props;

        return ( 
            <Form className = "SignUpForm" onSubmitCapture = {handleSubmit} layout = "horizontal">
                <Form.Item required hasFeedback help = {errors.userName}
                    validateStatus = {this.getValidateStatus(touched.userName && errors.userName)}
                    >
                    <Input autoFocus
                        name = "userName"
                        prefix = {<Icon type = "user" style = {{color:'#b1b4b5'}}/>}
                        placeholder = "Username"
                        defaultValue = {this.state.userName} 
                        value = {values.userName} 
                        onChange = {handleChange}
    
                        >
                    </Input>
                </Form.Item>
                <Form.Item required hasFeedback  help = {errors.email}
                    validateStatus = {this.getValidateStatus(touched.email && errors.email)}
                    >
                    <Input 
                        name = "email"
                        prefix = {<Icon type = "mail" style = {{color:'#b1b4b5'}}/>}
                        placeholder = "Email"
                        defaultValue = {this.state.email} 
                        value = {values.email} 
                        onChange = {handleChange}
                        >
                    </Input>
                </Form.Item>
                <Form.Item required hasFeedback help = {errors.role}
                    validateStatus = {this.getValidateStatus(touched.role && errors.role)}
                    >
                    <Input 
                        name = "role"
                        prefix = {<Icon type = "appstore" style = {{color:'#b1b4b5'}}/>}
                        placeholder = "Role"
                        defaultValue = {this.state.role} 
                        value = {values.role} 
                        onChange = {handleChange}
                        >
                    </Input>
                </Form.Item>
                <Form.Item required hasFeedback help = {errors.passwordOne}
                    validateStatus = {this.getValidateStatus(touched.passwordOne && errors.passwordOne)}
                    >
                    <Input 
                        name = "passwordOne"
                        prefix = {<Icon type = "lock" style = {{color:'#b1b4b5'}}/>}
                        placeholder = "Password"
                        defaultValue = {this.state.passwordOne} 
                        value = {values.passwordOne} 
                        onChange = {handleChange}
                        >
                    </Input>
                </Form.Item>
                <Form.Item required hasFeedback help = {errors.passwordTwo}
                    validateStatus = {this.getValidateStatus(touched.passwordTwo && errors.passwordTwo)}
                    >
                    <Input 
                        name = "passwordTwo"
                        prefix = {<Icon type = "lock" style = {{color:'#b1b4b5'}}/>}
                        placeholder = "Password"
                        defaultValue = {this.state.passwordTwo} 
                        value = {values.passwordTwo} 
                        onChange = {handleChange}
                        >
                    </Input>
                </Form.Item>
                <Form.Item>
                    <div id = "SignUpButtons">
                        <Button htmlType = "reset" type = "ghost">Back</Button>
                        <Button htmlType = "submit" loading = {isSubmitting} type = "primary">Sign Up</Button>
                    </div>
                </Form.Item>

            </Form>
         );
    }
}
 
const Signup = withFormik<ISignUpFormProps, ISignUpFormState>({
    mapPropsToValues: () =>({
        userName: "",
        role: "",
        email: "",
        passwordOne: "",
        passwordTwo: "",
    }),
    validationSchema:yupValidation,
    handleSubmit: async (values,{setSubmitting, props}) => {
        setSubmitting(true);
        await props.handler.createUser(new UserEntity({
            Role: values.role,
            Name: values.userName,
            Email: values.email,
            Password: values.passwordOne,
        }));
        console.log("submitted");
        setTimeout(()=> setSubmitting(false),1000)
    }
})(SignUpForm);

export default Signup;