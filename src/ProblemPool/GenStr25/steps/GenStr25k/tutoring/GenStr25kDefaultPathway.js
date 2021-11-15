var hints = [{id: "GenStr25k-h1", type: "hint", dependencies: [], title: "Simplification", text: "Simplify each side of the equation as much as possible.", variabilization: {}}, {id: "GenStr25k-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$5d+3=d+7$$"], dependencies: ["GenStr25k-h1"], title: "Simplification", text: "Use the distributive property to simplify each side of the equation.", variabilization: {}}, {id: "GenStr25k-h3", type: "hint", dependencies: ["GenStr25k-h2"], title: "Variable Terms", text: "Collect all variable terms on the left side of the equation.", variabilization: {}}, {id: "GenStr25k-h4", type: "hint", dependencies: ["GenStr25k-h3"], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality.", variabilization: {}}, {id: "GenStr25k-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$4d+3=7$$"], dependencies: ["GenStr25k-h4"], title: "Subtraction", text: "Subtract d from each side.", variabilization: {}}, {id: "GenStr25k-h6", type: "hint", dependencies: ["GenStr25k-h5"], title: "Constant Terms", text: "Collect all constant terms on the right side of the equation.", variabilization: {}}, {id: "GenStr25k-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$4d=4$$"], dependencies: ["GenStr25k-h6"], title: "Subtraction", text: "Subtract 3 from each side.", variabilization: {}}, {id: "GenStr25k-h8", type: "hint", dependencies: ["GenStr25k-h7"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality.", variabilization: {}}, {id: "GenStr25k-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$d=1$$"], dependencies: ["GenStr25k-h8"], title: "Division", text: "Divide 4 from each side.", variabilization: {}}, {id: "GenStr25k-h10", type: "hint", dependencies: ["GenStr25k-h9"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "GenStr25k-h11", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["GenStr25k-h10"], title: "Verification", text: "Check whether $$\\frac{1}{4} \\left(20\\times1+12\\right)$$ equals $$1+7$$.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};