<template>
  <div>
    <button @click="openPaystackPopup()">Buy Tickets</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const publicKey = 'pk_test_35d147ab629a9ccb014d192254e94403fe934449'; // Replace with your Paystack public key
const email = 'customer@example.com'; // Should be dynamically set based on the logged-in user
const amount = 5000; // Set based on event ticket price


function openPaystackPopup() {
  const handler = PaystackPop.setup({
    key: publicKey,
    email: email,
    amount: amount * 100,
    currency: 'XOF',
    ref: '' + Math.floor((Math.random() * 1000000000) + 1), // Paystack uses the smallest currency unit
    callback: function(response) {
      // This function is called after the transaction is completed successfully
      handlePaymentSuccess(response.reference);
    },
    onClose: function() {
      alert('Transaction stopped');
    },
  });
  handler.openIframe();
}

const handlePaymentSuccess = async (reference) => {
  // Call your API to verify payment and record the purchase
  try {
    const response = await fetch('/api/verify-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ reference }),
    });

    if (!response.ok) {
      throw new Error('Payment verification failed');
    }

    const data = await response.json();
    console.log('Payment successful:', data);
    // Redirect or update UI based on success
  } catch (error) {
    console.error('Error verifying payment:', error);
  }
};
</script>
