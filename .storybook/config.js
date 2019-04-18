import { configure } from '@storybook/react';
import '@storybook/addon-actions/register';

function loadStories() {
  require('../shared/components/page-header/__stories__/index');
  require('../shared/components/select/__stories__/index');
}

configure(loadStories, module);
