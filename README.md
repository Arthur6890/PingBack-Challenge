# Pingback Form Component

This project contains a reusable `PingbackForm` component located in the `components` folder within the `src` directory of the project. The form is built using **React Hook Form** and **TypeScript** to provide a robust and type-safe implementation for handling form submissions.

## Technologies Used

- **React**: Core library for building user interfaces.
- **React Hook Form**: For form state management, validation, and submission handling.
- **TypeScript**: Type-safe implementation for React components.
- **Sass**: For modular and scoped styling.
- **Sass Modules**: Used for component-specific styles, allowing encapsulation and cleaner CSS structure.


## Component Location

- `src/components/form/index.tsx`

The main component is stored in the `components` folder within the `src` directory. It is a flexible form component that can be configured to handle multiple types of form fields.

## Validations

The `PingbackForm` component uses `react-hook-form` for validating form inputs. The current implementation includes the following validation types:

1. **Required Fields**: 
   - If a field is marked as required, the form will display an error message if left empty.
   - Example: `Full Name is a required field!`

2. **Email Validation**:
   - The email field is validated to ensure it matches a standard email format.
   - Error message: `Invalid email format.`

3. **Phone Number Validation**:
   - The phone number field automatically formats the input to follow the Brazilian phone number format: `(XX) XXXXX-XXXX`.
   - It only accepts numerical input and automatically formats as the user types.
   - Error message if invalid: `Invalid phone number format. Example: (31) 99999-9999.`

## Installation and Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Arthur6890/PingBack-Challenge.git
   cd pingBack-challenge
   npm install (or yarn)
   npm run start (or yarn start)



