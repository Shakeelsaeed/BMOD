import React from "react";
import ReactDOM from "react-dom";
import paypal from "paypal-checkout";
import { connect } from "react-redux";
import { invest } from "../../redux-implementation/actions";

const PayPalButton = paypal.Button.driver("react", { React, ReactDOM });

function PayPalCheckout({ invest, idea, total }) {
  const [approved, setapproved] = React.useState(false);
  function onAuthorize(data, actions) {
    // Optional: display a confirmation page here

    return actions.payment.execute().then(function (details) {
      setapproved(true);
    });
  }
  React.useEffect(() => {
    if (approved) {
      invest(idea, total);
    }
  }, [approved]);

  function payment() {
    const env = this.props.env;
    const client = this.props.client;

    return paypal.rest.payment.create(env, client, {
      transactions: [
        {
          amount: { total: this.props.client.total, currency: "USD" },
        },
      ],
    });
  }

  const client = {
    sandbox:
      "AWi18rxt26-hrueMoPZ0tpGEOJnNT4QkiMQst9pYgaQNAfS1FLFxkxQuiaqRBj1vV5PmgHX_jA_c1ncL",
    production:
      "AVZhosFzrnZ5Mf3tiOxAD0M6NHv8pcB2IFNHAfp_h69mmbd-LElFYkJUSII3Y0FPbm7S7lxBuqWImLbl",
    total: parseFloat(total).toFixed(2),
  };

  return (
    <PayPalButton
      env={"sandbox"}
      client={client}
      payment={payment}
      commit={true} // Optional: show a 'Pay Now' button in the checkout flow
      onAuthorize={onAuthorize}
    />
  );
}
export default connect(null, { invest })(PayPalCheckout);
