import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

function StripeButton({ price }) {
  const priceInCents = price * 100;
  const publishableKey =
    'pk_test_51HlHz8LeJ1NBFo8KJeTM8iAoNWWGUuv0m1BmA9DYQTfRPPSeuLdfRq7mkg4el5UOmJYLS7gUFWQYJMqo4xaqX71Y00LpvbDPXX';
  return (
    <StripeCheckout
      token={(t) => console.log(t)}
      stripeKey={publishableKey}
      amount={priceInCents}
      currency="USD"
      label="Buy now"
      name="CRWN Clothing B.V."
      description={`Your total is $${price}`}
      image="https://sendeyo.com/up/d/f3eb2117da"
      shippingAddress
      billingAddress
    />
  );
}

export default StripeButton;
