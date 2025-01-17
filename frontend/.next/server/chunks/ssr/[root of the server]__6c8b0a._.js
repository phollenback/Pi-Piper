module.exports = {

"[project]/src/app/components/Elements/ui/NumberSelect.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const NumberSelect = ({ onChange, min, max, step = 1, label = "Enter a number", value })=>{
    const [qty, setQty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setQty(value);
    }, [
        value
    ]);
    const handleChange = (e)=>{
        const newValue = Number(e.target.value);
        if (newValue >= min && newValue <= max) {
            setQty(newValue);
            onChange(newValue);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col w-full",
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "mb-2 text-sm font-medium text-gray-600",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/components/Elements/ui/NumberSelect.tsx",
                lineNumber: 36,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "number",
                    value: qty ?? 0,
                    onChange: handleChange,
                    min: min,
                    max: max,
                    step: step,
                    className: "w-full px-4 py-2 border-t border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700",
                    placeholder: label
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Elements/ui/NumberSelect.tsx",
                    lineNumber: 38,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Elements/ui/NumberSelect.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Elements/ui/NumberSelect.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = NumberSelect;
}}),
"[project]/src/app/components/PrepDash/PrepPlan/PotentialPrepItem.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$ui$2f$NumberSelect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Elements/ui/NumberSelect.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Elements/Button.tsx [app-ssr] (ecmascript)");
;
;
;
const PotentialPrepItem = ({ prepItem, onAdd, onQuantityChange, step })=>{
    const handleQuantityChange = (quantity)=>{
        onQuantityChange(prepItem.prep_list_id, quantity);
    };
    const onItemClick = ()=>{
        onAdd(prepItem);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full p-4 border rounded-md bg-white shadow-sm flex items-center justify-between mb-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-md font-semibold",
                        children: prepItem.name
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PrepDash/PrepPlan/PotentialPrepItem.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 line-clamp-2",
                        children: prepItem.description
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PrepDash/PrepPlan/PotentialPrepItem.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/PrepDash/PrepPlan/PotentialPrepItem.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$ui$2f$NumberSelect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        min: 0,
                        max: 100,
                        step: step,
                        onChange: handleQuantityChange,
                        label: "Qty",
                        value: prepItem.quantity
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PrepDash/PrepPlan/PotentialPrepItem.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-medium text-gray-700",
                        children: prepItem.unit
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PrepDash/PrepPlan/PotentialPrepItem.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: "ADD",
                        onClick: onItemClick,
                        size: "large",
                        style: {
                            backgroundColor: "green",
                            color: "white"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PrepDash/PrepPlan/PotentialPrepItem.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/PrepDash/PrepPlan/PotentialPrepItem.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/PrepDash/PrepPlan/PotentialPrepItem.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = PotentialPrepItem;
}}),
"[project]/src/app/components/PrepDash/PrepPlan/AllPrepList.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrepDash$2f$PrepPlan$2f$PotentialPrepItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/PrepDash/PrepPlan/PotentialPrepItem.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
;
;
;
;
const AllPrepList = ({ prepList, category, onAddToDailyPrep, step, onQuantityChange })=>{
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [quantities, setQuantities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    // Get the search term from Redux (updated dynamically by other components)
    const prepSearchTerm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.search.prepSearchTerm);
    // Filter the prepList based on the category and search term
    const filteredPrepList = prepList.filter((item)=>{
        const matchesCategory = category ? item.category === category : true;
        const matchesSearchTerm = item.name && item.name.toLowerCase().includes(prepSearchTerm.toLowerCase()) || item.description && item.description.toLowerCase().includes(prepSearchTerm.toLowerCase());
        return matchesCategory && matchesSearchTerm;
    });
    // Update local state for search term when the global search term changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setSearchTerm(prepSearchTerm);
        console.log(searchTerm);
    }, [
        prepSearchTerm
    ]);
    const handleQuantityChange = (id, quantity)=>{
        setQuantities((prev)=>({
                ...prev,
                [id]: quantity
            }));
        onQuantityChange(id, quantity); // Call the passed quantity change handler
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: filteredPrepList.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrepDash$2f$PrepPlan$2f$PotentialPrepItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                prepItem: item,
                onAdd: onAddToDailyPrep,
                step: step,
                onQuantityChange: handleQuantityChange,
                quantity: quantities[item.prep_list_id] || item.quantity
            }, index, false, {
                fileName: "[project]/src/app/components/PrepDash/PrepPlan/AllPrepList.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this))
    }, void 0, false);
};
const __TURBOPACK__default__export__ = AllPrepList;
}}),
"[project]/src/app/components/Elements/ui/SelectBox.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const SelectBox = ({ value, onChange, options, placeholder = "Select an option", title })=>{
    const handleChange = (event)=>{
        onChange(event.target.value); // Send string or number value
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            id: "select-box",
            value: value,
            onChange: handleChange,
            title: title || placeholder,
            className: "border border-gray-300 rounded-lg px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "",
                    disabled: true,
                    children: placeholder
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Elements/ui/SelectBox.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                options.map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: option.value,
                        children: option.label
                    }, `${option.value}-${index}`, false, {
                        fileName: "[project]/src/app/components/Elements/ui/SelectBox.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Elements/ui/SelectBox.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Elements/ui/SelectBox.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = SelectBox;
}}),
"[project]/src/app/components/PrepDash/DailyPrep/PrepItemCard.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Elements/Button.tsx [app-ssr] (ecmascript)");
;
;
;
const PrepItemCard = ({ item, onButtonClick })=>{
    // Determine the status color based on the item status
    const statusColor = item.status === 'complete' ? 'bg-green-100 border-green-400 text-green-800' : 'bg-red-100 border-red-400 text-red-800';
    // Local state for the note
    const [note, setNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(item.note);
    const handleNoteChange = (e)=>{
        setNote(e.target.value);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `max-w-full w-full lg:max-w-full flex border-l-4 p-4 mb-4 py-4 rounded shadow ${statusColor}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-2 flex flex-col justify-center items-center px-2 my-1 border-r border-black pr-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-semibold text-lg text-center",
                        children: item.name
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PrepDash/DailyPrep/PrepItemCard.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col justify-center items-center mt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-6xl font-bold text-center",
                                children: item.quantity
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/PrepDash/DailyPrep/PrepItemCard.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg",
                                children: item.unit
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/PrepDash/DailyPrep/PrepItemCard.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/PrepDash/DailyPrep/PrepItemCard.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-bold uppercase text-center mt-2",
                        children: [
                            "Status: ",
                            item.status
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/PrepDash/DailyPrep/PrepItemCard.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/PrepDash/DailyPrep/PrepItemCard.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-2 flex flex-col px-4 border-r border-black pr-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-md font-bold text-black",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                children: "Description"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/PrepDash/DailyPrep/PrepItemCard.tsx",
                                lineNumber: 35,
                                columnNumber: 54
                            }, this),
                            ":"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/PrepDash/DailyPrep/PrepItemCard.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    item.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-700",
                        children: item.description
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PrepDash/DailyPrep/PrepItemCard.tsx",
                        lineNumber: 36,
                        columnNumber: 29
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-700",
                        children: "No description available"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PrepDash/DailyPrep/PrepItemCard.tsx",
                        lineNumber: 36,
                        columnNumber: 91
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                        className: "border-black my-2"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PrepDash/DailyPrep/PrepItemCard.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-md font-bold text-black",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            children: "Daily:"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/PrepDash/DailyPrep/PrepItemCard.tsx",
                            lineNumber: 38,
                            columnNumber: 54
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PrepDash/DailyPrep/PrepItemCard.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        className: "w-full p-2 border rounded-md text-sm text-gray-700",
                        value: note,
                        onChange: handleNoteChange,
                        title: "Daily Note",
                        placeholder: "Enter your daily note here"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PrepDash/DailyPrep/PrepItemCard.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/PrepDash/DailyPrep/PrepItemCard.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col justify-center items-center px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    label: item.status === 'complete' ? 'Cancel' : 'Complete',
                    onClick: onButtonClick,
                    size: "medium",
                    style: {
                        backgroundColor: item.status === 'complete' ? 'rgb(221, 79, 79)' : 'rgb(74, 173, 78)',
                        border: 'none',
                        cursor: 'pointer',
                        borderRadius: '5px',
                        padding: '10px 20px'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/components/PrepDash/DailyPrep/PrepItemCard.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/PrepDash/DailyPrep/PrepItemCard.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/PrepDash/DailyPrep/PrepItemCard.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = PrepItemCard;
}}),
"[project]/src/app/components/PrepDash/DailyPrep/PrepListing.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrepDash$2f$DailyPrep$2f$PrepItemCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/PrepDash/DailyPrep/PrepItemCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
;
;
;
;
const PrepListing = ({ list, handleCardClick })=>{
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(""); // Local state to hold search term
    const prepSearchTerm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.search.prepSearchTerm);
    // Sync the local searchTerm with the Redux search term
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log("PrepListing", list);
        setSearchTerm(prepSearchTerm);
        console.log(list);
    }, [
        prepSearchTerm,
        list
    ]);
    // Filter items based on searchTerm
    const filteredList = list.filter((item)=>{
        const lowercasedTerm = searchTerm.toLowerCase();
        return item.name.toLowerCase().includes(lowercasedTerm) || item.description.toLowerCase().includes(lowercasedTerm);
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: filteredList.length > 0 ? filteredList.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrepDash$2f$DailyPrep$2f$PrepItemCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                item: item,
                onButtonClick: ()=>handleCardClick(item)
            }, item.prep_list_id, false, {
                fileName: "[project]/src/app/components/PrepDash/DailyPrep/PrepListing.tsx",
                lineNumber: 37,
                columnNumber: 11
            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "No items to display."
        }, void 0, false, {
            fileName: "[project]/src/app/components/PrepDash/DailyPrep/PrepListing.tsx",
            lineNumber: 44,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/PrepDash/DailyPrep/PrepListing.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = PrepListing;
}}),
"[project]/src/app/components/PrepDash/PrepPlan/PrepListBreakdown.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$login$2f$InputField$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Elements/login/InputField.tsx [app-ssr] (ecmascript)");
;
;
;
const PrepListBreakdown = ({ list, categories, setVerifier, setVerified })=>{
    const [verifierName, setVerifierName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isVerified, setIsVerified] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleVerifierNameChange = (e)=>{
        setVerifierName(e.target.value);
        setVerifier(e.target.value);
    };
    const handleVerifyChange = (e)=>{
        setIsVerified(e.target.checked);
        setVerified(e.target.checked);
        console.log(isVerified);
    };
    const groupedItems = list.reduce((acc, item)=>{
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});
    const getCategoryDetails = (categoryId)=>{
        const category = categories.find((cat)=>cat.category_id === categoryId);
        return category ? {
            name: category.category_name,
            description: category.description
        } : {
            name: '',
            description: ''
        };
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-4 shadow rounded-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-bold mb-4",
                children: "Prep List Breakdown"
            }, void 0, false, {
                fileName: "[project]/src/app/components/PrepDash/PrepPlan/PrepListBreakdown.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "verify-checkbox",
                        className: "text-sm font-medium",
                        children: "Verify?"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PrepDash/PrepPlan/PrepListBreakdown.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        title: "verify",
                        type: "checkbox",
                        onChange: handleVerifyChange,
                        className: "mr-2"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PrepDash/PrepPlan/PrepListBreakdown.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$login$2f$InputField$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        id: "verifier-name",
                        type: "text",
                        placeholder: "Enter verifier's name",
                        value: verifierName,
                        onChange: handleVerifierNameChange
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PrepDash/PrepPlan/PrepListBreakdown.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/PrepDash/PrepPlan/PrepListBreakdown.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            Object.entries(groupedItems).map(([categoryId, items])=>{
                const { name, description } = getCategoryDetails(Number(categoryId));
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold mb-2",
                            children: name
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/PrepDash/PrepPlan/PrepListBreakdown.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-500 mb-2",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/PrepDash/PrepPlan/PrepListBreakdown.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "list-disc pl-5 space-y-2",
                            children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/PrepDash/PrepPlan/PrepListBreakdown.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 23
                                                    }, this),
                                                    " - ",
                                                    item.description
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/PrepDash/PrepPlan/PrepListBreakdown.tsx",
                                                lineNumber: 73,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    item.quantity,
                                                    " ",
                                                    item.unit
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/PrepDash/PrepPlan/PrepListBreakdown.tsx",
                                                lineNumber: 76,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/PrepDash/PrepPlan/PrepListBreakdown.tsx",
                                        lineNumber: 72,
                                        columnNumber: 19
                                    }, this)
                                }, item.prep_list_id, false, {
                                    fileName: "[project]/src/app/components/PrepDash/PrepPlan/PrepListBreakdown.tsx",
                                    lineNumber: 71,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/PrepDash/PrepPlan/PrepListBreakdown.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this)
                    ]
                }, categoryId, true, {
                    fileName: "[project]/src/app/components/PrepDash/PrepPlan/PrepListBreakdown.tsx",
                    lineNumber: 66,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/PrepDash/PrepPlan/PrepListBreakdown.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = PrepListBreakdown;
}}),
"[project]/src/app/components/Elements/ErrorMessage.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const ErrorMessage = ({ message })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-sm text-red-500 mt-2",
        children: message
    }, void 0, false, {
        fileName: "[project]/src/app/components/Elements/ErrorMessage.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = ErrorMessage;
}}),
"[project]/src/app/util/data.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "fetchDailyPrepItems": (()=>fetchDailyPrepItems),
    "fetchPrepItemCards": (()=>fetchPrepItemCards),
    "fetchRecipes": (()=>fetchRecipes),
    "getDailyList": (()=>getDailyList)
});
const fetchDailyPrepItems = ()=>{
    return [
        {
            id: 1,
            name: "Slice Prosciutto",
            description: "Thinly slice the prosciutto for charcuterie boards.",
            quantity: 50,
            unit: "slices",
            status: "complete",
            category: 1,
            kitchenDepartmentId: 1,
            restaurantId: 1
        },
        {
            id: 3,
            name: "Slice Sopressata",
            description: "Prepare sopressata slices for sandwiches and platters.",
            quantity: 100,
            unit: "slices",
            status: "in-progress",
            category: 1,
            kitchenDepartmentId: 1,
            restaurantId: 1
        },
        {
            id: 4,
            name: "Slice Ham",
            description: "Cut ham into thin slices for deli and breakfast orders.",
            quantity: 80,
            unit: "slices",
            status: "todo",
            category: 1,
            kitchenDepartmentId: 1,
            restaurantId: 1
        },
        {
            id: 5,
            name: "Slice Provolone",
            description: "Slice provolone cheese for sandwiches and salads.",
            quantity: 120,
            unit: "slices",
            status: "complete",
            category: 5,
            kitchenDepartmentId: 1,
            restaurantId: 1
        },
        {
            id: 6,
            name: "Set Pulled Pork",
            description: "Portion out pulled pork for BBQ platters.",
            quantity: 200,
            unit: "servings",
            status: "in-progress",
            category: 1,
            kitchenDepartmentId: 1,
            restaurantId: 1
        },
        {
            id: 7,
            name: "Cook Pulled Pork",
            description: "Slow-cook pork shoulder until tender.",
            quantity: 30,
            unit: "lbs",
            status: "todo",
            category: 1,
            kitchenDepartmentId: 1,
            restaurantId: 1
        },
        {
            id: 8,
            name: "Cook Meatballs",
            description: "Prepare and bake Italian-style meatballs.",
            quantity: 60,
            unit: "meatballs",
            status: "complete",
            category: 1,
            kitchenDepartmentId: 1,
            restaurantId: 1
        },
        {
            id: 9,
            name: "Italian Sausage Mix",
            description: "Mix spices and ground meat for sausage preparation.",
            quantity: 15,
            unit: "lbs",
            status: "in-progress",
            category: 1,
            kitchenDepartmentId: 1,
            restaurantId: 1
        },
        {
            id: 11,
            name: "Grill Lemongrass Pork",
            description: "Marinate and grill pork with lemongrass seasoning.",
            quantity: 25,
            unit: "servings",
            status: "complete",
            category: 4,
            kitchenDepartmentId: 1,
            restaurantId: 1
        },
        {
            id: 12,
            name: "Back Bacon Brine",
            description: "Brine pork loins for back bacon preparation.",
            quantity: 10,
            unit: "lbs",
            status: "todo",
            category: 5,
            kitchenDepartmentId: 1,
            restaurantId: 1
        },
        {
            id: 13,
            name: "Cure Pork Loins",
            description: "Cure pork loins in a salt mixture for preservation.",
            quantity: 8,
            unit: "loins",
            status: "complete",
            category: 1,
            kitchenDepartmentId: 1,
            restaurantId: 1
        },
        {
            id: 14,
            name: "Dry Pork Loins",
            description: "Dry pork loins to develop flavor and texture.",
            quantity: 10,
            unit: "loins",
            status: "in-progress",
            category: 1,
            kitchenDepartmentId: 1,
            restaurantId: 1
        }
    ];
};
const fetchPrepItemCards = ()=>{
    return [
        {
            "prep_list_id": 1,
            "name": "Chicken Breast",
            "description": "Fresh chicken breast fillets",
            "quantity": 10,
            "unit": "pieces",
            "category": 1,
            "status": "todo"
        },
        {
            "prep_list_id": 2,
            "name": "Lettuce",
            "description": "Fresh lettuce leaves",
            "quantity": 5,
            "unit": "heads",
            "category": 2,
            "status": "complete"
        },
        {
            "prep_list_id": 3,
            "name": "Tomatoes",
            "description": "Red ripe tomatoes",
            "quantity": 20,
            "unit": "pieces",
            "category": 2,
            "status": "todo"
        },
        {
            "prep_list_id": 4,
            "name": "Cucumbers",
            "description": "Fresh cucumbers",
            "quantity": 15,
            "unit": "pieces",
            "category": 2,
            "status": "in-progress"
        },
        {
            "prep_list_id": 5,
            "name": "Olive Oil",
            "description": "Extra virgin olive oil",
            "quantity": 3,
            "unit": "bottles",
            "category": 3,
            "status": "todo"
        },
        {
            "prep_list_id": 6,
            "name": "Cheddar Cheese",
            "description": "Mature cheddar cheese",
            "quantity": 10,
            "unit": "blocks",
            "category": 4,
            "status": "complete"
        },
        {
            "prep_list_id": 7,
            "name": "Bacon",
            "description": "Crispy bacon strips",
            "quantity": 25,
            "unit": "slices",
            "category": 4,
            "status": "in-progress"
        },
        {
            "prep_list_id": 8,
            "name": "Chicken Broth",
            "description": "Organic chicken broth",
            "quantity": 5,
            "unit": "liters",
            "category": 3,
            "status": "todo"
        },
        {
            "prep_list_id": 9,
            "name": "Pasta",
            "description": "Spaghetti pasta",
            "quantity": 10,
            "unit": "packets",
            "category": 5,
            "status": "complete"
        },
        {
            "prep_list_id": 10,
            "name": "Garlic",
            "description": "Fresh garlic cloves",
            "quantity": 50,
            "unit": "cloves",
            "category": 2,
            "status": "todo"
        },
        {
            "prep_list_id": 11,
            "name": "Onions",
            "description": "Yellow onions",
            "quantity": 30,
            "unit": "pieces",
            "category": 2,
            "status": "in-progress"
        },
        {
            "prep_list_id": 12,
            "name": "Carrots",
            "description": "Fresh carrots",
            "quantity": 40,
            "unit": "pieces",
            "category": 2,
            "status": "complete"
        },
        {
            "prep_list_id": 13,
            "name": "Bread Rolls",
            "description": "Soft bread rolls",
            "quantity": 60,
            "unit": "pieces",
            "category": 6,
            "status": "todo"
        },
        {
            "prep_list_id": 14,
            "name": "Avocados",
            "description": "Fresh ripe avocados",
            "quantity": 12,
            "unit": "pieces",
            "category": 2,
            "status": "in-progress"
        },
        {
            "prep_list_id": 15,
            "name": "Milk",
            "description": "Full cream milk",
            "quantity": 8,
            "unit": "liters",
            "category": 3,
            "status": "complete"
        },
        {
            "prep_list_id": 16,
            "name": "Flour",
            "description": "All-purpose flour",
            "quantity": 5,
            "unit": "kg",
            "category": 5,
            "status": "todo"
        },
        {
            "prep_list_id": 17,
            "name": "Sugar",
            "description": "White sugar",
            "quantity": 10,
            "unit": "kg",
            "category": 5,
            "status": "complete"
        },
        {
            "prep_list_id": 18,
            "name": "Cilantro",
            "description": "Fresh cilantro leaves",
            "quantity": 30,
            "unit": "bunches",
            "category": 2,
            "status": "in-progress"
        },
        {
            "prep_list_id": 19,
            "name": "Rice",
            "description": "Long-grain white rice",
            "quantity": 20,
            "unit": "kg",
            "category": 5,
            "status": "todo"
        },
        {
            "prep_list_id": 20,
            "name": "Pineapple",
            "description": "Fresh pineapple, cut into pieces",
            "quantity": 15,
            "unit": "pieces",
            "category": 2,
            "status": "complete"
        }
    ];
};
const fetchRecipes = ()=>{
    return [
        {
            id: 1,
            name: "Spaghetti Bolognese",
            description: "A classic Italian pasta dish with rich, savory sauce.",
            ingredients: [
                "spaghetti",
                "ground beef",
                "tomato sauce",
                "garlic",
                "onion",
                "olive oil"
            ],
            category: 1,
            procedure: "1. Cook spaghetti according to package instructions. \n" + "2. In a pan, sauté garlic and onion in olive oil until translucent. \n" + "3. Add ground beef and cook until browned. \n" + "4. Stir in tomato sauce and simmer for 20 minutes. \n" + "5. Serve sauce over spaghetti and enjoy!"
        },
        {
            id: 2,
            name: "Chicken Caesar Salad",
            description: "A fresh salad with grilled chicken, lettuce, and Caesar dressing.",
            ingredients: [
                "chicken breast",
                "romaine lettuce",
                "croutons",
                "Parmesan cheese",
                "Caesar dressing"
            ],
            category: 2,
            procedure: "1. Grill chicken breast until fully cooked. Slice into strips. \n" + "2. Toss romaine lettuce with Caesar dressing in a large bowl. \n" + "3. Add croutons, Parmesan cheese, and grilled chicken strips. \n" + "4. Serve chilled and enjoy."
        },
        {
            id: 3,
            name: "Grilled Cheese Sandwich",
            description: "A warm, crispy sandwich with melted cheese.",
            ingredients: [
                "bread",
                "cheese",
                "butter"
            ],
            category: 3,
            procedure: "1. Butter one side of each slice of bread. \n" + "2. Place a slice of cheese between the unbuttered sides of the bread. \n" + "3. Heat a skillet and cook the sandwich on both sides until golden brown. \n" + "4. Serve warm."
        },
        {
            id: 4,
            name: "Pancakes",
            description: "Fluffy, golden pancakes served with syrup.",
            ingredients: [
                "flour",
                "eggs",
                "milk",
                "baking powder",
                "butter",
                "maple syrup"
            ],
            category: 4,
            procedure: "1. In a bowl, mix flour, baking powder, milk, and eggs to form a batter. \n" + "2. Heat a non-stick pan and grease it with butter. \n" + "3. Pour a ladle of batter onto the pan and cook until bubbles form. \n" + "4. Flip and cook the other side until golden brown. \n" + "5. Serve with butter and maple syrup."
        },
        {
            id: 5,
            name: "Vegetable Stir Fry",
            description: "A colorful mix of vegetables stir-fried with a savory sauce.",
            ingredients: [
                "broccoli",
                "carrots",
                "bell peppers",
                "soy sauce",
                "garlic",
                "ginger",
                "sesame oil"
            ],
            category: 5,
            procedure: "1. Heat sesame oil in a wok or skillet. \n" + "2. Add minced garlic and ginger and sauté until fragrant. \n" + "3. Add chopped vegetables and stir-fry until tender but crisp. \n" + "4. Pour soy sauce over vegetables and toss to combine. \n" + "5. Serve hot."
        },
        {
            id: 6,
            name: "Beef Tacos",
            description: "Tasty tacos with seasoned ground beef and fresh toppings.",
            ingredients: [
                "ground beef",
                "taco shells",
                "cheddar cheese",
                "lettuce",
                "tomato",
                "sour cream"
            ],
            category: 1,
            procedure: "1. Cook ground beef with taco seasoning until fully browned. \n" + "2. Heat taco shells in the oven for 5 minutes. \n" + "3. Fill taco shells with beef, cheese, lettuce, and tomato. \n" + "4. Add a dollop of sour cream and serve."
        },
        {
            id: 7,
            name: "Chicken Alfredo",
            description: "Creamy pasta with grilled chicken and Alfredo sauce.",
            ingredients: [
                "penne pasta",
                "chicken breast",
                "heavy cream",
                "Parmesan cheese",
                "garlic",
                "butter"
            ],
            category: 2,
            procedure: "1. Cook penne pasta according to package instructions. \n" + "2. Grill chicken breast and slice into strips. \n" + "3. In a pan, melt butter and sauté garlic. \n" + "4. Add heavy cream and Parmesan cheese to create a sauce. \n" + "5. Mix sauce with pasta and top with grilled chicken."
        },
        {
            id: 8,
            name: "Fish Tacos",
            description: "Grilled fish tacos with tangy slaw and lime.",
            ingredients: [
                "white fish",
                "taco shells",
                "cabbage",
                "lime",
                "avocado",
                "cilantro"
            ],
            category: 3,
            procedure: "1. Season fish with salt, pepper, and lime juice. \n" + "2. Grill fish until cooked through. \n" + "3. Prepare slaw with shredded cabbage, lime juice, and cilantro. \n" + "4. Fill taco shells with fish, slaw, and avocado slices. \n" + "5. Serve with extra lime wedges."
        },
        {
            id: 9,
            name: "Vegetable Soup",
            description: "Hearty vegetable soup with potatoes, carrots, and celery.",
            ingredients: [
                "potatoes",
                "carrots",
                "celery",
                "onion",
                "tomato",
                "vegetable broth"
            ],
            category: 4,
            procedure: "1. Chop vegetables into bite-sized pieces. \n" + "2. Sauté onions in a pot until translucent. \n" + "3. Add remaining vegetables and cook for 5 minutes. \n" + "4. Pour in vegetable broth and simmer for 30 minutes. \n" + "5. Serve hot with crusty bread."
        },
        {
            id: 10,
            name: "Chicken Nuggets",
            description: "Crispy, golden chicken nuggets perfect for dipping.",
            ingredients: [
                "chicken breast",
                "bread crumbs",
                "flour",
                "eggs",
                "garlic powder",
                "paprika"
            ],
            category: 5,
            procedure: "1. Cut chicken breast into bite-sized pieces. \n" + "2. Coat chicken in flour, then egg, then breadcrumbs. \n" + "3. Fry in hot oil until golden brown and cooked through. \n" + "4. Serve with your favorite dipping sauce."
        },
        {
            id: 11,
            name: "Egg Salad Sandwich",
            description: "Classic egg salad with mayo, served in a sandwich.",
            ingredients: [
                "eggs",
                "mayonnaise",
                "mustard",
                "celery",
                "bread"
            ],
            category: 1,
            procedure: "1. Boil eggs and let them cool. \n" + "2. Peel and chop eggs, then mix with mayo, mustard, and chopped celery. \n" + "3. Spread mixture onto slices of bread to make sandwiches. \n" + "4. Serve immediately."
        }
    ];
};
const getDailyList = ()=>{
    return [
        {
            prep_list_id: 1,
            name: "Slice Prosciutto",
            description: "Thinly slice prosciutto for charcuterie boards.",
            note: "...",
            quantity: 0,
            unit: "pkg",
            status: "todo",
            category: 1,
            restaurant_id: 1,
            date: new Date().toISOString().split("T")[0]
        },
        {
            prep_list_id: 2,
            name: "Slice Coppa",
            description: "Slice coppa for sandwiches or charcuterie boards.",
            note: "...",
            quantity: 0,
            unit: "pkg",
            status: "in-progress",
            category: 1,
            restaurant_id: 1,
            date: new Date().toISOString().split("T")[0]
        },
        {
            prep_list_id: 3,
            name: "Slice Sopressata",
            description: "Prepare sopressata slices for platters.",
            note: "...",
            quantity: 0,
            unit: "pkg",
            status: "todo",
            category: 2,
            restaurant_id: 1,
            date: new Date().toISOString().split("T")[0]
        },
        {
            prep_list_id: 4,
            name: "Slice Ham",
            description: "Slice ham for sandwiches or general use.",
            note: "...",
            quantity: 0,
            unit: "6th pan",
            status: "complete",
            category: 2,
            restaurant_id: 2,
            date: new Date().toISOString().split("T")[0]
        },
        {
            prep_list_id: 5,
            name: "Slice Provolone",
            description: "Slice provolone cheese for platters.",
            note: "...",
            quantity: 0,
            unit: "6th pan",
            status: "todo",
            category: 2,
            restaurant_id: 2,
            date: new Date().toISOString().split("T")[0]
        },
        {
            prep_list_id: 6,
            name: "Set Pulled Pork",
            description: "Prepare pulled pork for cooking or serving.",
            note: "...",
            quantity: 0,
            unit: "lbs",
            status: "in-progress",
            category: 3,
            restaurant_id: 3,
            date: new Date().toISOString().split("T")[0]
        },
        {
            prep_list_id: 7,
            name: "Cook Pulled Pork",
            description: "Cook pulled pork for use in dishes.",
            note: "...",
            quantity: 0,
            unit: "lbs",
            status: "complete",
            category: 3,
            restaurant_id: 1,
            date: new Date().toISOString().split("T")[0]
        },
        {
            prep_list_id: 8,
            name: "Cook Meatballs",
            description: "Prepare and cook meatballs for serving.",
            note: "...",
            quantity: 0,
            unit: "lbs",
            status: "todo",
            category: 3,
            restaurant_id: 1,
            date: new Date().toISOString().split("T")[0]
        },
        {
            prep_list_id: 9,
            name: "Italian Sausage Mix",
            description: "Mix ingredients for Italian sausage.",
            note: "...",
            quantity: 0,
            unit: "lbs",
            status: "todo",
            category: 4,
            restaurant_id: 2,
            date: new Date().toISOString().split("T")[0]
        },
        {
            prep_list_id: 10,
            name: "Marinate Lemongrass Pork",
            description: "Marinate pork with lemongrass for flavor.",
            note: "...",
            quantity: 0,
            unit: "lbs",
            status: "in-progress",
            category: 4,
            restaurant_id: 2,
            date: new Date().toISOString().split("T")[0]
        },
        {
            prep_list_id: 11,
            name: "Grill Lemongrass Pork",
            description: "Grill pork marinated with lemongrass.",
            note: "...",
            quantity: 0,
            unit: "lbs",
            status: "complete",
            category: 4,
            restaurant_id: 3,
            date: new Date().toISOString().split("T")[0]
        },
        {
            prep_list_id: 12,
            name: "Back Bacon Brine",
            description: "Prepare brine for back bacon curing.",
            note: "...",
            quantity: 0,
            unit: "liters",
            status: "todo",
            category: 5,
            restaurant_id: 1,
            date: new Date().toISOString().split("T")[0]
        },
        {
            prep_list_id: 13,
            name: "Cure Pork Loins",
            description: "Cure pork loins for preservation.",
            note: "...",
            quantity: 0,
            unit: "lbs",
            status: "in-progress",
            category: 5,
            restaurant_id: 3,
            date: new Date().toISOString().split("T")[0]
        },
        {
            prep_list_id: 14,
            name: "Dry Pork Loins",
            description: "Air dry cured pork loins.",
            note: "...",
            quantity: 0,
            unit: "lbs",
            status: "todo",
            category: 5,
            restaurant_id: 3,
            date: new Date().toISOString().split("T")[0]
        },
        {
            prep_list_id: 15,
            name: "Smoke Pork Loins",
            description: "Smoke pork loins for flavor.",
            note: "...",
            quantity: 0,
            unit: "lbs",
            status: "complete",
            category: 6,
            restaurant_id: 2,
            date: new Date().toISOString().split("T")[0]
        },
        {
            prep_list_id: 16,
            name: "Bacon Strips",
            description: "Slice and prepare bacon strips.",
            note: "...",
            quantity: 0,
            unit: "lbs",
            status: "todo",
            category: 6,
            restaurant_id: 1,
            date: new Date().toISOString().split("T")[0]
        },
        {
            prep_list_id: 17,
            name: "Dice & Crisp Bacon",
            description: "Dice and crisp bacon for toppings.",
            note: "...",
            quantity: 0,
            unit: "lbs",
            status: "in-progress",
            category: 6,
            restaurant_id: 3,
            date: new Date().toISOString().split("T")[0]
        },
        {
            prep_list_id: 18,
            name: "Marinate Chicken",
            description: "Marinate chicken for flavor.",
            note: "...",
            quantity: 0,
            unit: "lbs",
            status: "todo",
            category: 6,
            restaurant_id: 3,
            date: new Date().toISOString().split("T")[0]
        },
        {
            prep_list_id: 19,
            name: "Smoke Chicken",
            description: "Smoke chicken for a smoky flavor.",
            note: "...",
            quantity: 0,
            unit: "lbs",
            status: "in-progress",
            category: 6,
            restaurant_id: 1,
            date: new Date().toISOString().split("T")[0]
        },
        {
            prep_list_id: 20,
            name: "Drain Fresh Moz",
            description: "Drain fresh mozzarella for serving.",
            note: "...",
            quantity: 0,
            unit: "lbs",
            status: "complete",
            category: 6,
            restaurant_id: 2,
            date: new Date().toISOString().split("T")[0]
        }
    ];
};
}}),
"[project]/src/redux/features/preplist/dailyPrepListSlice.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "dailyPrepListSlice": (()=>dailyPrepListSlice),
    "default": (()=>__TURBOPACK__default__export__),
    "fetchDailyPrepItems": (()=>fetchDailyPrepItems),
    "setDailyPrepItems": (()=>setDailyPrepItems)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$util$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/util/data.ts [app-ssr] (ecmascript)"); // Assuming fetchPrepItemCards returns static JSON
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
;
const initialState = {
    dailyPrepItems: [],
    loading: false,
    error: null
};
const dailyPrepListSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'dailyPrepList',
    initialState,
    reducers: {
        setDailyPrepItems: (state, action)=>{
            state.dailyPrepItems = action.payload;
        }
    }
});
const fetchDailyPrepItems = ()=>(dispatch)=>{
        try {
            const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$util$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchPrepItemCards"])(); // No need for async since it's static JSON
            dispatch(setDailyPrepItems(items)); // Dispatch the fetched items to the store
        } catch (error) {
            console.error('Failed to fetch prep items:', error);
        }
    };
const { setDailyPrepItems } = dailyPrepListSlice.actions;
const __TURBOPACK__default__export__ = dailyPrepListSlice.reducer;
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("events", () => require("events"));

module.exports = mod;
}}),
"[project]/src/app/prep-dash/planner/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>PlanPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrepDash$2f$PrepPlan$2f$AllPrepList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/PrepDash/PrepPlan/AllPrepList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$ui$2f$SelectBox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Elements/ui/SelectBox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrepDash$2f$DailyPrep$2f$PrepListing$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/PrepDash/DailyPrep/PrepListing.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrepDash$2f$PrepPlan$2f$PrepListBreakdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/PrepDash/PrepPlan/PrepListBreakdown.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Elements/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$ErrorMessage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Elements/ErrorMessage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$ui$2f$NumberSelect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Elements/ui/NumberSelect.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$search$2f$searchSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux/features/search/searchSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$preplist$2f$dailyPrepListSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux/features/preplist/dailyPrepListSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
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
;
;
;
;
// Helper function to get tomorrow's date
const getTomorrowDate = ()=>{
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};
const fetchDailyList = async ()=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('http://localhost:3000/prepitems/1');
    return response.data;
};
function PlanPage() {
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [prepItems, setPrepItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [PrepListItems, setPrepListItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isBreakdown, setIsBreakdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isVerified, setIsVerified] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0.5);
    const [quantities, setQuantities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [verifierName, setVerifierName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    const { data: dailyPrepList = [], isError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'dailyPrep'
        ],
        queryFn: fetchDailyList
    });
    // Fetch categories
    const { data: categories = [], refetch: refetchCategories } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'categories'
        ],
        queryFn: async ()=>{
            const response = await fetch('http://localhost:3000/categories');
            if (!response.ok) {
                throw new Error('Failed to fetch categories');
            }
            return response.json();
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchData = async ()=>{
            // Fetch all prep items
            setPrepItems(await fetchDailyList());
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$preplist$2f$dailyPrepListSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDailyPrepItems"])(dailyPrepList);
            setIsVerified(false);
        };
        fetchData();
    }, [
        dailyPrepList
    ]);
    const handleCompleteClick = ()=>{
        if (isVerified && verifierName) {
            //postPrepList(PrepListItems);
            alert('List Created!');
        } else {
            setErrorMessage("Please enter the verifier's name and verify the list before submitting.");
        }
    };
    const handleBreakdownClick = ()=>{
        setIsBreakdown((prev)=>!prev); // Toggle the `isBreakdown` state
    };
    const handleQuantityChange = (id, quantity)=>{
        setQuantities((prev)=>({
                ...prev,
                [id]: quantity
            }));
    };
    // Dynamic handler for item movement
    const handleCardClick = (item)=>{
        const updatedItem = {
            ...item,
            quantity: quantities[item.prep_list_id] || item.quantity
        };
        if (prepItems.some((prepItem)=>prepItem.prep_list_id === item.prep_list_id)) {
            // Move item from prepItems to PrepListItems
            setPrepItems((prev)=>prev.filter((prepItem)=>prepItem.prep_list_id !== item.prep_list_id));
            setPrepListItems((prev)=>[
                    ...prev,
                    updatedItem
                ]);
        } else if (PrepListItems.some((dailyItem)=>dailyItem.prep_list_id === item.prep_list_id)) {
            // Move item from PrepListItems back to prepItems
            setPrepListItems((prev)=>prev.filter((dailyItem)=>dailyItem.prep_list_id !== item.prep_list_id));
            setPrepItems((prev)=>[
                    ...prev,
                    updatedItem
                ]);
        }
    };
    // Prepare category options for SelectBox
    const categoryOptions = categories.map((category)=>({
            label: category.category_name,
            value: category.category_id
        }));
    // Handle reset action
    const handleReset = ()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$search$2f$searchSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setPrepSearchTerm"])(''));
        refetchCategories();
        setSelectedCategory(null);
    };
    if (isError) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Error loading plan..."
        }, void 0, false, {
            fileName: "[project]/src/app/prep-dash/planner/page.tsx",
            lineNumber: 126,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-3 gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "col-span-1 bg-gray-100 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-4 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$ui$2f$SelectBox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                value: selectedCategory || '',
                                onChange: (value)=>setSelectedCategory(value ? Number(value) : null),
                                options: categoryOptions,
                                placeholder: "Select a category"
                            }, void 0, false, {
                                fileName: "[project]/src/app/prep-dash/planner/page.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleReset,
                                className: "px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600",
                                children: "Reset"
                            }, void 0, false, {
                                fileName: "[project]/src/app/prep-dash/planner/page.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$ui$2f$NumberSelect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                label: "Step",
                                min: 0.1,
                                max: 10,
                                step: 0.1,
                                value: step,
                                onChange: (value)=>setStep(value)
                            }, void 0, false, {
                                fileName: "[project]/src/app/prep-dash/planner/page.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/prep-dash/planner/page.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                        className: "my-4 border-black"
                    }, void 0, false, {
                        fileName: "[project]/src/app/prep-dash/planner/page.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrepDash$2f$PrepPlan$2f$AllPrepList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        prepList: prepItems,
                        category: selectedCategory,
                        onAddToDailyPrep: handleCardClick,
                        step: step,
                        onQuantityChange: handleQuantityChange
                    }, void 0, false, {
                        fileName: "[project]/src/app/prep-dash/planner/page.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/prep-dash/planner/page.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "col-span-2 bg-gray-200 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-auto items-center space-x-4 my-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-bold",
                                children: [
                                    "Daily Prep Items for Tomorrow (",
                                    getTomorrowDate(),
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/prep-dash/planner/page.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                label: isBreakdown ? 'Hide Breakdown' : 'View Breakdown',
                                onClick: handleBreakdownClick,
                                size: "medium",
                                style: {
                                    backgroundColor: 'yellow',
                                    color: 'black',
                                    fontWeight: 'bold'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/prep-dash/planner/page.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/prep-dash/planner/page.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$ErrorMessage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        message: errorMessage
                    }, void 0, false, {
                        fileName: "[project]/src/app/prep-dash/planner/page.tsx",
                        lineNumber: 186,
                        columnNumber: 26
                    }, this),
                    isBreakdown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrepDash$2f$DailyPrep$2f$PrepListing$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        list: PrepListItems,
                        handleCardClick: handleCardClick
                    }, void 0, false, {
                        fileName: "[project]/src/app/prep-dash/planner/page.tsx",
                        lineNumber: 188,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrepDash$2f$PrepPlan$2f$PrepListBreakdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            list: PrepListItems,
                            onClick: handleCompleteClick,
                            setVerifier: setVerifierName,
                            setVerified: setIsVerified,
                            categories: categories
                        }, void 0, false, {
                            fileName: "[project]/src/app/prep-dash/planner/page.tsx",
                            lineNumber: 191,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/prep-dash/planner/page.tsx",
                        lineNumber: 190,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: "Create Prep List",
                        onClick: handleCompleteClick,
                        size: "large",
                        style: {
                            backgroundColor: 'green',
                            color: 'white',
                            fontWeight: 'bold'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/prep-dash/planner/page.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/prep-dash/planner/page.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/prep-dash/planner/page.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/prep-dash/planner/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__6c8b0a._.js.map