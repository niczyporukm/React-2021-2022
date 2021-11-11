import {cleanup } from '@testing-library/react';
import { render } from '../../redux/testUtils';
import LoginPage from './LoginPage';

// poniższa komenda automatycznie czyści dane związane z testami
// dzięki temu nie dojdzie do sytuacji aby jeden z nich mógł wpływac na inny
afterEach(cleanup);

it('LoginPage component should be rendered properly', () => {
  // sprawdzamy tu jedynie poprawne wyrenderowanie komponentu - metoda render z testing-library
});

it('After render "Sign in" button should be disabled', () => {
  // po wyrenderowaniu przycisk powinien być nieaktywny, sprawdzamy to metodą "..... .toBeDisabled()"
});

it('"Sign in" button should enabled after fill both input fields', () => {
    // po wyrenderowaniu przycisk powinien być nieaktywny
    // uzupełniamy pole firstName
    // przycisk nadal powinien być nieaktywny
    // uzupełniamy pole lastName
    // przysk powinien być aktywny
});





