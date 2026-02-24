import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "./Button";

type Props = {
  onNext: () => void;
  onBack: () => void;
};

const PaymentSchema = Yup.object({
  cardNumber: Yup.string()
    .matches(/^\d{16}$/, "Must be 16 digits")
    .required("Required"),
  expiry: Yup.string()
    .matches(/^\d{2}\/\d{2}$/, "Format MM/YY")
    .required("Required"),
  cvv: Yup.string()
    .matches(/^\d{3}$/, "Must be 3 digits")
    .required("Required"),
});

function PaymentStep({ onNext, onBack }: Props) {
  return (
    <Formik
      initialValues={{
        cardNumber: "",
        expiry: "",
        cvv: "",
      }}
      validationSchema={PaymentSchema}
      onSubmit={() => {
        onNext();
      }}
    >
      <Form className="space-y-6">
        <h2 className="text-lg font-semibold">Payment Details</h2>

        <div className="grid gap-4">
          <div>
            <Field
              name="cardNumber"
              placeholder="Card Number"
              className="input"
            />
            <ErrorMessage
              name="cardNumber"
              component="div"
              className="text-sm text-red-500"
            />
          </div>

          <div>
            <Field name="expiry" placeholder="MM/YY" className="input" />
            <ErrorMessage
              name="expiry"
              component="div"
              className="text-sm text-red-500"
            />
          </div>

          <div>
            <Field name="cvv" placeholder="CVV" className="input" />
            <ErrorMessage
              name="cvv"
              component="div"
              className="text-sm text-red-500"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <Button type="button" variant="outline" onClick={onBack}>
            Back
          </Button>

          <Button type="submit">Review Order</Button>
        </div>
      </Form>
    </Formik>
  );
}

export default PaymentStep;
