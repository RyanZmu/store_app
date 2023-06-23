import { Field, Form, Formik } from "formik";
import { Alert, Button, Container, Image } from "react-bootstrap";

const OrderForm = (props) => {
    //First just dump the info the customer gives and say "Order Submitted!" and then later store this customer data in the DB and implement a way to keep track of a users order history under profile page

    //variables for calculating costs
    let totalPrice = 0
    let subTotal = 0
    let taxToAdd = 0
    const sales_tax = 0.08

    function getTotalPrice() {
        props.cart.map(item => {
           return subTotal += item.price * item.quantity
        })

        taxToAdd = subTotal * sales_tax
        totalPrice = subTotal + taxToAdd
    }

    getTotalPrice()


    return (
        <div>
            <Container id='order-summary-container'>
                <h3>Items Ordered:</h3>
                {props.cart.map(item => {
                    return (
                        <div key={item._id}>
                        {`Product: ${item.name} Price: ${item.price * item.quantity} Qty: ${item.quantity} \n`}
                        </div>
                    )
                })}
                <h3>{`
                    Subtotal: $${subTotal}
                    Taxes: $${taxToAdd.toFixed(2)}
                    Total Price: $${totalPrice.toFixed(2)}
                    `}
                </h3>
            </Container>

            <Formik
            initialValues={
                {firstName:'',
                 lastName:'',
                 emailAddress:'',
                 billingAddress:'',
                 cardNumber:'',
                 nameOnCard:'',
                 securityCode:'',
            }}
            onSubmit={(values,setSubmitting) => {
                console.log(values)
                window.alert('Order Submitted!')
                //figure out a good way to reset form
            }}
            >
                {props => {
                   return (
                    <Container id='order-details-container'>
                    <h2>Order Details</h2>
                        <Form id='order-form'>
                         <Field
                         className='form-control'
                         type='text'
                         name='firstName'
                         placeholder='First Name'
                         value={props.values.firstName}
                         required
                         />
                        <Field
                         className='form-control'
                         type='text'
                         name='lastName'
                         placeholder='Last Name'
                         value={props.values.lastName}
                         required
                         />
                        <Field
                         className='form-control'
                         type='email'
                         name='emailAddress'
                         placeholder='Email Address'
                         value={props.values.emailAddress}
                         required
                         />
                        <Field
                         className='form-control'
                         type='text'
                         name='billingAddress'
                         placeholder='Billing Address'
                         value={props.values.billingAddress}
                         required
                         />
                        <Field
                         className='form-control'
                         type='text'
                         name='nameOnCard'
                         placeholder='Name on Card'
                         value={props.values.nameOnCard}
                         required
                         />
                       <Field
                         className='form-control'
                         type='number'
                         name='cardNumber'
                         placeholder='Card Number #'
                         value={props.values.cardNumber}
                         required
                         />
                       <Field
                         className='form-control'
                         type='number'
                         name='securityCode'
                         placeholder='Security Code'
                         value={props.values.securityCode}
                         required
                         />
                        <Button type='submit'>Submit</Button>
                    </Form>
                    </Container>
                )}}
            </Formik>
        </div>
    )
}

export default OrderForm