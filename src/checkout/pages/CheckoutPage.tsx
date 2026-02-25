import { useState } from "react";
import CheckoutStepper from "../components/CheckoutStepper";
import ShippingStep from "../components/ShippingStep";
import PaymentStep from "../components/PaymentStep";
import ReviewStep from "../components/ReviewStep";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../cart/cartSlice";
import CartSummary from "../../cart/components/CartSummary";

function CheckoutPage() {
  const [step, setStep] = useState(1);
  const total = useSelector(selectCartTotal);

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
      <CheckoutStepper currentStep={step} />

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {step === 1 && <ShippingStep onNext={next} />}
          {step === 2 && <PaymentStep onNext={next} onBack={back} />}
          {step === 3 && <ReviewStep onBack={back} />}
        </div>

        <CartSummary total={total} hideButtons={true} />
      </div>
    </div>
  );
}

export default CheckoutPage;
