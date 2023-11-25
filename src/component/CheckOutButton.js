import { PayPalButtons } from '@paypal/react-paypal-js'
import React, { useState } from 'react'

const CheckOutButton = ({product}) => {
    console.log(product)

    const [paidFor, setPaidFor] = useState(false)
    const [error, setError] = useState(null)

    const handleApprove =(orderID)=>{
// call backend function to fullfil the order

setPaidFor(true)
    }

    if(paidFor) {
        alert("Payment recieved")
    }
    if (error) {
        alert(error)
    }
  return (
   <PayPalButtons 
   style={{
    color: "silver",
    layout: "horizontal",
    tagline: false
   }}
   onClick={(data, actions)=>{
    // revalidate the onlick on the buon
   }}
   createOrder={(data, actions) => {
    return actions.order.create({
        purchase_units: [
            {description: product.plan,
            amount: {
                value: product.price
            }}
        ]
    })
   }}
   onApprove={async(data, actions)=>{
const order = await actions.order.capture();
console.log('order', order);

handleApprove(data.orderID);
   }}
   onCancel={()=>{
    // Define what should happen if the user cancels the checkout
   }}
   onError={(err) =>{
    setError(err);
    console.log("Paypal checkout Error", err)
   }}
   />
  )
}

export default CheckOutButton