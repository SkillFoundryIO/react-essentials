# Exercise: Rectangle Area Calculator Component

In this exercise, you'll build two versions of a rectangle area calculator to understand the difference between event-driven and real-time calculations in React. The first version calculates the area when a button is clicked, while the second version updates the area automatically as the user types.

## Starter Files

We have provided starter code in the `exercises\area-calculator\start` folder. This will allow you to focus on wiring up the JSX components instead of HTML/CSS design. The starter code uses Bootstrap styles. You may replace this with a framework or custom CSS code if you like.

Your job is to add the React functionality.

## Instructions

Follow these steps to add the required functionality to both components.

### Step 1: Copy the Project

Copy the project from the `start` folder to a directory of your choice. In the project, locate the two React components:

- `RectangleCalculatorButton`: This component calculates the area when the button is clicked.
- `RectangleCalculatorLive`: This component automatically calculates the area when the inputs change.

The `App` component already includes the starter components.

### Step 2: Button-Triggered Calculator

Your `RectangleCalculatorButton` component will need to track:

- `length`: the entered length value as a string
- `width`: the entered width value as a string
- `area`: the calculated area (starts as null or 0)

Use the `useState` hook to manage these three pieces of state. Be sure to invoke each of the set methods in the button click handler, as multiple state setting calls in the same event handler are automatically batched, resulting in a single re-render instead of potentially three separate ones.

There is no need to add input validation or error handling. Focus only on the "happy path" for now.

### Step 3: Live Calculator

Your `RectangleCalculatorLive` component will need to track:

- `length` - the entered length value as a string
- `width` - the entered width value as a string

Note: You don't need a separate area state here since it will be calculated in real-time. Bind an event handler to the `onChange` attribute that reads the `value` from the input fields and automatically calculates the area. Again, no input validation is necessary.

## Hint: Using onChange()

While we can create named functions for the `onChange` events in our components, here is some shorthand syntax that calls the set function automatically when input is being entered:

```jsx
<input
  type="number"
  className="form-control"
  placeholder="Enter width"
  value={width}
  onChange={(e) => setWidth(e.target.value)}
/>
```

The components will re-render on each keystroke. For the button version, we don't care (but we still want React managing our state, so we add length and width updating `onChange`). However, for the live version, the component should attempt to perform the area calculation if possible.

Think of React state as your "single source of truth." When you put input values in the state with `value` and `onChange`, React always knows exactly what's in every input field. This means:

- **No hunting for values**: Instead of searching the DOM with `getElementById`, your data is right there in state variables.
- **Everything stays in sync**: If you need to clear inputs, set defaults, or validate data, you update the state, and all updates are consistently applied.
- **Easy to share data**: Other parts of your component can instantly access and react to what the user typed.
- **Predictable behavior**: You always know the state of your component, making debugging much easier.

It might feel like extra work at first, but once you get used to it, having all your data organized in state variables makes building interactive UIs much more straightforward than juggling DOM queries and trying to keep track of where everything is.

Additionally, when working with form fields in particular, a conflict can arise between the `value` attribute and the changed value, as updating the state triggers a re-render. However, it also means we should be careful about where we embed our form controls in the component hierarchy, as doing complex re-renders on each keystroke can lead to poor performance.