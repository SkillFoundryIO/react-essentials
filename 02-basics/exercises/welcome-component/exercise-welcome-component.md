# Exercise: Create a Welcome Component

In this exercise, we will create a component from scratch and embed it in the `App.jsx` component. We will also use a component-level CSS class.

This exercise is a **code-along**, which means we will provide you with all the steps and code to complete it. This is about practicing the workflow, not coming up with components from scratch... yet!

Please follow the instructions carefully. If you get stuck, feel free to check out the solution video in the next course element.

## Step 1: Creating the Project

Create a new React project named `WelcomeComponent`, install the necessary packages, and run the project. Start by opening the terminal in your project folder and running the appropriate commands:

```bash
npm create vite@latest welcome-component -- --template react
cd welcome-component
npm install
npm run dev
```

You should be able to open your browser to the address provided (by default: localhost:5173).

## Step 2: Cleanup

Next, remove all the boilerplate code and artifacts from the project:

* The **vite.svg** image from `public\`.
* The `assets\` folder from `src\`
* `Readme.md` from the root folder.
* `index.css` and `App.css` from `src\`

Next, alter the contents of these files:

* In `index.html`, remove the Vite logo from the head and update the `<title>` element to "Welcome Exercise"
* In `main.jsx` remove the `import ./index.css` statement.
* In `App.jsx`, remove the `import { useState }`, `import reactLogo`, and `import viteLogo` statements as well as the code in the `App()` function. In the `return()` statement, put some placeholder HTML, like `<h1>Todo</h1>`.

When finished, your `index.html` file should look like this:

![](../../_assets/welcome-exercise/wel-index.png)

Your `App.jsx` file should look like this:

![](../../_assets/welcome-exercise/wel-app.png)

## Step 3: Creating the Welcome Component

While we could put the welcome component in the `src\` folder at the same level as `App` and `main`, let's create a subfolder, because this is what we would do in a larger project. Create a subfolder named `welcome` in the `src\` folder. You can do this with the VS Code interface or with the terminal.

Next, add two files to the `welcome\` folder: `Welcome.jsx` and `Welcome.css`.

When finished, your `src\` folder structure should look like this in VS Code:

```
src/
├── welcome/
│   ├── Welcome.jsx
│   └── Welcome.css
|   App.jsx
|   main.jsx
```

> When creating components, the component name should always be capitalized. Folders are usually created using lower-case letters.

### Adding JSX to the Welcome Component

Open the `Welcome.jsx` file. Let's add a `<div>` element with a header and a paragraph element. We will add a CSS class that we will create in a moment:

![](../../_assets/welcome-exercise/wel-comp.png)

Note that we use the `className` attribute instead of the `class` attribute in JSX because `class` is a reserved keyword in JavaScript. Additionally, placing the CSS file for the component in the same subdirectory makes it easier to import.

### Adding CSS

In the `Welcome.css` file, add some CSS styles to center the header and make things look a bit nicer overall:

![](../../_assets/welcome-exercise/wel-css.png)

> Feel free to create more beautiful styles during this course! We are focused on keeping things functional and learning React.

## Step 4: Using the Welcome Component

To use our component, we must import it and then add it to the JSX of another component. Let's add it to our `App` component:

![](../../_assets/welcome-exercise/wel-app-2.png)

The `export default Welcome` statement in our component allows us to import it elsewhere easily. We provide the relative path from `App.jsx` to `Welcome.jsx`, and then can insert the component into the `return()` method.

Component names are always capitalized because this is how the React rendering engine distinguishes between HTML and JSX components. When the `App` component is rendered, each child component is also rendered, resulting in plain old HTML and JavaScript.

Switch over to your web browser and see the result!

![welcome-rendered](../../_assets/welcome-exercise/welcome-rendered.png)

You can follow the same steps to use the component anywhere in the application. Also, the component is reusable. Try editing your `App.jsx` file to look like this:

![](../../_assets/welcome-exercise/wel-app-3.png)

> Note that we added the fragment `<></>` to ensure our three elements were nested and the root is only a single element, as React requires.

Just like functions in regular applications, React components can be reused! Although it is unlikely that we would reuse this particular component in this manner, it effectively demonstrates the concept. If we save the file and check the browser, we can see the component was repeated three times:

![](../../_assets/welcome-exercise/welcome-rendered-2.png)

## Troubleshooting and Common Issues

Application not working? Check these things:

**Is the application running?**

Check the terminal. Forgetting to `npm run dev` is a common beginner mistake, especially if you're coming back to a project after taking a break.

**Styles aren't applying?**

Double-check that your import path in the component is correct. Verify that you're using the `className` attribute and referencing the correct CSS styles.

**Component Not Displaying?**

1. Check that your component name is capitalized in both the file name (`Welcome.jsx`) and the `import` statement.
2. Verify the import path is correct: `./welcome/Welcome` (relative to `App.jsx`).
3. Ensure you have `export default Welcome` at the end of your `Welcome.jsx` file.
4. If you see "Adjacent JSX elements must be wrapped," add React fragments (`<>` and `</>`) around multiple elements.

**Build Errors?**

For errors like "Module not Found", confirm that your file paths are correct and all files are saved. Syntax errors, such as missing semicolons or mismatched parentheses or brackets, can also prevent components from rendering.

If the development server stops working, try stopping it (`Ctrl + C` or `Cmd + C`) and running `npm run dev` again.

**Browser not updating?**

Hard refresh your browser (`Ctrl+F5` on Windows, `Cmd+Shift+R` on Mac). Double-check that your application is running in the terminal and that all files in the project are saved. Unsaved files will not trigger a hot reload.

> These troubleshooting steps aren't only for this exercise! They should be your standard approach as a React developer.

## Conclusion

The steps covered in this exercise are the process we will follow when creating all of our components. Using component-based CSS or global frameworks is a decision we will make, as well as whether to keep components in the root `src/` folder (ideal for small applications) or organize them into subfolders (ideal for larger applications). This is a design choice that depends on our team and environment.
