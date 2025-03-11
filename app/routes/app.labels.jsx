import { TitleBar } from "@shopify/app-bridge-react";
import { Page, Layout, Card, EmptyState } from "@shopify/polaris";
import data from "../data/data.js";
export default function Labels() {
  console.log('data is', data);
  return (
    <Page>
      <TitleBar title="Label Page">
        <button type="primary">Hello Button</button>
        <button type="secondary">Hi Button</button>
      </TitleBar>
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <EmptyState
              heading="No Labels Added Yet"
              action={{ content: "Add Label" }}
              secondaryAction={{
                content: "Settings",
                url: "/app/settings",
              }}
              image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
            >
              <p>Add Labels To Showcase On sale Items in your Store</p>
            </EmptyState>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
