(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_00c171._.js", {

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
(()=>{
    const e = new Error("Cannot find module '@/app/components/Compare/InventoryView'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InventoryView, {
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

//# sourceMappingURL=src_app_00c171._.js.map