## Architecture Decision Record (ADR)

### Notes on Test Submission

### Consideration 1: Tab Structure & State Management (Context)

### Decision

I decided to build the Tabs to follow this structure:

```tsx

<Tabs>
    <TabList>
        <Tab>
        <TabPanel>
    <TabList>
<Tabs>

<Tabs variant='underline'>
  <TabList>
    <Tab index={0} label='Label' />
    <Tab index={1} label='Label' badgeLabel='Badge' badgeVariant='positive' />
  </TabList>
  <TabPanel index={0}>Content 1</TabPanel>
  <TabPanel index={1}>Content 2</TabPanel>
</Tabs>
```

We accept `TabList` (and other parts) as children instead of props
to keep the component API flexible and composable.
This lets users nest tabs, panels, and other UI elements naturally,
supports custom layouts, and aligns with React’s composition best practices.

To support this structure, I implemented a `TabsContext` to manage the shared state (e.g., `activeTab`, `variant`) between the `Tab`, `TabList`, and `TabPanel` components.

Using **React Context** allowed me to:

- Keep the state logic centralised and accessible across nested components.
- Avoid prop drilling.
- Make the component API cleaner for consumers (`<Tabs>` manages the state internally).

### Consequences

- Scalable and maintainable — easy to add new tabs or panels without rewriting logic.
- Clean API surface — users of the component don’t need to manage tab state manually.
- Enables accessibility features (e.g., keyboard navigation) via shared context.
- Adds a small amount of complexity (e.g., wrapping components in a `TabsProvider`).

### Alternatives Considered

- **Prop-based state passing**: Would have required passing `activeTab`, `setActiveTab`, and `variant` to each component manually, leading to prop drilling and reduced flexibility.
- **Redux**: Overkill for this component.
- **Using local state in each `Tab`**: Would not allow coordinated behavior across the tab list and panels.

---

### Consideration 2: Project Presentation

### Decision

I initially used `App.tsx` to display the Tab components because I hadn't used Storybook in many years and thought I wouldn’t have enough time to set it up during this test. However, I eventually integrated Storybook so the client (the person assessing the test) can easily view the reusable tabs either by running `pnpm dev` in the browser or by running Storybook.

### Consequences

- Setting up Storybook later in the process took additional time.
- Having two places to view the components mirrors a real-life scenario where apps often have both in-app views and component libraries.

### Alternatives Considered

- Using Storybook from the start to demo the full tab interaction.

### Notes

In `App.tsx`, I demonstrate two ways to build the Tabs.

- Option A: The structure shown in `Consideration 1: Tab Structure & State Management (Context)` above.
- Option B: If we want to validate that all `<Tab>`s have unique index props, then we can map() as follows

```tsx
<Tabs variant={tabsData.tabVariant}>
  <TabList>
    {tabsData.tabData.map((tab, index) => {
      return (
        <Tab
          key={tab.label || index}
          index={index}
          label={tab?.label}
          {...(tab?.badge?.badgeLabel && {
            badgeLabel: tab.badge.badgeLabel,
          })}
          {...(tab?.badge?.badgeVariant && {
            badgeVariant: tab.badge.badgeVariant,
          })}
        />
      );
    })}
  </TabList>
  {tabsData.tabData.map((tab, index) => {
    return <TabPanel index={index}>{tab.content}</TabPanel>;
  })}
</Tabs>
```

---

### Consideration 3: Styling Approach (CSS vs Sass vs CSS-in-JS)

### Decision

Although I’m more comfortable with Sass, I chose to use **vanilla CSS** with CSS Modules. I saw this as a good opportunity to practice writing clean, scoped styles manually (as I have not used pure CSS in many years).

I avoided CSS-in-JS (e.g. styled-components, emotion) as it’s been a while since I used them, and I didn’t want to spend time ramping up again for the test.

### Consequences

- Hopefully shows proficiency with raw CSS.
- Took longer due to lack of utility classes (e.g., Tailwind).
- No dependencies or setup required.

### Alternatives Considered

- **Sass**: Familiar, but would require installing and configuring.
- **TailwindCSS**: Very efficient, but not allowed in test rules.
- **CSS-in-JS**: Rejected due to time constraints and re-familiarization cost.

---

### Consideration 4: CSS Selector Strategy

### Decision

I used a class-based selector strategy like:

```css
.tab.pill.inactive:hover
.tab.underline.active:hover
```

Where:

- `pill` / `underline` are visual variants
  (export type TabVariant = 'underline' | 'pill')
- `active` / `inactive` reflect tab state.

This pattern is readable and scalable.

### Consequences

- Easy to scan and debug styles.
- Scales well with new variants and states.
- Visual variants are TypeScript typed, so this approach is relatively safe.
- CSS selectors themselves are not type-safe — changes to class names must be managed carefully.

### Alternatives Considered

- Using data attributes instead of class names.
  data-variant="pill" / .tab[data-variant='pill']{}
- Using BEM-style class naming (`tab--active`, `tab--pill`, `.tab--underline.tab--inactive:hover`), which I may explore next time.

---

### Consideration 5: Accessibility — Keyboard Navigation (arrows)

### Decision

Implemented an `onKeyDown` handler in the Tab component to handle keyboard navigation with arrow keys. This updates the `activeTab` state and moves focus accordingly when users press arrow keys, Home, or End.

This ensures keyboard users can navigate tabs easily, with both focus and visual state staying in sync.

### Consequences

- Improves keyboard accessibility.
- Syncs focus with visual state for better UX.
- I had to introduce `totalTabs` to Context (for the onKeyDown handler) and set this value in the `TabList` component which adds a bit of complexity. A useEffect() hook is needed to update this value in TabList.
  **Note:**

If tabs are static JSX, no memoization is necessary for counting tabs.

If tabs are dynamically created via .map(), wrapping the tab count in useMemo() prevents unnecessary updates and re-renders:
Example:

```tsx
// Memoize total tabs count based on stable children array
const totalTabCalculation = useMemo(() => {
  return Array.isArray(children) ? children.length : 1;
}, [children]);
```

### Alternatives Considered

- Handling only `onKeyDown` without tracking totalTabs, but this limits reliable focus management and keyboard navigation support.

---

### Consideration 6: Accessibility — Syncing Active Tab on Focus

### Decision

Added an `onFocus` handler in the Tab component that updates the `activeTab` state whenever a tab receives focus.

This keeps the active tab state in sync with keyboard navigation and screen reader usage.

### Consequences

- Improves keyboard accessibility.
- Syncs focus with visual state for better UX.
- May cause additional re-renders during rapid keyboard navigation, but the impact is minimal.

### Alternatives Considered

- Not syncing focus to active tab state, which can cause confusion for keyboard and screen reader users.

---

### Consideration 7: WHY Avoid Using `React.FC`

We follow modern React + TypeScript best practices and **avoid using `React.FC` (or `React.FunctionComponent`)** when defining components.

### Why

According to the [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/), using `React.FC` is now considered unnecessary and can introduce subtle issues:

- **Implicit `children`:** `React.FC` automatically adds an optional `children` prop, even when a component should not accept any.
  Adds children?: ReactNode automatically — even if you didn’t ask for it
- **Type issues with `defaultProps`:** Mixing `defaultProps` with `React.FC` can cause confusing or broken type inference.
- **Added verbosity:** It provides no practical benefit over directly typing props, but increases noise in code.
- **Future compatibility:** `React.FC` and related types (like `React.VFC`) are no longer recommended in modern React type definitions.

### Recommended Pattern

Use plain function components with explicit prop typing instead:

```tsx
type ButtonProps = {
  label: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

export function Button({ label, onClick, children }: ButtonProps) {
  return (
    <button onClick={onClick}>
      {label}
      {children}
    </button>
  );
}
```

Benefits

More explicit and predictable props

Cleaner, easier-to-read component signatures

Avoids legacy or deprecated typing patterns

Aligns with current React + TypeScript community conventions

---

### Consideration 7: WHY Not build tabs with Generics

## Context

When building the `Tabs` component, we needed to decide how to type the tab content:

- Should we use **generics** to allow flexible content types?
- Or stick with a simpler approach using `ReactNode` for `children`?

---

## Decision

We decided **not to use generics** for the initial implementation of `Tabs`.  
Instead, the `Tabs` component uses:

```ts
children: React.ReactNode;
```

This is because ReactNode is a type that represents **anything React can render** — anything you can safely put inside JSX.

```tsx
type ReactNode =
  | ReactElement
  | string
  | number
  | boolean
  | null
  | undefined
  | ReactNode[];
```

Examples:

- children: React.ReactNode — can accept <div>, "text", 123, etc.
- element: React.ReactElement — must be a single element like <div> or <MyComponent />.

## Rationale

- Not to over-engineer: The Tabs component is currently for a single project and the content shape is stable. A non-generic approach is simpler and easier to maintain.
- Flexibility trade-off: If the component were to be reused in multiple contexts with different content types or shapes, generics would allow reusability and type safety.

## Pros and Cons of Using Generics

Pros:

- Can support different content types (React nodes, data objects, complex types).
- Useful if planning to reuse the component in multiple projects or as part of a shared UI library.

Cons:

- Adds complexity to the component signature.
- Type inference can be confusing during development.
- Potential for over-engineering.
- Harder to maintain, debug, and teach to new contributors.

## When Generics Make Sense

Generics are useful when your tab content isn’t directly renderable JSX, i.e., “data-based content”: content that isn’t JSX yet, but rather data that the component uses to **generate JSX** internally.

This pattern often involves passing data + a **render function**:

```tsx
type TabItem<T> = {
  id: string;
  label: string;
  content: T;
};

function Tabs<T>(props: {
  items: TabItem<T>[];
  renderTabContent: (item: TabItem<T>) => React.ReactNode; // HERE - passing a render function
}) {
  return (
    <div>
      {props.items.map((tab) => (
        <div key={tab.id}>
          <h3>{tab.label}</h3>
          {props.renderTabContent(tab)} // using here
        </div>
      ))}
    </div>
  );
}
```

**T can be a React node, a data object, or any other complex type.**
Using renderContent allows the component to generate JSX from data, **rather than receiving ready-to-render JSX.**

### Example Usage

Tabs component receives:

- items: apiData.map(user => ({ id: user.id, label: user.name, content: user }))
- renderTabContent: tab => <div><p>Role: {tab.content.role}</p></div>

**LEARN: If you map the data to JSX before passing it, then it is already renderable and generics are not required.**

## Conclusion

- For this project, we stick with ReactNode — simple, readable, and sufficient.
- Generics are a future option if the Tabs component becomes more generic or reused across different data shapes.

API design & evolution

What it is: Iterating on the component API to make it easy to use, flexible, and type-safe.

Why it matters: A messy API leads to over-engineering or misuse.

Examples:

Deciding between children vs items + renderContent for Tabs

Using generics to enforce type safety

Adding theme/context support

This is where the debate you’re having about generics vs children lives.
