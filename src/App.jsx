import {useState, useEffect} from "react";
import { GetFarmaciasTurno } from "./api/MiApi";

import Header from "./components/Header";
import Buscador from "./components/Buscador";
import Main from "./components/MiApi";
import Footer from "./components/Footer";
import "./App.css";

function App() {
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
      <div className='container'>

        <Header/>
        <Buscador data={data}
            setData={setData}
            originalData={originalData}/>
        <Main data={data}
            originalData={originalData}
            isLoading={isLoading}/>

        <Footer/>
    </div>
    )
}

export default App;
