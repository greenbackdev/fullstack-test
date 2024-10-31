# Genesis Fullstack Test

This repository is the starting point for a live-coding session.

## Techonogies

This repository is a Next.js application written in Typescript. It uses Tailwind CSS for styling.
You can get familiar with the technologies beforehand, but please do not start the exercise before our live session.

You'll be sharing your screen and can use the text editor of your choice.

To start coding, run the follwing commands:

```bash
yarn
yarn dev
```

## Exercise

The `/data` directory contains some JSON data files. You can get familiar with the schema before starting the exercise.

- `data/descriptions.json` contains the description and other information about an item.
- `data/dependencies.json` contains the dependencies between items.
- `data/values.json` contains the values of some of the items.

An item value can be either a number given by the file `data/values.json` if it has no dependency,
or it is equal to the weighted mean of some other item values (listed in `data/dependencies.json`).

If weights are not specified in dependencies, they are assumed to be equal to 1 (value is the mean of its dependencies).

In this exercise, you will be asked to write a single page application that will:

- allow user to select an item (you can use the `Select` component given in the repository).
- display the name, description and value of the selected item.

⚠️ The value cannot be computed on the client side, it must be done on the server side.

You may not have time to finish it all, the important is to be able to walk me through your choices and reasoning.
