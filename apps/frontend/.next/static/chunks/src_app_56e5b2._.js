(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_56e5b2._.js", {

"[project]/src/app/components/MinStockSetting.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>MinStockSetting)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/joy/IconButton/IconButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$InfoOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/InfoOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/joy/Modal/Modal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$ModalDialog$2f$ModalDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/joy/ModalDialog/ModalDialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$ModalClose$2f$ModalClose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/joy/ModalClose/ModalClose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/joy/Typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Sheet$2f$Sheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/joy/Sheet/Sheet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/joy/Input/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/joy/Button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/joy/Alert/Alert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CheckCircleOutlineRounded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/CheckCircleOutlineRounded.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
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
function MinStockSetting({ itemId, itemName, currentMinStock, unit, onUpdate }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [minStock, setMinStock] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(currentMinStock);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleUpdate = async ()=>{
        try {
            const result = await onUpdate(itemId, minStock);
            if (result) {
                setSuccess(true);
                setTimeout(()=>{
                    setSuccess(false);
                    setOpen(false);
                }, 1500);
            }
        } catch (err) {
            setError('Failed to update minimum stock level');
            setTimeout(()=>setError(''), 3000);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                variant: "plain",
                color: "neutral",
                size: "sm",
                onClick: (e)=>{
                    e.stopPropagation();
                    setOpen(true);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$InfoOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/components/MinStockSetting.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/MinStockSetting.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: open,
                onClose: ()=>setOpen(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$ModalDialog$2f$ModalDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    "aria-labelledby": "min-stock-modal-title",
                    "aria-describedby": "min-stock-modal-description",
                    size: "md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$ModalClose$2f$ModalClose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/components/MinStockSetting.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            id: "min-stock-modal-title",
                            level: "h2",
                            children: "Set Minimum Stock Level"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/MinStockSetting.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            id: "min-stock-modal-description",
                            level: "body-md",
                            children: [
                                "Set the minimum stock level for ",
                                itemName,
                                ". You will receive notifications when the inventory falls below this level."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/MinStockSetting.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Sheet$2f$Sheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            sx: {
                                mt: 2,
                                display: 'flex',
                                gap: 2,
                                alignItems: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    type: "number",
                                    value: minStock,
                                    onChange: (e)=>setMinStock(Number(e.target.value)),
                                    slotProps: {
                                        input: {
                                            min: 0,
                                            step: 1
                                        }
                                    },
                                    endDecorator: unit
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/MinStockSetting.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    onClick: handleUpdate,
                                    children: "Update"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/MinStockSetting.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/MinStockSetting.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            color: "danger",
                            sx: {
                                mt: 2
                            },
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/MinStockSetting.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this),
                        success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            color: "success",
                            sx: {
                                mt: 2
                            },
                            startDecorator: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CheckCircleOutlineRounded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/app/components/MinStockSetting.tsx",
                                lineNumber: 106,
                                columnNumber: 31
                            }, void 0),
                            children: "Minimum stock level updated successfully!"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/MinStockSetting.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/MinStockSetting.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/MinStockSetting.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(MinStockSetting, "Fnvdza0FOYuvPgcfcAMV9QOGIO0=");
_c = MinStockSetting;
var _c;
__turbopack_refresh__.register(_c, "MinStockSetting");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/manager-dash/inventory/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Inventory)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2d$components$2f$react$2f$esm$2f$popover$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@base-ui-components/react/esm/popover/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$cart$2f$cartSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux/features/cart/cartSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$MinStockSetting$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/MinStockSetting.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/joy/Chip/Chip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2d$components$2f$react$2f$esm$2f$popover$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Popover$3e$__ = __turbopack_import__("[project]/node_modules/@base-ui-components/react/esm/popover/index.parts.js [app-client] (ecmascript) <export * as Popover>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/joy/Box/Box.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/joy/Typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Slider$2f$Slider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/joy/Slider/Slider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/joy/Button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/joy/Alert/Alert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$WarningAmberRounded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/WarningAmberRounded.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Tabs$2f$Tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/joy/Tabs/Tabs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$TabList$2f$TabList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/joy/TabList/TabList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/joy/Tab/Tab.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$TabPanel$2f$TabPanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/joy/TabPanel/TabPanel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/joy/CircularProgress/CircularProgress.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
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
;
;
function Inventory() {
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const [inventoryItems, setInventoryItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [, setSelectedItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showNotifications, setShowNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [filterCategory, setFilterCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [notificationThreshold, setNotificationThreshold] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(80);
    // Categorize items by status
    const outOfStockItems = inventoryItems.filter((item)=>item.status === 'out');
    const lowStockItems = inventoryItems.filter((item)=>item.status === 'low' || item.status === 'critical');
    const goodStockItems = inventoryItems.filter((item)=>item.status === 'good');
    const categories = [
        ...new Set(inventoryItems.map((item)=>item.category))
    ];
    const fetchInventoryData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Inventory.useCallback[fetchInventoryData]": async ()=>{
            setLoading(true);
            setError(null);
            try {
                const response = await fetch('http://localhost:3001/ingredients/inventory/1');
                if (!response.ok) {
                    throw new Error(`Failed to fetch inventory data: ${response.statusText}`);
                }
                const data = await response.json();
                // Transform data to match our InventoryItem interface
                const formattedData = data.map({
                    "Inventory.useCallback[fetchInventoryData].formattedData": (item)=>{
                        const currentStock = item.quantity ? parseFloat(item.quantity) : 0;
                        const minStock = parseFloat(item.quantityThreshold);
                        let status = 'good';
                        if (currentStock === 0) {
                            status = 'out';
                        } else if (currentStock <= minStock * 0.5) {
                            status = 'critical';
                        } else if (currentStock <= minStock) {
                            status = 'low';
                        }
                        return {
                            id: item.ingredientId,
                            name: item.ingredientName,
                            category: 'Uncategorized',
                            currentStock,
                            minStock,
                            maxStock: parseFloat(item.maxStock),
                            unit: item.unit,
                            status,
                            lastUpdated: item.lastUpdated
                        };
                    }
                }["Inventory.useCallback[fetchInventoryData].formattedData"]);
                setInventoryItems(formattedData);
            } catch (error) {
                console.error('Error fetching inventory data:', error);
                setError('Failed to load inventory data. Please try again later.');
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to load inventory data');
            } finally{
                setLoading(false);
            }
        }
    }["Inventory.useCallback[fetchInventoryData]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Inventory.useEffect": ()=>{
            fetchInventoryData();
        }
    }["Inventory.useEffect"], [
        fetchInventoryData
    ]);
    const handleAddToCart = (item, provider)=>{
        const cartItem = {
            ingredientId: item.id,
            ingredientName: item.name,
            unit: item.unit,
            syscoPrice: provider === 'Sysco' ? 5.99 : 0,
            usFoodsPrice: provider === 'USFoods' ? 4.99 : 0,
            last_date_ordered: new Date(),
            restaurantId: 1,
            quantity: 1
        };
        if (provider === 'Sysco') {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$cart$2f$cartSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToSyscoCart"])(cartItem));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Added ${item.name} to Sysco cart`);
        } else {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$cart$2f$cartSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToUsFoodsCart"])(cartItem));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Added ${item.name} to US Foods cart`);
        }
    };
    const updateMinStock = async (itemId, newMinStock)=>{
        try {
            const response = await fetch(`http://localhost:3001/ingredients/minstock/${itemId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    minStock: newMinStock
                })
            });
            if (!response.ok) {
                throw new Error('Failed to update min stock');
            }
            setInventoryItems((prevItems)=>prevItems.map((item)=>item.id === itemId ? {
                        ...item,
                        minStock: newMinStock,
                        status: item.currentStock === 0 ? 'out' : item.currentStock <= newMinStock * 0.5 ? 'critical' : item.currentStock <= newMinStock ? 'low' : 'good'
                    } : item));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Minimum stock level updated successfully');
            return true;
        } catch (error) {
            console.error('Error updating min stock:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to update minimum stock level');
            return false;
        }
    };
    const handleNotificationThresholdChange = (event, newValue)=>{
        setNotificationThreshold(newValue);
        // You could save this to user preferences in the backend
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Notification threshold set to ${newValue}%`);
    };
    const filteredItems = (status)=>{
        let items = inventoryItems;
        if (status === 'out') {
            items = outOfStockItems;
        } else if (status === 'low') {
            items = lowStockItems;
        } else if (status === 'good') {
            items = goodStockItems;
        }
        return items.filter((item)=>{
            const matchesCategory = filterCategory === 'all' || item.category === filterCategory;
            const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    };
    const renderInventoryTable = (items)=>{
        if (items.length === 0) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    p: 4,
                    textAlign: 'center'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    level: "body-lg",
                    children: "No inventory items found matching your criteria."
                }, void 0, false, {
                    fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                    lineNumber: 204,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                lineNumber: 203,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-x-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "bg-gray-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                    children: "Item"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                    lineNumber: 216,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                    children: "Category"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                    lineNumber: 217,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                    children: "Current Stock"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                    lineNumber: 218,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                    children: "Min Stock"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                    lineNumber: 219,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                    children: "Max Stock"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                    lineNumber: 220,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                    children: "Status"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                    lineNumber: 221,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                    children: "Last Updated"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                    lineNumber: 222,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                    children: "Actions"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                    lineNumber: 223,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                            lineNumber: 215,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                        lineNumber: 214,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        className: "divide-y divide-gray-200",
                        children: items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "hover:bg-gray-50 cursor-pointer",
                                onClick: ()=>setSelectedItem(item),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-6 py-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-medium text-gray-900",
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                            lineNumber: 234,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                        lineNumber: 233,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-6 py-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-gray-900",
                                            children: item.category
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                            lineNumber: 237,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                        lineNumber: 236,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-6 py-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-medium",
                                            children: [
                                                item.currentStock,
                                                " ",
                                                item.unit
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                            lineNumber: 240,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                        lineNumber: 239,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-6 py-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-gray-500 flex items-center",
                                            children: [
                                                item.minStock,
                                                " ",
                                                item.unit,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$MinStockSetting$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    itemId: item.id,
                                                    itemName: item.name,
                                                    currentMinStock: item.minStock,
                                                    unit: item.unit,
                                                    onUpdate: updateMinStock
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                            lineNumber: 243,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                        lineNumber: 242,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-6 py-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-gray-500",
                                            children: [
                                                item.maxStock,
                                                " ",
                                                item.unit
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                            lineNumber: 255,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                        lineNumber: 254,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-6 py-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            color: item.status === 'out' ? 'danger' : item.status === 'critical' ? 'danger' : item.status === 'low' ? 'warning' : 'success',
                                            size: "sm",
                                            variant: "soft",
                                            children: item.status === 'out' ? 'Out of Stock' : item.status === 'critical' ? 'Critical' : item.status === 'low' ? 'Low Stock' : 'In Stock'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                            lineNumber: 258,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                        lineNumber: 257,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-6 py-4 text-sm text-gray-500",
                                        children: new Date(item.lastUpdated).toLocaleString()
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                        lineNumber: 272,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-6 py-4 relative",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2d$components$2f$react$2f$esm$2f$popover$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Popover$3e$__["Popover"].Root, {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2d$components$2f$react$2f$esm$2f$popover$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Popover$3e$__["Popover"].Trigger, {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-blue-500 hover:text-blue-700 cursor-pointer",
                                                        children: "Details"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2d$components$2f$react$2f$esm$2f$popover$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Popover$3e$__["Popover"].Portal, {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2d$components$2f$react$2f$esm$2f$popover$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Popover$3e$__["Popover"].Positioner, {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2d$components$2f$react$2f$esm$2f$popover$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Popover$3e$__["Popover"].Popup, {
                                                            className: "bg-white p-4 rounded-lg shadow-lg border border-gray-200",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "font-bold text-lg",
                                                                            children: [
                                                                                item.name,
                                                                                " Providers"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                                                            lineNumber: 286,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "space-y-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex justify-between items-center",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: "Sysco"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                                                                            lineNumber: 289,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: "$5.99"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                                                                            lineNumber: 290,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            onClick: (e)=>{
                                                                                                e.stopPropagation();
                                                                                                handleAddToCart(item, 'Sysco');
                                                                                            },
                                                                                            className: "bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600",
                                                                                            children: "Add"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                                                                            lineNumber: 291,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                                                                    lineNumber: 288,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex justify-between items-center",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: "US Foods"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                                                                            lineNumber: 302,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: "$4.99"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                                                                            lineNumber: 303,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            onClick: (e)=>{
                                                                                                e.stopPropagation();
                                                                                                handleAddToCart(item, 'USFoods');
                                                                                            },
                                                                                            className: "bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600",
                                                                                            children: "Add"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                                                                            lineNumber: 304,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                                                                    lineNumber: 301,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                                                            lineNumber: 287,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                                                    lineNumber: 285,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2d$components$2f$react$2f$esm$2f$popover$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Popover$3e$__["Popover"].Arrow, {
                                                                    className: "fill-white"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                                                    lineNumber: 316,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                                            lineNumber: 284,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                            lineNumber: 276,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                        lineNumber: 275,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, `${item.id}-${index}`, true, {
                                fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                lineNumber: 228,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                        lineNumber: 226,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                lineNumber: 213,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
            lineNumber: 212,
            columnNumber: 7
        }, this);
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                size: "lg"
            }, void 0, false, {
                fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                lineNumber: 333,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
            lineNumber: 332,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    color: "danger",
                    sx: {
                        mb: 2
                    },
                    children: [
                        error,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onClick: fetchInventoryData,
                            sx: {
                                ml: 2
                            },
                            children: "Retry"
                        }, void 0, false, {
                            fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                            lineNumber: 344,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                    lineNumber: 342,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                lineNumber: 341,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
            lineNumber: 340,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-gray-900 mb-4",
                    children: "Inventory Overview"
                }, void 0, false, {
                    fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                    lineNumber: 356,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-sm p-6 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold mb-4",
                            children: "Low Stock Notification Threshold"
                        }, void 0, false, {
                            fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                            lineNumber: 360,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    children: "0%"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                    lineNumber: 362,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Slider$2f$Slider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    "aria-label": "Low stock notification threshold",
                                    value: notificationThreshold,
                                    onChange: handleNotificationThresholdChange,
                                    marks: true,
                                    step: 10,
                                    min: 0,
                                    max: 100,
                                    sx: {
                                        flexGrow: 1
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                    lineNumber: 363,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    children: "100%"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                    lineNumber: 373,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                            lineNumber: 361,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            level: "body-sm",
                            className: "mt-2 text-gray-500",
                            children: [
                                "Set when you want to be notified about low stock. Current setting: ",
                                notificationThreshold,
                                "% of minimum stock level"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                            lineNumber: 375,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                    lineNumber: 359,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-sm overflow-hidden mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 border-b",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-gray-900",
                                        children: "Inventory Status"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                        lineNumber: 384,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex space-x-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Search items...",
                                                    className: "px-3 py-2 border rounded-md",
                                                    value: searchTerm,
                                                    onChange: (e)=>setSearchTerm(e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                                lineNumber: 386,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: "px-3 py-2 border rounded-md",
                                                    value: filterCategory,
                                                    onChange: (e)=>setFilterCategory(e.target.value),
                                                    "aria-label": "Filter by category",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "all",
                                                            children: "All Categories"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                                            lineNumber: 402,
                                                            columnNumber: 21
                                                        }, this),
                                                        categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: category,
                                                                children: category
                                                            }, category, false, {
                                                                fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                                                lineNumber: 404,
                                                                columnNumber: 23
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                                    lineNumber: 396,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                                lineNumber: 395,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                variant: "outlined",
                                                color: "primary",
                                                onClick: fetchInventoryData,
                                                children: "Refresh"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                                lineNumber: 408,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                        lineNumber: 385,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                lineNumber: 383,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                            lineNumber: 382,
                            columnNumber: 11
                        }, this),
                        showNotifications && (outOfStockItems.length > 0 || lowStockItems.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            color: "warning",
                            startDecorator: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$WarningAmberRounded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                lineNumber: 422,
                                columnNumber: 31
                            }, void 0),
                            endDecorator: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                size: "sm",
                                variant: "soft",
                                color: "warning",
                                onClick: ()=>setShowNotifications(false),
                                children: "Dismiss"
                            }, void 0, false, {
                                fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                lineNumber: 424,
                                columnNumber: 17
                            }, void 0),
                            sx: {
                                mb: 2
                            },
                            children: [
                                outOfStockItems.length > 0 && `${outOfStockItems.length} item(s) are out of stock. `,
                                lowStockItems.length > 0 && `${lowStockItems.length} item(s) are below minimum stock levels.`
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                            lineNumber: 420,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Tabs$2f$Tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            defaultValue: "all",
                            sx: {
                                borderRadius: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$TabList$2f$TabList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            value: "all",
                                            children: [
                                                "All Items (",
                                                inventoryItems.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                            lineNumber: 437,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            value: "out",
                                            color: "danger",
                                            children: [
                                                "Out of Stock (",
                                                outOfStockItems.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                            lineNumber: 438,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            value: "low",
                                            color: "warning",
                                            children: [
                                                "Low Stock (",
                                                lowStockItems.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                            lineNumber: 439,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            value: "good",
                                            color: "success",
                                            children: [
                                                "In Stock (",
                                                goodStockItems.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                            lineNumber: 440,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                    lineNumber: 436,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$TabPanel$2f$TabPanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    value: "all",
                                    children: renderInventoryTable(filteredItems('all'))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                    lineNumber: 443,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$TabPanel$2f$TabPanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    value: "out",
                                    children: renderInventoryTable(filteredItems('out'))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                    lineNumber: 447,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$TabPanel$2f$TabPanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    value: "low",
                                    children: renderInventoryTable(filteredItems('low'))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                    lineNumber: 451,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$TabPanel$2f$TabPanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    value: "good",
                                    children: renderInventoryTable(filteredItems('good'))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                                    lineNumber: 455,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                            lineNumber: 435,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
                    lineNumber: 381,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
            lineNumber: 355,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/manager-dash/inventory/page.tsx",
        lineNumber: 354,
        columnNumber: 5
    }, this);
}
_s(Inventory, "CoXiQc+AW0FyBBHCscHTlPI/gJg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"]
    ];
});
_c = Inventory;
var _c;
__turbopack_refresh__.register(_c, "Inventory");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/actions/restaurantActions.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "fetchAllRestaurants": (()=>fetchAllRestaurants),
    "fetchRestaurantComparison": (()=>fetchRestaurantComparison)
});
const fetchAllRestaurants = async ()=>{
    const response = await fetch('http://localhost:3001/restaurants');
    if (!response.ok) throw new Error('Failed to fetch restaurants');
    return response.json();
};
const fetchRestaurantComparison = async (restaurantIds)=>{
    const response = await fetch('http://localhost:3001/restaurants/compare', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            restaurantIds
        })
    });
    if (!response.ok) throw new Error('Failed to fetch restaurant comparison data');
    return response.json();
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/manager-dash/compare/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>RestaurantViewPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$manager$2d$dash$2f$inventory$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/manager-dash/inventory/page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$restaurantActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/actions/restaurantActions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Tabs$2f$Tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tabs$3e$__ = __turbopack_import__("[project]/node_modules/@mui/joy/Tabs/Tabs.js [app-client] (ecmascript) <export default as Tabs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$TabList$2f$TabList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TabList$3e$__ = __turbopack_import__("[project]/node_modules/@mui/joy/TabList/TabList.js [app-client] (ecmascript) <export default as TabList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tab$3e$__ = __turbopack_import__("[project]/node_modules/@mui/joy/Tab/Tab.js [app-client] (ecmascript) <export default as Tab>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$TabPanel$2f$TabPanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TabPanel$3e$__ = __turbopack_import__("[project]/node_modules/@mui/joy/TabPanel/TabPanel.js [app-client] (ecmascript) <export default as TabPanel>");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
// Temporary component until the real one is implemented
const PrepProcessView = ({ restaurantId })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Prep Process View"
            }, void 0, false, {
                fileName: "[project]/src/app/manager-dash/compare/page.tsx",
                lineNumber: 12,
                columnNumber: 5
            }, this),
            restaurantId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "Viewing prep processes for restaurant ID: ",
                    restaurantId
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/manager-dash/compare/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Please select a restaurant to view prep processes."
            }, void 0, false, {
                fileName: "[project]/src/app/manager-dash/compare/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/manager-dash/compare/page.tsx",
        lineNumber: 11,
        columnNumber: 3
    }, this);
_c = PrepProcessView;
// Temporary component until the real one is implemented
const PerformanceView = ({ restaurantId })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Performance Metrics View"
            }, void 0, false, {
                fileName: "[project]/src/app/manager-dash/compare/page.tsx",
                lineNumber: 24,
                columnNumber: 5
            }, this),
            restaurantId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "Viewing performance metrics for restaurant ID: ",
                    restaurantId
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/manager-dash/compare/page.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Please select a restaurant to view performance metrics."
            }, void 0, false, {
                fileName: "[project]/src/app/manager-dash/compare/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/manager-dash/compare/page.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, this);
_c1 = PerformanceView;
function RestaurantViewPage() {
    _s();
    const [selectedRestaurant, setSelectedRestaurant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Fetch all restaurants the user has access to
    const { data: restaurants = [], isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'restaurants'
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$restaurantActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAllRestaurants"]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4",
                children: "Restaurant Dashboard"
            }, void 0, false, {
                fileName: "[project]/src/app/manager-dash/compare/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold mb-2",
                        children: "Select a Restaurant"
                    }, void 0, false, {
                        fileName: "[project]/src/app/manager-dash/compare/page.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "Loading restaurants..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/manager-dash/compare/page.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 flex-wrap",
                        children: restaurants.map((restaurant)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedRestaurant(restaurant.restaurantId),
                                className: `px-4 py-2 rounded ${selectedRestaurant === restaurant.restaurantId ? 'bg-blue-500 text-white' : 'bg-gray-200'}`,
                                children: restaurant.restaurantName
                            }, restaurant.restaurantId, false, {
                                fileName: "[project]/src/app/manager-dash/compare/page.tsx",
                                lineNumber: 54,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/manager-dash/compare/page.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/manager-dash/compare/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            selectedRestaurant && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 p-4 bg-blue-50 rounded-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-semibold",
                    children: [
                        "Currently Viewing: ",
                        restaurants.find((r)=>r.restaurantId === selectedRestaurant)?.restaurantName
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/manager-dash/compare/page.tsx",
                    lineNumber: 73,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/manager-dash/compare/page.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Tabs$2f$Tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tabs$3e$__["Tabs"], {
                defaultValue: "inventory",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$TabList$2f$TabList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TabList$3e$__["TabList"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tab$3e$__["Tab"], {
                                value: "inventory",
                                children: "Inventory"
                            }, void 0, false, {
                                fileName: "[project]/src/app/manager-dash/compare/page.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tab$3e$__["Tab"], {
                                value: "prep",
                                children: "Preparation Processes"
                            }, void 0, false, {
                                fileName: "[project]/src/app/manager-dash/compare/page.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tab$3e$__["Tab"], {
                                value: "performance",
                                children: "Performance Metrics"
                            }, void 0, false, {
                                fileName: "[project]/src/app/manager-dash/compare/page.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/manager-dash/compare/page.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$TabPanel$2f$TabPanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TabPanel$3e$__["TabPanel"], {
                        value: "inventory",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$manager$2d$dash$2f$inventory$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            restaurantId: selectedRestaurant
                        }, void 0, false, {
                            fileName: "[project]/src/app/manager-dash/compare/page.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/manager-dash/compare/page.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$TabPanel$2f$TabPanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TabPanel$3e$__["TabPanel"], {
                        value: "prep",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PrepProcessView, {
                            restaurantId: selectedRestaurant
                        }, void 0, false, {
                            fileName: "[project]/src/app/manager-dash/compare/page.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/manager-dash/compare/page.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$joy$2f$TabPanel$2f$TabPanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TabPanel$3e$__["TabPanel"], {
                        value: "performance",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PerformanceView, {
                            restaurantId: selectedRestaurant
                        }, void 0, false, {
                            fileName: "[project]/src/app/manager-dash/compare/page.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/manager-dash/compare/page.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/manager-dash/compare/page.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/manager-dash/compare/page.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(RestaurantViewPage, "CsXpketsiTQ+WwXdrTeCkfolL50=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c2 = RestaurantViewPage;
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "PrepProcessView");
__turbopack_refresh__.register(_c1, "PerformanceView");
__turbopack_refresh__.register(_c2, "RestaurantViewPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/manager-dash/compare/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_app_56e5b2._.js.map