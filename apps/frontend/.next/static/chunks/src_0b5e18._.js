(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_0b5e18._.js", {

"[project]/src/app/components/Elements/ui/NumberSelect.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
// Controlled number input component with min/max validation and optional stepping
const NumberSelect = ({ onChange, min, max, step = 1, label = "Enter a number", value })=>{
    _s();
    const [qty, setQty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
    // Sync internal state with external value changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NumberSelect.useEffect": ()=>{
            setQty(value);
        }
    }["NumberSelect.useEffect"], [
        value
    ]);
    // Validates input within min/max range before updating
    const handleChange = (e)=>{
        const newValue = Number(e.target.value);
        if (newValue >= min && newValue <= max) {
            setQty(newValue);
            onChange(newValue);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col w-full",
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "mb-2 text-sm font-medium text-gray-600",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/components/Elements/ui/NumberSelect.tsx",
                lineNumber: 39,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                    lineNumber: 41,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Elements/ui/NumberSelect.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Elements/ui/NumberSelect.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
};
_s(NumberSelect, "QD/jQwbggS72Zg4R8w6oGhWeLX0=");
_c = NumberSelect;
const __TURBOPACK__default__export__ = NumberSelect;
var _c;
__turbopack_refresh__.register(_c, "NumberSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/PrepDash/PrepPlan/PotentialPrepItem.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$ui$2f$NumberSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Elements/ui/NumberSelect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Elements/Button.tsx [app-client] (ecmascript)");
;
;
;
// Selectable prep item component with quantity adjustment and add functionality
const PotentialPrepItem = ({ prepItem, onAdd, onQuantityChange, step })=>{
    // Updates quantity in parent component
    const handleQuantityChange = (quantity)=>{
        onQuantityChange(prepItem.prep_item_id, quantity);
    };
    // Triggers item addition in parent component
    const onItemClick = ()=>{
        onAdd(prepItem);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full p-4 border rounded-md bg-white shadow-sm flex items-center justify-between mb-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-md font-semibold",
                        children: prepItem.name
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PrepDash/PrepPlan/PotentialPrepItem.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 line-clamp-2",
                        children: prepItem.description
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PrepDash/PrepPlan/PotentialPrepItem.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/PrepDash/PrepPlan/PotentialPrepItem.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$ui$2f$NumberSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        min: 0,
                        max: 100,
                        step: step,
                        onChange: handleQuantityChange,
                        label: "Qty",
                        value: 0
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PrepDash/PrepPlan/PotentialPrepItem.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "ADD",
                        onClick: onItemClick,
                        size: "large",
                        style: {
                            backgroundColor: "green",
                            color: "white"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PrepDash/PrepPlan/PotentialPrepItem.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/PrepDash/PrepPlan/PotentialPrepItem.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/PrepDash/PrepPlan/PotentialPrepItem.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
};
_c = PotentialPrepItem;
const __TURBOPACK__default__export__ = PotentialPrepItem;
var _c;
__turbopack_refresh__.register(_c, "PotentialPrepItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/PrepDash/PrepPlan/AllPrepList.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrepDash$2f$PrepPlan$2f$PotentialPrepItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/PrepDash/PrepPlan/PotentialPrepItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
const AllPrepList = ({ prepList, category, onAddToDailyPrep, step, onQuantityChange })=>{
    _s();
    const [, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""); // Local search term state.
    const [quantities, setQuantities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({}); //State to store quantities for each item
    // Redux search term (updated dynamically).
    const prepSearchTerm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "AllPrepList.useSelector[prepSearchTerm]": (state)=>state.search.prepSearchTerm
    }["AllPrepList.useSelector[prepSearchTerm]"]);
    // Filters the prep list based on category and search term.
    const filteredPrepList = prepList.filter((item)=>{
        const matchesCategory = category ? item.category === category : true;
        const matchesSearchTerm = item.name && item.name.toLowerCase().includes(prepSearchTerm.toLowerCase()) || item.description && item.description.toLowerCase().includes(prepSearchTerm.toLowerCase());
        return matchesCategory && matchesSearchTerm;
    });
    // Updates the local search term when the Redux search term changes.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AllPrepList.useEffect": ()=>{
            setSearchTerm(prepSearchTerm);
        }
    }["AllPrepList.useEffect"], [
        prepSearchTerm
    ]);
    // Handles changes to the quantity of a prep item.
    const handleQuantityChange = (id, quantity)=>{
        setQuantities((prev)=>({
                ...prev,
                [id]: quantity
            }));
        onQuantityChange(id, quantity);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: filteredPrepList.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrepDash$2f$PrepPlan$2f$PotentialPrepItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                prepItem: item,
                onAdd: (item)=>onAddToDailyPrep(item),
                step: step,
                onQuantityChange: handleQuantityChange,
                quantity: quantities[item.prep_item_id] || 0
            }, item.prep_item_id, false, {
                fileName: "[project]/src/app/components/PrepDash/PrepPlan/AllPrepList.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this))
    }, void 0, false);
};
_s(AllPrepList, "aCBu0qRMi0txOviW801YDNTLcTQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = AllPrepList;
const __TURBOPACK__default__export__ = AllPrepList;
var _c;
__turbopack_refresh__.register(_c, "AllPrepList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
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
"[project]/src/app/components/Elements/login/InputField.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
// Reusable input component with error handling and dynamic styling
const InputField = ({ id, type, placeholder, error, value, onChange })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: id,
                name: id,
                type: type,
                placeholder: placeholder,
                value: value,
                onChange: onChange,
                className: `border px-3 py-2 rounded-md ${error ? 'border-red-500' : 'border-gray-300'}`
            }, void 0, false, {
                fileName: "[project]/src/app/components/Elements/login/InputField.tsx",
                lineNumber: 15,
                columnNumber: 5
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-red-500",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/components/Elements/login/InputField.tsx",
                lineNumber: 24,
                columnNumber: 15
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Elements/login/InputField.tsx",
        lineNumber: 14,
        columnNumber: 3
    }, this);
_c = InputField;
const __TURBOPACK__default__export__ = InputField;
var _c;
__turbopack_refresh__.register(_c, "InputField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/PrepDash/PrepPlan/PrepListBreakdown.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$login$2f$InputField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Elements/login/InputField.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
const PrepListBreakdown = ({ list, categories, setVerifier, setVerified })=>{
    _s();
    const [verifierName, setVerifierName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''); // Verifier's name.
    const [, setIsVerified] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Verification status.
    // Handles changes to the verifier's name.
    const handleVerifierNameChange = (e)=>{
        setVerifierName(e.target.value);
        setVerifier(e.target.value);
    };
    // Handles changes to the verification checkbox.
    const handleVerifyChange = (e)=>{
        setIsVerified(e.target.checked);
        setVerified(e.target.checked);
    };
    // Groups items by category.
    const groupedItems = list.reduce((acc, item)=>{
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});
    // Retrieves category name and description given its ID.
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-4 shadow rounded-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-bold mb-4",
                children: "Prep List Breakdown"
            }, void 0, false, {
                fileName: "[project]/src/app/components/PrepDash/PrepPlan/PrepListBreakdown.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "verify-checkbox",
                        className: "text-sm font-medium",
                        children: "Verify?"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PrepDash/PrepPlan/PrepListBreakdown.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        title: "verify",
                        type: "checkbox",
                        onChange: handleVerifyChange,
                        className: "mr-2"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PrepDash/PrepPlan/PrepListBreakdown.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$login$2f$InputField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        id: "verifier-name",
                        type: "text",
                        placeholder: "Enter verifier's name",
                        value: verifierName,
                        onChange: handleVerifierNameChange
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PrepDash/PrepPlan/PrepListBreakdown.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/PrepDash/PrepPlan/PrepListBreakdown.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            Object.entries(groupedItems).map(([categoryId, items], index)=>{
                const { name, description } = getCategoryDetails(Number(categoryId));
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold mb-2",
                            children: name
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/PrepDash/PrepPlan/PrepListBreakdown.tsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-500 mb-2",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/PrepDash/PrepPlan/PrepListBreakdown.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "list-disc pl-5 space-y-2",
                            children: items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/PrepDash/PrepPlan/PrepListBreakdown.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 23
                                                    }, this),
                                                    " - ",
                                                    item.description
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/PrepDash/PrepPlan/PrepListBreakdown.tsx",
                                                lineNumber: 77,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    item.quantity,
                                                    " ",
                                                    item.unit
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/PrepDash/PrepPlan/PrepListBreakdown.tsx",
                                                lineNumber: 80,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/PrepDash/PrepPlan/PrepListBreakdown.tsx",
                                        lineNumber: 76,
                                        columnNumber: 19
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/src/app/components/PrepDash/PrepPlan/PrepListBreakdown.tsx",
                                    lineNumber: 75,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/PrepDash/PrepPlan/PrepListBreakdown.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/src/app/components/PrepDash/PrepPlan/PrepListBreakdown.tsx",
                    lineNumber: 70,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/PrepDash/PrepPlan/PrepListBreakdown.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
};
_s(PrepListBreakdown, "MR4jFci4xbwtNhj64lk/e3kAk0Q=");
_c = PrepListBreakdown;
const __TURBOPACK__default__export__ = PrepListBreakdown;
var _c;
__turbopack_refresh__.register(_c, "PrepListBreakdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Elements/ErrorMessage.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const ErrorMessage = ({ message })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-sm text-red-500 mt-2",
        children: message
    }, void 0, false, {
        fileName: "[project]/src/app/components/Elements/ErrorMessage.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
};
_c = ErrorMessage;
const __TURBOPACK__default__export__ = ErrorMessage;
var _c;
__turbopack_refresh__.register(_c, "ErrorMessage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/types/models/PrepItem.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PrepItemAdapter": (()=>PrepItemAdapter)
});
class PrepItemAdapter {
    prep_list_id;
    name;
    description;
    note;
    quantity;
    unit;
    status;
    category;
    restaurant_id;
    date;
    constructor(prepItem, quantity){
        this.prep_list_id = prepItem.prep_item_id;
        this.name = prepItem.name;
        this.description = prepItem.description;
        this.note = '';
        this.quantity = quantity;
        this.unit = 'units';
        this.status = 'todo';
        this.category = prepItem.category;
        this.restaurant_id = 1;
        this.date = new Date().toISOString();
    }
    toPlainObject() {
        // Destructure properties for clarity and conciseness
        const { prep_list_id, name, description, note, quantity, unit, status, category, restaurant_id, date } = this;
        return {
            prep_list_id,
            name,
            description,
            note,
            quantity,
            unit,
            status,
            category,
            restaurant_id,
            date
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/util/data.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// 
// This file was mainly used for mock data initially. 
// Right now it has no references but may in the future. 
// 
__turbopack_esm__({
    "fetchDailyPrepItems": (()=>fetchDailyPrepItems),
    "fetchPrepItemCards": (()=>fetchPrepItemCards),
    "fetchRecipes": (()=>fetchRecipes),
    "getButtonColor": (()=>getButtonColor),
    "getDailyList": (()=>getDailyList)
});
const getButtonColor = (name)=>{
    switch(name){
        case "Slicer":
            return "red";
        case "Pantry":
            return "green";
        case "Oven":
            return "grey";
        case "Grill":
            return "blue";
        case "Cold Prep":
            return "orange";
        case "All":
            return "black";
        default:
            return "blue";
    }
};
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/redux/features/preplist/dailyPrepListSlice.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "dailyPrepListSlice": (()=>dailyPrepListSlice),
    "default": (()=>__TURBOPACK__default__export__),
    "fetchDailyPrepItems": (()=>fetchDailyPrepItems),
    "setDailyPrepItems": (()=>setDailyPrepItems)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$util$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/util/data.ts [app-client] (ecmascript)"); // Assuming fetchPrepItemCards returns static JSON
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
;
const initialState = {
    dailyPrepItems: [],
    loading: false,
    error: null
};
const dailyPrepListSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
            const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$util$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPrepItemCards"])(); // No need for async since it's static JSON
            dispatch(setDailyPrepItems(items)); // Dispatch the fetched items to the store
        } catch (error) {
            console.error('Failed to fetch prep items:', error);
        }
    };
const { setDailyPrepItems } = dailyPrepListSlice.actions;
const __TURBOPACK__default__export__ = dailyPrepListSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Elements/NewPrepItem.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Elements/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$login$2f$InputField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Elements/login/InputField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Card/Card.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/CardContent/CardContent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CardActions$2f$CardActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/CardActions/CardActions.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
// Card component for creating new prep items with note-taking functionality
const NewPrepItem = ({ prepItem, onButtonClick })=>{
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Updates prep item state in parent component
    const handleClick = ()=>{
        onButtonClick(prepItem);
    };
    // Manages note input and updates prep item state
    const handleSearch = (e)=>{
        const newQuery = e.target.value;
        setQuery(newQuery);
        prepItem.note = newQuery;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        sx: {
            maxWidth: "100%",
            backgroundColor: 'rgb(208, 201, 129)',
            border: '1px solid black',
            boxShadow: 3,
            padding: '4px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl",
                                children: prepItem.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Elements/NewPrepItem.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: prepItem.description
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Elements/NewPrepItem.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$login$2f$InputField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                id: "search",
                                type: "text",
                                placeholder: "daily notes...",
                                value: query,
                                onChange: handleSearch
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Elements/NewPrepItem.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Elements/NewPrepItem.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Quantity:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Elements/NewPrepItem.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl",
                                children: [
                                    prepItem.quantity,
                                    " ",
                                    prepItem.unit
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Elements/NewPrepItem.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Elements/NewPrepItem.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Status:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Elements/NewPrepItem.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl",
                                children: prepItem.status
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Elements/NewPrepItem.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Elements/NewPrepItem.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Elements/NewPrepItem.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CardActions$2f$CardActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    label: "Cancel",
                    onClick: handleClick,
                    size: "medium",
                    style: {
                        backgroundColor: "red",
                        color: "white"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Elements/NewPrepItem.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Elements/NewPrepItem.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Elements/NewPrepItem.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
};
_s(NewPrepItem, "HYX2QbDDdTtlu7GfoQbAPZOIM6k=");
_c = NewPrepItem;
const __TURBOPACK__default__export__ = NewPrepItem;
var _c;
__turbopack_refresh__.register(_c, "NewPrepItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/PrepDash/PrepPlan/NewPrepList.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$NewPrepItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Elements/NewPrepItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
const NewPrepList = ({ list, handleCardClick })=>{
    _s();
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""); // Local search term state.
    const prepSearchTerm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "NewPrepList.useSelector[prepSearchTerm]": (state)=>state.search.prepSearchTerm
    }["NewPrepList.useSelector[prepSearchTerm]"]); // Redux search term.
    // Syncs local search state with Redux store.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewPrepList.useEffect": ()=>{
            setSearchTerm(prepSearchTerm);
        }
    }["NewPrepList.useEffect"], [
        prepSearchTerm
    ]);
    // Filters the list of prep items based on the search term.
    const filteredList = list.filter((item)=>{
        const lowercasedTerm = searchTerm.toLowerCase();
        return item.name?.toLowerCase().includes(lowercasedTerm) || item.description?.toLowerCase().includes(lowercasedTerm);
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-3",
        children: filteredList.length > 0 ? filteredList.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$NewPrepItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                prepItem: item,
                onButtonClick: ()=>handleCardClick(item)
            }, item.prep_list_id, false, {
                fileName: "[project]/src/app/components/PrepDash/PrepPlan/NewPrepList.tsx",
                lineNumber: 35,
                columnNumber: 11
            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "No items to display."
        }, void 0, false, {
            fileName: "[project]/src/app/components/PrepDash/PrepPlan/NewPrepList.tsx",
            lineNumber: 42,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/PrepDash/PrepPlan/NewPrepList.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
};
_s(NewPrepList, "dYLALvqqhFYmgErv9obz/c3/xAY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = NewPrepList;
const __TURBOPACK__default__export__ = NewPrepList;
var _c;
__turbopack_refresh__.register(_c, "NewPrepList");
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
"[project]/src/app/prep-dash/planner/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>PlanPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrepDash$2f$PrepPlan$2f$AllPrepList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/PrepDash/PrepPlan/AllPrepList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$ui$2f$SelectBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Elements/ui/SelectBox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrepDash$2f$PrepPlan$2f$PrepListBreakdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/PrepDash/PrepPlan/PrepListBreakdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Elements/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$ErrorMessage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Elements/ErrorMessage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$ui$2f$NumberSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Elements/ui/NumberSelect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$search$2f$searchSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux/features/search/searchSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$types$2f$models$2f$PrepItem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/types/models/PrepItem.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$preplist$2f$dailyPrepListSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux/features/preplist/dailyPrepListSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrepDash$2f$PrepPlan$2f$NewPrepList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/PrepDash/PrepPlan/NewPrepList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$prepItemActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/actions/prepItemActions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
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
;
;
;
;
;
;
// Formats tomorrow's date for display
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
// Fetch all prep items for the restaurant
const fetchAllPrep = async ()=>{
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$prepItemActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrepItems"])(1);
    return response;
};
// Fetch current daily prep list
const fetchDailyList = async ()=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('http://localhost:3001/prepitems/daily/1');
    return response.data;
};
function PlanPage() {
    _s();
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [prepItems, setPrepItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [PrepListItems, setPrepListItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isBreakdown, setIsBreakdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isVerified, setIsVerified] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.5);
    const [quantities, setQuantities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [verifierName, setVerifierName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    // Fetch and cache daily prep list
    const { data: dailyPrepList = [], isError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'dailyPrep'
        ],
        queryFn: fetchDailyList
    });
    // Standardized category fetching
    const { data: categories = [] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'categories',
            1
        ],
        queryFn: {
            "PlanPage.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$prepItemActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCategories"])(1)
        }["PlanPage.useQuery"],
        enabled: true,
        staleTime: 1000 * 60 * 5
    });
    // Initialize prep items and sync with daily list
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlanPage.useEffect": ()=>{
            const fetchData = {
                "PlanPage.useEffect.fetchData": async ()=>{
                    const allPrepItems = await fetchAllPrep();
                    setPrepItems(allPrepItems);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$preplist$2f$dailyPrepListSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDailyPrepItems"])(dailyPrepList);
                }
            }["PlanPage.useEffect.fetchData"];
            fetchData();
        }
    }["PlanPage.useEffect"], [
        dailyPrepList
    ]);
    // Submit verified prep list to backend
    const handleCompleteClick = async ()=>{
        if (isVerified && verifierName) {
            console.log('Preparing to post the following Prep List:', PrepListItems);
            const hasNulls = PrepListItems.some((item)=>item == null);
            if (hasNulls) {
                console.error('Prep List contains null values:', PrepListItems);
                return;
            }
            // Convert items to plain objects for API submission
            const plainObjects = PrepListItems.map((item)=>{
                if (item instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$types$2f$models$2f$PrepItem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrepItemAdapter"]) {
                    return item.toPlainObject();
                }
                console.warn("Item is not an instance of PrepItemAdapter:", item);
                return {};
            });
            console.log('plainObjects:', plainObjects);
            try {
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$prepItemActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postDailyPrep"])(plainObjects, 1);
                if (!response) {
                    setErrorMessage("An error occurred internally.");
                } else {
                    alert('List Created!');
                    setPrepListItems([]);
                }
            } catch (error) {
                console.error("Error while posting daily prep:", error);
                setErrorMessage("Failed to post daily prep.");
            }
        } else {
            setErrorMessage("Please enter the verifier's name and verify the list before submitting.");
        }
    };
    // Toggle breakdown view
    const handleBreakdownClick = ()=>{
        setIsBreakdown((prev)=>!prev);
    };
    // Update item quantities in state
    const handleQuantityChange = (id, quantity)=>{
        setQuantities((prev)=>({
                ...prev,
                [id]: quantity
            }));
    };
    // Move items between prep lists and daily lists
    const handleCardClick = (item)=>{
        const itemTwo = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$types$2f$models$2f$PrepItem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrepItemAdapter"](item, quantities[item.prep_item_id]);
        if (prepItems.some((prepItem)=>prepItem.name === item.name)) {
            setPrepItems((prev)=>prev.filter((prepItem)=>prepItem.prep_item_id !== item.prep_item_id));
            setPrepListItems((prev)=>[
                    ...prev,
                    itemTwo
                ]);
        } else if (PrepListItems.some((dailyItem)=>dailyItem.name === item.name)) {
            setPrepListItems((prev)=>prev.filter((dailyItem)=>dailyItem.prep_list_id !== item.prep_item_id));
            setPrepItems((prev)=>[
                    ...prev,
                    item
                ]);
        }
    };
    const categoryOptions = categories.map((category)=>({
            label: category.categoryName,
            value: category.categoryId
        }));
    // Reset filters and reload categories
    const handleReset = ()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$search$2f$searchSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setPrepSearchTerm"])(''));
        queryClient.invalidateQueries({
            queryKey: [
                'categories'
            ]
        });
        setSelectedCategory(null);
    };
    if (isError) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Error loading plan..."
        }, void 0, false, {
            fileName: "[project]/src/app/prep-dash/planner/page.tsx",
            lineNumber: 163,
            columnNumber: 12
        }, this);
    }
    // Handle item removal from daily list
    const handleListClick = (item)=>{
        const updatedItem = {
            prep_item_id: item.prep_list_id / 1000,
            name: item.name,
            description: item.description,
            category: item.category,
            kitchen_department_id: 1
        };
        setPrepListItems((prev)=>prev.filter((dailyItem)=>dailyItem.prep_list_id !== item.prep_list_id));
        setPrepItems((prev)=>[
                ...prev,
                updatedItem
            ]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-3 gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "col-span-1 bg-gray-100 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-4 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$ui$2f$SelectBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: selectedCategory || '',
                                onChange: (value)=>setSelectedCategory(value ? Number(value) : null),
                                options: categoryOptions,
                                placeholder: "Select a category"
                            }, void 0, false, {
                                fileName: "[project]/src/app/prep-dash/planner/page.tsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleReset,
                                className: "px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600",
                                children: "Reset"
                            }, void 0, false, {
                                fileName: "[project]/src/app/prep-dash/planner/page.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$ui$2f$NumberSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: "Step",
                                min: 0.1,
                                max: 10,
                                step: 0.1,
                                value: step,
                                onChange: (value)=>setStep(value)
                            }, void 0, false, {
                                fileName: "[project]/src/app/prep-dash/planner/page.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/prep-dash/planner/page.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                        className: "my-4 border-black"
                    }, void 0, false, {
                        fileName: "[project]/src/app/prep-dash/planner/page.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrepDash$2f$PrepPlan$2f$AllPrepList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        prepList: prepItems,
                        category: selectedCategory,
                        onAddToDailyPrep: handleCardClick,
                        step: step,
                        onQuantityChange: handleQuantityChange
                    }, void 0, false, {
                        fileName: "[project]/src/app/prep-dash/planner/page.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/prep-dash/planner/page.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "col-span-2 bg-gray-200 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-auto items-center space-x-4 my-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-bold",
                                children: [
                                    "Daily Prep Items for Tomorrow (",
                                    getTomorrowDate(),
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/prep-dash/planner/page.tsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                lineNumber: 224,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/prep-dash/planner/page.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this),
                    errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$ErrorMessage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        message: errorMessage
                    }, void 0, false, {
                        fileName: "[project]/src/app/prep-dash/planner/page.tsx",
                        lineNumber: 235,
                        columnNumber: 26
                    }, this),
                    isBreakdown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrepDash$2f$PrepPlan$2f$NewPrepList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        list: PrepListItems,
                        handleCardClick: handleListClick
                    }, void 0, false, {
                        fileName: "[project]/src/app/prep-dash/planner/page.tsx",
                        lineNumber: 237,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrepDash$2f$PrepPlan$2f$PrepListBreakdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            list: PrepListItems,
                            onClick: handleCompleteClick,
                            setVerifier: setVerifierName,
                            setVerified: setIsVerified,
                            categories: categories
                        }, void 0, false, {
                            fileName: "[project]/src/app/prep-dash/planner/page.tsx",
                            lineNumber: 240,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/prep-dash/planner/page.tsx",
                        lineNumber: 239,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                        lineNumber: 249,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/prep-dash/planner/page.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/prep-dash/planner/page.tsx",
        lineNumber: 183,
        columnNumber: 5
    }, this);
}
_s(PlanPage, "JfUVABV1UOAgioeA8IAL0ipmkzo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = PlanPage;
var _c;
__turbopack_refresh__.register(_c, "PlanPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/prep-dash/planner/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_0b5e18._.js.map