
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    const importMap = {
      
        "@emotion/react": async () => {
          let pkg = await import("__mf__virtual/frontend_principal__prebuild___mf_0_emotion_mf_1_react__prebuild__.js")
          return pkg
        }
      ,
        "@emotion/styled": async () => {
          let pkg = await import("__mf__virtual/frontend_principal__prebuild___mf_0_emotion_mf_1_styled__prebuild__.js")
          return pkg
        }
      ,
        "@hookform/resolvers": async () => {
          let pkg = await import("__mf__virtual/frontend_principal__prebuild___mf_0_hookform_mf_1_resolvers__prebuild__.js")
          return pkg
        }
      ,
        "@mui/material": async () => {
          let pkg = await import("__mf__virtual/frontend_principal__prebuild___mf_0_mui_mf_1_material__prebuild__.js")
          return pkg
        }
      ,
        "@tanstack/react-query": async () => {
          let pkg = await import("__mf__virtual/frontend_principal__prebuild___mf_0_tanstack_mf_1_react_mf_2_query__prebuild__.js")
          return pkg
        }
      ,
        "axios": async () => {
          let pkg = await import("__mf__virtual/frontend_principal__prebuild__axios__prebuild__.js")
          return pkg
        }
      ,
        "react": async () => {
          let pkg = await import("__mf__virtual/frontend_principal__prebuild__react__prebuild__.js")
          return pkg
        }
      ,
        "react-dom": async () => {
          let pkg = await import("__mf__virtual/frontend_principal__prebuild__react_mf_2_dom__prebuild__.js")
          return pkg
        }
      ,
        "react-hook-form": async () => {
          let pkg = await import("__mf__virtual/frontend_principal__prebuild__react_mf_2_hook_mf_2_form__prebuild__.js")
          return pkg
        }
      ,
        "react-router-dom": async () => {
          let pkg = await import("__mf__virtual/frontend_principal__prebuild__react_mf_2_router_mf_2_dom__prebuild__.js")
          return pkg
        }
      ,
        "react-toastify": async () => {
          let pkg = await import("__mf__virtual/frontend_principal__prebuild__react_mf_2_toastify__prebuild__.js")
          return pkg
        }
      ,
        "zod": async () => {
          let pkg = await import("__mf__virtual/frontend_principal__prebuild__zod__prebuild__.js")
          return pkg
        }
      
    }
      const usedShared = {
      
          "@emotion/react": {
            name: "@emotion/react",
            version: "11.14.0",
            scope: ["default"],
            loaded: false,
            from: "frontend_principal",
            async get () {
              usedShared["@emotion/react"].loaded = true
              const {"@emotion/react": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^11.14.0"
            }
          }
        ,
          "@emotion/styled": {
            name: "@emotion/styled",
            version: "11.14.1",
            scope: ["default"],
            loaded: false,
            from: "frontend_principal",
            async get () {
              usedShared["@emotion/styled"].loaded = true
              const {"@emotion/styled": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^11.14.1"
            }
          }
        ,
          "@hookform/resolvers": {
            name: "@hookform/resolvers",
            version: "5.2.1",
            scope: ["default"],
            loaded: false,
            from: "frontend_principal",
            async get () {
              usedShared["@hookform/resolvers"].loaded = true
              const {"@hookform/resolvers": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^5.2.1"
            }
          }
        ,
          "@mui/material": {
            name: "@mui/material",
            version: "7.3.1",
            scope: ["default"],
            loaded: false,
            from: "frontend_principal",
            async get () {
              usedShared["@mui/material"].loaded = true
              const {"@mui/material": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^7.3.1"
            }
          }
        ,
          "@tanstack/react-query": {
            name: "@tanstack/react-query",
            version: "5.85.5",
            scope: ["default"],
            loaded: false,
            from: "frontend_principal",
            async get () {
              usedShared["@tanstack/react-query"].loaded = true
              const {"@tanstack/react-query": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^5.85.5"
            }
          }
        ,
          "axios": {
            name: "axios",
            version: "1.11.0",
            scope: ["default"],
            loaded: false,
            from: "frontend_principal",
            async get () {
              usedShared["axios"].loaded = true
              const {"axios": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^1.11.0"
            }
          }
        ,
          "react": {
            name: "react",
            version: "19.1.1",
            scope: ["default"],
            loaded: false,
            from: "frontend_principal",
            async get () {
              usedShared["react"].loaded = true
              const {"react": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^19.1.1"
            }
          }
        ,
          "react-dom": {
            name: "react-dom",
            version: "19.1.1",
            scope: ["default"],
            loaded: false,
            from: "frontend_principal",
            async get () {
              usedShared["react-dom"].loaded = true
              const {"react-dom": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^19.1.1"
            }
          }
        ,
          "react-hook-form": {
            name: "react-hook-form",
            version: "7.62.0",
            scope: ["default"],
            loaded: false,
            from: "frontend_principal",
            async get () {
              usedShared["react-hook-form"].loaded = true
              const {"react-hook-form": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^7.62.0"
            }
          }
        ,
          "react-router-dom": {
            name: "react-router-dom",
            version: "7.8.2",
            scope: ["default"],
            loaded: false,
            from: "frontend_principal",
            async get () {
              usedShared["react-router-dom"].loaded = true
              const {"react-router-dom": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^7.8.2"
            }
          }
        ,
          "react-toastify": {
            name: "react-toastify",
            version: "11.0.5",
            scope: ["default"],
            loaded: false,
            from: "frontend_principal",
            async get () {
              usedShared["react-toastify"].loaded = true
              const {"react-toastify": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^11.0.5"
            }
          }
        ,
          "zod": {
            name: "zod",
            version: "4.1.5",
            scope: ["default"],
            loaded: false,
            from: "frontend_principal",
            async get () {
              usedShared["zod"].loaded = true
              const {"zod": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^4.1.5"
            }
          }
        
    }
      const usedRemotes = [
                {
                  entryGlobalName: "http://localhost:5001/assets/remoteEntry.js",
                  name: "frontend_top_users",
                  type: "var",
                  entry: "http://localhost:5001/assets/remoteEntry.js",
                  shareScope: "default",
                }
          ,
                {
                  entryGlobalName: "http://localhost:5002/assets/remoteEntry.js",
                  name: "frontend_top_finance",
                  type: "var",
                  entry: "http://localhost:5002/assets/remoteEntry.js",
                  shareScope: "default",
                }
          
      ]
      export {
        usedShared,
        usedRemotes
      }
      