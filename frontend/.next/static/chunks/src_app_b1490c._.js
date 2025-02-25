(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_b1490c._.js", {

"[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>AdminManager)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Elements/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './EditModal'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './Modal'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
const API_URL = 'http://localhost:3000/managers';
function AdminManager() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const RESTAURANT_ID = 1;
    const [admins, setAdmins] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [deleteModal, setDeleteModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editModal, setEditModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedAdmin, setSelectedAdmin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [successModal, setSuccessModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminManager.useEffect": ()=>{
            const fetchManagers = {
                "AdminManager.useEffect.fetchManagers": async ()=>{
                    setLoading(true);
                    try {
                        const response = await fetch(`${API_URL}/${RESTAURANT_ID}`);
                        if (response.ok) {
                            const data = await response.json();
                            setAdmins(data);
                        } else {
                            console.error('Failed to fetch managers:', response.statusText);
                        }
                    } catch (error) {
                        console.error('Failed to fetch managers:', error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["AdminManager.useEffect.fetchManagers"];
            fetchManagers();
        }
    }["AdminManager.useEffect"], []);
    const handleEdit = async (updatedAdmin)=>{
        setLoading(true);
        try {
            const response = await fetch(`${API_URL}/${updatedAdmin.user_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedAdmin)
            });
            if (response.ok) {
                setAdmins(admins.map((admin)=>admin.user_id === updatedAdmin.user_id ? updatedAdmin : admin));
                setEditModal(false);
                setSuccessModal(true);
            } else {
                console.error('Failed to update manager:', response.statusText);
            }
        } catch (error) {
            console.error('Failed to update manager:', error);
        } finally{
            setLoading(false);
        }
    };
    const handleDelete = async (managerId)=>{
        setLoading(true);
        try {
            const response = await fetch(`${API_URL}/${managerId}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                setAdmins(admins.filter((admin)=>admin.user_id !== managerId));
                setDeleteModal(false);
                setSuccessModal(true);
            } else {
                console.error('Failed to delete manager:', response.statusText);
            }
        } catch (error) {
            console.error('Failed to delete manager:', error);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto mt-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold underline",
                        children: "VIEW ADMIN"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "CREATE NEW ADMIN",
                        onClick: ()=>router.push('/manager-dash/admin/add'),
                        style: {
                            backgroundColor: 'transparent',
                            color: 'black',
                            border: '1px solid black'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
                lineNumber: 118,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border rounded-lg overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-100 p-4 border-b",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold",
                            children: "Current Admins"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-b",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "p-4 text-left w-16",
                                            children: "ID"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
                                            lineNumber: 127,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "p-4 text-left",
                                            children: "Username"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
                                            lineNumber: 128,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "p-4 text-left",
                                            children: "Email"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
                                            lineNumber: 129,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "p-4 text-left",
                                            children: "Phone"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "p-4 text-left",
                                            children: "Role"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
                                            lineNumber: 131,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "p-4 text-left",
                                            children: "Status"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
                                            lineNumber: 132,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "p-4 text-right",
                                            children: "Actions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: admins.map((admin)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "border-b",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4",
                                                children: admin.user_id
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
                                                lineNumber: 139,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4",
                                                children: admin.username
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
                                                lineNumber: 140,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4",
                                                children: admin.email || '-'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
                                                lineNumber: 141,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4",
                                                children: admin.phone_number || '-'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
                                                lineNumber: 142,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4",
                                                children: admin.role
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
                                                lineNumber: 143,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `px-2 py-1 rounded-full text-sm ${admin.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`,
                                                    children: admin.status
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
                                                lineNumber: 144,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4 text-right space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        label: "EDIT",
                                                        onClick: ()=>{
                                                            setSelectedAdmin(admin);
                                                            setEditModal(true);
                                                        },
                                                        style: {
                                                            backgroundColor: 'white',
                                                            color: 'black',
                                                            border: '1px solid black'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        label: "DELETE",
                                                        onClick: ()=>{
                                                            setSelectedAdmin(admin);
                                                            setDeleteModal(true);
                                                        },
                                                        style: {
                                                            backgroundColor: 'white',
                                                            color: 'black',
                                                            border: '1px solid black'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
                                                lineNumber: 151,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, admin.user_id, true, {
                                        fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
                                        lineNumber: 138,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
                lineNumber: 120,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditModal, {
                admin: selectedAdmin,
                isOpen: editModal,
                onClose: ()=>setEditModal(false),
                onSave: handleEdit
            }, void 0, false, {
                fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
                isOpen: deleteModal,
                onClose: ()=>setDeleteModal(false),
                title: "Delete Admin?",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            label: "DELETE",
                            onClick: ()=>handleDelete(selectedAdmin?.user_id || 0),
                            style: {
                                backgroundColor: 'white',
                                color: 'black',
                                border: '1px solid black'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            label: "CANCEL",
                            onClick: ()=>setDeleteModal(false),
                            style: {
                                backgroundColor: 'white',
                                color: 'black',
                                border: '1px solid black'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
                            lineNumber: 206,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
                isOpen: successModal,
                onClose: ()=>setSuccessModal(false),
                title: selectedAdmin ? "Admin Updated" : "Update Success",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Elements$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "CLOSE",
                        onClick: ()=>setSuccessModal(false),
                        style: {
                            backgroundColor: 'white',
                            color: 'black',
                            border: '1px solid black'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
                        lineNumber: 224,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
                    lineNumber: 223,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/ManagerDash/AdminManager/AdminManager.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
_s(AdminManager, "BfbbTXBej6D9ZM7R7jsRIdbm8Nk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AdminManager;
var _c;
__turbopack_refresh__.register(_c, "AdminManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/manager-dash/admin/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_app_b1490c._.js.map