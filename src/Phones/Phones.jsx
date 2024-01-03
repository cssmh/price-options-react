import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { Audio, Comment, DNA } from "react-loader-spinner";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  const [spinners, setSpinners] = useState(true);

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
        setSpinners(false);
        console.log(fakePhoneData);
      });
  }, []);

  return (
    <div className="hidden lg:block">
      <h1 className="text-3xl text-center my-7 font-medium">TinyBarChart</h1>
      <div className="flex justify-center">
        {spinners && (
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        )}
      </div>
      <div className="flex justify-center">
        
        <Comment
          visible={true}
          height="80"
          width="80"
          ariaLabel="comment-loading"
          wrapperStyle={{}}
          wrapperClass="comment-wrapper"
          color="#fff"
          backgroundColor="#F4442E"
        />
         Comment + DNA
         {/* React Spinners from */}
         {/* https://mhnpd.github.io/react-loader-spinner/docs/components/comment/ */}
        <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
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
