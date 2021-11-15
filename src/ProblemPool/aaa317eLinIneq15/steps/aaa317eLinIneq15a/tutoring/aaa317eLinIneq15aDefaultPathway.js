var hints = [{id: "aaa317eLinIneq15a-h1", type: "hint", dependencies: [], title: "Distributive Property", text: "We start by applying the distributive property of multiplication to the left side. The inequality becomes $$\\left(4\\right) x+\\left(12\\right) \\geq 2x-1$$.", variabilization: {}}, {id: "aaa317eLinIneq15a-h2", type: "hint", dependencies: ["aaa317eLinIneq15a-h1"], title: "Move Variable Terms", text: "We then move the variable terms to one side of the inequality", variabilization: {}}, {id: "aaa317eLinIneq15a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\left(2\\right) x+\\left(12\\right) \\geq -1$$"], dependencies: ["aaa317eLinIneq15a-h2"], title: "Move Variable Terms", text: "What inequality do we get after moving the variable terms?", choices: ["$$\\left(2\\right) x+\\left(12\\right) \\geq -1$$", "$$12 \\geq 2x-1$$"], variabilization: {}}, {id: "aaa317eLinIneq15a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-12"], dependencies: ["aaa317eLinIneq15a-h3"], title: "Isolate Variable Term", text: "What number should we add to both sides?", variabilization: {}}, {id: "aaa317eLinIneq15a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$2x \\geq -13$$"], dependencies: ["aaa317eLinIneq15a-h4"], title: "Isolate Variable Term", text: "What inequality do we get after isolating the variable term?", choices: ["$$2x \\geq -13$$", "$$2x \\geq 11$$"], variabilization: {}}, {id: "aaa317eLinIneq15a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{1}{2}$$"], dependencies: ["aaa317eLinIneq15a-h5"], title: "Apply the Multiplication Property", text: "To make the coeffient of x be 1, what number should we multiply both sides of the inequality by?", variabilization: {}}, {id: "aaa317eLinIneq15a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["x"], dependencies: ["aaa317eLinIneq15a-h6"], title: "Left Side", text: "What is the left side after multiplying by $$\\frac{1}{2}$$?", variabilization: {}}, {id: "aaa317eLinIneq15a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{-\\left(13\\right)}{2}$$"], dependencies: ["aaa317eLinIneq15a-h6"], title: "Right Side", text: "What is the right side after multiplying by $$\\frac{1}{2}$$?", variabilization: {}}, {id: "aaa317eLinIneq15a-h9", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$ \\geq $$"], dependencies: ["aaa317eLinIneq15a-h6"], title: "Sign", text: "What is the sign of the inequality after multiplication?", choices: ["$$ \\leq $$", "$$ \\geq $$"], variabilization: {}}, {id: "aaa317eLinIneq15a-h10", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$[\\frac{-\\left(13\\right)}{2},\\infty)$$"], dependencies: ["aaa317eLinIneq15a-h7", "aaa317eLinIneq15a-h8", "aaa317eLinIneq15a-h9"], title: "Interval Notation", text: "What is $$x \\geq \\frac{-\\left(13\\right)}{2}$$ written in interval notion?", choices: ["$$[\\frac{-\\left(13\\right)}{2},\\infty)$$", "$$(\\frac{-\\left(13\\right)}{2},\\infty)$$"], variabilization: {}}, ]; export {hints};