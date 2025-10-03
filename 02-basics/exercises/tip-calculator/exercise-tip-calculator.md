# Exercise: Tip Calculator Component

In this exercise, you'll build a tip calculator application that allows users to enter a bill amount, select from preset tip percentages, or enter a custom tip percentage. The app will display the calculated tip amount and total amount to pay.

## Starter Files

Create a new React project using Vite for this exercise.

We will use Bootstrap styles for this exercise. Add the latest CDN link to the `index.html` file. You may remove the other style sheets in the default files.

> If you prefer another CSS framework or want to write your own custom styles, feel free. This is about practicing with React, not a particular CSS framework. The solution code and video will use Bootstrap.

## Component Structure

Create three components for this application:

1. `TipCalculator`: This is the main component that manages the state and calculations.
2. `TipButton`: This renders a clickable button that can be assigned a preset percentage (e.g. 15, 20, 25).
3. `TipDisplay`: This displays the result of the calculation or a friendly message if the data is missing or invalid. It will default to displaying a prompt to enter the data.

You will use props to pass values from `TipCalculator` to the other components.

## Instructions

### Setup Your Main Component

Create a React component called `TipCalculator`. This will be your main component that manages all the state and calculations.

### Manage Component State

Your `TipCalculator` component will need to track this data:

- `billAmount`: the entered bill amount as a string.
- `tipPercentage`: the selected preset tip percentage (15, 20, or 25).
- `customTip`: the custom tip percentage entered by the user.

Use the `useState` hook to manage these three pieces of state.

### Build the Input Structure

Create a responsive layout with these sections:

- **Bill Amount Input**: A number input. It's `value` should be bound to the `billAmount` and its `onChange` event should invoke the `setBillAmount` state method.
- **Preset Tip Buttons**: Add three `TipButton` components and assign a percentage and `onClick` handler. Also keep track of which button is selected and add a custom style based on whether it is selected.
- **Custom Tip Input**: A number input for a whole number percentage (e.g. 5, 7, 12).
- **Results Display**: Shows the calculated tip and total amounts.

Consider using Bootstrap classes like `card`, `input-group`, `input-group-text`, and `form-control` for styling.

### Implement the Core Logic

#### Calculate Values

Parse the bill amount and determine which tip percentage to use:

- If a preset button is selected, use that percentage. Set the custom tip to an empty string to clear the input.
- If a custom tip is entered, use that instead. Clear the preset tip percentage.
- Calculate the tip amount and total amount based on these values.

#### Handle User Interactions

Create two handler functions:

- `handlePresetTip(percentage)`: Sets the preset tip and clears custom input. Bind this to each preset button component, passing in the preset percentage value. Remember to wrap the function call in an anonymous () => function in the component so you can pass the percentage as an argument!
- `handleCustomTip(value)`: Sets the custom tip and clears preset selection.

### Create Child Components

Pass the necessary information from the tip calculator component to its children so that they can handle their own functionality.

#### TipButton Component

Create a `TipButton` component that:

- Accepts `percentage`, `isSelected`, and `onClick` as props.
- Renders a button that changes appearance when selected.
- Consider using Bootstrap classes like `btn-primary` and `btn-outline-primary`.

#### TipDisplay Component

Create a `TipDisplay` component that:

- Accepts `bill`, `percentage`, `tipAmount`, and `totalAmount` as props.
- Shows the calculation results when valid data is provided.
- Displays helpful messages when data is missing or invalid.
- Uses Bootstrap alert classes for styling.

### Implement Conditional Rendering

In your `TipDisplay` component, show different content based on the state:

- **Valid data**: Display tip amount, total amount, and calculation summary.
- **Missing data**: Show helpful messages guiding the user to enter required information.

## Sample Output

When complete, your interface should have all the functionality in the instructions. If you're using Bootstrap, go for a look similar to this:

![](../../_assets/tip-calculator-exercise/solution-rendered.png)

![](../../_assets/tip-calculator-exercise/solution-rendered-2.png)