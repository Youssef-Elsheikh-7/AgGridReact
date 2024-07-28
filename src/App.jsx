import "./App.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

function App() {
  // const [dataTest, setDataTest] = useState([]);
  const [loader, setLoader] = useState(false);
  const [rowData, setRowData] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((data) => {
      setLoader(true);
      // setDataTest(data.data);
      setRowData(data.data);
      console.log(data.data);
    });
  }, []);

  const customButtonComponent = (p) => {
    return (
      <>
        <button onClick={() => window.alert(p.value)}>Push Me</button> {p.value}
      </>
    );
  };

  const imageData = (surce) => {
    console.log(surce);
    return (
      <>
        <img
          src={surce.value}
          alt={"image"}
          style={{ width: "20px", height: "20px" }}
        />
      </>
    );
  };

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      filter: true,
      floatingFilter: true,
      editable: true,
    };
  });

  // const [rowData, setRowData] = useState([
  //   { make: "Tesla", model: "Model Y", price: 64950, electric: true },
  //   { make: "Ford", model: "F-Series", price: 33850, electric: false },
  //   { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  //   { make: "Nissan", model: "GTR", price: 59600, electric: true },
  //   { make: "Firary", model: "lafirary", price: 5342562, electric: false },
  //   { make: "Mercedes", model: "mibach", price: 8512354, electric: true },
  //   { make: "Tesla", model: "Model Y", price: 64950, electric: true },
  //   { make: "Ford", model: "F-Series", price: 33850, electric: false },
  //   { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  //   { make: "Nissan", model: "GTR", price: 59600, electric: true },
  //   { make: "Firary", model: "lafirary", price: 5342562, electric: false },
  //   { make: "Mercedes", model: "mibach", price: 8512354, electric: true },
  //   { make: "Tesla", model: "Model Y", price: 64950, electric: true },
  //   { make: "Ford", model: "F-Series", price: 33850, electric: false },
  //   { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  //   { make: "Nissan", model: "GTR", price: 59600, electric: true },
  //   { make: "Firary", model: "lafirary", price: 5342562, electric: false },
  //   { make: "Mercedes", model: "mibach", price: 8512354, electric: true },
  //   { make: "Tesla", model: "Model Y", price: 64950, electric: true },
  //   { make: "Ford", model: "F-Series", price: 33850, electric: false },
  //   { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  //   { make: "Nissan", model: "GTR", price: 59600, electric: true },
  //   { make: "Firary", model: "lafirary", price: 5342562, electric: false },
  //   { make: "Mercedes", model: "mibach", price: 8512354, electric: true },
  //   { make: "Tesla", model: "Model Y", price: 64950, electric: true },
  //   { make: "Ford", model: "F-Series", price: 33850, electric: false },
  //   { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  //   { make: "Nissan", model: "GTR", price: 59600, electric: true },
  //   { make: "Firary", model: "lafirary", price: 5342562, electric: false },
  //   { make: "Mercedes", model: "mibach", price: 8512354, electric: true },
  //   { make: "Tesla", model: "Model Y", price: 64950, electric: true },
  //   { make: "Ford", model: "F-Series", price: 33850, electric: false },
  //   { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  //   { make: "Nissan", model: "GTR", price: 59600, electric: true },
  //   { make: "Firary", model: "lafirary", price: 5342562, electric: false },
  //   { make: "Mercedes", model: "mibach", price: 8512354, electric: true },
  //   { make: "Tesla", model: "Model Y", price: 64950, electric: true },
  //   { make: "Ford", model: "F-Series", price: 33850, electric: false },
  //   { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  //   { make: "Nissan", model: "GTR", price: 59600, electric: true },
  //   { make: "Firary", model: "lafirary", price: 5342562, electric: false },
  //   { make: "Mercedes", model: "mibach", price: 8512354, electric: true },
  //   { make: "Tesla", model: "Model Y", price: 64950, electric: true },
  //   { make: "Ford", model: "F-Series", price: 33850, electric: false },
  //   { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  //   { make: "Nissan", model: "GTR", price: 59600, electric: true },
  //   { make: "Firary", model: "lafirary", price: 5342562, electric: false },
  //   { make: "Mercedes", model: "mibach", price: 8512354, electric: true },
  // ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    {
      field: "id",
      headerName: "ID",
      // valueGetter: (p) => p.data.make + " " + p.data.price,
      flex: 1,
      // cellEditor: "agSelectCellEditor",
      // cellEditorParams: {
      //   values: ["Mercedes", "Firary", "Nissan", "Ford", "Tesla", "Toyota"],
      // },
      checkboxSelection: true,
    },
    { field: "title", flex: 3 },
    { field: "image", flex: 1, cellRenderer: imageData },
    {
      field: "price",
      //  valueFormatter: (p) => "$" + p.value.toLocaleString()
      valueFormatter: (p) => "$" + p.value.toLocaleString(),
      cellClassRules: {
        "red-cell": (p) => p.value > 100,
        "blue-cell": (p) => p.value < 100,
      },
    },
    {
      field: "rating.rate",
      headerName: "Rate",
      cellClassRules: {
        "green-cell-rating": (p) => p.value > 3,
        "red-cell-rating": (p) => p.value < 3,
      },
      valueFormatter: (p) => (p.value >= 3 ? p.value + " " + "⭐" : p.value),

      //  cellRenderer: customButtonComponent
    },
  ]);

  return (
    <>
      <div className="ag-theme-quartz" style={{ height: 500 }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          rowSelection={"multiple"}
          pagination={true}
          paginationPageSize={8}
          paginationPageSizeSelector={[4, 8]}
          defaultColDef={defaultColDef}
        />
      </div>
    </>
  );
}

export default App;
// <div className="ag-theme-quartz-dark" style={{ height: 500 }}></div>
// ag-theme-alpine-dark
// ag-theme-material-dark
