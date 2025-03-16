(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_b5164c._.js", {

"[project]/src/app/components/Compare/InventoryComparison.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>InventoryComparison)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
function InventoryComparison({ restaurantIds }) {
    _s();
    const [inventoryData, setInventoryData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Fetch inventory data for each restaurant
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InventoryComparison.useEffect": ()=>{
            const fetchInventoryData = {
                "InventoryComparison.useEffect.fetchInventoryData": async ()=>{
                    if (restaurantIds.length === 0) return;
                    setLoading(true);
                    setError(null);
                    try {
                        const data = {};
                        for (const restaurantId of restaurantIds){
                            const response = await fetch(`http://localhost:3001/ingredients/inventory/${restaurantId}`);
                            if (!response.ok) {
                                throw new Error(`Failed to fetch inventory for restaurant ${restaurantId}`);
                            }
                            const inventoryItems = await response.json();
                            // Transform data to match our InventoryItem interface
                            const formattedData = inventoryItems.map({
                                "InventoryComparison.useEffect.fetchInventoryData.formattedData": (item)=>{
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
                                        currentStock,
                                        minStock,
                                        maxStock: parseFloat(item.maxStock),
                                        unit: item.unit,
                                        status,
                                        category: 'Uncategorized'
                                    };
                                }
                            }["InventoryComparison.useEffect.fetchInventoryData.formattedData"]);
                            data[restaurantId] = formattedData;
                        }
                        setInventoryData(data);
                    } catch (error) {
                        console.error('Error fetching inventory data:', error);
                        setError(error instanceof Error ? error.message : 'Unknown error');
                    } finally{
                        setLoading(false);
                    }
                }
            }["InventoryComparison.useEffect.fetchInventoryData"];
            fetchInventoryData();
        }
    }["InventoryComparison.useEffect"], [
        restaurantIds
    ]);
    // Get all unique ingredients across all restaurants
    const allIngredients = Object.values(inventoryData).reduce((acc, items)=>{
        items.forEach((item)=>{
            if (!acc.some((i)=>i.name === item.name)) {
                acc.push(item);
            }
        });
        return acc;
    }, []);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading inventory data..."
        }, void 0, false, {
            fileName: "[project]/src/app/components/Compare/InventoryComparison.tsx",
            lineNumber: 104,
            columnNumber: 12
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-red-500",
            children: [
                "Error: ",
                error
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Compare/InventoryComparison.tsx",
            lineNumber: 108,
            columnNumber: 12
        }, this);
    }
    if (restaurantIds.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Please select at least one restaurant to compare."
        }, void 0, false, {
            fileName: "[project]/src/app/components/Compare/InventoryComparison.tsx",
            lineNumber: 112,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "w-full border-collapse",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        className: "bg-gray-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "border p-2 text-left",
                                children: "Ingredient"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Compare/InventoryComparison.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this),
                            restaurantIds.map((id)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "border p-2 text-left",
                                    children: [
                                        "Restaurant ",
                                        id
                                    ]
                                }, id, true, {
                                    fileName: "[project]/src/app/components/Compare/InventoryComparison.tsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Compare/InventoryComparison.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Compare/InventoryComparison.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: allIngredients.map((ingredient)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "hover:bg-gray-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "border p-2 font-medium",
                                    children: ingredient.name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Compare/InventoryComparison.tsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this),
                                restaurantIds.map((restaurantId)=>{
                                    const restaurantInventory = inventoryData[restaurantId] || [];
                                    const item = restaurantInventory.find((i)=>i.name === ingredient.name);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "border p-2",
                                        children: item ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `inline-block w-3 h-3 rounded-full mr-2 ${item.status === 'out' ? 'bg-red-500' : item.status === 'critical' ? 'bg-orange-500' : item.status === 'low' ? 'bg-yellow-500' : 'bg-green-500'}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Compare/InventoryComparison.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                item.currentStock,
                                                                " ",
                                                                item.unit
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/Compare/InventoryComparison.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/Compare/InventoryComparison.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-gray-500",
                                                    children: [
                                                        "Min: ",
                                                        item.minStock,
                                                        " ",
                                                        item.unit
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/Compare/InventoryComparison.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/Compare/InventoryComparison.tsx",
                                            lineNumber: 137,
                                            columnNumber: 23
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-400",
                                            children: "Not available"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Compare/InventoryComparison.tsx",
                                            lineNumber: 152,
                                            columnNumber: 23
                                        }, this)
                                    }, restaurantId, false, {
                                        fileName: "[project]/src/app/components/Compare/InventoryComparison.tsx",
                                        lineNumber: 135,
                                        columnNumber: 19
                                    }, this);
                                })
                            ]
                        }, ingredient.name, true, {
                            fileName: "[project]/src/app/components/Compare/InventoryComparison.tsx",
                            lineNumber: 128,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Compare/InventoryComparison.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Compare/InventoryComparison.tsx",
            lineNumber: 117,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Compare/InventoryComparison.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
_s(InventoryComparison, "z7nzgfM0/4C6QfE/DQrj6jkHFGU=");
_c = InventoryComparison;
var _c;
__turbopack_refresh__.register(_c, "InventoryComparison");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Compare$2f$InventoryComparison$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Compare/InventoryComparison.tsx [app-client] (ecmascript)");
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
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Compare$2f$InventoryComparison$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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

//# sourceMappingURL=src_app_b5164c._.js.map