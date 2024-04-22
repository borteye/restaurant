import React, { useState } from "react";
import InputField from "../components/InputField";
import { useSelector } from "react-redux";
import { selectCategories, selectCountries } from "../redux/features/dishSlice";
import CustomSelect from "../components/CustomSelect"; // Changed redundant import name
import { useFormik } from "formik";
import { fetchData } from "../hooks/fetch";
import { PhotoIcon } from "@heroicons/react/24/solid";

type Props = {};

const AddDish = (props: Props) => {
  const [file, setFile] = useState<File | null>(null); // Corrected type declaration
  const [preview, setPreview] = useState<string | null>(null);

  const countries = useSelector(selectCountries);
  const categories = useSelector(selectCategories);

  const country = {
    title: "Select Country",
    options: countries,
  };
  const category = {
    title: "Select Category",
    options: categories,
  };

  const formik = useFormik({
    initialValues: {
      dishName: "",
      dishPrice: "",
      dishAvailable: "",
      country: "",
      category: "",
      description: "",
      image: "",
      avatar: "",
    },
    onSubmit: async (values) => {
      try {
        let formData = new FormData();
        formData.append("file", values.avatar);
        formData.append("dishName", values.dishName);
        formData.append("dishPrice", values.dishPrice);
        formData.append("dishAvailable", values.dishAvailable);
        formData.append("country", values.country);
        formData.append("category", values.category);
        formData.append("description", values.description);
        const response = await fetch("http://localhost:5000/add-dish", {
          method: "POST",
          body: formData,
        });
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
  });

  const {
    values,
    touched,
    handleBlur,
    handleChange,
    setFieldValue,
    handleSubmit,
    errors,
  } = formik;

  return (
    <div className="w-[calc(100%-51px)] md:w-[calc(100%-60px)] h-screen overflow-y-scroll no-scrollbar p-6">
      <h1 className="text-2xl font-bold">Add a dish</h1>
      <form onSubmit={handleSubmit} className="p-10">
        <table className="w-full border px-14 border-separate border-spacing-y-20">
          <tbody>
            <tr>
              <td className="">
                <label className="font-semibold">Dish name</label>
                <br />
                <InputField
                  background={"tertiary"}
                  rounded={"rounded-md"}
                  width={"w-[70%]"}
                  type={"text"}
                  name={"dishName"}
                  handleChange={handleChange}
                  value={values.dishName}
                />
              </td>
              <td>
                <label className="font-semibold">Price</label>
                <br />
                <InputField
                  background={"tertiary"}
                  rounded={"rounded-md"}
                  width={"w-[70%]"}
                  type={"text"}
                  name={"dishPrice"}
                  handleChange={handleChange}
                  value={values.dishPrice}
                />
              </td>
              <td>
                <label className="font-semibold">Available</label>
                <br />
                <InputField
                  background={"tertiary"}
                  rounded={"rounded-md"}
                  width={"w-[50%]"}
                  type={"text"}
                  name={"dishAvailable"}
                  handleChange={handleChange}
                  value={values.dishAvailable}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label className="font-semibold">Country</label>
                <br />
                <CustomSelect
                  filterBy={country}
                  value={values.country}
                  name={"country"}
                  handleChange={handleChange}
                />
              </td>
              <td>
                <label className="font-semibold">Category</label>
                <br />
                <CustomSelect
                  filterBy={category}
                  value={values.category}
                  name={"category"}
                  handleChange={handleChange}
                />
              </td>
              <td className="flex items-center">
                <div>
                  <input
                    type="file"
                    value={values.image}
                    name={"avatar"}
                    id="avatar"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files && e.target.files[0];
                      if (file) {
                        setFieldValue("avatar", file);
                        const url = URL.createObjectURL(file);
                        setPreview(url);
                      }
                    }}
                  />
                  <label htmlFor="avatar">
                    <label className="font-semibold mr-6">Upload Image</label>

                    <PhotoIcon className="w-9 h-9 text-black cursor-pointer " />
                  </label>
                </div>

                <img
                  src={preview as string | undefined}
                  alt=""
                  className="max-w-36"
                />
              </td>
            </tr>
            <tr>
              <td colSpan={3} className="w-full">
                <textarea
                  cols={30}
                  rows={10}
                  name={"description"}
                  onChange={handleChange}
                  value={values.description}
                  className="border rounded-xl border-black w-full p-6"
                  placeholder="A small description of state of the dish "
                ></textarea>
              </td>
            </tr>
          </tbody>{" "}
          <tr>
            <td colSpan={3} className="text-center">
              <button
                type="submit"
                className="bg-black text-white py-3 px-6 rounded-xl font-semibold"
              >
                SAVE DISH
              </button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default AddDish;
