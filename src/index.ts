import { Typing } from "@saggitarius/typing";

// export interface PackageConfig {
//     name: string;
//     version: string;
//     main?: string;
//     index?: string;
// }

// export interface TypeScriptConfig {
//     compilerOptions?: {
//         rootDir?: string,
//         sourceRoot?: string,
//         outDir?: string,
//     };
// }

export interface Package {
    path: string;
    name: string;
    version: string;
    main?: string;
    distDir?: string;
    srcDir?: string;
}

export interface PackageRegistry {
    [name: string]: Package;
}
export namespace PackageRegistry {
    export const Type = Typing.type<PackageRegistry>("@saggitarius/package::PackageRegistry");
}
