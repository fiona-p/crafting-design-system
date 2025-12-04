```tsx
export type TabListProps = {
  children: ReactNode;
};
```

Problem: reactNode is very broad.
If you component is only supposed to accept a certain type of child, eg: Tab Component, this wont enforce that.

- Using ReactNode makes the component flexible, which is fine for generic containers.

Better to use

```tsx
export type TabListProps = {
  children: ReactElement<TabProps> | ReactElement<TabProps>[];
};
// or
export type TabListProps = {
  children: ReactElement<typeof Tab> | ReactElement<typeof Tab>[];
};
```

---

Which is better for a Design system?

```tsx
<TabList>
  <Tab index={0} label='Label' />
  <Tab index={1} label='Label' />
  <Tab index={2} label='Label' />
</TabList>;

// or
// for DATA-driven usage
{
  tabsMockData.tabData.map((tab, index) => (
    <Tab key={index} index={index} label={tab.label} />
  ));
}
```

Option A is more readable and simple.
But it is not scalable and harder to maintain.
It is hardcoded and okay for small demos but not for data-driven development

Option B is more scalable.
All indexes are guaranteed to be unique.
More maintanable - changing labels, badges, content etc only requires changing a data structure.
Encourages data-driven components (not hard coded)

---

What design pattern am I using?

“Compound Component Pattern” in React.
more on this..

Both shadCN and mUI use 'Compound Component Pattern'.
My implementatin is flexible to show both usages.
