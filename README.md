# axios-version-diff
Test axios behavior in 2 different versions

### Guide

1. Start 2 terminals. Set current working directories to be the following:

```shell
# terminal 1
cd axios-version-diff/0.26.0
# terminal 2
cd axios-version-diff/1.6.1
```

2. Create .env file in both folders: `0.26.0` and `1.6.1`.

In the .env file, set the following:

```shell
HOST=<your_host_name>
```

3. Run the following commands in both terminals

```shell
npm install
npm run dev
```