
import "./Advice.scss";
import button from "../assets/icon-dice.svg";
import mobile from "../assets/pattern-divider-mobile.svg";
import desktop from "../assets/pattern-divider-desktop.svg";
import { useQuery } from 'react-query';
import axios from "axios";

import { iAdviceData } from "../interfaces/IAdviceData";
import { QueryClient } from 'react-query';

const url = "https://api.adviceslip.com/advice";
const queryClient = new QueryClient();

const getAdvice = () => {
  return axios.get<iAdviceData>(url)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching advice:", error);
      throw error; 
    });
};

const Advice = () => {
  const { data: adviceData, isLoading } = useQuery<iAdviceData>('advice', getAdvice);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!adviceData) {
    return <div>Error: Failed to fetch advice</div>;
  }

  return (
    <section className="advice__container">
      {adviceData && (
        <>
          <p className="advice__container-id">advice # {adviceData.slip.id}</p>
          <p className="advice__container-text">"{adviceData.slip.advice}"</p>
          <picture>
            <source media="(min-width): 1024" srcSet={mobile} />
            <img
              src={desktop}
              alt="image"
              className="advice__container-img"
              width={540}
              height={446}
            />
          </picture>
          <button onClick={() => queryClient.invalidateQueries('advice')} className="advice__container-btn">
            <img src={button} alt="button" />
          </button>
        </>
      )}
    </section>
  );
};

export default Advice;
