(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_1d24dc._.js", {

"[project]/src/app/components/Elements/ButtonGroup.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Elements/Button.tsx [app-client] (ecmascript)");
;
;
const ButtonGroup = ({ items, buttonWidth, buttonHeight, onButtonClick, selectedButton, getButtonColor })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            gap: '15px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '100%'
        },
        children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'center',
                    flex: '1 1 auto'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    label: item.category_name,
                    onClick: ()=>onButtonClick(item),
                    size: "medium",
                    style: {
                        width: buttonWidth,
                        height: buttonHeight,
                        backgroundColor: selectedButton === item.category_name ? '#4CAF50' : getButtonColor(item.category_name),
                        cursor: 'pointer'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Elements/ButtonGroup.tsx",
                    lineNumber: 43,
                    columnNumber: 11
                }, this)
            }, item.category_id, false, {
                fileName: "[project]/src/app/components/Elements/ButtonGroup.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/app/components/Elements/ButtonGroup.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
};
_c = ButtonGroup;
const __TURBOPACK__default__export__ = ButtonGroup;
var _c;
__turbopack_refresh__.register(_c, "ButtonGroup");
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
"[project]/src/app/components/PrepDash/DailyPrep/DailyPrepItem.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$login$2f$InputField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Elements/login/InputField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Elements/Button.tsx [app-client] (ecmascript)");
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
// Dynamic prep item card that changes appearance based on completion status and allows note addition
const DailyPrepItem = ({ prepItem, onButtonClick })=>{
    _s();
    const [note, setNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Updates prep item status in parent component
    const handleClick = ()=>{
        onButtonClick(prepItem);
    };
    // Manages note input and updates prep item state
    const handleSearch = (e)=>{
        const newNote = e.target.value;
        setNote(newNote);
        prepItem.note = newNote;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        sx: {
            maxWidth: "100%",
            backgroundColor: prepItem.status === 'complete' ? 'rgb(229, 133, 133)' : 'rgb(228, 237, 195)',
            border: '2px solid black',
            boxShadow: 3,
            marginBottom: '6px',
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
                                fileName: "[project]/src/app/components/PrepDash/DailyPrep/DailyPrepItem.tsx",
                                lineNumber: 43,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: prepItem.description
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/PrepDash/DailyPrep/DailyPrepItem.tsx",
                                lineNumber: 44,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$login$2f$InputField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                id: "search",
                                type: "text",
                                placeholder: "daily notes...",
                                value: note,
                                onChange: handleSearch
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/PrepDash/DailyPrep/DailyPrepItem.tsx",
                                lineNumber: 45,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/PrepDash/DailyPrep/DailyPrepItem.tsx",
                        lineNumber: 42,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Quantity:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/PrepDash/DailyPrep/DailyPrepItem.tsx",
                                lineNumber: 54,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl",
                                children: [
                                    prepItem.quantity,
                                    " ",
                                    prepItem.unit
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/PrepDash/DailyPrep/DailyPrepItem.tsx",
                                lineNumber: 55,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/PrepDash/DailyPrep/DailyPrepItem.tsx",
                        lineNumber: 53,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Status:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/PrepDash/DailyPrep/DailyPrepItem.tsx",
                                lineNumber: 58,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl",
                                children: prepItem.status
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/PrepDash/DailyPrep/DailyPrepItem.tsx",
                                lineNumber: 59,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/PrepDash/DailyPrep/DailyPrepItem.tsx",
                        lineNumber: 57,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/PrepDash/DailyPrep/DailyPrepItem.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CardActions$2f$CardActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    justifyContent: prepItem.status === 'complete' ? 'flex-start' : 'flex-end'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    label: prepItem.status === 'complete' ? 'Cancel' : 'Complete',
                    onClick: handleClick,
                    size: "medium",
                    style: {
                        backgroundColor: prepItem.status === 'complete' ? 'rgb(221, 79, 79)' : 'rgb(74, 173, 78)',
                        color: "white"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/components/PrepDash/DailyPrep/DailyPrepItem.tsx",
                    lineNumber: 63,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/PrepDash/DailyPrep/DailyPrepItem.tsx",
                lineNumber: 62,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/PrepDash/DailyPrep/DailyPrepItem.tsx",
        lineNumber: 31,
        columnNumber: 9
    }, this);
};
_s(DailyPrepItem, "l4b83JBpKzh+zvY0jif08W5Oai4=");
_c = DailyPrepItem;
const __TURBOPACK__default__export__ = DailyPrepItem;
var _c;
__turbopack_refresh__.register(_c, "DailyPrepItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/PrepDash/DailyPrep/DailyPrepList.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrepDash$2f$DailyPrep$2f$DailyPrepItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/PrepDash/DailyPrep/DailyPrepItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
const DailyPrepList = ({ list, handleCardClick })=>{
    _s();
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""); // Local search term state.
    const prepSearchTerm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "DailyPrepList.useSelector[prepSearchTerm]": (state)=>state.search.prepSearchTerm
    }["DailyPrepList.useSelector[prepSearchTerm]"]); // Redux search term.
    // Syncs the local searchTerm with the Redux prepSearchTerm.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DailyPrepList.useEffect": ()=>{
            setSearchTerm(prepSearchTerm);
        }
    }["DailyPrepList.useEffect"], [
        prepSearchTerm
    ]);
    // Filters the list of prep items based on the search term.
    const filteredList = list.filter((item)=>{
        const lowercasedTerm = searchTerm.toLowerCase();
        return item.name?.toLowerCase().includes(lowercasedTerm) || item.description?.toLowerCase().includes(lowercasedTerm);
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-3 max-h-[580px] overflow-y-auto",
        children: filteredList.length > 0 ? filteredList.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrepDash$2f$DailyPrep$2f$DailyPrepItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                prepItem: item,
                onButtonClick: ()=>handleCardClick(item)
            }, index, false, {
                fileName: "[project]/src/app/components/PrepDash/DailyPrep/DailyPrepList.tsx",
                lineNumber: 35,
                columnNumber: 15
            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "No items to display."
        }, void 0, false, {
            fileName: "[project]/src/app/components/PrepDash/DailyPrep/DailyPrepList.tsx",
            lineNumber: 42,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/PrepDash/DailyPrep/DailyPrepList.tsx",
        lineNumber: 32,
        columnNumber: 9
    }, this);
};
_s(DailyPrepList, "dYLALvqqhFYmgErv9obz/c3/xAY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = DailyPrepList;
const __TURBOPACK__default__export__ = DailyPrepList;
var _c;
__turbopack_refresh__.register(_c, "DailyPrepList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/PrepDash/DailyPrep/Kanban.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrepDash$2f$DailyPrep$2f$DailyPrepList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/PrepDash/DailyPrep/DailyPrepList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
// Kanban board component for managing prep items with todo and complete columns
const Kanban = ({ prepItems, category })=>{
    _s();
    const [todoItems, setTodoItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [completeItems, setCompleteItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    // Filter and distribute items based on status and category
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Kanban.useEffect": ()=>{
            const filteredItems = prepItems.filter({
                "Kanban.useEffect.filteredItems": (item)=>category === null || category === undefined || item.category === category || item.category === 6
            }["Kanban.useEffect.filteredItems"]);
            setTodoItems(filteredItems.filter({
                "Kanban.useEffect": (item)=>item.status === "todo" || item.status === "in-progress"
            }["Kanban.useEffect"]));
            setCompleteItems(filteredItems.filter({
                "Kanban.useEffect": (item)=>item.status === "complete"
            }["Kanban.useEffect"]));
        }
    }["Kanban.useEffect"], [
        prepItems,
        category
    ]);
    // Mutation for toggling item status between complete and todo
    const updateStatusMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "Kanban.useMutation[updateStatusMutation]": async (prepItem)=>{
                const updatedItem = {
                    ...prepItem,
                    status: prepItem.status === "complete" ? "todo" : "complete"
                };
                console.log("Updating:", updatedItem);
                const response = await fetch(`http://localhost:3000/prepitems/daily/1`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(updatedItem)
                });
                if (!response.ok) {
                    throw new Error("Failed to update item status");
                }
                return response.json();
            }
        }["Kanban.useMutation[updateStatusMutation]"],
        onSuccess: {
            "Kanban.useMutation[updateStatusMutation]": (data)=>{
                console.log("Mutation success:", data);
                queryClient.invalidateQueries({
                    queryKey: [
                        "prepItems"
                    ]
                });
            }
        }["Kanban.useMutation[updateStatusMutation]"]
    });
    const handleCardClick = (prepItem)=>{
        updateStatusMutation.mutate(prepItem);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 text-gray-700 bg-gray-200 px-4 py-2 m-2 border-2 border-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-lg mb-2",
                        children: "To-Do"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PrepDash/DailyPrep/Kanban.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrepDash$2f$DailyPrep$2f$DailyPrepList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        list: todoItems,
                        handleCardClick: handleCardClick
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PrepDash/DailyPrep/Kanban.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/PrepDash/DailyPrep/Kanban.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 text-gray-700 bg-gray-200 px-4 py-2 m-2 border-2 border-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-lg mb-2",
                        children: "Completed"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PrepDash/DailyPrep/Kanban.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrepDash$2f$DailyPrep$2f$DailyPrepList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        list: completeItems,
                        handleCardClick: handleCardClick
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PrepDash/DailyPrep/Kanban.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/PrepDash/DailyPrep/Kanban.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/PrepDash/DailyPrep/Kanban.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
};
_s(Kanban, "wYHwlN4E//a8bIgtN8W8kH6FxT4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = Kanban;
const __TURBOPACK__default__export__ = Kanban;
var _c;
__turbopack_refresh__.register(_c, "Kanban");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/util/actions.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"7f03447a864184ad99cd1c226e7e2fc7e16dd1d737":"postPrepItem","7f33cc7fd1032411f82e6fbdc2248c475df82c2a06":"fetchCategories","7f44b008dd1ba7f9a4ea24d31f66da81c3009459a4":"fetchIngredientPricing","7f49266e824781455f55896155276e6a6ef41730c5":"fetchAllPrepItems","7f651c65f150232bdb34d12ef996aaec58d846b1cd":"fetchDailyList","7f725c80df0c1c9ea215f20eec6397b1574b5e6f14":"postDailyPrep","7f80a789cf799c4f50aedc055fdf00609660406cb2":"fetchCriticals","7f82487ae7269a9dc3d5820dace69ec85b9ddb64e8":"fetchAllIngredients","7fb0433f3b6ee59ceab6ae57c578b2b3eb8005706d":"fetchDepartments","7fc6f68946061eca83543b9ee24154bc1883f400e0":"fetchDepProgress"} */ __turbopack_esm__({
    "fetchAllIngredients": (()=>fetchAllIngredients),
    "fetchAllPrepItems": (()=>fetchAllPrepItems),
    "fetchCategories": (()=>fetchCategories),
    "fetchCriticals": (()=>fetchCriticals),
    "fetchDailyList": (()=>fetchDailyList),
    "fetchDepProgress": (()=>fetchDepProgress),
    "fetchDepartments": (()=>fetchDepartments),
    "fetchIngredientPricing": (()=>fetchIngredientPricing),
    "postDailyPrep": (()=>postDailyPrep),
    "postPrepItem": (()=>postPrepItem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
;
var fetchCategories = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7f33cc7fd1032411f82e6fbdc2248c475df82c2a06", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "fetchCategories");
var fetchAllIngredients = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7f82487ae7269a9dc3d5820dace69ec85b9ddb64e8", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "fetchAllIngredients");
var fetchIngredientPricing = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7f44b008dd1ba7f9a4ea24d31f66da81c3009459a4", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "fetchIngredientPricing");
var fetchCriticals = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7f80a789cf799c4f50aedc055fdf00609660406cb2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "fetchCriticals");
var fetchAllPrepItems = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7f49266e824781455f55896155276e6a6ef41730c5", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "fetchAllPrepItems");
var fetchDepartments = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7fb0433f3b6ee59ceab6ae57c578b2b3eb8005706d", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "fetchDepartments");
var postPrepItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7f03447a864184ad99cd1c226e7e2fc7e16dd1d737", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "postPrepItem");
var fetchDepProgress = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7fc6f68946061eca83543b9ee24154bc1883f400e0", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "fetchDepProgress");
var postDailyPrep = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7f725c80df0c1c9ea215f20eec6397b1574b5e6f14", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "postDailyPrep");
var fetchDailyList = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7f651c65f150232bdb34d12ef996aaec58d846b1cd", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "fetchDailyList");
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
"[project]/src/app/prep-dash/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>PrepContainer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$ButtonGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Elements/ButtonGroup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Elements/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrepDash$2f$DailyPrep$2f$Kanban$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/PrepDash/DailyPrep/Kanban.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$search$2f$searchSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux/features/search/searchSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$util$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/util/actions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$util$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/util/data.ts [app-client] (ecmascript)");
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
function PrepContainer() {
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Fetch and cache daily prep items
    const { data: prepItems = [], isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "prepItems"
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$util$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchDailyList"]
    });
    // Fetch and cache categories
    const { data: categories = [] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "categories"
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$util$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCategories"]
    });
    // Update selected category filter
    const handleButtonClick = (cat)=>{
        if (cat) {
            setSelectedCategory(cat);
        }
    };
    // Reset category filter and search term
    const handleResetClick = ()=>{
        setSelectedCategory(null);
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$search$2f$searchSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setPrepSearchTerm"])(""));
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "loading lists..."
        }, void 0, false, {
            fileName: "[project]/src/app/prep-dash/page.tsx",
            lineNumber: 47,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$ButtonGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            items: categories,
                            buttonWidth: "200px",
                            buttonHeight: "80px",
                            onButtonClick: handleButtonClick,
                            selectedButton: selectedCategory?.category_name,
                            getButtonColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$util$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getButtonColor"]
                        }, void 0, false, {
                            fileName: "[project]/src/app/prep-dash/page.tsx",
                            lineNumber: 54,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/prep-dash/page.tsx",
                        lineNumber: 53,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mr-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            label: "Reset",
                            onClick: handleResetClick,
                            size: "large",
                            style: {
                                backgroundColor: "rgb(221, 79, 79)",
                                border: "none",
                                cursor: "pointer"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/prep-dash/page.tsx",
                            lineNumber: 64,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/prep-dash/page.tsx",
                        lineNumber: 63,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/prep-dash/page.tsx",
                lineNumber: 52,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrepDash$2f$DailyPrep$2f$Kanban$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    prepItems: prepItems,
                    category: selectedCategory?.category_id
                }, void 0, false, {
                    fileName: "[project]/src/app/prep-dash/page.tsx",
                    lineNumber: 78,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/prep-dash/page.tsx",
                lineNumber: 77,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/prep-dash/page.tsx",
        lineNumber: 51,
        columnNumber: 9
    }, this);
}
_s(PrepContainer, "kuEg/CO1D7Xa4ocyMt9wPKvqEHk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = PrepContainer;
var _c;
__turbopack_refresh__.register(_c, "PrepContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/prep-dash/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_app_1d24dc._.js.map