var hints = [{id: "DivMul28a-h1", type: "hint", dependencies: [], title: "Translation", text: "The first step is translating the sentences into an equation.", variabilization: {}}, {id: "DivMul28a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{n}{8}=-56$$"], dependencies: ["DivMul28a-h1"], title: "Translation", text: "Translate it into an equation.", variabilization: {}}, {id: "DivMul28a-h3", type: "hint", dependencies: ["DivMul28a-h2"], title: "Multiplication property of equality", text: "If you multiply both sides of an equation by the same number, you still have equality.", variabilization: {}}, {id: "DivMul28a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$n=-448$$"], dependencies: ["DivMul28a-h3"], title: "Multiplication", text: "Multiple 8 from each side.", variabilization: {}}, {id: "DivMul28a-h5", type: "hint", dependencies: ["DivMul28a-h4"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "DivMul28a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["DivMul28a-h5"], title: "Verification", text: "Check whether $$\\frac{-448}{8}$$ equals -56.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};