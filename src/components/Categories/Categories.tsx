import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import { BasicCategoryInfo } from "../../types/dishes";
import Card from "./Card";
import { DishCatalog, CategoryCatalog } from "../../redux/features/dishSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

type Props = {};

const Categories = (props: Props) => {
  const dispatch = useDispatch();
  const getCategories = () => {
    return fetch("http://localhost:5000/categories").then((res) => res.json());
  };
  const { data } = useQuery<BasicCategoryInfo[], Error>({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  useEffect(() => {
    if (data) {
      dispatch(
        CategoryCatalog({
          categories: data,
        })
      );
    }
  }, [data, dispatch]);

  return (
    <section className="flex flex-col gap-y-8">
      <div className="flex font-bold items-center justify-between ">
        <h1 className=" text-lg">Categorires</h1>
        <div className="flex items-center text-sm gap-x-2">
          <p>View More</p>
          <div className="bg-count text-light rounded-md py-1">
            <ChevronRightIcon className="w-5 font-bold " />
          </div>
        </div>
      </div>
      <div className="flex gap-x-8 overflow-x-scroll no-scrollbar">
        <div className="flex gap-x-16  justify-center items-center">
          {data?.map((item) => {
            return <Card item={item} key={item?.categoryid} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
