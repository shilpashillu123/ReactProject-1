import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Timer from './Timer';
import Component1 from './Component1';
import Application from './Application';
import Todos from './Todos';
import useFetch from './useFetch';
import ControlledForm  from './ControlledForm';
import Uncontrolled  from './Uncontrolled';
import SubmitForm from './SubmitForm';
import  MultipleInputsForm from './MultipleInputsForm';
import BMI from './BMI';




   

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BMI />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
