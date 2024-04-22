import React from "react";
import InputField from "./InputField";
import { useFormik } from "formik";
import { checkOutSchema } from "../schemas/CheckOutSchema";
import { CheckOutInfo } from "../types/user";
import { useDispatch, useSelector } from "react-redux";
import { cartItems, defaultCart } from "../redux/features/cartSlice";
import { selectId } from "../redux/features/userSlice";
import dateFormatter from "../utils/currentDate";
import { orderNumberGenerator } from "../utils/idGenerator";
import { fetchData } from "../hooks/fetch";

type Props = {
  isCheckoutActive: boolean;
  setIsCheckoutActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const CheckOut = ({ isCheckoutActive, setIsCheckoutActive }: Props) => {
  const userId = useSelector(selectId);
  const cart = useSelector(cartItems);

  const dispatch = useDispatch();

  const handleCloseCheckOut = () => {
    setIsCheckoutActive(false);
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      streetName: "",
      streetNumber: 0,
      postalCode: 0,
      city: "",
    },
    validationSchema: checkOutSchema,
    onSubmit: async (values: CheckOutInfo) => {
      try {
        const url = "http://localhost:5000/place-order";
        const method = "POST";
        const address = `${values.postalCode}, ${values.streetName}, ${values.streetNumber}, ${values.city}`;
        const body = {
          userid: userId,
          ordernumber: orderNumberGenerator(),
          customer: values.fullName,
          status: "Complete",
          orderdate: dateFormatter(),
          address: address,
          dishes: cart,
        };

        const { success, error } = await fetchData({
          url,
          method,
          body,
        });

        if (success) {
          dispatch(defaultCart());
          setIsCheckoutActive(false);
        }
      } catch (error) {}
    },
  });

  const { values, touched, handleBlur, handleChange, handleSubmit, errors } =
    formik;

  return (
    <div
      className={`absolute inset-0 ${
        isCheckoutActive ? "flex" : "hidden"
      } justify-center text-black items-center bg-[#00000065]`}
    >
      <div className="bg-light py-6 px-8 w-[20%] flex flex-col gap-y-4 rounded-3xl ">
        <h1 className="text-2xl font-semibold">Check Out</h1>
        <div className="flex flex-col gap-y-8 ">
          <h1 className="font-semibold">Address</h1>
          <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="font-bold text-secondary">FULL NAME</label>
              <InputField
                border_bottom={"border-b-2 border-black"}
                width={"w-full"}
                type={"text"}
                value={values.fullName}
                name={"fullName"}
                handleChange={handleChange}
                handleBlur={handleBlur}
                touchedFullName={touched.fullName}
                fullNameError={errors.fullName}
              />
              {errors.fullName && touched.fullName ? (
                <div className="text-error">{errors.fullName}</div>
              ) : (
                false
              )}
            </div>
            <div>
              <label className="font-bold text-secondary">STREET NAME</label>
              <InputField
                border_bottom={"border-b-2 border-black"}
                width={"w-full"}
                type={"text"}
                value={values.streetName}
                name={"streetName"}
                handleChange={handleChange}
                handleBlur={handleBlur}
                touchedStreetName={touched.streetName}
                streetNameError={errors.streetName}
              />
              {errors.streetName && touched.streetName ? (
                <div className="text-error">{errors.streetName}</div>
              ) : (
                false
              )}
            </div>

            <div className="flex">
              <div>
                <label className="font-bold text-secondary">
                  STREET NUMBER
                </label>
                <InputField
                  border_bottom={"border-b-2 border-black"}
                  width={"w-[75%]"}
                  type={"number"}
                  value={values.streetNumber}
                  name={"streetNumber"}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touchedStreetNumber={touched.streetNumber}
                  streetNumberError={errors.streetNumber}
                />
                {errors.streetNumber && touched.streetNumber ? (
                  <div className="text-error">{errors.streetNumber}</div>
                ) : (
                  false
                )}
              </div>
              <div>
                <label className="font-bold text-secondary">POSTAL CODE</label>
                <InputField
                  border_bottom={"border-b-2 border-black"}
                  width={"w-[75%]"}
                  type={"number"}
                  value={values.postalCode}
                  name={"postalCode"}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touchedPostalCode={touched.postalCode}
                  postalCodeError={errors.postalCode}
                />
                {errors.postalCode && touched.postalCode ? (
                  <div className="text-error">{errors.postalCode}</div>
                ) : (
                  false
                )}
              </div>
            </div>
            <div>
              <label className="font-bold text-secondary">CITY</label>
              <InputField
                border_bottom={"border-b-2 border-black"}
                width={"w-full"}
                type={"text"}
                value={values.city}
                name={"city"}
                handleChange={handleChange}
                handleBlur={handleBlur}
                touchedCity={touched.city}
                cityError={errors.city}
              />
              {errors.city && touched.city ? (
                <div className="text-error">{errors.city}</div>
              ) : (
                false
              )}
            </div>
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={handleCloseCheckOut}
                className="border border-black text-black w-[45%] py-2 font-semibold"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-black text-light py-2 font-semibold w-[45%]"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
