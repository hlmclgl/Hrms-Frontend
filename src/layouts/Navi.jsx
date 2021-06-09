import React from "react";
import { Button, Icon, Menu } from "semantic-ui-react";
import { Container } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top" size="large">
        <Container>
          <Menu.Item name="building outline">
            <Icon name="building outline" size="large" />
            HRMS
          </Menu.Item>
          <Menu.Item name="Ana Sayfa" />
          <Menu.Item name="İş İlanları" />
          <Menu.Item name="Şirketler" />
          <Menu.Menu position="right">
            {/* <Dropdown item text="Language">
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Russian</Dropdown.Item>
                <Dropdown.Item>Spanish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}

            <Menu.Item>
              <Button.Group>
                <Button primary>Kaydol</Button>
                <Button.Or />
                <Button positive>Giriş Yap</Button>
              </Button.Group>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
