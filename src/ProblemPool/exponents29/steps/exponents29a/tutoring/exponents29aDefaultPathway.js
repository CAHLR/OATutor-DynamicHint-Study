var hints = [{id: "exponents29a-h1", type: "hint", dependencies: [], title: "Move decimal point", text: "Move decimal point so that the first factor is greater or equal to 1 but less than 10. You should have 3.40000", variabilization: {}}, {id: "exponents29a-h2", type: "hint", dependencies: ["exponents29a-h1"], title: "Count the number of decimal places", text: "Count the number of decimal places, n, that the decimal point was moved.", variabilization: {}}, {id: "exponents29a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["5"], dependencies: ["exponents29a-h2"], title: "How many decimal places was the decimal point moved?", text: "", variabilization: {}}, {id: "exponents29a-h4", type: "hint", dependencies: ["exponents29a-h3"], title: "Write the number as a product with a power of 10.", text: "The power of 10 will have exponent 5", variabilization: {}}, {id: "exponents29a-h5", type: "hint", dependencies: ["exponents29a-h4"], title: "Combine", text: "Combine both 3.4 and $${10}^5$$ together", variabilization: {}}, ]; export {hints};