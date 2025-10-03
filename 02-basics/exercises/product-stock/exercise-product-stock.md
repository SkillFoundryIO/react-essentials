# Exercise: Product Inventory Component

In this exercise, you'll build a product inventory stock component that displays a list of products in a table format. Each product will have a status indicator that changes color based on the current stock level.

## Starter Files

Create a new React project using Vite for this exercise.

We have provided sample data in the `exercises\product-stock\start\sampleData.js` file.

We will use Bootstrap styles for this exercise. Add the latest CDN link to the `index.html` file. You may remove the other style sheets in the default files.

> If you prefer another CSS framework or want to write your own custom styles, feel free. This is about practicing with React, not a particular CSS framework. The solution code and video will use Bootstrap.

## Instructions

Follow these steps to complete the exercise.

### Setup Your Component

Create a new React component called `ProductInventory`. Import the `products` array from the sample data file.

### Build the Table Structure
Create a responsive table with these columns:
- ID
- Product Name
- Quantity
- Price
- Status

The status column is not part of the sample data. We will add and style conditional elements for the status based on the quantity.

If you're unfamiliar with Bootstrap table classes, consider these: `table`, `table-responsive`, `table-striped`,  and `table-hover`.

### Implement the Core Logic

Use the `map()` function to transform your products array into table rows. Remember:
- Each row needs a unique `key` prop
- Return JSX for each table row (`<tr>`)

#### Add Conditional Styling
Based on the quantity, write conditional rendering to add status information to the final column. The status text and style should be based on the quantity of the current product:
- **0 items**: "reorder" with danger styling (red)
- **1-5 items**: "low stock" with warning styling (yellow)
- **6+ items**: "in stock" with success styling (green)

These bootstrap classes may be helpful: `badge bg-danger`, `badge bg-warning` , `badge bg-success`.

> Create a function in the component that handles this instead of trying to do it in-line.

### Display a Summary

Create a StockSummary component to render below the table that displays:
- Total products in stock
- Total products with low stock
- Total products needing reorder

**Hint:** Use the `filter()` method in `ProductInventory` to count products in each category and pass the counts as props to the `StockSummary` component.

## Sample Output

When complete, your interface should look similar to this:

![](../../_assets/product-exercise/sample-output.png)