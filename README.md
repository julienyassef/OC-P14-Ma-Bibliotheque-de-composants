# Modal Component for React Applications : jy-oc-p14-ma-bibliotheque-de-composants

## Description

This Modal component is designed for React applications, offering a flexible and easy-to-use solution for displaying modals. With customizable content, styles, and behaviors, this modal component can adapt to a wide variety of use cases.

## Author

Julien YASSEF

## Link to NPM

[Modal Package](https://www.npmjs.com/package/jy-oc-p14-ma-bibliotheque-de-composants)

## Features

- **Dynamic Visibility:** Control the display of the modal with an `isOpen` prop.
- **Customizable Styling:** Override default styles for the modal, title, content, and close icon through CSS classes.
- **Close Mechanisms:** Supports closing the modal through a close icon, pressing the `ESC` key, clicking outside the modal, or a custom close text link.
- **Accessibility Features:** Implements focus management and supports disabling background content scrolling when the modal is open.
- **Animation Controls:** Customize fade-in and fade-out animations for both the overlay and the modal content with duration and delay options.

## Installation

To incorporate `jy-oc-p14-ma-bibliotheque-de-composants` into your project, run the following npm command:

bash
npm install jy-oc-p14-ma-bibliotheque-de-composants


Include the Modal.css file in your project to get started with the default styling. You can import it in your main application file like so:
import 'jy-oc-p14-ma-bibliotheque-de-composants/src/libModal.css';


## Props of the modal

| Prop                  | Type                | Description                                                                   | Default            |
|-----------------------|---------------------|-------------------------------------------------------------------------------|--------------------|
| `isOpen`              | `boolean`           | Controls the visibility of the modal.                                         | Required           |
| `title`               | `string`            | The title displayed at the top of the modal.                                  | None               |
| `content`             | `JSX.Element`/`string`| The content of the modal, can be text, JSX, or any React component.           | Required           |
| `handleClose`         | `Function`          | Function to call when the modal needs to be closed.                           | Required           |
| `modalClass`          | `string`            | CSS class for the modal.                                                      | `"modal"`          |
| `titleClass`          | `string`            | CSS class for the modal title.                                                | `"modalTitle"`     |
| `contentClass`        | `string`            | CSS class for the modal content.                                              | `"modalContent"`   |
| `closeIcon`           | `JSX.Element`       | Custom JSX for the close icon.                                                | Default SVG icon   |
| `enableCloseIconClick`| `boolean`           | If false, clicking the close icon will not close the modal.                   | `true`             |
| `escapeClose`         | `boolean`           | Allows the modal to be closed by pressing the escape key.                     | `false`            |
| `closeOnClickOutside` | `boolean`           | Allows the modal to be closed by clicking outside its content area.           | `false`            |
| `disableScroll`       | `boolean`           | Disables scrolling of the background content when the modal is open.          | `false`            |
| `centeredModal`       | `boolean`           | Centers the modal in the window.                                              | `false`            |
| `fadeDurationOverlay` | `number`            | Fade effect duration for the overlay in milliseconds.                         | `0`                |
| `fadeDelayOverlay`    | `number`            | Delay before the fade effect for the overlay starts, in milliseconds.         | `0`                |
| `fadeDurationModal`   | `number`            | Fade effect duration for the modal itself in milliseconds.                    | `0`                |
| `fadeDelayModal`      | `number`            | Delay before the fade effect for the modal content starts, in milliseconds.   | `0`                |
| `closePreviousOnOpen` | `boolean`           | Automatically closes previous modals when a new modal is opened.               | `false`            |
| `closeLink`           | `string`            | Optional text for a close link.                                               | None               |
| `linkCloseClass`      | `string`            | CSS class for the close link.                                                 | `"linkClose"`      |
| `closeClass`          | `string`            | CSS class for the close button.                                               | `'customClose'`    |




