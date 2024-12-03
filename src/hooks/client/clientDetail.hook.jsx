import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doFetchUserDetail } from "../../actions";

export const useClientDetailHook = () => {
  // doFetchManagementDetail
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [clientData, setClientData] = useState({});

  const doGetClientList = async () => {
    const clientResponse = await doFetchUserDetail(id);
    if (clientResponse?.status == 200) {
      setClientData(clientResponse?.data);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    doGetClientList();
  }, [id]);

  return { isLoading, clientData };
};
