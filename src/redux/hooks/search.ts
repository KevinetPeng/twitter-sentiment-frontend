import { selectOptions } from "../../constants";
import { setData, setError, setIsLoading } from "../reducers/twitterSentiment";
import { useAppDispatch, checkStatus } from "../utils";

export const useSearch = () => {
  const dispatch = useAppDispatch();

  const sendSearch = async (
    search: String,
    searchType: keyof typeof selectOptions
  ) => {
    dispatch(setIsLoading(true));

    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}${
          selectOptions[searchType].apiRoute
        }/${search}?size=100${searchType === "keyword" ? "&exact=true" : ""}`
      );
      checkStatus(res);
      const data = await res.json();

      dispatch(setData(data));
    } catch (err) {
      console.log(err);
      dispatch(setError(err));
    }

    dispatch(setIsLoading(false));
  };

  return { sendSearch };
};
