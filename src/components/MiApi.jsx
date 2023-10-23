import { useState, useEffect } from "react";

import { GetFarmaciasTurno } from "../api/MiApi";

import Header from "./Header";
import Buscador from "./Buscador";
import Main from "./Main";
import Footer from "./Footer";

export const MiApi = () => {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const farmacias = async () => {
      setIsLoading(true);
      const response = await GetFarmaciasTurno();
      setData(response.data);
      setOriginalData(response.data);
      setIsLoading(false);
    };
    farmacias();
  }, []);

  return (
    <div className="container">
      <Header />
      <Buscador data={data} setData={setData} originalData={originalData} />
      <Main data={data} originalData={originalData} isLoading={isLoading} />
      <Footer />
    </div>
  );
};
