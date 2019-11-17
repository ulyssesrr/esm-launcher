# esm-launcher
Launch commands with ESM preloaded, thus adding support to ES Modules (ie: import/export).

Useful when the command to be launched runs custom code, like code generators such as [Hygen](https://hygen.io).

## Installation
```shell
npm install -g esm-launcher
```

## Hygen Example

```shell
esm-launcher hygen custom-generator-using-import-export new
```
