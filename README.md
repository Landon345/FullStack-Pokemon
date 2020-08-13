# My third version of my pokedex

## This time it uses the api I created

## List of features

- uses react-query for handling some state
- uses lodash to throttle/debounce input field for searching
- able to search by ability, name, type, egg group, and description
- uses chakra and emotion for styling
- uses some react-framing for animations
- uses React.memo for better rendering performance
- uses Formik for the login and register pages
- uses react-router-dom for routing
- tried out testing. Just learning testing right now.
- uses yup for validation shaping
- uses moment for formatting dates

## My imports

#### State Management

- "react-query": "^2.0.3"
- "lodash": "^4.17.15"

#### Routing and testing

- "react-router-dom": "^5.2.0"
- "react-testing-library": "^8.0.1"
- "@testing-library/jest-dom": "^4.2.4"
- "@testing-library/user-event": "^7.1.2"

#### styling

- "@chakra-ui/core": "^0.8.0"
- "@emotion/core": "^10.0.28"
- "@emotion/styled": "^10.0.27"
- "emotion": "^10.0.27"
- "emotion-theming": "^10.0.27"
- "moment": "^2.27.0"

#### animations

- "framer-motion": "^1.11.1"

#### forms

- "formik": "^2.1.4"
- "yup": "^0.29.1"

# Pokedex api

### Suggestions implemented in backend

- Validation of requests is way simpler

- Added interfaces to all services and repositories

- Added custom messages for each part of validation that fails
