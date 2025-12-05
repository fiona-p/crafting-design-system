import { optionACode, optionBCode, tabsMockData } from '../../mockData';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import oneDark from 'react-syntax-highlighter/dist/esm/styles/prism/one-dark';
import TabsStaticExample from '../../components/TabsStaticExample';
import TabsPlayground from '../../components/TabsPlayground/TabsPlayground';
import Tabs from '../../components/Tabs/Tabs';
import TabList from '../../components/TabList/TabList';
import Tab from '../../components/Tab/Tab';
import TabPanel from '../../components/TabPanel/TabPanel';

const TabsDocPage = () => {
  return (
    <div className='container'>
      <h1>Tabs Documentation & Playground</h1>

      <Tabs variant='pill' orientation='horizontal'>
        <TabList>
          <Tab
            index={0}
            label='Option A: Static Tabs'
            // badgeLabel='New'
            // badgeVariant='positive'
          />
          <Tab
            index={1}
            label='Option B: Data-driven Tabs'
            // badgeLabel='!'
            // badgeVariant='negative'
          />
        </TabList>
        <TabPanel index={0}>Content 1</TabPanel>
        <TabPanel index={1}>Content 2</TabPanel>
      </Tabs>

      <section className='spacingMarginBottom'>
        <h2>Option A: Static Tabs</h2>
        <TabsStaticExample />
        <div style={{ marginTop: '1rem' }}>
          <h3>Example of use</h3>
          <SyntaxHighlighter language='tsx' style={oneDark}>
            {optionACode}
          </SyntaxHighlighter>
          <div>
            <p>
              Static tabs are ideal when the structure of your tabs is known
              ahead of time and is unlikely to change. They are not “static” in
              the sense that they never update; they simply require you to
              define each {'/<Tab>/'} and {'<TabPanel>'} manually in the JSX.
            </p>
            <p>
              <strong>Use static tabs when:</strong>
            </p>
            <ul>
              <li>You know exactly how many tabs you need.</li>
              <li>Tab labels and content are fixed or rarely change.</li>
              <li>
                The tabs are part of your UI structure (e.g., “Details”,
                “Settings”, “Analytics”).
              </li>
              <li>You want maximum control and custom layout flexibility.</li>
              <li>
                The data is not coming from an external source, you are writing
                the structure directly in your component.
              </li>
            </ul>
            <p>
              <strong>Variables that can be changed:</strong>
            </p>
            <ul>
              <li>
                <code>label</code> – the text shown inside the tab
              </li>
              <li>
                <code>content</code> – the content rendered inside each panel
              </li>
              <li>
                <code>badgeLabel</code> – optional tag displayed next to the
                label
              </li>
              <li>
                <code>badgeVariant</code> – styling for the badge (positive,
                negative, neutral, etc.)
              </li>
              <li>
                <code>tabsVariant</code> – appearance of the tab UI (e.g.,
                underline, pill)
              </li>
              <li>
                <code>orientation</code> – horizontal or vertical tabs
              </li>
            </ul>
          </div>
        </div>
      </section>

      <hr style={{ margin: '2rem 0' }} />

      <section>
        <h2>Option B: Data-driven Tabs (Editable)</h2>
        <TabsPlayground initialData={tabsMockData} />
        <div style={{ marginTop: '1rem' }}>
          <h3>Example of use</h3>
          <SyntaxHighlighter language='tsx' style={oneDark}>
            {optionBCode}
          </SyntaxHighlighter>
          <p>
            <strong>Data-driven Tabs</strong> are generated from a single
            configuration object. Instead of hardcoding each{' '}
            <code>&lt;Tab&gt;</code> and <code>&lt;TabPanel&gt;</code>, you
            define your tabs using a structured data format, typically an array
            of tab entries combined with layout settings such as{' '}
            <code>tabsVariant</code> and <code>orientation</code>. The component
            then maps over this data and renders the correct UI automatically.
          </p>

          <p>
            This pattern is especially useful when your tab content needs to be
            dynamic. For example, tab data may come from an API response, a CMS,
            a user-generated form, or any external service. Because the UI is
            driven entirely by data, updating a label, adding a badge, removing
            a tab, or switching layout settings requires changing only the data
            structure, not the JSX itself. This keeps your code cleaner, more
            maintainable, and easier to scale.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TabsDocPage;
