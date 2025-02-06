module.exports = {

"[project]/src/app/components/Elements/Button.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// components/Elements/Button.tsx
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const Button = ({ label, onClick, size = 'medium', style })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        style: {
            padding: '10px 20px',
            fontSize: size === 'large' ? '18px' : size === 'medium' ? '14px' : '12px',
            color: 'white',
            borderRadius: '5px',
            ...style
        },
        children: label
    }, void 0, false, {
        fileName: "[project]/src/app/components/Elements/Button.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Button;
}}),
"[project]/src/app/components/Elements/ButtonGroup.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Elements/Button.tsx [app-rsc] (ecmascript)");
;
;
const ButtonGroup = ({ items, buttonWidth, buttonHeight, onButtonClick, selectedButton, getButtonColor })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            gap: '15px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '100%'
        },
        children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'center',
                    flex: '1 1 auto'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    label: item.category_name,
                    onClick: ()=>onButtonClick(item),
                    size: "medium" // You can modify the size logic here
                    ,
                    style: {
                        width: buttonWidth,
                        height: buttonHeight,
                        backgroundColor: selectedButton === item.category_name ? '#4CAF50' // Highlight selected button with green
                         : getButtonColor(item.category_name),
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
        lineNumber: 25,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = ButtonGroup;
}}),
"[project]/src/app/components/Elements/login/InputField.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const InputField = ({ id, type, placeholder, error, value, onChange })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: id,
                name: id,
                type: type,
                placeholder: placeholder,
                value: value,
                onChange: onChange,
                className: `border px-3 py-2 rounded-md ${error ? 'border-red-500' : 'border-gray-300'}`
            }, void 0, false, {
                fileName: "[project]/src/app/components/Elements/login/InputField.tsx",
                lineNumber: 14,
                columnNumber: 5
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-red-500",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/components/Elements/login/InputField.tsx",
                lineNumber: 23,
                columnNumber: 15
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Elements/login/InputField.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, this);
const __TURBOPACK__default__export__ = InputField;
}}),
"[project]/src/app/components/PrepDash/DailyPrep/DailyPrepItem.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$login$2f$InputField$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Elements/login/InputField.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Elements/Button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Card$2f$Card$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Card/Card.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/CardContent/CardContent.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CardActions$2f$CardActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/CardActions/CardActions.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const DailyPrepItem = ({ prepItem, onButtonClick })=>{
    const [note, setNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])("");
    const handleClick = ()=>{
        onButtonClick(prepItem);
    };
    const handleSearch = (e)=>{
        const newNote = e.target.value; // Get the value from the input event
        setNote(newNote);
        prepItem.note = newNote; // It's better to handle state updates in a parent component
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Card$2f$Card$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        sx: {
            maxWidth: "100%",
            backgroundColor: prepItem.status === 'complete' ? 'rgb(229, 133, 133)' : 'rgb(228, 237, 195)',
            border: '2px solid black',
            boxShadow: 3,
            marginBottom: '6px',
            padding: '4px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl",
                                children: prepItem.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/PrepDash/DailyPrep/DailyPrepItem.tsx",
                                lineNumber: 39,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: prepItem.description
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/PrepDash/DailyPrep/DailyPrepItem.tsx",
                                lineNumber: 40,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$login$2f$InputField$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                id: "search",
                                type: "text",
                                placeholder: "daily notes...",
                                value: note,
                                onChange: handleSearch
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/PrepDash/DailyPrep/DailyPrepItem.tsx",
                                lineNumber: 41,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/PrepDash/DailyPrep/DailyPrepItem.tsx",
                        lineNumber: 38,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Quantity:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/PrepDash/DailyPrep/DailyPrepItem.tsx",
                                lineNumber: 50,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl",
                                children: [
                                    prepItem.quantity,
                                    " ",
                                    prepItem.unit
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/PrepDash/DailyPrep/DailyPrepItem.tsx",
                                lineNumber: 51,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/PrepDash/DailyPrep/DailyPrepItem.tsx",
                        lineNumber: 49,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Status:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/PrepDash/DailyPrep/DailyPrepItem.tsx",
                                lineNumber: 54,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl",
                                children: prepItem.status
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/PrepDash/DailyPrep/DailyPrepItem.tsx",
                                lineNumber: 55,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/PrepDash/DailyPrep/DailyPrepItem.tsx",
                        lineNumber: 53,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/PrepDash/DailyPrep/DailyPrepItem.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CardActions$2f$CardActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    justifyContent: prepItem.status === 'complete' ? 'flex-start' : 'flex-end'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    label: prepItem.status === 'complete' ? 'Cancel' : 'Complete',
                    onClick: handleClick,
                    size: "medium",
                    style: {
                        backgroundColor: prepItem.status === 'complete' ? 'rgb(221, 79, 79)' : 'rgb(74, 173, 78)',
                        color: "white"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/components/PrepDash/DailyPrep/DailyPrepItem.tsx",
                    lineNumber: 59,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/PrepDash/DailyPrep/DailyPrepItem.tsx",
                lineNumber: 58,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/PrepDash/DailyPrep/DailyPrepItem.tsx",
        lineNumber: 27,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = DailyPrepItem;
}}),
"[project]/src/app/components/PrepDash/DailyPrep/DailyPrepList.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrepDash$2f$DailyPrep$2f$DailyPrepItem$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/PrepDash/DailyPrep/DailyPrepItem.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$rsc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/dist/rsc.mjs [app-rsc] (ecmascript)");
;
;
;
;
const DailyPrepList = ({ list, handleCardClick })=>{
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(""); // Local state to hold search term
    const prepSearchTerm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$rsc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.search.prepSearchTerm);
    // Sync the local searchTerm with the Redux search term
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setSearchTerm(prepSearchTerm);
        console.log(list);
    }, [
        prepSearchTerm,
        list
    ]);
    // Filter items based on searchTerm
    const filteredList = list.filter((item)=>{
        const lowercasedTerm = searchTerm.toLowerCase();
        return item.name?.toLowerCase().includes(lowercasedTerm) || item.description?.toLowerCase().includes(lowercasedTerm);
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-3 max-h-[580px] overflow-y-auto",
        children: [
            " ",
            filteredList.length > 0 ? filteredList.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrepDash$2f$DailyPrep$2f$DailyPrepItem$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    prepItem: item,
                    onButtonClick: ()=>handleCardClick(item)
                }, index, false, {
                    fileName: "[project]/src/app/components/PrepDash/DailyPrep/DailyPrepList.tsx",
                    lineNumber: 35,
                    columnNumber: 15
                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "No items to display."
            }, void 0, false, {
                fileName: "[project]/src/app/components/PrepDash/DailyPrep/DailyPrepList.tsx",
                lineNumber: 42,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/PrepDash/DailyPrep/DailyPrepList.tsx",
        lineNumber: 32,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = DailyPrepList;
}}),
"[project]/src/app/components/PrepDash/DailyPrep/Kanban.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrepDash$2f$DailyPrep$2f$DailyPrepList$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/PrepDash/DailyPrep/DailyPrepList.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-rsc] (ecmascript)");
;
;
;
;
const Kanban = ({ prepItems, category })=>{
    const [todoItems, setTodoItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])([]);
    const [completeItems, setCompleteItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])([]);
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useQueryClient"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const filteredItems = prepItems.filter((item)=>category === null || category === undefined || item.category === category || item.category === 6);
        setTodoItems(filteredItems.filter((item)=>item.status === "todo" || item.status === "in-progress"));
        setCompleteItems(filteredItems.filter((item)=>item.status === "complete"));
    }, [
        prepItems,
        category
    ]);
    const updateStatusMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: async (prepItem)=>{
            const updatedItem = {
                ...prepItem,
                status: prepItem.status === "complete" ? "todo" : "complete"
            };
            const response = await fetch(`http://localhost:3000/prepitems/daily/1`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    updatedItem
                })
            });
            if (!response.ok) {
                throw new Error("Failed to update item status");
            }
            return {
                ...prepItem
            };
        },
        onSuccess: (updatedItem)=>{
            console.log(updatedItem);
            queryClient.invalidateQueries({
                queryKey: [
                    "prepItems"
                ]
            }); // Refetch lists
        }
    });
    const handleCardClick = (prepItem)=>{
        updateStatusMutation.mutate(prepItem);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 text-gray-700 bg-gray-200 px-4 py-2 m-2 border-2 border-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-lg mb-2",
                        children: "To-Do"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PrepDash/DailyPrep/Kanban.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrepDash$2f$DailyPrep$2f$DailyPrepList$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        list: todoItems,
                        handleCardClick: handleCardClick
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PrepDash/DailyPrep/Kanban.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/PrepDash/DailyPrep/Kanban.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 text-gray-700 bg-gray-200 px-4 py-2 m-2 border-2 border-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-lg mb-2",
                        children: "Completed"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PrepDash/DailyPrep/Kanban.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrepDash$2f$DailyPrep$2f$DailyPrepList$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        list: completeItems,
                        handleCardClick: handleCardClick
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PrepDash/DailyPrep/Kanban.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/PrepDash/DailyPrep/Kanban.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/PrepDash/DailyPrep/Kanban.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Kanban;
}}),
"[project]/src/redux/features/search/searchSlice.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "clearSearchState": (()=>clearSearchState),
    "default": (()=>__TURBOPACK__default__export__),
    "searchSlice": (()=>searchSlice),
    "setError": (()=>setError),
    "setLoading": (()=>setLoading),
    "setManagerSearchTerm": (()=>setManagerSearchTerm),
    "setPrepSearchTerm": (()=>setPrepSearchTerm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-rsc] (ecmascript) <locals>");
;
const initialState = {
    prepSearchTerm: "",
    managerSearchTerm: "",
    loading: false,
    error: null
};
const searchSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'search',
    initialState,
    reducers: {
        // Action to update the prepSearchTerm
        setPrepSearchTerm: (state, action)=>{
            state.prepSearchTerm = action.payload;
        },
        setManagerSearchTerm: (state, action)=>{
            console.log(state.managerSearchTerm);
            state.managerSearchTerm = action.payload;
        },
        clearPrepSearchTerm: (state)=>{
            state.prepSearchTerm = ""; // Reset to an empty string
        },
        clearManagerSearchTerm: (state)=>{
            state.prepSearchTerm = ""; // Reset to an empty string
        },
        setLoading: (state, action)=>{
            state.loading = action.payload; // Set loading state
        },
        setError: (state, action)=>{
            state.error = action.payload; // Set error state
        },
        clearSearchState: (state)=>{
            state.loading = false;
            state.error = null;
        }
    }
});
const { setPrepSearchTerm, setManagerSearchTerm, setLoading, setError, clearSearchState } = searchSlice.actions;
const __TURBOPACK__default__export__ = searchSlice.reducer;
}}),
"[project]/src/app/util/actions.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ fetchCategories = async ()=>{
    try {
        const response = await fetch('http://localhost:3000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`Error fetching categories: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch categories:", error);
        throw error;
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ fetchAllIngredients = async (restaurantId)=>{
    try {
        const response = await fetch(`http://localhost:3000/ingredients/${restaurantId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`Error fetching categories: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch ingredients:", error);
        throw error;
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ fetchIngredientPricing = async (restaurantId)=>{
    try {
        const response = await fetch(`http://localhost:3000/ingredients/pricing/${restaurantId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`Error fetching categories: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch ingredients:", error);
        throw error;
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ fetchCriticals = async (restaurantId)=>{
    try {
        const response = await fetch(`http://localhost:3000/ingredients/suggestions/${restaurantId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`Error fetching ingredient suggestions: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch ingredients suggestions:", error);
        throw error;
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ fetchAllPrepItems = async (restaurantId)=>{
    try {
        console.log("fetching prep items pricing");
        const response = await fetch(`http://localhost:3000/prepitems/${restaurantId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`Error fetching categories pricing: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch ingredients pricing:", error);
        throw error;
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ fetchDepartments = async (restaurantId)=>{
    try {
        console.log("fetching prep items");
        const response = await fetch(`http://localhost:3000/departments/${restaurantId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`Error fetching departments: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch departments:", error);
        throw error;
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ postPrepItem = async (restaurantId, formData)=>{
    try {
        console.log("fetching prep items");
        const response = await fetch(`http://localhost:3000/prepitems/${restaurantId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        if (!response.ok) {
            throw new Error(`Error Posting PrepItem: ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Failed to post Prep Item:", error);
        throw error;
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ fetchDepProgress = async (restaurantId)=>{
    try {
        const response = await fetch(`http://localhost:3000/departments/daily/${restaurantId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`Error fetching department Prog: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch ingredients:", error);
        throw error;
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ postDailyPrep = async (prepList, restaurantId)=>{
    try {
        const response = await fetch(`http://localhost:3000/prepitems/daily/${restaurantId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prepList
            })
        });
        if (!response.ok) {
            throw new Error(`Error fetching department Prog: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to post daily prep:", error);
        throw error;
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ fetchDailyList = async ()=>{
    try {
        const response = await fetch(`http://localhost:3000/prepitems/daily/1`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`Error fetching daily list: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to get daily prep:", error);
        throw error;
    }
};
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    fetchCategories,
    fetchAllIngredients,
    fetchIngredientPricing,
    fetchCriticals,
    fetchAllPrepItems,
    fetchDepartments,
    postPrepItem,
    fetchDepProgress,
    postDailyPrep,
    fetchDailyList
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(fetchCategories, "7f33cc7fd1032411f82e6fbdc2248c475df82c2a06", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(fetchAllIngredients, "7f82487ae7269a9dc3d5820dace69ec85b9ddb64e8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(fetchIngredientPricing, "7f44b008dd1ba7f9a4ea24d31f66da81c3009459a4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(fetchCriticals, "7f80a789cf799c4f50aedc055fdf00609660406cb2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(fetchAllPrepItems, "7f49266e824781455f55896155276e6a6ef41730c5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(fetchDepartments, "7fb0433f3b6ee59ceab6ae57c578b2b3eb8005706d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(postPrepItem, "7f03447a864184ad99cd1c226e7e2fc7e16dd1d737", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(fetchDepProgress, "7fc6f68946061eca83543b9ee24154bc1883f400e0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(postDailyPrep, "7f725c80df0c1c9ea215f20eec6397b1574b5e6f14", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(fetchDailyList, "7f651c65f150232bdb34d12ef996aaec58d846b1cd", null);
}}),
"[project]/src/app/util/data.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
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
}}),
"[project]/src/app/prep-dash/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>PrepContainer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$ButtonGroup$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Elements/ButtonGroup.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Elements/Button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrepDash$2f$DailyPrep$2f$Kanban$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/PrepDash/DailyPrep/Kanban.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$search$2f$searchSlice$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux/features/search/searchSlice.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$util$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/util/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$util$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/util/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$rsc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/dist/rsc.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-rsc] (ecmascript)");
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
function PrepContainer() {
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$rsc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useDispatch"])();
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(null);
    const { data: prepItems = [], isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "prepItems"
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$util$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchDailyList"]
    });
    const { data: categories = [] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "categories"
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$util$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchCategories"]
    });
    const handleButtonClick = (cat)=>{
        if (cat) {
            setSelectedCategory(cat);
        }
    };
    const handleResetClick = ()=>{
        setSelectedCategory(null); // Reset selected category
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$search$2f$searchSlice$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setPrepSearchTerm"])("")); // Clear the search term
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "loading lists..."
        }, void 0, false, {
            fileName: "[project]/src/app/prep-dash/page.tsx",
            lineNumber: 42,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$ButtonGroup$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            items: categories,
                            buttonWidth: "200px" // Set button width
                            ,
                            buttonHeight: "80px" // Set button height
                            ,
                            onButtonClick: handleButtonClick,
                            selectedButton: selectedCategory?.category_name,
                            getButtonColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$util$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getButtonColor"]
                        }, void 0, false, {
                            fileName: "[project]/src/app/prep-dash/page.tsx",
                            lineNumber: 50,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/prep-dash/page.tsx",
                        lineNumber: 49,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mr-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
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
                            lineNumber: 60,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/prep-dash/page.tsx",
                        lineNumber: 59,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/prep-dash/page.tsx",
                lineNumber: 48,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PrepDash$2f$DailyPrep$2f$Kanban$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    prepItems: prepItems,
                    category: selectedCategory?.category_id
                }, void 0, false, {
                    fileName: "[project]/src/app/prep-dash/page.tsx",
                    lineNumber: 75,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/prep-dash/page.tsx",
                lineNumber: 74,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/prep-dash/page.tsx",
        lineNumber: 46,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/app/prep-dash/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_namespace__(__turbopack_import__("[project]/src/app/prep-dash/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=src_97aa6c._.js.map