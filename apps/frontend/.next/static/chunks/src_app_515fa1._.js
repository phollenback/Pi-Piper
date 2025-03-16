(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_515fa1._.js", {

"[project]/src/app/components/Elements/ui/SelectBox.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
// SelectBox component: a customizable select box with options.
const SelectBox = ({ value, onChange, options, placeholder = "Select an option", title })=>{
    // Handles changes to the select box, updating the parent component.
    const handleChange = (event)=>{
        onChange(event.target.value);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            id: "select-box",
            value: value,
            onChange: handleChange,
            title: title || placeholder,
            className: "border border-gray-300 rounded-lg px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "",
                    disabled: true,
                    children: placeholder
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Elements/ui/SelectBox.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                options.map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: option.value,
                        children: option.label
                    }, `${option.value}-${index}`, false, {
                        fileName: "[project]/src/app/components/Elements/ui/SelectBox.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Elements/ui/SelectBox.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Elements/ui/SelectBox.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
};
_c = SelectBox;
const __TURBOPACK__default__export__ = SelectBox;
var _c;
__turbopack_refresh__.register(_c, "SelectBox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/PrepDash/Recipebook/RecipeDisplay.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
// Detailed recipe display component with sectioned layout for recipe information
const RecipeDisplay = ({ selectedRecipe })=>{
    _s();
    const [recipeDetails, setRecipeDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Sync local state with selected recipe
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RecipeDisplay.useEffect": ()=>{
            setRecipeDetails(selectedRecipe);
        }
    }["RecipeDisplay.useEffect"], [
        selectedRecipe
    ]);
    if (!recipeDetails) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-8 bg-zinc-100 rounded-md flex items-center justify-center h-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-lg text-gray-500",
                children: "Select a recipe to view details"
            }, void 0, false, {
                fileName: "[project]/src/app/components/PrepDash/Recipebook/RecipeDisplay.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/PrepDash/Recipebook/RecipeDisplay.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this);
    }
    // Extract procedure from description
    const procedure = recipeDetails.procedure || recipeDetails.description || "No procedure available";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8 bg-zinc-100 grid auto-rows-max rounded-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-blue-50 p-4 rounded-md mb-4 border border-blue-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-bold text-blue-600",
                    children: recipeDetails.prepItemName
                }, void 0, false, {
                    fileName: "[project]/src/app/components/PrepDash/Recipebook/RecipeDisplay.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/PrepDash/Recipebook/RecipeDisplay.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-50 p-4 rounded-md mb-4 border border-gray-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-gray-700",
                    children: recipeDetails.description || "No description available"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/PrepDash/Recipebook/RecipeDisplay.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/PrepDash/Recipebook/RecipeDisplay.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-green-50 p-4 rounded-md mb-4 border border-green-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-green-600 mb-2",
                        children: "Ingredients:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PrepDash/Recipebook/RecipeDisplay.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    recipeDetails.ingredients && recipeDetails.ingredients.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "list-disc ml-6",
                        children: recipeDetails.ingredients.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "text-lg text-gray-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: [
                                            item.quantity,
                                            " ",
                                            item.unit
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/PrepDash/Recipebook/RecipeDisplay.tsx",
                                        lineNumber: 44,
                                        columnNumber: 17
                                    }, this),
                                    " of ",
                                    item.ingredient?.ingredientName || `Ingredient #${item.ingredientId}`,
                                    item.ingredient?.unitPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-gray-500 ml-2",
                                        children: [
                                            "(Est. cost: $",
                                            (item.quantity * item.ingredient.unitPrice).toFixed(2),
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/PrepDash/Recipebook/RecipeDisplay.tsx",
                                        lineNumber: 46,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, item.prepIngredientId, true, {
                                fileName: "[project]/src/app/components/PrepDash/Recipebook/RecipeDisplay.tsx",
                                lineNumber: 43,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PrepDash/Recipebook/RecipeDisplay.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "No ingredients listed"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PrepDash/Recipebook/RecipeDisplay.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/PrepDash/Recipebook/RecipeDisplay.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-yellow-50 p-4 rounded-md border border-yellow-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-yellow-600 mb-2",
                        children: "Procedure:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PrepDash/Recipebook/RecipeDisplay.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-lg text-gray-600",
                        children: procedure.split("\n").map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2",
                                children: step
                            }, index, false, {
                                fileName: "[project]/src/app/components/PrepDash/Recipebook/RecipeDisplay.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PrepDash/Recipebook/RecipeDisplay.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/PrepDash/Recipebook/RecipeDisplay.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/PrepDash/Recipebook/RecipeDisplay.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
};
_s(RecipeDisplay, "HVnQTvWMN7fUHFqdqDdBDVMLYPw=");
_c = RecipeDisplay;
const __TURBOPACK__default__export__ = RecipeDisplay;
var _c;
__turbopack_refresh__.register(_c, "RecipeDisplay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/PrepDash/Recipebook/RecipeListing.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Elements/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
const RecipeListing = ({ recipes, onRecipeSelect })=>{
    _s();
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""); // Local search term state.
    const prepSearchTerm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "RecipeListing.useSelector[prepSearchTerm]": (state)=>state.search.prepSearchTerm
    }["RecipeListing.useSelector[prepSearchTerm]"]); // Redux search term.
    // Filters recipes based on the search term.
    const filteredRecipes = recipes.filter((recipe)=>{
        const lowercasedTerm = searchTerm.toLowerCase();
        const recipeName = recipe.prepItemName || '';
        const description = recipe.description || '';
        return recipeName.toLowerCase().includes(lowercasedTerm) || description.toLowerCase().includes(lowercasedTerm);
    });
    // Updates the local search term when the Redux search term changes.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RecipeListing.useEffect": ()=>{
            setSearchTerm(prepSearchTerm);
            console.log('recipes listing', recipes);
        }
    }["RecipeListing.useEffect"], [
        prepSearchTerm,
        recipes
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-zinc-100 pt-6 pl-8 pr-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center",
            children: filteredRecipes.map((recipe)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    label: recipe.prepItemName || 'Unnamed Recipe',
                    onClick: ()=>onRecipeSelect(recipe),
                    size: "large",
                    style: {
                        backgroundColor: "rgb(21, 205, 30)",
                        cursor: "pointer",
                        width: "90%",
                        marginBottom: "10px"
                    }
                }, recipe.prepItemId, false, {
                    fileName: "[project]/src/app/components/PrepDash/Recipebook/RecipeListing.tsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/app/components/PrepDash/Recipebook/RecipeListing.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/PrepDash/Recipebook/RecipeListing.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
};
_s(RecipeListing, "dYLALvqqhFYmgErv9obz/c3/xAY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = RecipeListing;
const __TURBOPACK__default__export__ = RecipeListing;
var _c;
__turbopack_refresh__.register(_c, "RecipeListing");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/types/models/Category.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "categoryAdapter": (()=>categoryAdapter)
});
const categoryAdapter = {
    toSelectBoxOptions: (categories = [])=>{
        return categories.map((category)=>({
                label: category.categoryName,
                value: category.categoryId,
                type: 'categoryType' in category ? category.categoryType : undefined
            }));
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/hooks/useRecipes.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useCreateRecipe": (()=>useCreateRecipe),
    "useDeleteRecipe": (()=>useDeleteRecipe),
    "useRecipe": (()=>useRecipe),
    "useRecipes": (()=>useRecipes),
    "useUpdateRecipe": (()=>useUpdateRecipe)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature(), _s2 = __turbopack_refresh__.signature(), _s3 = __turbopack_refresh__.signature(), _s4 = __turbopack_refresh__.signature();
;
;
const useRecipes = (restaurantId)=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'recipes',
            restaurantId
        ],
        queryFn: {
            "useRecipes.useQuery": async ()=>{
                if (!restaurantId) {
                    return [];
                }
                const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`http://localhost:3001/recipes/${restaurantId}`);
                return data;
            }
        }["useRecipes.useQuery"],
        enabled: !!restaurantId
    });
};
_s(useRecipes, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
const useRecipe = (recipeId)=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'recipe',
            recipeId
        ],
        queryFn: {
            "useRecipe.useQuery": async ()=>{
                const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`http://localhost:3001/recipes/detail/${recipeId}`);
                return data;
            }
        }["useRecipe.useQuery"],
        enabled: !!recipeId
    });
};
_s1(useRecipe, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
const useCreateRecipe = ()=>{
    _s2();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCreateRecipe.useMutation": async (newRecipe)=>{
                const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('http://localhost:3001/recipes', newRecipe);
                return data;
            }
        }["useCreateRecipe.useMutation"],
        onSuccess: {
            "useCreateRecipe.useMutation": (data)=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'recipes'
                    ]
                });
                queryClient.setQueryData([
                    'recipe',
                    data.prepItemId
                ], data);
            }
        }["useCreateRecipe.useMutation"]
    });
};
_s2(useCreateRecipe, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
const useUpdateRecipe = (recipeId)=>{
    _s3();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useUpdateRecipe.useMutation": async (updatedRecipe)=>{
                const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`http://localhost:3001/recipes/${recipeId}`, updatedRecipe);
                return data;
            }
        }["useUpdateRecipe.useMutation"],
        onSuccess: {
            "useUpdateRecipe.useMutation": (data)=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'recipes'
                    ]
                });
                queryClient.setQueryData([
                    'recipe',
                    recipeId
                ], data);
            }
        }["useUpdateRecipe.useMutation"]
    });
};
_s3(useUpdateRecipe, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
const useDeleteRecipe = ()=>{
    _s4();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useDeleteRecipe.useMutation": async (recipeId)=>{
                await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`http://localhost:3001/recipes/${recipeId}`);
            }
        }["useDeleteRecipe.useMutation"],
        onSuccess: {
            "useDeleteRecipe.useMutation": (_, recipeId)=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'recipes'
                    ]
                });
                queryClient.removeQueries({
                    queryKey: [
                        'recipe',
                        recipeId
                    ]
                });
            }
        }["useDeleteRecipe.useMutation"]
    });
};
_s4(useDeleteRecipe, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/actions/prepItemActions.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createPrepItem": (()=>createPrepItem),
    "deletePrepItem": (()=>deletePrepItem),
    "editPrepItem": (()=>editPrepItem),
    "fetchAllPrepItems": (()=>fetchAllPrepItems),
    "fetchCategories": (()=>fetchCategories),
    "fetchDailyList": (()=>fetchDailyList),
    "fetchPrepData": (()=>fetchPrepData),
    "getPrepItems": (()=>getPrepItems),
    "postDailyPrep": (()=>postDailyPrep),
    "postPrepItem": (()=>postPrepItem),
    "updateDailyPrepItem": (()=>updateDailyPrepItem)
});
const getPrepItems = async (restaurantId)=>{
    const response = await fetch(`http://localhost:3001/prepitems/${restaurantId}`);
    if (!response.ok) throw new Error('Failed to fetch prep items');
    return response.json();
};
const createPrepItem = async (data, restaurantId)=>{
    const response = await fetch(`http://localhost:3001/prepitems/${restaurantId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to create prep item');
    return response.json();
};
const deletePrepItem = async (prepItemId, restaurantId)=>{
    const response = await fetch(`http://localhost:3001/prepitems/${restaurantId}/${prepItemId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok) throw new Error('Failed to delete prep item');
    return response.json();
};
const fetchAllPrepItems = async (restaurantId)=>{
    const response = await fetch(`http://localhost:3001/prepitems/${restaurantId}`);
    if (!response.ok) throw new Error('Failed to fetch all prep items');
    return response.json();
};
const postPrepItem = async (restaurantId, formData)=>{
    const response = await fetch(`http://localhost:3001/prepitems/${restaurantId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });
    if (!response.ok) throw new Error('Failed to post prep item');
    return response.json();
};
const postDailyPrep = async (prepList, restaurantId)=>{
    const response = await fetch(`http://localhost:3001/prepitems/daily/${restaurantId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prepList: prepList.map((item)=>({
                    ...item,
                    quantity: Number(item.quantity),
                    status: item.status || 'todo' // Default status if not provided
                }))
        })
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to post daily prep');
    }
    return response.json();
};
const fetchDailyList = async (restaurantId)=>{
    try {
        const response = await fetch(`http://localhost:3001/prepitems/daily/${restaurantId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch daily prep items');
        }
        const data = await response.json();
        console.log('Fetched daily prep items:', data);
        return data;
    } catch (error) {
        console.error('Error fetching daily prep items:', error);
        return [];
    }
};
const fetchCategories = async (restaurantId = 1)=>{
    const response = await fetch(`http://localhost:3001/categories/${restaurantId}`);
    if (!response.ok) throw new Error('Failed to fetch categories');
    return response.json();
};
const fetchPrepData = async (restaurantId)=>{
    const [prepItems, dailyList, categories] = await Promise.all([
        getPrepItems(restaurantId),
        fetchDailyList(restaurantId),
        fetchCategories(restaurantId)
    ]);
    return {
        prepItems,
        dailyList,
        categories
    };
};
const editPrepItem = async (prepItemId, data, restaurantId)=>{
    const response = await fetch(`http://localhost:3001/prepitems/${restaurantId}/${prepItemId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to update prep item');
    return response.json();
};
const updateDailyPrepItem = async (item)=>{
    console.log('Updating daily prep item:', item);
    try {
        // Make sure we have all required fields
        if (!item.name || !item.status) {
            console.error('Missing required fields for updating prep item');
            throw new Error('Missing required fields: name and status are required');
        }
        // Ensure restaurant_id is a number
        const restaurantId = Number(item.restaurant_id);
        if (isNaN(restaurantId) || restaurantId <= 0) {
            console.error('Invalid restaurant_id:', item.restaurant_id);
            throw new Error('Invalid restaurant ID');
        }
        // Create a clean copy of the item with only the fields we need
        const cleanItem = {
            name: item.name,
            description: item.description || '',
            note: item.note || '',
            quantity: Number(item.quantity) || 0,
            unit: item.unit || 'units',
            status: item.status,
            category: Number(item.category) || 0,
            restaurant_id: restaurantId,
            prep_list_id: item.prep_list_id,
            date: item.date
        };
        console.log('Sending clean item to server:', cleanItem);
        const response = await fetch(`http://localhost:3001/prepitems/daily/${restaurantId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cleanItem)
        });
        if (!response.ok) {
            let errorMessage = `Failed to update daily prep item (Status: ${response.status})`;
            try {
                // Try to parse error response
                const errorData = await response.json();
                console.error('Error response from server:', errorData);
                if (errorData && errorData.message) {
                    errorMessage = errorData.message;
                } else if (errorData && errorData.error) {
                    errorMessage = errorData.error;
                }
            } catch (parseError) {
                console.error('Failed to parse error response:', parseError);
            }
            throw new Error(errorMessage);
        }
        const result = await response.json();
        console.log('Successfully updated daily prep item:', result);
        return result;
    } catch (error) {
        console.error('Exception in updateDailyPrepItem:', error);
        throw error;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/prep-dash/recipebook/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>RecipeBookContainer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$ui$2f$SelectBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Elements/ui/SelectBox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrepDash$2f$Recipebook$2f$RecipeDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/PrepDash/Recipebook/RecipeDisplay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrepDash$2f$Recipebook$2f$RecipeListing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/PrepDash/Recipebook/RecipeListing.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$search$2f$searchSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux/features/search/searchSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$types$2f$models$2f$Category$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/types/models/Category.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useRecipes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/hooks/useRecipes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$prepItemActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/actions/prepItemActions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function RecipeBookContainer() {
    _s();
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedRecipe, setSelectedRecipe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    // const queryClient = useQueryClient();
    // Get restaurant ID from user state or context
    const restaurantId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "RecipeBookContainer.useSelector": (state)=>state.auth.restaurantId
    }["RecipeBookContainer.useSelector"]) || 1;
    // Unified data fetching
    const { data: recipes = [], isLoading: recipesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useRecipes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecipes"])(restaurantId);
    const { data: categories = [], isLoading: categoriesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'categories',
            restaurantId
        ],
        queryFn: {
            "RecipeBookContainer.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$prepItemActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCategories"])(restaurantId)
        }["RecipeBookContainer.useQuery"],
        enabled: !!restaurantId,
        staleTime: 1000 * 60 * 5
    });
    // Filter recipes based on selected category
    const filteredRecipes = recipes.filter((recipe)=>{
        const matchesCategory = selectedCategory ? recipe.itemCategory === (typeof selectedCategory === "string" ? parseInt(selectedCategory) : selectedCategory) : true;
        return matchesCategory;
    });
    // Use the category adapter to create options for the category select box
    const categoryOptions = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$types$2f$models$2f$Category$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryAdapter"].toSelectBoxOptions(categories);
    // Resets the selected category and search term
    const handleReset = ()=>{
        setSelectedCategory("");
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$search$2f$searchSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setPrepSearchTerm"])(""));
    };
    if (recipesLoading || categoriesLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading recipe data..."
        }, void 0, false, {
            fileName: "[project]/src/app/prep-dash/recipebook/page.tsx",
            lineNumber: 53,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-4 gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-span-1 bg-zinc-50 p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-4 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$ui$2f$SelectBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    value: selectedCategory,
                                    onChange: (value)=>setSelectedCategory(value),
                                    options: categoryOptions,
                                    placeholder: "Select a category"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/prep-dash/recipebook/page.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleReset,
                                    className: "px-8 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600",
                                    children: "Reset"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/prep-dash/recipebook/page.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/prep-dash/recipebook/page.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        selectedCategory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4",
                            children: [
                                "Selected Category: ",
                                categories.find((c)=>c.categoryId === (typeof selectedCategory === "string" ? parseInt(selectedCategory) : selectedCategory))?.categoryName || selectedCategory
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/prep-dash/recipebook/page.tsx",
                            lineNumber: 77,
                            columnNumber: 32
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full mt-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrepDash$2f$Recipebook$2f$RecipeListing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                recipes: filteredRecipes,
                                onRecipeSelect: (recipe)=>setSelectedRecipe(recipe)
                            }, void 0, false, {
                                fileName: "[project]/src/app/prep-dash/recipebook/page.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/prep-dash/recipebook/page.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/prep-dash/recipebook/page.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-span-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrepDash$2f$Recipebook$2f$RecipeDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        selectedRecipe: selectedRecipe
                    }, void 0, false, {
                        fileName: "[project]/src/app/prep-dash/recipebook/page.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/prep-dash/recipebook/page.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/prep-dash/recipebook/page.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(RecipeBookContainer, "oexpwAuKuPRDslevQE21aRLj7nk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useRecipes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecipes"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = RecipeBookContainer;
var _c;
__turbopack_refresh__.register(_c, "RecipeBookContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/prep-dash/recipebook/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_app_515fa1._.js.map