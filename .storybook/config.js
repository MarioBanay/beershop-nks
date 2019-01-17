import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/button.js');
  require('../src/stories/header.js');
  require('../src/stories/cards.js');
  require('../src/stories/footer.js');
  require('../src/stories/hyperlink.js');
  require('../src/stories/roundIconButton.js');
  require('../src/stories/navigationMenu.js');
  require('../src/stories/mainContent.js');
  require('../src/stories/simpleTable.js');
  require('../src/stories/popupComponent.js');
}

configure(loadStories, module);
