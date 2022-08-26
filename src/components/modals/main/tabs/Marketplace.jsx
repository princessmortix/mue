import variables from 'modules/variables';
import Tabs from './backend/Tabs';

import MarketplaceTab from '../marketplace/sections/Marketplace';

export default function Marketplace(props) {
  return (
    <Tabs changeTab={(type) => props.changeTab(type)} current="marketplace">
      <div label={variables.getMessage('modals.main.marketplace.all')} name="all">
        <MarketplaceTab type="all" />
      </div>
      <div label={variables.getMessage('modals.main.marketplace.photo_packs')} name="photo_packs">
        <MarketplaceTab type="photo_packs" />
      </div>
      <div label={variables.getMessage('modals.main.marketplace.quote_packs')} name="quote_packs">
        <MarketplaceTab type="quote_packs" />
      </div>
      <div
        label={variables.getMessage('modals.main.marketplace.preset_settings')}
        name="preset_settings"
      >
        <MarketplaceTab type="preset_settings" />
      </div>
      <div label={variables.getMessage('modals.main.marketplace.collection')} name="collections">
        <MarketplaceTab type="collections" />
      </div>
    </Tabs>
  );
}
