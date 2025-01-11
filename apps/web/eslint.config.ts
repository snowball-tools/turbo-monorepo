import {
  getBaseConfig,
  getImportAliasConfig,
  getTypeScriptConfig,
} from "@snowball-tools/eslint-config";

export default [
  ...getBaseConfig("web"),
  ...getImportAliasConfig(),
  ...getTypeScriptConfig(),
];
