var hints = [{id: "a4d2b33use32a-h1", type: "hint", dependencies: [], title: "Using PEMDAS", text: "The Order of Operations, PEMDAS, is Parenthese, Exponents, Multiplication, Division, Addition, and Subtraction.", variabilization: {}}, {id: "a4d2b33use32a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["No"], dependencies: ["a4d2b33use32a-h1"], title: "P-Parentheses", text: "Are there any parentheses?", choices: ["Yes", "No"], variabilization: {}}, {id: "a4d2b33use32a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["No"], dependencies: ["a4d2b33use32a-h2"], title: "E-Exponents", text: "Are there any exponents?", choices: ["Yes", "No"], variabilization: {}}, {id: "a4d2b33use32a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["a4d2b33use32a-h3"], title: "MD- Multiplication or Division", text: "Is there any multiplication or division?", choices: ["Yes", "No"], variabilization: {}}, {id: "a4d2b33use32a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["27"], dependencies: ["a4d2b33use32a-h4"], title: "First Operation", text: "$$\\left(3\\right) \\left(9\\right)$$", variabilization: {}}, {id: "a4d2b33use32a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["a4d2b33use32a-h5"], title: "AS- Addition or Subtraction", text: "Is there any addition or subtraction?", choices: ["Yes", "No"], variabilization: {}}, {id: "a4d2b33use32a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["35"], dependencies: ["a4d2b33use32a-h6"], title: "Second Operation", text: "$$\\left(8\\right)+\\left(27\\right)$$", variabilization: {}}, ]; export {hints};