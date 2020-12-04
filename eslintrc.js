module.exports = {
    env: {
        browser: true,
        es6:     true
    },
    globals: {$: "true"},
  
    "rules": {
        "comma-spacing": [
            "error", {
                "before": false, "after": true
            } 
        ],
        "semi":                        ["error", "always"],
        "space-in-parens":             ["error", "never"],
        "space-before-function-paren": ["error", "never"],
        "object-curly-spacing":        ["error", "never", {"objectsInObjects": true}],
        "array-bracket-spacing":       ["error", "never"],
        "quotes":                      ["error", "double"],
        "indent":                      ["error", 4],
        "no-multi-spaces":             "error",
        "no-multiple-empty-lines":     ["error", {"max": 1}],
        "array-bracket-newline":       ["error", {"multiline": true}],
        "key-spacing":                 ["error", {align: "value"}],
    }  
};
