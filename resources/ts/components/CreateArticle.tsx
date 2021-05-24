import axios from "axios";
// const { v4: uuidv4 } = require("uuid");
import React, { useState } from "react";
import { Textarea } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const CreateArticle = () => {
    const [inputText, setInputText] = useState("");
    const [outputText, setOutputText] = useState("");

    const onChangeTranslate = async (e: any) => {
        setInputText(e.target.value);
        var subscriptionKey = "4785173cce9c47259d27712d4b461f3c";
        let endpoint = "https://api.cognitive.microsofttranslator.com";

        // Add your location, also known as region. The default is global.
        // This is required if using a Cognitive Services resource.
        let location = "japaneast";

        axios({
            baseURL: endpoint,
            url: "/translate",
            method: "post",
            headers: {
                "Ocp-Apim-Subscription-Key": subscriptionKey,
                "Ocp-Apim-Subscription-Region": location,
                "Content-type": "application/json",
                // "X-ClientTraceId": uuidv4().toString(),
            },
            params: {
                "api-version": "3.0",
                from: "en",
                to: "ja",
            },
            data: [
                {
                    text: "My name is Yuta",
                },
            ],
            responseType: "json",
        }).then(function (response) {
            console.log(JSON.stringify(response.data, null, 4));
        });
    };

    const onClickTranslate = () => {
        setOutputText(inputText);
    };

    return (
        <>
            <h2>Translate Articles</h2>
            <Textarea
                value={inputText}
                onChange={onChangeTranslate}
                placeholder="enter English sentences"
            />
            <p>{outputText}</p>
            <Button onClick={onClickTranslate}>Translate</Button>
            <Container></Container>
        </>
    );
};

export default CreateArticle;
