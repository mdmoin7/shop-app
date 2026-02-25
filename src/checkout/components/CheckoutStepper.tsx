type Props = {
  currentStep: number;
};

const steps = ["Shipping", "Payment", "Review"];

function CheckoutStepper({ currentStep }: Props) {
  return (
    <div className="flex justify-between">
      {steps.map((label, index) => {
        const stepNumber = index + 1;

        return (
          <div key={label} className="flex-1 text-center">
            <div
              className={`
                mx-auto w-8 h-8 flex items-center justify-center rounded-full
                ${
                  stepNumber <= currentStep
                    ? "bg-blue-600 text-white"
                    : "bg-gray-300 dark:bg-gray-700 text-gray-600"
                }
              `}
            >
              {stepNumber}
            </div>
            <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
              {label}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default CheckoutStepper;
