var hints = [{id: "ser22a-h1", type: "hint", dependencies: [], title: "Find the ratio of $$a_2$$ to $$a_1$$.", text: "The ratio of the second term to the first term is $$\\frac{1.6}{0.8}=0.8$$.", variabilization: {}}, {id: "ser22a-h2", type: "hint", dependencies: ["ser22a-h1"], title: "Find the ratio of $$a_3$$ to $$a_2$$.", text: "The ratio of the third term to the second term is $$\\frac{1.28}{1.6}=0.8$$.", variabilization: {}}, {id: "ser22a-h3", type: "hint", dependencies: ["ser22a-h2"], title: "Find the ratio of $$a_4$$ to $$a_3$$.", text: "The ratio of the fourth term to the third term is $$\\frac{1.024}{1.28}=0.8$$.", variabilization: {}}, {id: "ser22a-h4", type: "hint", dependencies: ["ser22a-h1", "ser22a-h2", "ser22a-h3"], title: "Determining if there is a Constant Ratio", text: "Since there is a common ratio of 0.8, the series is geometric.", variabilization: {}}, {id: "ser22a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["T"], dependencies: ["ser22a-h4"], title: "Confirm that $$-1<r<1$$", text: "Is $$-1<0.8<1$$ True or False?", choices: ["T", "F"], variabilization: {}}, {id: "ser22a-h6", type: "hint", dependencies: ["ser22a-h5"], title: "Sum of Infinite Geometric Series", text: "Since $$-1<0.8<1$$ is T, then sum is defined.", variabilization: {}}, {id: "ser22a-h7", type: "hint", dependencies: ["ser22a-h6"], title: "Identify $$a_1$$ and r", text: "The first term is $$a_1=2$$ and $$r=0.8$$", variabilization: {}}, {id: "ser22a-h8", type: "hint", dependencies: ["ser22a-h7"], title: "Formula for the Sum of an Infinite Geometric Series", text: "Substitute values for $$a_1$$ and r into the formula: $$S=\\frac{a_1}{1-r}$$.", variabilization: {}}, {id: "ser22a-h9", type: "hint", dependencies: ["ser22a-h8"], title: "Formula for the Sum of an Infinite Geometric Series", text: "The formula of the sum is $$S=\\frac{2}{1-0.8}$$", variabilization: {}}, ]; export {hints};