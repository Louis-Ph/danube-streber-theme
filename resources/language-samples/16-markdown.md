# Theme Visual QA

Use all three Streber variants and inspect:

- inline `code`
- **strong emphasis**
- _italic emphasis_
- links like [Marketplace](https://marketplace.visualstudio.com/)
- tables, task lists, and block quotes

| Surface | What to inspect |
| --- | --- |
| Inline code | background and foreground contrast |
| Fenced code | block background, punctuation, numbers |
| Links | visibility without oversaturation |
| Lists | bullet contrast and spacing |

- [x] readable checked task item
- [ ] readable unchecked task item

```ts
const answer = 42;
```

```json
{
  "theme": "Streber Light",
  "surface": "Markdown preview",
  "status": "check contrast"
}
```

> Quotes, lists, inline code, and fenced blocks should remain readable for long sessions.
