# Timeloop - Front-end

Welcome to the front-end of Timeloop! This is a React application that uses Vite as a bundler. It is written in JavaScript and uses Tailwind CSS for styling.

This README contains all the information you need to get started with the project. It also contains some guidelines that you should follow when working on the project. Please read it carefully before starting to work on the project.

If you have any questions, please open an issue and ask your question there. You can also ask your question in the WhatsApp group.

This README is only intended for the developent process. Once the project is finished, this README will be archived and a new README will be created for the production version of the project.

## Table of Contents

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
  - [Code Style](#code-style)
    - [ESLint](#eslint)
    - [Prettier](#prettier)
  - [Code Structure](#code-structure)
  - [Components](#components)
    - [What is a Component?](#what-is-a-component)
    - [Component Structure](#component-structure)
    - [Atoms](#atoms)
    - [Molecules](#molecules)
    - [Organisms](#organisms)
    - [Templates](#templates)
    - [Pages](#pages)
  - [Env Variables and Modes](#env-variables-and-modes)
  - [Styling](#styling)
  - [Assets](#assets)
    - [Images](#images)
    - [Illustrations](#illustrations)
    - [Videos](#videos)
    - [Fonts](#fonts)
    - [Icons](#icons)
    - [Colors](#colors)
  - [Utility Functions / Helpers](#utility-functions--helpers)
  - [Custom Hooks](#custom-hooks)
    - [useFetch](#usefetch)
      - [Key Parameters](#key-parameters)
      - [Returned Values](#returned-values)
      - [Additional Notes](#additional-notes)
      - [Example Usage](#example-usage)
- [Testing](#testing)
  - [Thunder Client](#thunder-client)
- [Deployment](#deployment)
- [OS Reccomendations](#os-reccomendations)
- [Terminal Reccomendations](#terminal-reccomendations)

## Requirements

- [Node.js](https://nodejs.org/en/) (LTS version)
- [npm](https://www.npmjs.com/) (comes pre-installed with Node.js)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/) (recommended)

## Getting Started

To get started, first be sure to have **Node.js** installed. If you don't, you can download it [here](https://nodejs.org/en/).

> **IMPORTANT: Please install the LTS version, as it is the most stable.**

Once you have **Node.js** installed, you can proceed to clone this repository by running the following command:

```bash
git clone <repository-url>
```

Then, navigate to the `timeloop-frontend` directory:

```bash
cd timeloop-frontend
```

Once you are in the `timeloop-frontend` directory, run the following command to install all dependencies:

```bash
npm install
```

Finally, run the following command to start the development server:

```bash
npm run dev
```

If you want to run the development server exposing it to the network, run the following command instead:

```bash
npm run dev -- --host
```

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

For this project, it is recommended to use [Visual Studio Code](https://code.visualstudio.com/) as the code editor. This is because it has a lot of useful extensions that will help you with your development. However, you can use any other code editor that you want.

If you don't want to use Visual Studio Code, you can use any other code editor that you want. However, you will need to install the equivalent extensions for your code editor.

### Required Extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) (required) for code linting (see [Code Style](#code-style))
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) (required) for Tailwind CSS support.
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) (required) for code formatting (see [Code Style](#code-style))
- [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) (required) for testing the API connections.

### Optional Extensions

- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) (optional) for highlighting errors in the editor.
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) (optional) for Git visualization and code annotation.
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) (optional) for AI-powered code suggestions.

## Guidelines

### Code Style

For this project, we will be using the [Airbnb JavaScript Style Guide](https://airbnb.io/javascript/react/) for code style. This means that we will be using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) to enforce the code style.

#### ESLint

The ESLint configuration file is located at `.eslintrc.js`. You should not modify this file. If you feel like the ESLint configuration file should be modified, please open an issue and discuss it with the team.

Run the following command to lint the code:

```zsh
npm run lint
```

#### Prettier

This project does not have a Prettier configuration file. This is because we will be using the ESLint configuration file to configure Prettier. This means that we will be using ESLint to format the code. However, you can still use Prettier to format the code if you want.

### Code Structure

For this project, we will be using the [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) methodology for structuring the code. This means that we will be using the following folder structure:

![Atomic Design](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*k4zeD37QszdKJ1mnZVQW5Q.png)

- `src/Components/Atmos` for atoms (see [Components](#components))
- `src/Components/Molecules` for molecules (see [Components](#components))
- `src/Components/Organisms` for organisms (see [Components](#components))
- `src/Components/Templates` for templates (see [Components](#components))
- `src/Components/Pages` for pages (see [Components](#components))

### Components

#### What is a Component?

A component is a reusable piece of code that can be used to build the user interface. It can be a button, a form, a table, etc.

#### Component Structure

For this project, we will be using [React](https://reactjs.org/) for building the user interface. This means that we will be using [JSX](https://reactjs.org/docs/introducing-jsx.html) for writing the components.

Each component should be placed in its corresponding folder. For example, if you have a component called `Button`, you should place it in the `src/Components/Atoms` directory.

All components should be named using the [PascalCase](https://en.wikipedia.org/wiki/PascalCase) naming convention. For example, if you have a component called `Button`, you should name it `Button`.

The file extension for the components should be `.jsx`. For example, if you have a component called `Button`, you should place it in a file called `Button.jsx`.

If an specific component has a custom stylesheet, a folder should be created for that component. For example, if you have a component called `Button` and it has a custom stylesheet, you should place the component in a folder called `Button`. The stylesheet should be named `Button.css` and it should be placed in the same folder as the component. The component should be placed in a file called `Button.jsx` and it should be placed in the same folder as the stylesheet.

All components should be placed in the `src/Components` directory. You should not place the components directly in the `src` directory, except for the `main.jsx` file.

#### Atoms

Atoms represent the most basic interface elements. They’re the foundation and supporting structure of an interface — Some examples: Buttons, icons, text styles, colour palette etc. Consider them like lego pieces, there’s no way to break atoms down any further.

![Atoms](https://miro.medium.com/v2/resize:fit:4800/format:webp/1*ztrfSkeRUdyMCy-7dYtbPA.png)

#### Molecules

Molecules are groups of atoms bonded together that have their own unique features. They make relatively simple functions together as one. See the example below, it is a group of atoms — a form label, search input field and a button.

![Molecules](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*SXgAq9sW-zJrcJkKpzCrrw.png)

#### Organisms

Organisms are relatively more complicated components, composed of groups of molecules and atoms. These organisms can function on their own, forming distinct sections of an interface. Some examples are navigation, footer, sidebars, forms, etc.

Below shows a search field (a molecule) inside the navigation of a website (organism).

![Organisms](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*jPZkHdwge5tZ8kvbgsJSZQ.png)

#### Templates

Templates are the next level of atomic design; we can think of them as blank pages that express the design’s content structure. They’re wireframes.

The purpose is to establish the links between the organisms and other components by arranging them on the page in a certain order, but without using any styles or data.

We can now add the navigation (organism) from our previous example to our homepage template.

![Templates](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*kApyCR4Iv4oZcfBcqpFEsw.png)

#### Pages

Here is when we take those wireframes and build on them. It’s time to add all the final details. Templates are gradually removed to make way for actual pages that people may interact with.

![Pages](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*omjXOqQpR7rZtRW22YJRFQ.png)

### Env Variables and Modes

For this project, we will be using [dotenv](https://www.npmjs.com/package/dotenv) for managing environment variables. This means that we will be using a `.env` file to store the environment variables. However, Vite already supports environment variables out of the box, so we will be using the `.env` file only for development. For production, we will be using the [Vercel](https://vercel.com/) dashboard to manage the environment variables.

The `.env` file should be placed in the root directory of the project. It should not be committed to the repository.

The `.env` file should contain the following environment variables:

- `VITE_APP_NAME` for the name of the application
- `VITE_APP_DESCRIPTION` for the description of the application
- `VITE_BASE_URL` for the base URL of the application (without the trailing slash)
- `VITE_API_URL` for the base URL of the API and the version (without the trailing slash)
- `VITE_API_KEY` for the API key
- `VITE_TOKEN_NAME` for the name of the token that handles user authentication

These environment variables can change during the development process. You'll be notified when they change.

When running the application in development mode, the `.env.local` file will be used. When running the application in production mode, the `.env` file will be used. Please create the `.env.local` file by copying the `.env.example` file and renaming it to `.env.local`. You should not commit the `.env.local` file to the repository, since it contains sensitive information. You are allowed to use secrets management tools like [1Password](https://1password.com/) to store the secrets. However, you should not commit the secrets to the repository.

> **IMPORTANT: Please do not commit the `.env` file to the repository.**
> **IMPORTANT: Please do not commit the `.env.local` file to the repository.**

By default, the .gitignore file is configured to ignore the `.env` and `.env.local` files.

For deployment, we will be using [Vercel](https://vercel.com/). This means that we will be using [Vercel](https://vercel.com/) to manage the environment variables. The environment variables will be stored in the [Vercel](https://vercel.com/) dashboard.

Please refer to the `.env.example` file for an example of how the .env file should look like.

### Styling

For this project, we will be using [Tailwind CSS](https://tailwindcss.com/) for styling.

The Tailwind CSS configuration file is located at `tailwind.config.js`. You can use this file to configure Tailwind CSS.

The Tailwind CSS stylesheets are located at `src/index.css`. You can use these stylesheets to add custom styles.

For more information on how to use Tailwind CSS, please refer to the [Tailwind CSS Documentation](https://tailwindcss.com/docs).

You are allowed to use existing Tailwind CSS components. I recommend using [Tailwind UI](https://tailwindui.com/) for this. However, you can also refer to [Flowbite](https://flowbite.com/) for more components. Remember to always use the [Tailwind CSS Documentation](https://tailwindcss.com/docs) as a reference and ensure that the components are appropriate for the project design.

### Assets

#### Images

For this project, we will be using [Unsplash](https://unsplash.com/) for images. You can also use [Pexels](https://www.pexels.com/) if you want. However, you should be aware of the license of the images you are using. You should follow the [Unsplash License](https://unsplash.com/license) and the [Pexels License](https://www.pexels.com/license/) when using images from these websites. You are not required to credit the author of the image, but you are encouraged to do so. You can credit the author of the image by adding a comment above the image. For example:

```html
<!-- Photo by John Doe on Unsplash -->
<img src="..." alt="..." />
```

All the images on Unsplash and Pexels are available different sizes. You should download the images in the appropriate size for the project. For example, if you have an image that is 1920x1080, you should download it in 1920x1080. You should not download the image in 4K if you are not going to use it in 4K. This is because the image will be larger in size and will take longer to load.

These files should be placed in the `src/assets/images` directory. You should not place the images directly in the `src/assets` directory. The images should be renamed during download. The name of the image is up to you, but it should be descriptive. The naming convention for the images is the following: `image-name.jpg`. For example, if you have an image called `Teamwork`, you should name it `teamwork.jpg`.

If you download multiple sizes of the same image, you should place them in the same directory. For example, if you have an image called `Teamwork`, you should place the different sizes in the `src/assets/images/teamwork` directory. The naming convention for the different sizes is the following: `image-name-size.jpg`. For example, if you have an image called `Teamwork` and you have two sizes, you should name them `teamwork-1920x1080.jpg` and `teamwork-3840x2160.jpg`.

After downloading the images, you should compress them and optimize them for the web. You can use [Squoosh](https://squoosh.app/) for this. However, you can use any other tool that you want like [TinyPNG](https://tinypng.com/).

All the images should be in WEBP format. This is because WEBP is a modern image format that is supported by all modern browsers. You should not use PNG or JPG for images. These formats are outdated and should not be used. You should also not use SVG for images. This is because SVG is a vector format and it is not suitable for images. You should use SVG only for illustrations.

After optimizing the images, and converting them to WEBP, you should delete the original images. This is because we don't want to have duplicate images in the repository.

> **IMPORTANT: Please ONLY use WEBP for images, and delete the original images after converting them to WEBP.**

```jsx
import Teamwork from "../assets/images/teamwork.jpg";
```

And then used like this:

```jsx
<img src={ Teamwork } alt="..." />
```

#### Illustrations

For illustrations, you can use [Undraw](https://undraw.co/). All the illustrations on Undraw are OpenSource and you do not need to worry about licensing.

All the illustrations on Undraw are available in SVG format. You should use SVG instead of PNG or JPG for illustrations. This is because SVG is a vector format and it scales better than PNG or JPG. These files should be placed in the `src/assets/illustrations` directory. You should not place the illustrations directly in the `src/assets` directory.

The illustrations should be renamed during download. The name of the illustration should be the name of the illustration on Undraw. The naming convention for the illustrations is the following: `illustration-name.svg`. For example, if you have an illustration called `Teamwork`, you should name it `teamwork.svg`.

Illustrations should be imported using the following syntax:

```jsx
import Teamwork from "../assets/illustrations/teamwork.svg";
```

And then used like this:

```jsx
<img src={ Teamwork } alt="..." />
```

or like this:

```jsx
<svg>
  <use xlinkHref={ Teamwork } />
</svg>
```

#### Videos

Videos are not allowed for this project.

#### Fonts

For this project, we will be using [Google Fonts](https://fonts.google.com/) for fonts. All the Google Fonts are OpenSource and you do not need to worry about licensing.

When importing fonts from Google Fonts, you should use the [Google Fonts API](https://developers.google.com/fonts/docs/css2) instead of downloading the fonts. This is because the fonts are already hosted on Google Fonts and you don't need to download them.

You must no import fonts using the `@import` rule. Instead, you should use the `link` tag.

You should import the fonts in the `index.html` file. You should not import the fonts in the `index.css` file.

#### Icons

For this project, we will be using [Heroicons](https://heroicons.com/) for icons.

The `@heroicons/react` package is already installed, so you don't need to install it.

You can import the icons using the following syntax:

```jsx
import { IconName } from "@heroicons/react/solid";
```

Icons use an upper camel case naming convention and are always suffixed with the word `Icon`.

Explore the icons [here](https://heroicons.com/).

For more information on how to use Heroicons, please refer to the [Heroicons React Documentation](https://github.com/tailwindlabs/heroicons).

#### Colors

For this project, we will be using the [Tailwind CSS Color Palette](https://tailwindcss.com/docs/customizing-colors#color-palette-reference) for colors. This means that we will be using the colors defined in the Tailwind CSS configuration file.

If you need to add a new color, you should add it to the Tailwind CSS configuration file. You should not add the color directly to the stylesheet.

For more information on how to use colors in Tailwind CSS, please refer to the [Tailwind CSS Documentation](https://tailwindcss.com/docs/customizing-colors#color-palette-reference).

All color palettes should be approved by the front-end leader before being added to the Tailwind CSS configuration file.

### Utility Functions / Helpers

For this project, we will be using [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) for writing utility functions.

Each utility function should be placed in its own file. The file should be named after the utility function. For example, if you have a utility function called `formatDate`, you should place it in a file called `formatDate.js`.

All utility functions should be named using the [camelCase](https://en.wikipedia.org/wiki/Camel_case) naming convention. For example, if you have a utility function called `formatDate`, you should name it `formatDate`.

The file extension for the utility functions should be `.js`. For example, if you have a utility function called `formatDate`, you should place it in a file called `formatDate.js`.

All utility functions should be placed in the `src/Helpers` directory. You should not place the utility functions directly in the `src` directory.

### Custom Hooks

For this project, we will be using [React Hooks](https://reactjs.org/docs/hooks-intro.html) for writing custom hooks.

Each custom hook should be placed in its own file. The file should be named after the custom hook. For example, if you have a custom hook called `useFetch`, you should place it in a file called `useFetch.js`.

All custom hooks should be named using the [camelCase](https://en.wikipedia.org/wiki/Camel_case) naming convention. For example, if you have a custom hook called `useFetch`, you should name it `useFetch`.

The file extension for the custom hooks should be `.js`. For example, if you have a custom hook called `useFetch`, you should place it in a file called `useFetch.js`.

All custom hooks should be placed in the `src/Hooks` directory. You should not place the custom hooks directly in the `src` directory.

#### useFetch

For this project, there is already a custom hook called `useFetch` that is used for fetching data from the API. You should use this custom hook for fetching data from the API. You should not use the `fetch` function directly.

The `useFetch` custom hook is located at `src/Hooks/useFetch.js`. You should not modify this file. If you feel like the `useFetch` custom hook should be modified, please open an issue and discuss it with the team.

The `useFetch` custom hook is already configured to handle the API requests. You don't need to configure it. You can use it as is.

##### Key Parameters

- `url`: Required String. The URL of the API endpoint to fetch data from.
- `method`: Optional String. HTTP request method (default: "GET"). Can be "POST", "PUT", "DELETE", etc.
- `headers`: Optional Object. Custom headers to include in the request.

##### Returned Values

- `data`: Any. The fetched data, parsed as JSON by default.
- `loading`: Boolean. True while the request is in progress, false otherwise.
- `error`: Object or null. Any error object encountered during the request, or null if successful.
- `handleCancelRequest`: Function. Cancels the in-progress request if present.

##### Additional Notes

- The useEffect hook ensures the request runs only once on initial component render.
- The custom handleError logic in ErrorA's response is omitted, as it's more suitable for specific use cases than general documentation.
- The handleCancelRequest functionality and its return value are clarified.
- Error handling is improved by including the error.message in the error display when available.
- Explanations are made more concise and direct.

##### Example Usage

```jsx
import useFetch from "../Hooks/useFetch"; // Import the custom hook

function MyComponent() {
  const { data, loading, error, handleCancelRequest } = useFetch("https://api.example.com/data");

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
      <button onClick={handleCancelRequest}>Cancel Request</button>
    </div>
  );
}
```

## Testing

For this project, all the testing will be done manually. This means that we won't be using any automated testing tools like [Jest](https://jestjs.io/) or [Cypress](https://www.cypress.io/). Instead, we will be using [Thunder Client](https://www.thunderclient.com/) for testing the API endpoints.

### Thunder Client

For this project, we will be using [Thunder Client](https://www.thunderclient.com/) for testing the API endpoints manually. This means that we will be using the [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) extension for [Visual Studio Code](https://code.visualstudio.com/) to send requests to the API endpoints.

## Deployment

For this project, we will be using [Vercel](https://vercel.com/) for hosting the application. All the deployment will be done by the project leader using [Vercel CLI](https://vercel.com/docs/cli). Therefore, you don't need to worry about deployment.

## OS Reccomendations

There are no limitations on the OS you can use for this project. However, it is recommended to use **Linux** or **MacOS** instead of **Windows** since it has better support for web development.

## Terminal Reccomendations

Since the whole team is not fully familiarized with the terminal, you can use the following tools to make your life easier:

It is recommended to use zsh instead of bash, since it has a lot of useful features that will make your life easier. However, you can use bash if you want.

If you are using **MacOS**, you can use [Warp](https://warp.dev/) instead of the default terminal.

If you decide to use **zsh**, you can use [Oh My Zsh](https://ohmyz.sh/) to have a better terminal experience.

To enhance the look of your terminal, you can use [Powerlevel10k](https://github.com/romkatv/powerlevel10k) to have a better looking terminal. You can also use [Nerd Fonts](https://www.nerdfonts.com/) to have better looking icons.

Detailed instructions on how to install and configure these tools is available [here - Oh My Zsh + Powerlevel10k](https://dev.to/abdfnx/oh-my-zsh-powerlevel10k-cool-terminal-1no0).
