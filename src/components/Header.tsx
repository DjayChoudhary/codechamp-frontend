import axios from "axios";
import { useEffect, useState } from "react";

export default function Header() {
  let columns = ["Response Status", "Response Body"];
  // let rows = ["404 Status Okay", "All Good"]

  const [rows, setRows] = useState([]);

  async function getResponses() {
    let res = await axios.get("http://localhost:8080/api/responses/all");
    let data = res.data;
    console.log(typeof data);
    console.log(data);
    let values = data.map((obj: any) => {
      return [obj.codeResponseStatus, obj.codeResponseBody];
    });

    console.log(values);
    setRows(values);

    return res.data;
  }
  useEffect(() => {
    getResponses();
    // console.log(typeof val);
    // console.log(val);
  }, []);

  return (
    <>
      <header className="w-screen bg-teal-700 px-4 py-3 mb-5">
        <div className="text-3xl tracking-wide font-semibold text-white text-center">
          CodeChamp
        </div>
      </header>
    </>
  );
}
