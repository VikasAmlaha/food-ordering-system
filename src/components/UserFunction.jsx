import { useEffect, useState } from "react";

const DEVELOPER_API = "https://api.github.com/users/VikasAmlaha";


const UserFunction = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDeveloperData = async () => {
    try {
      const data = await fetch(DEVELOPER_API);
      const json = await data.json();
      console.log(json);

      setDetails(json);
    } catch (error) {
      console.error("Error fetching developer data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDeveloperData();
  }, []);

  return (
    <div>
      
      {loading ? <h1>Loading...</h1> : <h1>Name : {details?.name}</h1>}
      {loading ? <h2>Loading...</h2> : <img src={details?.avatar_url} style={{borderRadius: "10% 30% 50% 70%"}}/>}
      {loading ? <h1>Loading...</h1> : <h1>Public Repos : {details?.public_repos}</h1>}
      
    </div>
  );
};

export default UserFunction;
