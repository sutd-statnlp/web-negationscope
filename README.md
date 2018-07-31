# Negation Scope Website
[![Build Status](https://travis-ci.org/sutd-statnlp/web-negationscope.svg?branch=master)](https://travis-ci.org/sutd-statnlp/web-negationscope)
[![codecov](https://codecov.io/gh/sutd-statnlp/web-negationscope/branch/master/graph/badge.svg)](https://codecov.io/gh/sutd-statnlp/web-negationscope)
[![dependencies Status](https://david-dm.org/sutd-statnlp/web-negationscope/status.svg)](https://david-dm.org/sutd-statnlp/web-negationscope)
[![devDependencies Status](https://david-dm.org/sutd-statnlp/web-negationscope/dev-status.svg)](https://david-dm.org/sutd-statnlp/web-negationscope?type=dev)
[![](https://images.microbadger.com/badges/image/statnlp/web-negationscope.svg)](https://microbadger.com/images/statnlp/web-negationscope)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/sutd-statnlp/web-negationscope/blob/master/LICENSE)

This demo is developed based on the paper of [Learning with Structured Representations for Negation Scope Extraction](https://github.com/leodotnet/negationscope).

## Installation

``` bash
# install dependencies
npm install

```

## Testing

``` bash
# run unit tests
npm run unit

# run all tests
npm test
```

## Build and Run

``` bash

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```

## Docker support

Build docker image

```
bash Dockerbuild.sh
```

Run docker container

```
docker run -d --name web-negationscope -p 8000:8000 statnlp/web-negationscope
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/sutd-statnlp/web-negationscope/tags).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
