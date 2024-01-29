# Timeloop - Back-end

Welcome to the back-end repository of Timeloop. This repository contains the code for the back-end of the Timeloop application. The back-end is written in Python using the Flask framework.

## Table of contents

- [Installation](#installation)
  - [Requirements](#requirements)
  - [Getting Started](#getting-started)
- [Git Workflow](#git-workflow)
  - [Branch Naming](#branch-naming)
  - [Commit Messages](#commit-messages)
  - [Git Pull/Push](#git-pullpush)
  - [Pull/Merge Requests](#pullmerge-requests)
- [Code Editor](#code-editor)
  - [Required Extensions](#required-extensions)
  - [Optional Extensions](#optional-extensions)
- [Guidelines](#guidelines)
  - [Python](#python)
  - [SQL](#sql)
- [Testing](#testing)
- [Deployment](#deployment)
- [OS Reccomendations](#os-reccomendations)
- [Terminal Reccomendations](#terminal-reccomendations)

## Installation

### Requirements

- Python 3.10 or higher - [Download here](https://www.python.org/downloads/)
- MySQL 8.0 or higher - [Download here](https://dev.mysql.com/downloads/mysql/)
- Git 2.33 or higher - [Download here](https://git-scm.com/downloads)
- Venv 20.25 or higher - [Download here](https://pypi.org/project/virtualenv/)

### Getting Started

To get started with the back-end, please be sure to have the requirements installed. After that initialize a new virtual environment by running the following command:

```bash
python<version> -m venv <virtual-environment-name>
```

Where `<version>` is the version of Python you have installed and `<virtual-environment-name>` is the name of the virtual environment you want to create. It is recommended to name the virtual environment `venv`.

After initializing the virtual environment, activate it by running the following command:

```bash
source <virtual-environment-name>/bin/activate
```

Where `<virtual-environment-name>` is the name of the virtual environment you created in the previous step.

> Note that to activate your virtual environment on Widows, you will need to run the following code below:
>
>```bash
>env/Scripts/activate.bat //In CMD
>env/Scripts/Activate.ps1 //In Powershel
>```

Now, clone the repository by running the following command:

```bash
git clone <repository-url>
```

After cloning the repository, you can install the required packages by running the following command:

```bash
pip install -r requirements.txt
```

Set the following environment variables inside a `.flaskenv` file:

- `FLASK_APP` - The name of the application. This should be set to `app.py`.
- `FLASK_ENV` - The environment in which the application is running. This should be set to `development` when running the application locally.
- `FLASK_DEBUG` - Whether or not to enable debug mode. This should be set to `1` when running the application locally.

Now, set the following environment variables inside a `.env` file:

- `MYSQL_HOST` - The host of the MySQL database. Defaults to `localhost`.
- `MYSQL_PORT` - The port of the MySQL database. Defaults to `3306`.
- `MYSQL_USER` - The username of the MySQL database. Defaults to `None`.
- `MYSQL_PASSWORD` - The password of the MySQL database. Defaults to `None`.
- `MYSQL_DB` - The name of the MySQL database. Defaults to `None`.

The `.env` file should be created in the root directory of the project. All the environment variable values will be provided by the project leader in a secure way.

Now, you can run the server by running the following command:

```bash
flask run
```

The server will run on port 5000 by default. You can change this in your own `.flaskenv` file by adding the following line:

```bash
FLASK_RUN_PORT=<port-number>
```

Where `<port-number>` is the port number you want to use.

## Git Workflow

We will be using the [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) for this project. This means that we will have two main branches: `main` and `dev`. The `main` branch will contain the latest stable version of the application, while the `dev` branch will contain the latest changes that are being worked on.

When you want to work on a new feature, you should create a new branch from the `dev` branch. For example, if you want to work on a feature called `login`, you should create a new branch called `feature/login` from the `dev` branch. Once you are done working on the feature, you should create a merge request to merge your changes into the `dev` branch. Once the merge request is approved, your changes will be merged into the `dev` branch.

When we are ready to release a new version of the application, we will create a new branch called `release/<version>` from the `dev` branch. For example, if we want to release version `1.0.0`, we will create a new branch called `release/1.0.0` from the `dev` branch. Once we are done working on the release, we will create a merge request to merge the changes into the `main` branch. Once the merge request is approved, the changes will be merged into the `main` branch and a new version of the application will be released.

For this project, we won't be using hotfixes, so we won't be creating any branches called `hotfix/<version>`.

![Gitflow Workflow Example Diagram](https://i.ibb.co/ZSLwkXV/gitflow-example.jpg)

### Branch Naming

For this project, we will be using the following branch naming convention:

- `feature/<name>` for new features
- `release/<version>` for releases

### Commit Messages

For this project, we won't be using any specific commit message format. However, it is encouraged that your commit messages are descriptive and follow the [Seven Rules of a Great Git Commit Message](https://chris.beams.io/posts/git-commit/#seven-rules).

### Git Pull/Push

For this project, we will follow good practices when it comes to pulling and pushing changes to the repository. This means that we will always pull before pushing and we will always push to the correct branch.

Example:

```bash
# Pull changes from the remote repository
git pull

# Push changes to the remote repository
git push origin <branch-name>
```

Where `<branch-name>` is the name of the branch you want to push to.

### Pull/Merge Requests

For this project, we will be using [GitLab](https://gitlab.com/) for hosting the repository. This means that we will be using [Merge Requests](https://docs.gitlab.com/ee/user/project/merge_requests/) instead of [Pull Requests](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) for code reviews.

Each merge request should have a title and a description. The title should be descriptive and the description should explain what changes were made and why. If the merge request is related to an issue, you should also include a link to the issue in the description.

## Code Editor

For this project, it is recommended to use [Visual Studio Code](https://code.visualstudio.com/) as the code editor. This is because it has a lot of useful extensions that will help you with your development.

If you don't want to use Visual Studio Code, you can use any other code editor that you want. However, you will need to install the equivalent extensions for your code editor.

### Required Extensions

- [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) for Python support.
- [Pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance) for Python language server support.

### Optional Extensions

- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) (optional) for highlighting errors in the editor.
- [Error Gutters](https://marketplace.visualstudio.com/items?itemName=IgorSbitnev.error-gutters) (optional) for displaying errors in the gutter.
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) (optional) for Git visualization and code annotation.
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) (optional) for AI-powered code suggestions.

## Guidelines

### Python

For this project, we will be using [PEP 8](https://www.python.org/dev/peps/pep-0008/) as the style guide for Python code. This means that we will be using [snake_case](https://en.wikipedia.org/wiki/Snake_case) for variable and function names and [CamelCase](https://en.wikipedia.org/wiki/Camel_case) for class names.

### SQL

For this project, we will be using [SQL Style Guide](https://www.sqlstyle.guide/) as the style guide for SQL code. This means that we will be using [snake_case](https://en.wikipedia.org/wiki/Snake_case) for table and column names.

## Testing

For this project, we will be using [Thunder Client](https://www.thunderclient.io/) for testing the API endpoints. This means that we will be using [Thunder Client](https://www.thunderclient.io/) to send requests to the API endpoints and check if the responses are correct.

## Deployment

For this project, we are still exploring the different options for deployment. We will update this section once we have decided on a deployment method.

## OS Reccomendations

There are no limitations on the OS you can use for this project. However, it is recommended to use **Linux** or **MacOS** instead of **Windows**.

## Terminal Reccomendations

Since the whole team is not fully familiarized with the terminal, you can use the following tools to make your life easier:

It is recommended to use zsh instead of bash, since it has a lot of useful features that will make your life easier. However, you can use bash if you want.

If you are using **MacOS**, you can use [Warp](https://warp.dev/) instead of the default terminal.

If you decide to use **zsh**, you can use [Oh My Zsh](https://ohmyz.sh/) to have a better terminal experience.

To enhance the look of your terminal, you can use [Powerlevel10k](https://github.com/romkatv/powerlevel10k) to have a better looking terminal.

Detailed instructions on how to install and configure these tools is available [here - Oh My Zsh + Powerlevel10k](https://dev.to/abdfnx/oh-my-zsh-powerlevel10k-cool-terminal-1no0).
