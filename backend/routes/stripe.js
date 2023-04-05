import express from 'express';
import Stripe from 'stripe';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2020-08-27' });
const stripeRouter = express.Router();
stripeRouter.use(cors());

const YOUR_DOMAIN = process.env.CLIENT_URL;

stripeRouter.post('/create-checkout-session', async (req, res) => {
    console.log(req.body.data)

    const line_items = req.body.data.map((item) => {
        return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.title,
              },
              unit_amount: Math.round(item.price * 100),
            },
            quantity: item.quantity,
          };
    })
  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.send({url: session.url});
});

export default stripeRouter;