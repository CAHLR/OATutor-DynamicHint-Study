var hints = [{id: "quad16a-h1", type: "hint", dependencies: [], title: "Naming Varaible", text: "First, we need to identify our variables: $$a=1$$, $$b=5$$, and $$c=1$$", variabilization: {}}, {id: "quad16a-h2", type: "hint", dependencies: ["quad16a-h1"], title: "Quadratic Formula", text: "Now we can plug our variables into the Quadratic Formula: $$\\frac{\\left(-\\operatorname{bpm}\\left(a\\right) \\sqrt{b^2-4ac}\\right)}{2} a$$ becomes $$\\frac{\\left(-5\\operatorname{pm}\\left(a\\right) \\sqrt{5^2-4\\times1\\times1}\\right)}{2\\times1}$$.", variabilization: {}}, {id: "quad16a-h3", type: "hint", dependencies: ["quad16a-h2"], title: "Smplifying", text: "This simplies to our final answers: $$\\frac{\\left(-5+\\sqrt{21}\\right)}{2}$$ and $$\\frac{\\left(-5-\\sqrt{21}\\right)}{2}$$.", variabilization: {}}, ]; export {hints};