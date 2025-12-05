import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import oneDark from 'react-syntax-highlighter/dist/esm/styles/prism/one-dark';
import TabsStaticExample from '../../components/TabsStaticExample';
import { optionACode } from '../../mockData';

const TabsOptionA = () => (
  <section className='spacingMarginBottom'>
    <h2>Option A: Static Tabs</h2>
    <TabsStaticExample />
    <div>
      <h3>Example of use</h3>
      <SyntaxHighlighter language='tsx' style={oneDark}>
        {optionACode}
      </SyntaxHighlighter>
      <div>
        <p>
          Static tabs are ideal when the structure of your tabs is known ahead
          of time and is unlikely to change. They are not “static” in the sense
          that they never update; they simply require you to define each{' '}
          {'/<Tab>/'} and {'<TabPanel>'} manually in the JSX.
        </p>
        <p>
          <strong>Use static tabs when:</strong>
        </p>
        <ul>
          <li>You know exactly how many tabs you need.</li>
          <li>Tab labels and content are fixed or rarely change.</li>
          <li>
            The tabs are part of your UI structure (e.g., “Details”, “Settings”,
            “Analytics”).
          </li>
          <li>You want maximum control and custom layout flexibility.</li>
          <li>
            The data is not coming from an external source, you are writing the
            structure directly in your component.
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
            <code>badgeLabel</code> – optional tag displayed next to the label
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
);

export default TabsOptionA;
