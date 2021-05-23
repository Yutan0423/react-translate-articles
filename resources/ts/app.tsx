import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import CreateArticle from "./components/CreateArticle";

const layout = {
    maxWidth: "880px",
    margin: "0 auto",
    padding: "0 30px",
};

const App = () => {
    return (
        <>
            <ChakraProvider>
                <div style={layout}>
                    <CreateArticle />
                </div>
            </ChakraProvider>
        </>
    );
};

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
