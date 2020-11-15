import type { PackageJson } from 'type-fest';

export type UpmPackageDependency = PackageJson.Dependency;

export interface UpmPackage {
  dependencies?: UpmPackageDependency;
  registry?: string;
  testables?: string[];
  disableProjectUpdate?: boolean;
  useSatSolver?: string;
  enableLockFile?: boolean;
}

export type LockFileEntry = Record<
  string,
  { version: string; integrity?: boolean }
>;

export interface LockFile {
  version: string;
  depth: number;
  source: string;
  dependencies: Record<string, string>;
  url?: string;
}
