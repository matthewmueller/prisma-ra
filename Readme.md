Repro for: https://github.com/prisma/prisma/issues/9553

## Steps

1. Setup .env and create database
1. `npm install`
1. `npx prisma db push`
1. `(cd nested && npm install)`
1. `npx ts-node index.ts`

You should see

```
PrismaClientKnownRequestError:
Invalid `prisma.user.create()` invocation in
/Users/m/dev/src/github.com/prisma/ra/index.ts:38:21

  35 //     },
  36 //   ],
  37 // })
→ 38 await prisma.user.create(
  Failed to validate the query: `Field does not exist on enclosing type.` at `Mutation.createOneUser`
    at cb (/Users/m/dev/src/github.com/prisma/ra/node_modules/@prisma/client/runtime/index.js:38688:17)
    at async main (/Users/m/dev/src/github.com/prisma/ra/index.ts:38:3) {
  code: 'P2009',
  clientVersion: '3.7.0',
  meta: {
    query_validation_error: 'Field does not exist on enclosing type.',
    query_position: 'Mutation.createOneUser'
  }
}
```

To fix:

1. `rm -rf nested/node_modules` (move sub-project outside of your dir)
1. `npx ts-node index.ts`
