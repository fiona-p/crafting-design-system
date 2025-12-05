import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import oneDark from 'react-syntax-highlighter/dist/esm/styles/prism/one-dark';
import { optionBCode, tabsMockData } from '../../mockData';
import TabsPlayground from '../../components/TabsPlayground/TabsPlayground';

const TabsOptionB = () => (
  <section>
    <h2>Option B: Data-driven Tabs (Editable)</h2>
    <TabsPlayground initialData={tabsMockData} />
    <div>
      <h3>Example of use</h3>
      <SyntaxHighlighter language='tsx' style={oneDark}>
        {optionBCode}
      </SyntaxHighlighter>
      <p>
        <strong>Data-driven Tabs</strong> are generated from a single
        configuration object. Instead of hardcoding each{' '}
        <code>&lt;Tab&gt;</code> and <code>&lt;TabPanel&gt;</code>, you define
        your tabs using a structured data format, typically an array of tab
        entries combined with layout settings such as <code>tabsVariant</code>{' '}
        and <code>orientation</code>. The component then maps over this data and
        renders the correct UI automatically.
      </p>

      <p>
        This pattern is especially useful when your tab content needs to be
        dynamic. For example, tab data may come from an API response, a CMS, a
        user-generated form, or any external service. Because the UI is driven
        entirely by data, updating a label, adding a badge, removing a tab, or
        switching layout settings requires changing only the data structure, not
        the JSX itself. This keeps your code cleaner, more maintainable, and
        easier to scale.
      </p>
    </div>
  </section>
);

export default TabsOptionB;
