var hints = [{id: "a9cf449complex18a-h1", type: "hint", dependencies: [], title: "Complex Conjugate", text: "The first step is to find the complex conjugate of the denominator.", variabilization: {}}, {id: "a9cf449complex18a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(2\\right)+i$$"], dependencies: ["a9cf449complex18a-h1"], title: "Complex Conjugate", text: "What is the complex conjugate of the denominator 2-i?", variabilization: {}}, {id: "a9cf449complex18a-h3", type: "hint", dependencies: ["a9cf449complex18a-h2"], title: "Multiplying Complex Conjugate", text: "Multiply $$\\left(2\\right)+i$$ to the numerator and denominator.", variabilization: {}}, {id: "a9cf449complex18a-h4", type: "hint", dependencies: ["a9cf449complex18a-h3"], title: "Multiplying Complex Numbers in Numerator", text: "Use the FOIL method to find the product of $$\\left(\\left(3\\right)+\\left(4\\right) i\\right) \\left(\\left(2\\right)+i\\right)$$.", variabilization: {}}, {id: "a9cf449complex18a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(2\\right)+\\left(11\\right) i$$"], dependencies: ["a9cf449complex18a-h4"], title: "Multiplying Complex Numbers in Numerator", text: "What is the product of $$\\left(\\left(3\\right)+\\left(4\\right) i\\right) \\left(\\left(2\\right)+i\\right)$$?", variabilization: {}}, {id: "a9cf449complex18a-h6", type: "hint", dependencies: ["a9cf449complex18a-h5"], title: "Multiplying Complex Numbers in Demonimator", text: "Use the formula $$\\left(a+bi\\right) \\left(a-bi\\right)=a^2+b^2$$ to find the product of $$\\left(\\left(2\\right)-i\\right) \\left(\\left(2\\right)+i\\right)$$.", variabilization: {}}, {id: "a9cf449complex18a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["5"], dependencies: ["a9cf449complex18a-h6"], title: "Multiplying Complex Numbers in Demonimator", text: "What is the product of $$\\left(\\left(2\\right)-i\\right) \\left(\\left(2\\right)+i\\right)$$?", variabilization: {}}, {id: "a9cf449complex18a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{2}{5}+\\frac{\\left(11\\right) i}{5}$$"], dependencies: ["a9cf449complex18a-h5", "a9cf449complex18a-h7"], title: "Dividing by a Real Number", text: "After dividing the numerator by the denominator, what is the remaining complex number?", variabilization: {}}, ]; export {hints};