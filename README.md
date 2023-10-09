# Dynamic Form React App

This is a dynamic form application built with React, TypeScript, and responsive styles for an optimal user experience on a variety of devices.

## Features

- Create dynamic forms based on provided configuration.
- Support various field types, such as text, number, and select.
- Capture and display user-submitted data.
- Responsive design with media queries to adapt to mobile devices and larger screens.

## How to Use

1. Clone this repository to your local machine:

`git clone https://github.com/hguaymas/dynamic-form-react.git`

2. Navigate to the project directory:

`cd dynamic-form-react`

3. Install dependencies:

`npm install`

4. Run the application:

`npm start`

The application will open in your default web browser. You can edit the `src/App.tsx` file to customize the form configuration.

## Form Configuration

The form configuration is defined in the `src/App.tsx` file. You can modify the `fields` array to define the fields for your form.

```tsx
const fields: FormField[] = [
  { type: 'text', label: 'Name' },
  { type: 'number', label: 'Age' },
  { type: 'select', label: 'Gender', options: ['Male', 'Female', 'Other'] },
];
```

## Styling Customization

The application's styles are located in the `src/App.css` file. You can customize the styles according to your preferences.

## Contribution
If you would like to contribute to this project, we welcome contributions! Feel free to open issues or send pull requests with improvements.

## License
This project is licensed under the **MIT License**.