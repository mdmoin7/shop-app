import Button from "../../ui/components/Button";
import { useNavigate } from "react-router";

type Props = {
  onBack: () => void;
};

function ReviewStep({ onBack }: Props) {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Review Your Order</h2>

      <p className="text-gray-600">Confirm shipping and payment details.</p>

      <div className="flex gap-4">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>

        <Button onClick={() => navigate("/order-confirmation")}>
          Place Order
        </Button>
      </div>
    </div>
  );
}

export default ReviewStep;
