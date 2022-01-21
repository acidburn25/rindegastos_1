"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./App.css");
const axios_1 = require("axios");
const userId = "7b79dbaa3e0341aebe09bd68be622184";
const amount = 1500;
const dateRequest = "2021-06-25";
const toConvert = "PEN";
function App() {
    const [inputEmpty, setInputEmpty] = (0, react_1.useState)(true);
    const [values, setValues] = (0, react_1.useState)({
        amount: "",
        dateRequest: "",
        toConvert: "",
    });
    const getExchangevalue = () => {
        axios_1.default
            .get("https://openexchangerates.org/api/historical/" +
            dateRequest +
            ".json?app_id=" +
            userId)
            .then((response) => {
            console.log(response.data["rates"][toConvert] * amount);
        });
    };
    const handleChange = (prop) => (event) => {
        setValues(Object.assign(Object.assign({}, values), { [prop]: event.target.value }));
        console.log(values);
    };
    (0, react_1.useEffect)(() => {
        if (values.amount !== "" && values.dateRequest !== "" && values.toConvert !== "") {
            setInputEmpty(false);
        }
    }, [inputEmpty, values.amount, values.dateRequest, values.toConvert]);
    return (<>
      <div>
        <input value={values.amount} onChange={handleChange("amount")}></input>
        <input value={values.dateRequest} onChange={handleChange("dateRequest")}></input>
        <input value={values.toConvert} onChange={handleChange("toConvert")}></input>
      </div>
      <div>
        Convertidor de Monedas{" "}
        <button disabled={inputEmpty ? true : false} onClick={getExchangevalue}>Enviar</button>
      </div>
    </>);
}
exports.default = App;
//# sourceMappingURL=App.js.map