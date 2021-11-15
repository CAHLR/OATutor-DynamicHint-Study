var hints = [{id: "SubAdd17b-h1", type: "hint", dependencies: [], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality.", variabilization: {}}, {id: "SubAdd17b-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$y+45-45=-66-45$$"], dependencies: ["SubAdd17b-h1"], title: "Subtraction", text: "Subtract 45 from each side.", variabilization: {}}, {id: "SubAdd17b-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$y=-111$$"], dependencies: ["SubAdd17b-h2"], title: "Simplification", text: "Simplify the equation.", variabilization: {}}, {id: "SubAdd17b-h4", type: "hint", dependencies: ["SubAdd17b-h3"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "SubAdd17b-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["SubAdd17b-h4"], title: "Verification", text: "Check whether $$-111+45$$ equals -66.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};