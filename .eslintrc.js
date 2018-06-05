module.exports = {
 "rules": {
  "accessor-pairs": "off",
  "array-callback-return": "error",
  "block-scoped-var": "error",
  "complexity": [
   "off",
   11
  ],
  "class-methods-use-this": [
   "error",
   {
    "exceptMethods": [
     "getChildContext",
     "componentDidMount",
     "componentWillMount",
     "componentWillUpdate",
     "componentWillReceiveProps"
    ]
   }
  ],
  "consistent-return": 0,
  "curly": 0,
  "default-case": [
   "error",
   {
    "commentPattern": "^no default$"
   }
  ],
  "dot-notation": [
   "error",
   {
    "allowKeywords": true
   }
  ],
  "dot-location": [
   "error",
   "property"
  ],
  "eqeqeq": [
   "error",
   "always",
   {
    "null": "ignore"
   }
  ],
  "guard-for-in": "error",
  "no-alert": "warn",
  "no-caller": "error",
  "no-case-declarations": "error",
  "no-div-regex": "off",
  "no-else-return": "error",
  "no-empty-function": [
   "error",
   {
    "allow": [
     "arrowFunctions",
     "functions",
     "methods"
    ]
   }
  ],
  "no-empty-pattern": "error",
  "no-eq-null": "off",
  "no-eval": "error",
  "no-extend-native": "error",
  "no-extra-bind": "error",
  "no-extra-label": "error",
  "no-fallthrough": [
   "error",
   {
    "commentPattern": "break[\\s\\w]*omitted"
   }
  ],
  "no-floating-decimal": "error",
  "no-global-assign": [
   "error",
   {
    "exceptions": []
   }
  ],
  "no-native-reassign": "off",
  "no-implicit-coercion": [
   "off",
   {
    "boolean": false,
    "number": true,
    "string": true,
    "allow": []
   }
  ],
  "no-implicit-globals": "off",
  "no-implied-eval": "error",
  "no-invalid-this": "off",
  "no-iterator": "error",
  "no-labels": [
   "error",
   {
    "allowLoop": false,
    "allowSwitch": false
   }
  ],
  "no-lone-blocks": "error",
  "no-loop-func": "error",
  "no-magic-numbers": [
   "off",
   {
    "ignore": [],
    "ignoreArrayIndexes": true,
    "enforceConst": true,
    "detectObjects": false
   }
  ],
  "no-multi-spaces": [
   "error",
   {}
  ],
  "no-multi-str": "error",
  "no-new": "error",
  "no-new-func": "error",
  "no-new-wrappers": "error",
  "no-octal": "error",
  "no-octal-escape": "error",
  "no-param-reassign": [
   "error",
   {
    "props": false
   }
  ],
  "no-proto": "error",
  "no-redeclare": "error",
  "no-restricted-properties": [
   "error",
   {
    "object": "arguments",
    "property": "callee",
    "message": "arguments.callee is deprecated"
   },
   {
    "property": "__defineGetter__",
    "message": "Please use Object.defineProperty instead."
   },
   {
    "property": "__defineSetter__",
    "message": "Please use Object.defineProperty instead."
   },
   {
    "object": "Math",
    "property": "pow",
    "message": "Use the exponentiation operator (**) instead."
   }
  ],
  "no-return-assign": [
   "error",
   "always"
  ],
  "no-return-await": "error",
  "no-script-url": "error",
  "no-self-assign": "error",
  "no-self-compare": "error",
  "no-sequences": "error",
  "no-throw-literal": "error",
  "no-unmodified-loop-condition": "off",
  "no-unused-expressions": [
   "error",
   {
    "allowShortCircuit": true,
    "allowTernary": false
   }
  ],
  "no-unused-labels": "error",
  "no-useless-call": "off",
  "no-useless-concat": "error",
  "no-useless-escape": "error",
  "no-useless-return": "error",
  "no-void": "error",
  "no-warning-comments": [
   "off",
   {
    "terms": [
     "todo",
     "fixme",
     "xxx"
    ],
    "location": "start"
   }
  ],
  "no-with": "error",
  "prefer-promise-reject-errors": [
   "off",
   {
    "allowEmptyReject": true
   }
  ],
  "radix": "error",
  "require-await": "off",
  "vars-on-top": "error",
  "wrap-iife": [
   "error",
   "outside",
   {
    "functionPrototypeMethods": false
   }
  ],
  "yoda": "error",
  "comma-dangle": [
   "error",
   {
    "arrays": "always-multiline",
    "objects": "always-multiline",
    "imports": "always-multiline",
    "exports": "always-multiline",
    "functions": "always-multiline"
   }
  ],
  "for-direction": "off",
  "getter-return": [
   "off",
   {
    "allowImplicit": true
   }
  ],
  "no-await-in-loop": "error",
  "no-compare-neg-zero": "off",
  "no-cond-assign": [
   "error",
   "always"
  ],
  "no-console": 0,
  "no-constant-condition": "warn",
  "no-control-regex": "error",
  "no-debugger": "error",
  "no-dupe-args": "error",
  "no-dupe-keys": "error",
  "no-duplicate-case": "error",
  "no-empty": "error",
  "no-empty-character-class": "error",
  "no-ex-assign": "error",
  "no-extra-boolean-cast": "error",
  "no-extra-parens": [
   "off",
   "all",
   {
    "conditionalAssign": true,
    "nestedBinaryExpressions": false,
    "returnAssign": false,
    "ignoreJSX": "all",
    "enforceForArrowConditionals": false
   }
  ],
  "no-extra-semi": "error",
  "no-func-assign": "error",
  "no-inner-declarations": "error",
  "no-invalid-regexp": "error",
  "no-irregular-whitespace": "error",
  "no-obj-calls": "error",
  "no-prototype-builtins": "error",
  "no-regex-spaces": "error",
  "no-sparse-arrays": "error",
  "no-template-curly-in-string": "error",
  "no-unexpected-multiline": "error",
  "no-unreachable": "error",
  "no-unsafe-finally": "error",
  "no-unsafe-negation": "error",
  "no-negated-in-lhs": "off",
  "use-isnan": "error",
  "valid-jsdoc": "off",
  "valid-typeof": [
   "error",
   {
    "requireStringLiterals": true
   }
  ],
  "callback-return": "off",
  "global-require": "error",
  "handle-callback-err": "off",
  "no-buffer-constructor": "off",
  "no-mixed-requires": [
   "off",
   false
  ],
  "no-new-require": "error",
  "no-path-concat": "error",
  "no-process-env": "off",
  "no-process-exit": "off",
  "no-restricted-modules": "off",
  "no-sync": "off",
  "array-bracket-newline": [
   "off",
   {
    "multiline": true,
    "minItems": 3
   }
  ],
  "array-element-newline": [
   "off",
   {
    "multiline": true,
    "minItems": 3
   }
  ],
  "array-bracket-spacing": [
   "error",
   "never"
  ],
  "block-spacing": [
   "error",
   "always"
  ],
  "brace-style": [
   "error",
   "1tbs",
   {
    "allowSingleLine": true
   }
  ],
  "camelcase": [
   "error",
   {
    "properties": "never"
   }
  ],
  "capitalized-comments": [
   "off",
   "never",
   {
    "line": {
     "ignorePattern": ".*",
     "ignoreInlineComments": true,
     "ignoreConsecutiveComments": true
    },
    "block": {
     "ignorePattern": ".*",
     "ignoreInlineComments": true,
     "ignoreConsecutiveComments": true
    }
   }
  ],
  "comma-spacing": [
   "error",
   {
    "before": false,
    "after": true
   }
  ],
  "comma-style": [
   "error",
   "last"
  ],
  "computed-property-spacing": [
   "error",
   "never"
  ],
  "consistent-this": "off",
  "eol-last": [
   "error",
   "always"
  ],
  "func-call-spacing": [
   "error",
   "never"
  ],
  "func-name-matching": [
   "off",
   "always",
   {
    "includeCommonJSModuleExports": false
   }
  ],
  "func-names": 0,
  "func-style": [
   "off",
   "expression"
  ],
  "id-blacklist": "off",
  "id-length": "off",
  "id-match": "off",
  "indent": [
   "error",
   2
  ],
  "jsx-quotes": [
   "off",
   "prefer-double"
  ],
  "key-spacing": [
   "error",
   {
    "beforeColon": false,
    "afterColon": true
   }
  ],
  "keyword-spacing": [
   "error",
   {
    "before": true,
    "after": true,
    "overrides": {
     "return": {
      "after": true
     },
     "throw": {
      "after": true
     },
     "case": {
      "after": true
     }
    }
   }
  ],
  "line-comment-position": [
   "off",
   {
    "position": "above",
    "ignorePattern": "",
    "applyDefaultPatterns": true
   }
  ],
  "linebreak-style": [
   "error",
   "unix"
  ],
  "lines-around-comment": "off",
  "lines-around-directive": [
   "error",
   {
    "before": "always",
    "after": "always"
   }
  ],
  "max-depth": [
   "off",
   4
  ],
  "max-len": [
   0,
   {
    "code": 120,
    "ignoreStrings": true
   }
  ],
  "max-lines": [
   "off",
   {
    "max": 300,
    "skipBlankLines": true,
    "skipComments": true
   }
  ],
  "max-nested-callbacks": "off",
  "max-params": [
   "off",
   3
  ],
  "max-statements": [
   "off",
   10
  ],
  "max-statements-per-line": [
   "off",
   {
    "max": 1
   }
  ],
  "multiline-ternary": [
   "off",
   "never"
  ],
  "new-cap": [
   "error",
   {
    "capIsNew": false
   }
  ],
  "new-parens": "error",
  "newline-after-var": "off",
  "newline-before-return": "off",
  "newline-per-chained-call": [
   "error",
   {
    "ignoreChainWithDepth": 4
   }
  ],
  "no-array-constructor": "error",
  "no-bitwise": "error",
  "no-continue": "error",
  "no-inline-comments": "off",
  "no-lonely-if": "error",
  "no-mixed-operators": [
   "error",
   {
    "allowSamePrecedence": true
   }
  ],
  "no-mixed-spaces-and-tabs": "error",
  "no-multi-assign": [
   "error"
  ],
  "no-multiple-empty-lines": [
   "error",
   {
    "max": 2,
    "maxEOF": 1
   }
  ],
  "no-negated-condition": "off",
  "no-nested-ternary": "error",
  "no-new-object": "error",
  "no-plusplus": 0,
  "no-restricted-syntax": [
   "error",
   {
    "selector": "ForInStatement",
    "message": "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array."
   },
   {
    "selector": "ForOfStatement",
    "message": "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations."
   },
   {
    "selector": "LabeledStatement",
    "message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand."
   },
   {
    "selector": "WithStatement",
    "message": "`with` is disallowed in strict mode because it makes code impossible to predict and optimize."
   }
  ],
  "no-spaced-func": "error",
  "no-tabs": "error",
  "no-ternary": "off",
  "no-trailing-spaces": [
   "error",
   {
    "skipBlankLines": false
   }
  ],
  "no-underscore-dangle": 0,
  "no-unneeded-ternary": [
   "error",
   {
    "defaultAssignment": false
   }
  ],
  "no-whitespace-before-property": "error",
  "nonblock-statement-body-position": "off",
  "object-curly-spacing": [
   "error",
   "always"
  ],
  "object-curly-newline": 0,
  "object-property-newline": [
   "error",
   {
    "allowMultiplePropertiesPerLine": true
   }
  ],
  "one-var": [
   "error",
   "never"
  ],
  "one-var-declaration-per-line": [
   "error",
   "always"
  ],
  "operator-assignment": [
   "error",
   "always"
  ],
  "operator-linebreak": "off",
  "padded-blocks": [
   "warn",
   "never"
  ],
  "padding-line-between-statements": "off",
  "quote-props": [
   "error",
   "as-needed",
   {
    "keywords": false,
    "unnecessary": true,
    "numbers": false
   }
  ],
  "quotes": [
   "warn",
   "single",
   {
    "avoidEscape": true,
    "allowTemplateLiterals": true
   }
  ],
  "require-jsdoc": "off",
  "semi": [
   "error",
   "always"
  ],
  "semi-spacing": [
   "error",
   {
    "before": false,
    "after": true
   }
  ],
  "semi-style": [
   "off",
   "last"
  ],
  "sort-keys": [
   "off",
   "asc",
   {
    "caseSensitive": false,
    "natural": true
   }
  ],
  "sort-vars": "off",
  "space-before-blocks": "error",
  "space-before-function-paren": [
   "error",
   {
    "anonymous": "always",
    "named": "never",
    "asyncArrow": "always"
   }
  ],
  "space-in-parens": [
   "error",
   "never"
  ],
  "space-infix-ops": "error",
  "space-unary-ops": [
   "error",
   {
    "words": true,
    "nonwords": false,
    "overrides": {}
   }
  ],
  "spaced-comment": [
   "error",
   "always",
   {
    "line": {
     "exceptions": [
      "-",
      "+"
     ],
     "markers": [
      "=",
      "!"
     ]
    },
    "block": {
     "exceptions": [
      "-",
      "+"
     ],
     "markers": [
      "=",
      "!"
     ],
     "balanced": true
    }
   }
  ],
  "switch-colon-spacing": [
   "off",
   {
    "after": true,
    "before": false
   }
  ],
  "template-tag-spacing": [
   "off",
   "never"
  ],
  "unicode-bom": [
   "error",
   "never"
  ],
  "wrap-regex": "off",
  "init-declarations": "off",
  "no-catch-shadow": "off",
  "no-delete-var": "error",
  "no-label-var": "error",
  "no-restricted-globals": [
   "off",
   "addEventListener",
   "blur",
   "close",
   "closed",
   "confirm",
   "defaultStatus",
   "event",
   "external",
   "defaultstatus",
   "find",
   "focus",
   "frameElement",
   "frames",
   "history",
   "innerHeight",
   "innerWidth",
   "length",
   "location",
   "locationbar",
   "menubar",
   "moveBy",
   "moveTo",
   "name",
   "onblur",
   "onerror",
   "onfocus",
   "onload",
   "onresize",
   "onunload",
   "open",
   "opener",
   "opera",
   "outerHeight",
   "outerWidth",
   "pageXOffset",
   "pageYOffset",
   "parent",
   "print",
   "removeEventListener",
   "resizeBy",
   "resizeTo",
   "screen",
   "screenLeft",
   "screenTop",
   "screenX",
   "screenY",
   "scroll",
   "scrollbars",
   "scrollBy",
   "scrollTo",
   "scrollX",
   "scrollY",
   "self",
   "status",
   "statusbar",
   "stop",
   "toolbar",
   "top"
  ],
  "no-shadow": "error",
  "no-shadow-restricted-names": "error",
  "no-undef": "error",
  "no-undef-init": "error",
  "no-undefined": "off",
  "no-unused-vars": [
   "error",
   {
    "vars": "all",
    "args": "after-used",
    "ignoreRestSiblings": true
   }
  ],
  "no-use-before-define": [
   "error",
   {
    "functions": true,
    "classes": true,
    "variables": true
   }
  ],
  "arrow-body-style": 0,
  "arrow-parens": [
   "error",
   "as-needed",
   {
    "requireForBlockBody": true
   }
  ],
  "arrow-spacing": [
   "error",
   {
    "before": true,
    "after": true
   }
  ],
  "constructor-super": "error",
  "generator-star-spacing": [
   "error",
   {
    "before": false,
    "after": true
   }
  ],
  "no-class-assign": "error",
  "no-confusing-arrow": [
   "error",
   {
    "allowParens": true
   }
  ],
  "no-const-assign": "error",
  "no-dupe-class-members": "error",
  "no-duplicate-imports": "off",
  "no-new-symbol": "error",
  "no-restricted-imports": "off",
  "no-this-before-super": "error",
  "no-useless-computed-key": "error",
  "no-useless-constructor": "error",
  "no-useless-rename": [
   "error",
   {
    "ignoreDestructuring": false,
    "ignoreImport": false,
    "ignoreExport": false
   }
  ],
  "no-var": "error",
  "object-shorthand": [
   "error",
   "always",
   {
    "ignoreConstructors": false,
    "avoidQuotes": true
   }
  ],
  "prefer-arrow-callback": [
   "error",
   {
    "allowNamedFunctions": false,
    "allowUnboundThis": true
   }
  ],
  "prefer-const": [
   "error",
   {
    "destructuring": "any",
    "ignoreReadBeforeAssign": true
   }
  ],
  "prefer-destructuring": 0,
  "prefer-numeric-literals": "error",
  "prefer-reflect": "off",
  "prefer-rest-params": "error",
  "prefer-spread": "error",
  "prefer-template": "error",
  "require-yield": "error",
  "rest-spread-spacing": [
   "error",
   "never"
  ],
  "sort-imports": [
   "off",
   {
    "ignoreCase": false,
    "ignoreMemberSort": false,
    "memberSyntaxSortOrder": [
     "none",
     "all",
     "multiple",
     "single"
    ]
   }
  ],
  "symbol-description": "error",
  "template-curly-spacing": "error",
  "yield-star-spacing": [
   "error",
   "after"
  ],
  "import/no-unresolved": 0,
  "import/named": "off",
  "import/default": "off",
  "import/namespace": "off",
  "import/export": "error",
  "import/no-named-as-default": "error",
  "import/no-named-as-default-member": "error",
  "import/no-deprecated": "off",
  "import/no-extraneous-dependencies": 0,
  "import/no-mutable-exports": "error",
  "import/no-commonjs": "off",
  "import/no-amd": "error",
  "import/no-nodejs-modules": "off",
  "import/first": [
   "error",
   "absolute-first"
  ],
  "import/imports-first": "off",
  "import/no-duplicates": "error",
  "import/no-namespace": "off",
  "import/extensions": 0,
  "import/order": [
   "off",
   {
    "groups": [
     "builtin",
     "external",
     "internal",
     "parent",
     "sibling",
     "index"
    ],
    "newlines-between": "never"
   }
  ],
  "import/newline-after-import": "error",
  "import/prefer-default-export": 0,
  "import/no-restricted-paths": "off",
  "import/max-dependencies": [
   "off",
   {
    "max": 10
   }
  ],
  "import/no-absolute-path": "error",
  "import/no-dynamic-require": "error",
  "import/no-internal-modules": [
   "off",
   {
    "allow": []
   }
  ],
  "import/unambiguous": "off",
  "import/no-webpack-loader-syntax": "error",
  "import/no-unassigned-import": "off",
  "import/no-named-default": "error",
  "import/no-anonymous-default-export": [
   "off",
   {
    "allowArray": false,
    "allowArrowFunction": false,
    "allowAnonymousClass": false,
    "allowAnonymousFunction": false,
    "allowLiteral": false,
    "allowObject": false
   }
  ],
  "strict": "error",
  "react/forbid-prop-types": [
   2,
   {
    "forbid": [
     "any",
     "array"
    ]
   }
  ],
  "function-paren-newline": 0,
  "react/jsx-first-prop-new-line": 0,
  "react/jsx-filename-extension": 0,
  "react/require-default-props": 0,
  "react/no-array-index-key": 0,
  "react/display-name": 0,
  "jsx-a11y/img-has-alt": 0,
  "jsx-a11y/no-static-element-interactions": 0,
  "mocha/no-exclusive-tests": "error"
 },
 "env": {
  "node": true,
  "es6": true,
  "browser": true,
  "mocha": true,
  "jest": true,
 },
 "parserOptions": {
  "ecmaVersion": 2017,
  "sourceType": "module",
  "ecmaFeatures": {
   "experimentalObjectRestSpread": true,
   "jsx": true
  }
 },
 "plugins": [
  "import",
  "react",
  "mocha"
 ],
 "settings": {
  "import/resolver": {
   "node": {
    "extensions": [
     ".js",
     ".json"
    ]
   }
  },
  "import/extensions": [
   ".js",
   ".jsx"
  ],
  "import/core-modules": [],
  "import/ignore": [
   "node_modules",
   "\\.(coffee|scss|css|less|hbs|svg|json)$"
  ]
 },
 "extends": [
  "eslint:recommended",
  "plugin:react/recommended"
 ],
 "parser": "babel-eslint",
}
