# Run Hierarchy Project

1. Clone project
```
git clone <URL>
```

2. Install dependencies
```
cd <PROJECT>
npm i
```

3. Run Project
```
npm run dev -- --depth 2 --verbose -p "eu amo Leões e papagaios"
```

## Examples

1. example with depth, verbose and phase arguments
   
```bash
npm run dev -- --depth 2 --verbose -p "eu amo Leões e papagaios"
```

2. example with verbose and phase arguments

```bash
npm run dev -- --verbose -p "eu amo Leões e papagaios"
```

3. example with phase argument

```bash
npm run dev -- -p "eu amo Leões e papagaios"
```