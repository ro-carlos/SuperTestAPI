<br/>
<p align="center">
  <a href="https://github.com/ro-carlos/SuperTestAPI">
    <img src="https://jestjs.io/img/opengraph.png" alt="Logo" width="200" height="100">
  </a>

  <h3 align="center">Challenge</h3>

  <p align="center">
    SuperTest Jest API Automation Framework
    <br/>
    <br/>
    <a href="https://github.com/ro-carlos/SuperTestAPI"><strong>Explore the docs »</strong></a>
    <br/>
    <br/>
  </p>
</p>

![Downloads](https://img.shields.io/github/downloads/ro-carlos/SuperTestAPI/total) ![Contributors](https://img.shields.io/github/contributors/ro-carlos/SuperTestAPI?color=dark-green) ![Issues](https://img.shields.io/github/issues/ro-carlos/SuperTestAPI) ![License](https://img.shields.io/github/license/ro-carlos/SuperTestAPI)

## Table Of Contents

- [About the Project](#about-the-project)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Authors](#authors)

## About The Project

![Screen Shot](https://drive.google.com/uc?export=view&id=1vFs_3K-ZepBrWIh-50SbDBndsoK4DE69)

This is an automation framework to run test cases using supertest and jest with javascript.

## Built With

Jest 29.7.0, SuperTest 7.0.0, Node 20.9.0, NPM 10.1.0

## Getting Started

You just need the Node and NPM on your local machine.

### Prerequisites

Install Node.

- node

_Check Node, please refer to the [Node Versions](https://nodejs.org/en/download)_

### Installation

1. Clone the repo

```sh
git clone https://github.com/ro-carlos/SuperTestAPI.git
```

2. Install Node Dependencies

```sh
npm install
```

## Usage

1. Run all tests in qa environment.

```sh
npm run test:qa
```

2. Run tests with @Smoke Annotation in qa.

```sh
npm run test:smoke:qa
```

3. Run tests with @Regression Annotation in prod.

```sh
npm run test:regresion:prod
```

4. Open jest report after execution.

```sh
npm run test:openreport
```

## Authors

- **Carlos Rodríguez** - _Software Engineer_ - [Carlos Rodríguez](https://github.com/ro-carlos/) - _Challenge_
