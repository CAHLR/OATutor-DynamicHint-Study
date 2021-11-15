var hints = [{id: "a870b02DivMul37a-h1", type: "hint", dependencies: [], title: "Translation", text: "The first step is translating the sentences into an equation.", variabilization: {}}, {id: "a870b02DivMul37a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{3}{4}+x=\\frac{5}{6}$$"], dependencies: ["a870b02DivMul37a-h1"], title: "Translation", text: "Translate it into an equation.", variabilization: {}}, {id: "a870b02DivMul37a-h3", type: "hint", dependencies: ["a870b02DivMul37a-h2"], title: "Subtraction property", text: "When you subtract the same quantity from both sides of an equation, you still have equality.", variabilization: {}}, {id: "a870b02DivMul37a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$x=\\frac{1}{12}$$"], dependencies: ["a870b02DivMul37a-h3"], title: "Subtraction", text: "Subtract $$\\frac{3}{4}$$ from each side.", variabilization: {}}, {id: "a870b02DivMul37a-h5", type: "hint", dependencies: ["a870b02DivMul37a-h4"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "a870b02DivMul37a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["a870b02DivMul37a-h5"], title: "Verification", text: "Check whether $$\\frac{3}{4}+\\frac{1}{12}$$ equals $$\\frac{5}{6}$$.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};