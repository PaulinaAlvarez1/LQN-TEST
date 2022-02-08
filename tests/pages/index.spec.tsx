import { fireEvent, render, screen } from '@testing-library/react';
import { MockedProvider as ApolloMockedProvider } from '@apollo/client/testing';

import Index from '../../src/pages';

const renderWithApollo = (element: React.ReactElement) => {
  render(element, { wrapper: ApolloMockedProvider });
};

describe('Index page correctly renders in different locales', () => {

});
