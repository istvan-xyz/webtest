module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "airbnb-base",
        "plugin:@typescript-eslint/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "ignorePatterns": [
        "/node_modules",
        "/dist",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "@typescript-eslint/tslint"
    ],
    "rules": {
        "max-len": [
            "error",
            120
        ],
        "max-lines": [
            "error",
            200
        ],
        "indent": [
            "error",
            4
        ],
        "operator-linebreak": [
            "error",
            "after"
        ],
        "function-paren-newline": [
            0,
            "consistent"
        ],
        "eol-last": "off",
        "lines-between-class-members": [
            "error",
            "always",
            {
                "exceptAfterSingleLine": true
            }
        ],
        "arrow-parens": [
            "error",
            "as-needed"
        ],
        "@typescript-eslint/array-type": "error",
        "no-restricted-syntax": [
            "error",
            {
                "selector": "ForInStatement",
                "message": "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array."
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
        "object-curly-newline": [
            0,
            {
                "ObjectExpression": {
                    "minProperties": 4,
                    "multiline": true,
                    "consistent": true
                },
                "ObjectPattern": {
                    "minProperties": 4,
                    "multiline": true,
                    "consistent": true
                },
                "ImportDeclaration": {
                    "minProperties": 4,
                    "multiline": true,
                    "consistent": true
                },
                "ExportDeclaration": {
                    "minProperties": 4,
                    "multiline": true,
                    "consistent": true
                }
            }
        ],
        "no-continue": [
            0
        ],
        "no-plusplus": [
            0
        ],
        "no-underscore-dangle": "error",
        "@typescript-eslint/indent": ["error", 4, {
            "SwitchCase": 0
        }],
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                "accessibility": "no-public"
            }
        ],
        "@typescript-eslint/no-empty-interface": [
            0
        ],
        "@typescript-eslint/explicit-function-return-type": [
            0
        ],
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-object-literal-type-assertion": [
            0
        ],
        "@typescript-eslint/no-use-before-define": [
            0
        ],
        "import/prefer-default-export": [
            0
        ],
        "react/jsx-props-no-spreading": [
            0,
            {
                "html": "enforce",
                "custom": "enforce",
                "exceptions": []
            }
        ],
        "react/state-in-constructor": [
            0,
            "always"
        ],
        "react/style-prop-object": [
            0
        ],
        "react/static-property-placement": [
            0,
            "property assignment"
        ],
        "no-await-in-loop": [
            0
        ],
        "padded-blocks": [
            "error",
            {
                "blocks": "never"
            }
        ],
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 1
            }
        ],
        "max-classes-per-file": [
            "error",
            5
        ],
        "import/extensions": [
            0,
            "ignorePackages",
            {
                "js": "never",
                "mjs": "never",
                "jsx": "never"
            }
        ],
        "import/no-extraneous-dependencies": [
            "error",
            {
                "devDependencies": [
                    "**/*.test.ts"
                ]
            }
        ],
        "react/no-deprecated": [
            0
        ],
        "prefer-arrow-callback": [
            0,
            {
                "allowNamedFunctions": true,
                "allowUnboundThis": true
            }
        ],
        "@typescript-eslint/adjacent-overload-signatures": [
            "error"
        ],
        "@typescript-eslint/ban-ts-ignore": [
            "error"
        ],
        "@typescript-eslint/ban-types": [
            "error"
        ],
        "camelcase": "error",
        "@typescript-eslint/camelcase": [
            "error"
        ],
        "@typescript-eslint/class-name-casing": [
            "error"
        ],
        "@typescript-eslint/consistent-type-assertions": [
            "error"
        ],
        "@typescript-eslint/interface-name-prefix": [
            "error"
        ],
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],
        "no-array-constructor": [
            "off"
        ],
        "@typescript-eslint/no-array-constructor": [
            "error"
        ],
        "no-empty-function": [
            "off",
            {
                "allow": [
                    "arrowFunctions",
                    "functions",
                    "methods"
                ]
            }
        ],
        "@typescript-eslint/no-empty-function": [
            "error"
        ],
        "@typescript-eslint/no-explicit-any": [
            "warn"
        ],
        "@typescript-eslint/no-inferrable-types": [
            "error"
        ],
        "@typescript-eslint/no-misused-new": [
            "error"
        ],
        "@typescript-eslint/no-namespace": [
            "error"
        ],
        "@typescript-eslint/no-this-alias": [
            "error"
        ],
        "no-unused-vars": [
            "off",
            {
                "vars": "all",
                "args": "after-used",
                "ignoreRestSiblings": true
            }
        ],
        "@typescript-eslint/no-unused-vars": [
            "warn"
        ],
        "no-use-before-define": [
            "off",
            {
                "functions": true,
                "classes": true,
                "variables": true
            }
        ],
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/prefer-namespace-keyword": [
            "error"
        ],
        "@typescript-eslint/triple-slash-reference": [
            "error"
        ],
        "@typescript-eslint/type-annotation-spacing": [
            "error"
        ],
        "no-var": [
            "error"
        ],
        "prefer-const": [
            "error",
            {
                "destructuring": "all"
            }
        ],
        "prefer-rest-params": [
            "error"
        ],
        "prefer-spread": [
            "error"
        ],
        "class-methods-use-this": [
            "error",
            {
                "exceptMethods": [
                    "render",
                    "getInitialState",
                    "getDefaultProps",
                    "getChildContext",
                    "componentWillMount",
                    "UNSAFE_componentWillMount",
                    "componentDidMount",
                    "componentWillReceiveProps",
                    "UNSAFE_componentWillReceiveProps",
                    "shouldComponentUpdate",
                    "componentWillUpdate",
                    "UNSAFE_componentWillUpdate",
                    "componentDidUpdate",
                    "componentWillUnmount",
                    "componentDidCatch",
                    "getSnapshotBeforeUpdate"
                ]
            }
        ],
        "strict": [
            "error",
            "never"
        ],
        "import/no-unresolved": [
            "error",
            {
                "commonjs": true,
                "caseSensitive": true
            }
        ],
        "import/named": [
            "error"
        ],
        "import/default": [
            "off"
        ],
        "import/namespace": [
            "off"
        ],
        "import/export": [
            "error"
        ],
        "import/no-named-as-default": [
            "error"
        ],
        "import/no-named-as-default-member": [
            "error"
        ],
        "import/no-deprecated": [
            "off"
        ],
        "import/no-mutable-exports": [
            "error"
        ],
        "import/no-commonjs": [
            "off"
        ],
        "import/no-amd": [
            "error"
        ],
        "import/no-nodejs-modules": [
            "off"
        ],
        "import/first": [
            "error"
        ],
        "import/imports-first": [
            "off"
        ],
        "import/no-duplicates": [
            "error"
        ],
        "import/no-namespace": [
            "off"
        ],
        "import/order": "off",
        "import/newline-after-import": [
            "error"
        ],
        "import/no-restricted-paths": [
            "off"
        ],
        "import/max-dependencies": [
            "off",
            {
                "max": 10
            }
        ],
        "import/no-absolute-path": [
            "error"
        ],
        "import/no-dynamic-require": [
            "error"
        ],
        "import/no-internal-modules": [
            "off",
            {
                "allow": []
            }
        ],
        "import/unambiguous": [
            "off"
        ],
        "import/no-webpack-loader-syntax": [
            "error"
        ],
        "import/no-unassigned-import": "off",
        "import/no-named-default": [
            "error"
        ],
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
        "import/exports-last": [
            "off"
        ],
        "import/group-exports": [
            "off"
        ],
        "import/no-default-export": "off",
        "import/no-named-export": [
            "off"
        ],
        "import/no-self-import": [
            "error"
        ],
        "import/no-cycle": [
            "error",
        ],
        "import/no-useless-path-segments": [
            "error"
        ],
        "import/dynamic-import-chunkname": [
            "off",
            {
                "importFunctions": [],
                "webpackChunknameFormat": "[0-9a-zA-Z-_/.]+"
            }
        ],
        "import/no-relative-parent-imports": [
            "off"
        ],
        "import/no-unused-modules": [
            "off",
            {
                "ignoreExports": [],
                "missingExports": true,
                "unusedExports": true
            }
        ],
        "arrow-body-style": [
            "error",
            "as-needed"
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
        "no-class-assign": [
            "error"
        ],
        "no-confusing-arrow": [
            "error",
            {
                "allowParens": true
            }
        ],
        "no-const-assign": [
            "error"
        ],
        "no-dupe-class-members": [
            "error"
        ],
        "no-duplicate-imports": [
            "off"
        ],
        "no-new-symbol": [
            "error"
        ],
        "no-restricted-imports": [
            "error",
            "rxjs",
            "lodash"
        ],
        "no-this-before-super": [
            "error"
        ],
        "no-useless-computed-key": [
            "error"
        ],
        "no-useless-constructor": [
            "error"
        ],
        "no-useless-rename": [
            "error",
            {
                "ignoreDestructuring": false,
                "ignoreImport": false,
                "ignoreExport": false
            }
        ],
        "object-shorthand": "error",
        "prefer-destructuring": [
            "error",
            {
                "VariableDeclarator": {
                    "array": false,
                    "object": true
                },
                "AssignmentExpression": {
                    "array": true,
                    "object": false
                }
            },
            {
                "enforceForRenamedProperties": false
            }
        ],
        "prefer-numeric-literals": [
            "error"
        ],
        "prefer-reflect": [
            "off"
        ],
        "prefer-template": "error",
        "require-yield": [
            "error"
        ],
        "rest-spread-spacing": [
            "error",
            "never"
        ],
        "sort-imports": [
            "off",
            {
                "ignoreCase": false,
                "ignoreDeclarationSort": false,
                "ignoreMemberSort": false,
                "memberSyntaxSortOrder": [
                    "none",
                    "all",
                    "multiple",
                    "single"
                ]
            }
        ],
        "symbol-description": [
            "error"
        ],
        "template-curly-spacing": [
            "error"
        ],
        "yield-star-spacing": [
            "error",
            "after"
        ],
        "init-declarations": [
            "off"
        ],
        "no-catch-shadow": [
            "off"
        ],
        "no-delete-var": [
            "error"
        ],
        "no-label-var": [
            "error"
        ],
        "no-restricted-globals": [
            "error",
            "isFinite",
            "isNaN",
            "addEventListener",
            "blur",
            "close",
            "closed",
            "confirm",
            "defaultStatus",
            "defaultstatus",
            "event",
            "external",
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
        "no-shadow": [
            "error"
        ],
        "no-shadow-restricted-names": [
            "error"
        ],
        "no-undef": [
            "error"
        ],
        "no-undef-init": "error",
        "no-undefined": [
            "off"
        ],
        "array-bracket-newline": [
            "off",
            "consistent"
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
        "comma-dangle": [
            "error",
            "always-multiline"
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
            "last",
            {
                "exceptions": {
                    "ArrayExpression": false,
                    "ArrayPattern": false,
                    "ArrowFunctionExpression": false,
                    "CallExpression": false,
                    "FunctionDeclaration": false,
                    "FunctionExpression": false,
                    "ImportDeclaration": false,
                    "ObjectExpression": false,
                    "ObjectPattern": false,
                    "VariableDeclaration": false,
                    "NewExpression": false
                }
            }
        ],
        "computed-property-spacing": [
            "error",
            "never"
        ],
        "consistent-this": [
            "off"
        ],
        "func-call-spacing": [
            "error",
            "never"
        ],
        "func-name-matching": [
            "off",
            "always",
            {
                "includeCommonJSModuleExports": false,
                "considerPropertyDescriptor": true
            }
        ],
        "func-names": [
            "warn"
        ],
        "func-style": [
            "off",
            "expression"
        ],
        "id-blacklist": [
            "error",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "Undefined",
        ],
        "id-length": [
            "off"
        ],
        "id-match": "error",
        "implicit-arrow-linebreak": [
            "error",
            "beside"
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
        "lines-around-comment": [
            "off"
        ],
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
        "max-lines-per-function": [
            "off",
            {
                "max": 50,
                "skipBlankLines": true,
                "skipComments": true,
                "IIFEs": true
            }
        ],
        "max-nested-callbacks": [
            "off"
        ],
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
        "multiline-comment-style": [
            "off",
            "starred-block"
        ],
        "multiline-ternary": [
            "off",
            "never"
        ],
        "new-cap": [
            "error",
            {
                "newIsCap": true,
                "newIsCapExceptions": [],
                "capIsNew": false,
                "capIsNewExceptions": [
                    "Immutable.Map",
                    "Immutable.Set",
                    "Immutable.List"
                ],
                "properties": true
            }
        ],
        "new-parens": "error",
        "newline-after-var": [
            "off"
        ],
        "newline-before-return": [
            "off"
        ],
        "newline-per-chained-call": [
            "error",
            {
                "ignoreChainWithDepth": 4
            }
        ],
        "no-bitwise": [
            "error"
        ],
        "no-inline-comments": [
            "off"
        ],
        "no-lonely-if": [
            "error"
        ],
        "no-mixed-operators": [
            "error",
            {
                "groups": [
                    [
                        "%",
                        "**"
                    ],
                    [
                        "%",
                        "+"
                    ],
                    [
                        "%",
                        "-"
                    ],
                    [
                        "%",
                        "*"
                    ],
                    [
                        "%",
                        "/"
                    ],
                    [
                        "/",
                        "*"
                    ],
                    [
                        "&",
                        "|",
                        "<<",
                        ">>",
                        ">>>"
                    ],
                    [
                        "==",
                        "!=",
                        "===",
                        "!=="
                    ],
                    [
                        "&&",
                        "||"
                    ]
                ],
                "allowSamePrecedence": false
            }
        ],
        "no-mixed-spaces-and-tabs": [
            "error"
        ],
        "no-multi-assign": [
            "error"
        ],
        "no-negated-condition": [
            "off"
        ],
        "no-nested-ternary": [
            "error"
        ],
        "no-new-object": [
            "error"
        ],
        "no-spaced-func": [
            "error"
        ],
        "no-tabs": [
            "error"
        ],
        "no-ternary": [
            "off"
        ],
        "no-trailing-spaces": "error",
        "no-unneeded-ternary": [
            "error",
            {
                "defaultAssignment": false
            }
        ],
        "no-whitespace-before-property": [
            "error"
        ],
        "nonblock-statement-body-position": [
            "error",
            "beside",
            {
                "overrides": {}
            }
        ],
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "object-property-newline": [
            "error",
            {
                "allowAllPropertiesOnSameLine": true,
                "allowMultiplePropertiesPerLine": false
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
        "padding-line-between-statements": [
            "off",
            {
                "blankLine": "always",
                "prev": "*",
                "next": "return"
            }
        ],
        "prefer-object-spread": "error",
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
            "error",
            "single",
            {
                "avoidEscape": true
            }
        ],
        "require-jsdoc": [
            "off"
        ],
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
            "error",
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
        "sort-vars": [
            "off"
        ],
        "space-before-blocks": [
            "error"
        ],
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
        "space-infix-ops": [
            "error"
        ],
        "space-unary-ops": [
            "error",
            {
                "words": true,
                "nonwords": false,
                "overrides": {}
            }
        ],
        "spaced-comment": "error",
        "switch-colon-spacing": [
            "error",
            {
                "after": true,
                "before": false
            }
        ],
        "template-tag-spacing": [
            "error",
            "never"
        ],
        "unicode-bom": [
            "error",
            "never"
        ],
        "wrap-regex": [
            "off"
        ],
        "callback-return": [
            "off"
        ],
        "global-require": [
            "error"
        ],
        "handle-callback-err": [
            "off"
        ],
        "no-buffer-constructor": [
            "error"
        ],
        "no-mixed-requires": [
            "off",
            false
        ],
        "no-new-require": [
            "error"
        ],
        "no-path-concat": [
            "error"
        ],
        "no-process-env": [
            "off"
        ],
        "no-process-exit": [
            "off"
        ],
        "no-restricted-modules": [
            "off"
        ],
        "no-sync": [
            "off"
        ],
        "for-direction": [
            "error"
        ],
        "getter-return": [
            "error",
            {
                "allowImplicit": true
            }
        ],
        "no-async-promise-executor": [
            "error"
        ],
        "no-compare-neg-zero": [
            "error"
        ],
        "no-cond-assign": "error",
        "no-console": [
            "warn"
        ],
        "no-constant-condition": [
            "warn"
        ],
        "no-control-regex": [
            "error"
        ],
        "no-debugger": "error",
        "no-dupe-args": [
            "error"
        ],
        "no-dupe-keys": [
            "error"
        ],
        "no-duplicate-case": [
            "error"
        ],
        "no-empty": "error",
        "no-empty-character-class": [
            "error"
        ],
        "no-ex-assign": [
            "error"
        ],
        "no-extra-boolean-cast": [
            "error"
        ],
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
        "no-extra-semi": [
            "error"
        ],
        "no-func-assign": [
            "error"
        ],
        "no-inner-declarations": [
            "error"
        ],
        "no-invalid-regexp": [
            "error"
        ],
        "no-irregular-whitespace": "error",
        "no-misleading-character-class": [
            "error"
        ],
        "no-obj-calls": [
            "error"
        ],
        "no-prototype-builtins": [
            "error"
        ],
        "no-regex-spaces": [
            "error"
        ],
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-unexpected-multiline": [
            "error"
        ],
        "no-unreachable": [
            "error"
        ],
        "no-unsafe-finally": "error",
        "no-unsafe-negation": [
            "error"
        ],
        "no-negated-in-lhs": [
            "off"
        ],
        "require-atomic-updates": [
            "off"
        ],
        "use-isnan": "error",
        "valid-jsdoc": [
            "off"
        ],
        "valid-typeof": [
            "error",
            {
                "requireStringLiterals": true
            }
        ],
        "accessor-pairs": [
            "off"
        ],
        "array-callback-return": [
            "error",
            {
                "allowImplicit": true
            }
        ],
        "block-scoped-var": [
            "error"
        ],
        "complexity": [
            "off",
            11
        ],
        "consistent-return": [
            "error"
        ],
        "curly": "error",
        "default-case": [
            "error",
            {
                "commentPattern": "^no default$"
            }
        ],
        "dot-notation": "error",
        "dot-location": [
            "error",
            "property"
        ],
        "eqeqeq": [
            "error",
            "always"
        ],
        "guard-for-in": "error",
        "no-alert": [
            "warn"
        ],
        "no-caller": "error",
        "no-case-declarations": [
            "error"
        ],
        "no-div-regex": [
            "off"
        ],
        "no-else-return": [
            "error",
            {
                "allowElseIf": false
            }
        ],
        "no-empty-pattern": [
            "error"
        ],
        "no-eq-null": [
            "off"
        ],
        "no-eval": "error",
        "no-extend-native": [
            "error"
        ],
        "no-extra-bind": [
            "error"
        ],
        "no-extra-label": [
            "error"
        ],
        "no-fallthrough": [
            "error"
        ],
        "no-floating-decimal": [
            "error"
        ],
        "no-global-assign": [
            "error",
            {
                "exceptions": []
            }
        ],
        "no-native-reassign": [
            "off"
        ],
        "no-implicit-coercion": [
            "off",
            {
                "boolean": false,
                "number": true,
                "string": true,
                "allow": []
            }
        ],
        "no-implicit-globals": [
            "off"
        ],
        "no-implied-eval": [
            "error"
        ],
        "no-invalid-this": "error",
        "no-iterator": [
            "error"
        ],
        "no-labels": [
            "error",
            {
                "allowLoop": false,
                "allowSwitch": false
            }
        ],
        "no-lone-blocks": [
            "error"
        ],
        "no-loop-func": [
            "error"
        ],
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
            {
                "ignoreEOLComments": false
            }
        ],
        "no-multi-str": [
            "error"
        ],
        "no-new": [
            "error"
        ],
        "no-new-func": [
            "error"
        ],
        "no-new-wrappers": "error",
        "no-octal": [
            "error"
        ],
        "no-octal-escape": [
            "error"
        ],
        "no-param-reassign": [
            "error",
            {
                "props": true,
                "ignorePropertyModificationsFor": [
                    "acc",
                    "accumulator",
                    "e",
                    "ctx",
                    "req",
                    "request",
                    "res",
                    "response",
                    "$scope",
                    "staticContext"
                ]
            }
        ],
        "no-proto": [
            "error"
        ],
        "no-redeclare": "error",
        "no-restricted-properties": [
            "error",
            {
                "object": "arguments",
                "property": "callee",
                "message": "arguments.callee is deprecated"
            },
            {
                "object": "global",
                "property": "isFinite",
                "message": "Please use Number.isFinite instead"
            },
            {
                "object": "self",
                "property": "isFinite",
                "message": "Please use Number.isFinite instead"
            },
            {
                "object": "window",
                "property": "isFinite",
                "message": "Please use Number.isFinite instead"
            },
            {
                "object": "global",
                "property": "isNaN",
                "message": "Please use Number.isNaN instead"
            },
            {
                "object": "self",
                "property": "isNaN",
                "message": "Please use Number.isNaN instead"
            },
            {
                "object": "window",
                "property": "isNaN",
                "message": "Please use Number.isNaN instead"
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
        "no-return-await": [
            "error"
        ],
        "no-script-url": [
            "error"
        ],
        "no-self-assign": [
            "error",
            {
                "props": true
            }
        ],
        "no-self-compare": [
            "error"
        ],
        "no-sequences": [
            "error"
        ],
        "no-throw-literal": [
            "error"
        ],
        "no-unmodified-loop-condition": [
            "off"
        ],
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "no-useless-call": [
            "off"
        ],
        "no-useless-catch": [
            "error"
        ],
        "no-useless-concat": [
            "error"
        ],
        "no-useless-escape": [
            "error"
        ],
        "no-useless-return": [
            "error"
        ],
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
        "no-with": [
            "error"
        ],
        "prefer-promise-reject-errors": [
            "error",
            {
                "allowEmptyReject": true
            }
        ],
        "prefer-named-capture-group": [
            "off"
        ],
        "radix": "error",
        "require-await": [
            "off"
        ],
        "require-unicode-regexp": [
            "off"
        ],
        "vars-on-top": [
            "error"
        ],
        "wrap-iife": [
            "error",
            "outside",
            {
                "functionPrototypeMethods": false
            }
        ],
        "yoda": "off",
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/consistent-type-definitions": "error",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-parameter-properties": "error",
        "@typescript-eslint/no-require-imports": "off",
        "@typescript-eslint/no-unnecessary-qualifier": "error",
        "@typescript-eslint/no-unnecessary-type-arguments": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/promise-function-async": "error",
        "@typescript-eslint/quotes": [
            "error",
            "single",
            {
                "avoidEscape": true
            }
        ],
        "@typescript-eslint/restrict-plus-operands": "error",
        "@typescript-eslint/semi": [
            "error",
            "always"
        ],
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/unbound-method": "off",
        "@typescript-eslint/unified-signatures": "error",
        "@typescript-eslint/tslint/config": [
            "error",
            {
                "rules": {
                    "ban": [
                        true,
                        "eval"
                    ],
                    "encoding": true,
                    "import-spacing": true,
                    "jsdoc-format": true,
                    "no-mergeable-namespace": true,
                    "number-literal-format": true,
                    "one-line": [
                        true,
                        "check-catch",
                        "check-finally",
                        "check-else",
                        "check-open-brace",
                        "check-whitespace"
                    ],
                    "prefer-conditional-expression": true,
                    "prefer-switch": [
                        true,
                        {
                            "min-cases": 2
                        }
                    ],
                    "strict-type-predicates": true,
                    "whitespace": [
                        true,
                        "check-branch",
                        "check-operator",
                        "check-typecast"
                    ]
                }
            }
        ]
    },
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [
                    ".js",
                    ".jsx",
                    ".ts",
                    ".tsx"
                ]
            }
        },
        "propWrapperFunctions": [
            "forbidExtraProps",
            "exact",
            "Object.freeze"
        ],
        "import/extensions": [
            ".js",
            ".mjs",
            ".jsx"
        ],
        "import/core-modules": [],
        "import/ignore": [
            "node_modules",
            "\\.(coffee|scss|css|less|hbs|svg|json)$"
        ]
    }
};
