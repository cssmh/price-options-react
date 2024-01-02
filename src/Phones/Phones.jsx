import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const Phones = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const fakePhoneData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        setPhones(fakePhoneData);
        console.log(fakePhoneData);
      });
  }, []);

  return (
    <div className="hidden lg:block">
        <h1 className="text-3xl text-center my-7 font-medium">TinyBarChart</h1>
        <h3 className="text-2xl ml-8 my-5">Total Phone: {phones.length}</h3>
        <BarChart width={1000} height={500} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey={"name"}></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
    </div>
  );
};

export default Phones;
