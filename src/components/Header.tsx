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
      <header>
        <div className="header">CodeChamp</div>
      </header>

      <table className="table-auto">
        <thead>
          <tr>
            {columns.map((column) => {
              return <td>{column}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            return (
              <tr>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
