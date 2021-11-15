var hints = [{id: "FunNota11a-h1", type: "hint", dependencies: [], title: "Algebraic form", text: "To express the relationship in this form, we need to be able to write the relationship where p is a fucntion of n, which means wirting it as p $$=$$ [expression involving n].", variabilization: {}}, {id: "FunNota11a-h2", type: "hint", dependencies: ["FunNota11a-h1"], title: "Subtraction", text: "Subtract 2n from both sides, and we get $$6p=12-2n$$.", variabilization: {}}, {id: "FunNota11a-h3", type: "hint", dependencies: ["FunNota11a-h2"], title: "Division", text: "Divide both sides by 6, and we get $$p=\\frac{12-2n}{6}$$.", variabilization: {}}, {id: "FunNota11a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$p=2-\\frac{1}{3} n$$"], dependencies: ["FunNota11a-h3"], title: "Simplification", text: "Simplify the expression. What do you get?", variabilization: {}}, ]; export {hints};