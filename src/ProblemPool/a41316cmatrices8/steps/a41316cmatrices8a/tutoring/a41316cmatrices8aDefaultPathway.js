var hints = [{id: "a41316cmatrices8a-h1", type: "hint", dependencies: [], title: "Product of Matrices", text: "Finding the product of two matrices is only possible when the inner dimensions are the same, meaning that the number of columns of the first matrix is equal to the number of rows of the second matrix. If A is an m×r matrix and B is an r×n matrix, then the product matrix AB is an m×n matrix. For example, the product AB is possible because the number of columns in A is the same as the number of rows in B. If the inner dimensions do not match, the product is not defined.\n##figure1.gif##", variabilization: {}}, {id: "a41316cmatrices8a-h2", type: "hint", dependencies: ["a41316cmatrices8a-h1"], title: "Product of Matrices:Computing Entries", text: "For a matrix $$AB=C$$, we can obtain entry $$c_{ij}$$ by multipying the entries in row i of A by column of j in B and adding them. For example, given matrices A and B, where the dimensions of A are 2x3 and the dimensions of B are 3x3, the product of AB will be a 2x3 matrix. \\n $$A=/\\begin{bmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\end{bmatrix}$$ and $$B=\\begin{bmatrix} b_{11} & b_{12} & b_{13} \\\\ b_{21} & b_{22} & b_{23} \\\\ b_{31} & b_{32} & b_{33} \\end{bmatrix}$$. \\n To obtain $$c_{11}$$ we multiply the first row of A with the first column of B and add. Thus, $$c_{11}=a_{11} b_{11}+a_{12} b_{21}+a_{13} b_{31}$$.", variabilization: {}}, {id: "a41316cmatrices8a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["74"], dependencies: ["a41316cmatrices8a-h2"], title: "Product of Matrices:Computing Entries", text: "We will start by computing the top left entry of DC. We can do so by calculating $$d_{11} c_{11}+d_{12} c_{21}+d_{13} c_{31}$$. What is the value?", variabilization: {}}, {id: "a41316cmatrices8a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["110"], dependencies: ["a41316cmatrices8a-h3"], title: "Product of Matrices:Computing Entries", text: "We will next compute the top right entry of DC, $$dc_{12}$$. We can do so by calculating $$d_{11} c_{12}+d_{12} c_{22}+d_{13} c_{32}$$. What is the value?", variabilization: {}}, {id: "a41316cmatrices8a-h5", type: "hint", dependencies: ["a41316cmatrices8a-h4"], title: "Product of Matrices:Computing Entries", text: "Repeat the same process for each corresponding entries.", variabilization: {}}, ]; export {hints};