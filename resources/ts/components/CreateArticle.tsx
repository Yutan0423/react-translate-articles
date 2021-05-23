import React, { useState } from "react";
import { Textarea } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const CreateArticle = () => {
    const [inputText, setInputText] = useState("");
    const [outputText, setOutputText] = useState("");

    const onChangeTranslate = (e: any) => {
        setInputText(e.target.value);
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
