'use client';

import Link from 'next/link';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderMenuButton,
  SkipToContent,
} from '@carbon/react';
import { Notification, UserAvatar, Switcher } from '@carbon/icons-react';

export default function TutorialHeader() {
  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <>
          <SkipToContent />
          <Header aria-label="Carbon Tutorial">
            <HeaderMenuButton
              aria-label="Open menu"
              isActive={isSideNavExpanded}
              onClick={onClickSideNavExpand}
            />
            <Link href="/" passHref legacyBehavior>
              <HeaderName prefix="IBM">Carbon Tutorial</HeaderName>
            </Link>

            <HeaderNavigation aria-label="Carbon Tutorial">
              <Link href="/repos" passHref legacyBehavior>
                <HeaderMenuItem>Repositories</HeaderMenuItem>
              </Link>
            </HeaderNavigation>

            <HeaderGlobalBar>
              <HeaderGlobalAction
                aria-label="Notifications"
                tooltipAlignment="center"
                className="action-icons"
              >
                <Notification size={20} />
              </HeaderGlobalAction>
              <HeaderGlobalAction
                aria-label="User Avatar"
                tooltipAlignment="center"
                className="action-icons"
              >
                <UserAvatar size={20} />
              </HeaderGlobalAction>
              <HeaderGlobalAction
                aria-label="App Switcher"
                tooltipAlignment="center"
                className="action-icons"
              >
                <Switcher size={20} />
              </HeaderGlobalAction>
            </HeaderGlobalBar>
          </Header>
        </>
      )}
    />
  );
}
