import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "./Button";

type Props = {
  onNext: () => void;
};

const ShippingSchema = Yup.object({
  fullName: Yup.string().min(3, "Too short").required("Required"),
  address: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  postalCode: Yup.string().min(4, "Invalid postal code").required("Required"),
});

function ShippingStep({ onNext }: Props) {
  return (
    <Formik
      initialValues={{
        fullName: "",
        address: "",
        city: "",
        postalCode: "",
      }}
      validationSchema={ShippingSchema}
      onSubmit={() => {
        onNext();
      }}
    >
      <Form className="space-y-6">
        <h2 className="text-lg font-semibold">Shipping Information</h2>

        <div className="grid gap-4">
          <div>
            <Field name="fullName" placeholder="Full Name" className="input" />
            <ErrorMessage
              name="fullName"
              component="div"
              className="text-sm text-red-500"
            />
          </div>

          <div>
            <Field name="address" placeholder="Address" className="input" />
            <ErrorMessage
              name="address"
              component="div"
              className="text-sm text-red-500"
            />
          </div>

          <div>
            <Field name="city" placeholder="City" className="input" />
            <ErrorMessage
              name="city"
              component="div"
              className="text-sm text-red-500"
            />
          </div>

          <div>
            <Field
              name="postalCode"
              placeholder="Postal Code"
              className="input"
            />
            <ErrorMessage
              name="postalCode"
              component="div"
              className="text-sm text-red-500"
            />
          </div>
        </div>

        <Button type="submit">Continue to Payment</Button>
      </Form>
    </Formik>
  );
}

export default ShippingStep;
