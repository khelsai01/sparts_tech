import React, { useCallback, useEffect, useState } from "react";
import Header from "./Header";
import TopHero from "./TopHero";
import BottomHero from "./BottomHero";
import Footer from "./Footer";

const Home = () => {
  const url = "https://sparts-backend.onrender.com/schools";
  const [schoolsData, setSchoolData] = useState([]);

  const fetchData = async () => {
    try {
      let res = await fetch(url);
      let data = await res.json();
      setSchoolData(data[0]);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-0 relative">
      <Header />
      <TopHero institutes={schoolsData.institutes} />
      <BottomHero students={schoolsData.students} />
      <Footer />
    </div>
  );
};

export default Home;
