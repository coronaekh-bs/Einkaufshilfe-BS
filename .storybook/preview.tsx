import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeContext } from 'styled-components';
import { theme } from '../components/theme';

import '../components/style.css'

addDecorator(storyFn => (
  <ThemeContext.Provider value={theme}>{storyFn()}</ThemeContext.Provider>
));
