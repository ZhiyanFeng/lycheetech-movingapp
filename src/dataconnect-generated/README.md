# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `moving`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetUser*](#getuser)
  - [*GetUserByEmail*](#getuserbyemail)
  - [*ListMovers*](#listmovers)
  - [*GetMover*](#getmover)
  - [*ListMovingRequestsByStatus*](#listmovingrequestsbystatus)
  - [*GetMovingRequest*](#getmovingrequest)
  - [*ListBidsForRequest*](#listbidsforrequest)
  - [*ListJobsForUser*](#listjobsforuser)
  - [*GetJob*](#getjob)
- [**Mutations**](#mutations)
  - [*CreateUser*](#createuser)
  - [*UpdateUser*](#updateuser)
  - [*CreateMover*](#createmover)
  - [*UpdateMover*](#updatemover)
  - [*CreateVehicle*](#createvehicle)
  - [*CreateMovingRequest*](#createmovingrequest)
  - [*UpdateMovingRequestStatus*](#updatemovingrequeststatus)
  - [*CreateBid*](#createbid)
  - [*UpdateBidStatus*](#updatebidstatus)
  - [*CreateJob*](#createjob)
  - [*UpdateJobStatus*](#updatejobstatus)
  - [*CreatePayment*](#createpayment)
  - [*CreateInvoice*](#createinvoice)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `moving`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `moving` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetUser
You can execute the `GetUser` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUser(vars: GetUserVariables): QueryPromise<GetUserData, GetUserVariables>;

interface GetUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserVariables): QueryRef<GetUserData, GetUserVariables>;
}
export const getUserRef: GetUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUser(dc: DataConnect, vars: GetUserVariables): QueryPromise<GetUserData, GetUserVariables>;

interface GetUserRef {
  ...
  (dc: DataConnect, vars: GetUserVariables): QueryRef<GetUserData, GetUserVariables>;
}
export const getUserRef: GetUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserRef:
```typescript
const name = getUserRef.operationName;
console.log(name);
```

### Variables
The `GetUser` query requires an argument of type `GetUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetUserVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetUser` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetUserData {
  user?: {
    id: UUIDString;
    displayName: string;
    email: string;
    phoneNumber?: string | null;
    address?: string | null;
    createdAt: TimestampString;
  } & User_Key;
}
```
### Using `GetUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUser, GetUserVariables } from '@dataconnect/generated';

// The `GetUser` query requires an argument of type `GetUserVariables`:
const getUserVars: GetUserVariables = {
  id: ..., 
};

// Call the `getUser()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUser(getUserVars);
// Variables can be defined inline as well.
const { data } = await getUser({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUser(dataConnect, getUserVars);

console.log(data.user);

// Or, you can use the `Promise` API.
getUser(getUserVars).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

### Using `GetUser`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserRef, GetUserVariables } from '@dataconnect/generated';

// The `GetUser` query requires an argument of type `GetUserVariables`:
const getUserVars: GetUserVariables = {
  id: ..., 
};

// Call the `getUserRef()` function to get a reference to the query.
const ref = getUserRef(getUserVars);
// Variables can be defined inline as well.
const ref = getUserRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserRef(dataConnect, getUserVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.user);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

## GetUserByEmail
You can execute the `GetUserByEmail` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUserByEmail(vars: GetUserByEmailVariables): QueryPromise<GetUserByEmailData, GetUserByEmailVariables>;

interface GetUserByEmailRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserByEmailVariables): QueryRef<GetUserByEmailData, GetUserByEmailVariables>;
}
export const getUserByEmailRef: GetUserByEmailRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUserByEmail(dc: DataConnect, vars: GetUserByEmailVariables): QueryPromise<GetUserByEmailData, GetUserByEmailVariables>;

interface GetUserByEmailRef {
  ...
  (dc: DataConnect, vars: GetUserByEmailVariables): QueryRef<GetUserByEmailData, GetUserByEmailVariables>;
}
export const getUserByEmailRef: GetUserByEmailRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserByEmailRef:
```typescript
const name = getUserByEmailRef.operationName;
console.log(name);
```

### Variables
The `GetUserByEmail` query requires an argument of type `GetUserByEmailVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetUserByEmailVariables {
  email: string;
}
```
### Return Type
Recall that executing the `GetUserByEmail` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserByEmailData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetUserByEmailData {
  users: ({
    id: UUIDString;
    displayName: string;
    email: string;
    phoneNumber?: string | null;
    address?: string | null;
    createdAt: TimestampString;
  } & User_Key)[];
}
```
### Using `GetUserByEmail`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUserByEmail, GetUserByEmailVariables } from '@dataconnect/generated';

// The `GetUserByEmail` query requires an argument of type `GetUserByEmailVariables`:
const getUserByEmailVars: GetUserByEmailVariables = {
  email: ..., 
};

// Call the `getUserByEmail()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUserByEmail(getUserByEmailVars);
// Variables can be defined inline as well.
const { data } = await getUserByEmail({ email: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUserByEmail(dataConnect, getUserByEmailVars);

console.log(data.users);

// Or, you can use the `Promise` API.
getUserByEmail(getUserByEmailVars).then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

### Using `GetUserByEmail`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserByEmailRef, GetUserByEmailVariables } from '@dataconnect/generated';

// The `GetUserByEmail` query requires an argument of type `GetUserByEmailVariables`:
const getUserByEmailVars: GetUserByEmailVariables = {
  email: ..., 
};

// Call the `getUserByEmailRef()` function to get a reference to the query.
const ref = getUserByEmailRef(getUserByEmailVars);
// Variables can be defined inline as well.
const ref = getUserByEmailRef({ email: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserByEmailRef(dataConnect, getUserByEmailVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.users);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

## ListMovers
You can execute the `ListMovers` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMovers(): QueryPromise<ListMoversData, undefined>;

interface ListMoversRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMoversData, undefined>;
}
export const listMoversRef: ListMoversRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMovers(dc: DataConnect): QueryPromise<ListMoversData, undefined>;

interface ListMoversRef {
  ...
  (dc: DataConnect): QueryRef<ListMoversData, undefined>;
}
export const listMoversRef: ListMoversRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMoversRef:
```typescript
const name = listMoversRef.operationName;
console.log(name);
```

### Variables
The `ListMovers` query has no variables.
### Return Type
Recall that executing the `ListMovers` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMoversData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListMoversData {
  movers: ({
    id: UUIDString;
    companyName: string;
    email: string;
    phoneNumber?: string | null;
    serviceAreas?: string[] | null;
    description?: string | null;
    avatarUrl?: string | null;
    vehicleUrl?: string | null;
  } & Mover_Key)[];
}
```
### Using `ListMovers`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMovers } from '@dataconnect/generated';


// Call the `listMovers()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMovers();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMovers(dataConnect);

console.log(data.movers);

// Or, you can use the `Promise` API.
listMovers().then((response) => {
  const data = response.data;
  console.log(data.movers);
});
```

### Using `ListMovers`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMoversRef } from '@dataconnect/generated';


// Call the `listMoversRef()` function to get a reference to the query.
const ref = listMoversRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMoversRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.movers);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.movers);
});
```

## GetMover
You can execute the `GetMover` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMover(vars: GetMoverVariables): QueryPromise<GetMoverData, GetMoverVariables>;

interface GetMoverRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetMoverVariables): QueryRef<GetMoverData, GetMoverVariables>;
}
export const getMoverRef: GetMoverRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMover(dc: DataConnect, vars: GetMoverVariables): QueryPromise<GetMoverData, GetMoverVariables>;

interface GetMoverRef {
  ...
  (dc: DataConnect, vars: GetMoverVariables): QueryRef<GetMoverData, GetMoverVariables>;
}
export const getMoverRef: GetMoverRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMoverRef:
```typescript
const name = getMoverRef.operationName;
console.log(name);
```

### Variables
The `GetMover` query requires an argument of type `GetMoverVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetMoverVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetMover` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMoverData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetMoverData {
  mover?: {
    id: UUIDString;
    companyName: string;
    email: string;
    phoneNumber?: string | null;
    serviceAreas?: string[] | null;
    description?: string | null;
    vehicleUrl?: string | null;
    createdAt: TimestampString;
  } & Mover_Key;
}
```
### Using `GetMover`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMover, GetMoverVariables } from '@dataconnect/generated';

// The `GetMover` query requires an argument of type `GetMoverVariables`:
const getMoverVars: GetMoverVariables = {
  id: ..., 
};

// Call the `getMover()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMover(getMoverVars);
// Variables can be defined inline as well.
const { data } = await getMover({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMover(dataConnect, getMoverVars);

console.log(data.mover);

// Or, you can use the `Promise` API.
getMover(getMoverVars).then((response) => {
  const data = response.data;
  console.log(data.mover);
});
```

### Using `GetMover`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMoverRef, GetMoverVariables } from '@dataconnect/generated';

// The `GetMover` query requires an argument of type `GetMoverVariables`:
const getMoverVars: GetMoverVariables = {
  id: ..., 
};

// Call the `getMoverRef()` function to get a reference to the query.
const ref = getMoverRef(getMoverVars);
// Variables can be defined inline as well.
const ref = getMoverRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMoverRef(dataConnect, getMoverVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.mover);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.mover);
});
```

## ListMovingRequestsByStatus
You can execute the `ListMovingRequestsByStatus` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMovingRequestsByStatus(vars: ListMovingRequestsByStatusVariables): QueryPromise<ListMovingRequestsByStatusData, ListMovingRequestsByStatusVariables>;

interface ListMovingRequestsByStatusRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListMovingRequestsByStatusVariables): QueryRef<ListMovingRequestsByStatusData, ListMovingRequestsByStatusVariables>;
}
export const listMovingRequestsByStatusRef: ListMovingRequestsByStatusRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMovingRequestsByStatus(dc: DataConnect, vars: ListMovingRequestsByStatusVariables): QueryPromise<ListMovingRequestsByStatusData, ListMovingRequestsByStatusVariables>;

interface ListMovingRequestsByStatusRef {
  ...
  (dc: DataConnect, vars: ListMovingRequestsByStatusVariables): QueryRef<ListMovingRequestsByStatusData, ListMovingRequestsByStatusVariables>;
}
export const listMovingRequestsByStatusRef: ListMovingRequestsByStatusRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMovingRequestsByStatusRef:
```typescript
const name = listMovingRequestsByStatusRef.operationName;
console.log(name);
```

### Variables
The `ListMovingRequestsByStatus` query requires an argument of type `ListMovingRequestsByStatusVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListMovingRequestsByStatusVariables {
  status: RequestStatus;
}
```
### Return Type
Recall that executing the `ListMovingRequestsByStatus` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMovingRequestsByStatusData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListMovingRequestsByStatusData {
  movingRequests: ({
    id: UUIDString;
    originAddress: string;
    destinationAddress: string;
    moveDate: DateString;
    status: RequestStatus;
    createdAt: TimestampString;
    user: {
      displayName: string;
    };
  } & MovingRequest_Key)[];
}
```
### Using `ListMovingRequestsByStatus`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMovingRequestsByStatus, ListMovingRequestsByStatusVariables } from '@dataconnect/generated';

// The `ListMovingRequestsByStatus` query requires an argument of type `ListMovingRequestsByStatusVariables`:
const listMovingRequestsByStatusVars: ListMovingRequestsByStatusVariables = {
  status: ..., 
};

// Call the `listMovingRequestsByStatus()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMovingRequestsByStatus(listMovingRequestsByStatusVars);
// Variables can be defined inline as well.
const { data } = await listMovingRequestsByStatus({ status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMovingRequestsByStatus(dataConnect, listMovingRequestsByStatusVars);

console.log(data.movingRequests);

// Or, you can use the `Promise` API.
listMovingRequestsByStatus(listMovingRequestsByStatusVars).then((response) => {
  const data = response.data;
  console.log(data.movingRequests);
});
```

### Using `ListMovingRequestsByStatus`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMovingRequestsByStatusRef, ListMovingRequestsByStatusVariables } from '@dataconnect/generated';

// The `ListMovingRequestsByStatus` query requires an argument of type `ListMovingRequestsByStatusVariables`:
const listMovingRequestsByStatusVars: ListMovingRequestsByStatusVariables = {
  status: ..., 
};

// Call the `listMovingRequestsByStatusRef()` function to get a reference to the query.
const ref = listMovingRequestsByStatusRef(listMovingRequestsByStatusVars);
// Variables can be defined inline as well.
const ref = listMovingRequestsByStatusRef({ status: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMovingRequestsByStatusRef(dataConnect, listMovingRequestsByStatusVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.movingRequests);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.movingRequests);
});
```

## GetMovingRequest
You can execute the `GetMovingRequest` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMovingRequest(vars: GetMovingRequestVariables): QueryPromise<GetMovingRequestData, GetMovingRequestVariables>;

interface GetMovingRequestRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetMovingRequestVariables): QueryRef<GetMovingRequestData, GetMovingRequestVariables>;
}
export const getMovingRequestRef: GetMovingRequestRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMovingRequest(dc: DataConnect, vars: GetMovingRequestVariables): QueryPromise<GetMovingRequestData, GetMovingRequestVariables>;

interface GetMovingRequestRef {
  ...
  (dc: DataConnect, vars: GetMovingRequestVariables): QueryRef<GetMovingRequestData, GetMovingRequestVariables>;
}
export const getMovingRequestRef: GetMovingRequestRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMovingRequestRef:
```typescript
const name = getMovingRequestRef.operationName;
console.log(name);
```

### Variables
The `GetMovingRequest` query requires an argument of type `GetMovingRequestVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetMovingRequestVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetMovingRequest` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMovingRequestData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetMovingRequestData {
  movingRequest?: {
    id: UUIDString;
    originAddress: string;
    destinationAddress: string;
    moveDate: DateString;
    status: RequestStatus;
    description?: string | null;
    itemDetails?: string | null;
    createdAt: TimestampString;
    user: {
      id: UUIDString;
      displayName: string;
      email: string;
    } & User_Key;
  } & MovingRequest_Key;
}
```
### Using `GetMovingRequest`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMovingRequest, GetMovingRequestVariables } from '@dataconnect/generated';

// The `GetMovingRequest` query requires an argument of type `GetMovingRequestVariables`:
const getMovingRequestVars: GetMovingRequestVariables = {
  id: ..., 
};

// Call the `getMovingRequest()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMovingRequest(getMovingRequestVars);
// Variables can be defined inline as well.
const { data } = await getMovingRequest({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMovingRequest(dataConnect, getMovingRequestVars);

console.log(data.movingRequest);

// Or, you can use the `Promise` API.
getMovingRequest(getMovingRequestVars).then((response) => {
  const data = response.data;
  console.log(data.movingRequest);
});
```

### Using `GetMovingRequest`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMovingRequestRef, GetMovingRequestVariables } from '@dataconnect/generated';

// The `GetMovingRequest` query requires an argument of type `GetMovingRequestVariables`:
const getMovingRequestVars: GetMovingRequestVariables = {
  id: ..., 
};

// Call the `getMovingRequestRef()` function to get a reference to the query.
const ref = getMovingRequestRef(getMovingRequestVars);
// Variables can be defined inline as well.
const ref = getMovingRequestRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMovingRequestRef(dataConnect, getMovingRequestVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.movingRequest);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.movingRequest);
});
```

## ListBidsForRequest
You can execute the `ListBidsForRequest` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listBidsForRequest(vars: ListBidsForRequestVariables): QueryPromise<ListBidsForRequestData, ListBidsForRequestVariables>;

interface ListBidsForRequestRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListBidsForRequestVariables): QueryRef<ListBidsForRequestData, ListBidsForRequestVariables>;
}
export const listBidsForRequestRef: ListBidsForRequestRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listBidsForRequest(dc: DataConnect, vars: ListBidsForRequestVariables): QueryPromise<ListBidsForRequestData, ListBidsForRequestVariables>;

interface ListBidsForRequestRef {
  ...
  (dc: DataConnect, vars: ListBidsForRequestVariables): QueryRef<ListBidsForRequestData, ListBidsForRequestVariables>;
}
export const listBidsForRequestRef: ListBidsForRequestRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listBidsForRequestRef:
```typescript
const name = listBidsForRequestRef.operationName;
console.log(name);
```

### Variables
The `ListBidsForRequest` query requires an argument of type `ListBidsForRequestVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListBidsForRequestVariables {
  requestId: UUIDString;
}
```
### Return Type
Recall that executing the `ListBidsForRequest` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListBidsForRequestData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListBidsForRequestData {
  bids: ({
    id: UUIDString;
    amount: number;
    status: BidStatus;
    details?: string | null;
    createdAt: TimestampString;
    mover: {
      id: UUIDString;
      companyName: string;
    } & Mover_Key;
  } & Bid_Key)[];
}
```
### Using `ListBidsForRequest`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listBidsForRequest, ListBidsForRequestVariables } from '@dataconnect/generated';

// The `ListBidsForRequest` query requires an argument of type `ListBidsForRequestVariables`:
const listBidsForRequestVars: ListBidsForRequestVariables = {
  requestId: ..., 
};

// Call the `listBidsForRequest()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listBidsForRequest(listBidsForRequestVars);
// Variables can be defined inline as well.
const { data } = await listBidsForRequest({ requestId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listBidsForRequest(dataConnect, listBidsForRequestVars);

console.log(data.bids);

// Or, you can use the `Promise` API.
listBidsForRequest(listBidsForRequestVars).then((response) => {
  const data = response.data;
  console.log(data.bids);
});
```

### Using `ListBidsForRequest`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listBidsForRequestRef, ListBidsForRequestVariables } from '@dataconnect/generated';

// The `ListBidsForRequest` query requires an argument of type `ListBidsForRequestVariables`:
const listBidsForRequestVars: ListBidsForRequestVariables = {
  requestId: ..., 
};

// Call the `listBidsForRequestRef()` function to get a reference to the query.
const ref = listBidsForRequestRef(listBidsForRequestVars);
// Variables can be defined inline as well.
const ref = listBidsForRequestRef({ requestId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listBidsForRequestRef(dataConnect, listBidsForRequestVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.bids);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.bids);
});
```

## ListJobsForUser
You can execute the `ListJobsForUser` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listJobsForUser(vars: ListJobsForUserVariables): QueryPromise<ListJobsForUserData, ListJobsForUserVariables>;

interface ListJobsForUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListJobsForUserVariables): QueryRef<ListJobsForUserData, ListJobsForUserVariables>;
}
export const listJobsForUserRef: ListJobsForUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listJobsForUser(dc: DataConnect, vars: ListJobsForUserVariables): QueryPromise<ListJobsForUserData, ListJobsForUserVariables>;

interface ListJobsForUserRef {
  ...
  (dc: DataConnect, vars: ListJobsForUserVariables): QueryRef<ListJobsForUserData, ListJobsForUserVariables>;
}
export const listJobsForUserRef: ListJobsForUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listJobsForUserRef:
```typescript
const name = listJobsForUserRef.operationName;
console.log(name);
```

### Variables
The `ListJobsForUser` query requires an argument of type `ListJobsForUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListJobsForUserVariables {
  userId: UUIDString;
}
```
### Return Type
Recall that executing the `ListJobsForUser` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListJobsForUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListJobsForUserData {
  jobs: ({
    id: UUIDString;
    startDate: DateString;
    status: JobStatus;
    notes?: string | null;
    mover: {
      companyName: string;
    };
  } & Job_Key)[];
}
```
### Using `ListJobsForUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listJobsForUser, ListJobsForUserVariables } from '@dataconnect/generated';

// The `ListJobsForUser` query requires an argument of type `ListJobsForUserVariables`:
const listJobsForUserVars: ListJobsForUserVariables = {
  userId: ..., 
};

// Call the `listJobsForUser()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listJobsForUser(listJobsForUserVars);
// Variables can be defined inline as well.
const { data } = await listJobsForUser({ userId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listJobsForUser(dataConnect, listJobsForUserVars);

console.log(data.jobs);

// Or, you can use the `Promise` API.
listJobsForUser(listJobsForUserVars).then((response) => {
  const data = response.data;
  console.log(data.jobs);
});
```

### Using `ListJobsForUser`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listJobsForUserRef, ListJobsForUserVariables } from '@dataconnect/generated';

// The `ListJobsForUser` query requires an argument of type `ListJobsForUserVariables`:
const listJobsForUserVars: ListJobsForUserVariables = {
  userId: ..., 
};

// Call the `listJobsForUserRef()` function to get a reference to the query.
const ref = listJobsForUserRef(listJobsForUserVars);
// Variables can be defined inline as well.
const ref = listJobsForUserRef({ userId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listJobsForUserRef(dataConnect, listJobsForUserVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.jobs);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.jobs);
});
```

## GetJob
You can execute the `GetJob` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getJob(vars: GetJobVariables): QueryPromise<GetJobData, GetJobVariables>;

interface GetJobRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetJobVariables): QueryRef<GetJobData, GetJobVariables>;
}
export const getJobRef: GetJobRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getJob(dc: DataConnect, vars: GetJobVariables): QueryPromise<GetJobData, GetJobVariables>;

interface GetJobRef {
  ...
  (dc: DataConnect, vars: GetJobVariables): QueryRef<GetJobData, GetJobVariables>;
}
export const getJobRef: GetJobRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getJobRef:
```typescript
const name = getJobRef.operationName;
console.log(name);
```

### Variables
The `GetJob` query requires an argument of type `GetJobVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetJobVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetJob` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetJobData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetJobData {
  job?: {
    id: UUIDString;
    startDate: DateString;
    status: JobStatus;
    notes?: string | null;
    createdAt: TimestampString;
    mover: {
      companyName: string;
      phoneNumber?: string | null;
    };
      movingRequest: {
        originAddress: string;
        destinationAddress: string;
      };
        bid: {
          amount: number;
        };
  } & Job_Key;
}
```
### Using `GetJob`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getJob, GetJobVariables } from '@dataconnect/generated';

// The `GetJob` query requires an argument of type `GetJobVariables`:
const getJobVars: GetJobVariables = {
  id: ..., 
};

// Call the `getJob()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getJob(getJobVars);
// Variables can be defined inline as well.
const { data } = await getJob({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getJob(dataConnect, getJobVars);

console.log(data.job);

// Or, you can use the `Promise` API.
getJob(getJobVars).then((response) => {
  const data = response.data;
  console.log(data.job);
});
```

### Using `GetJob`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getJobRef, GetJobVariables } from '@dataconnect/generated';

// The `GetJob` query requires an argument of type `GetJobVariables`:
const getJobVars: GetJobVariables = {
  id: ..., 
};

// Call the `getJobRef()` function to get a reference to the query.
const ref = getJobRef(getJobVars);
// Variables can be defined inline as well.
const ref = getJobRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getJobRef(dataConnect, getJobVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.job);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.job);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `moving` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateUser
You can execute the `CreateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface CreateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
}
export const createUserRef: CreateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface CreateUserRef {
  ...
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
}
export const createUserRef: CreateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createUserRef:
```typescript
const name = createUserRef.operationName;
console.log(name);
```

### Variables
The `CreateUser` mutation requires an argument of type `CreateUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateUserVariables {
  displayName: string;
  email: string;
  phoneNumber?: string | null;
  address?: string | null;
}
```
### Return Type
Recall that executing the `CreateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateUserData {
  user_insert: User_Key;
}
```
### Using `CreateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createUser, CreateUserVariables } from '@dataconnect/generated';

// The `CreateUser` mutation requires an argument of type `CreateUserVariables`:
const createUserVars: CreateUserVariables = {
  displayName: ..., 
  email: ..., 
  phoneNumber: ..., // optional
  address: ..., // optional
};

// Call the `createUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createUser(createUserVars);
// Variables can be defined inline as well.
const { data } = await createUser({ displayName: ..., email: ..., phoneNumber: ..., address: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createUser(dataConnect, createUserVars);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
createUser(createUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `CreateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createUserRef, CreateUserVariables } from '@dataconnect/generated';

// The `CreateUser` mutation requires an argument of type `CreateUserVariables`:
const createUserVars: CreateUserVariables = {
  displayName: ..., 
  email: ..., 
  phoneNumber: ..., // optional
  address: ..., // optional
};

// Call the `createUserRef()` function to get a reference to the mutation.
const ref = createUserRef(createUserVars);
// Variables can be defined inline as well.
const ref = createUserRef({ displayName: ..., email: ..., phoneNumber: ..., address: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createUserRef(dataConnect, createUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

## UpdateUser
You can execute the `UpdateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateUser(vars: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;

interface UpdateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
}
export const updateUserRef: UpdateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateUser(dc: DataConnect, vars: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;

interface UpdateUserRef {
  ...
  (dc: DataConnect, vars: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
}
export const updateUserRef: UpdateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateUserRef:
```typescript
const name = updateUserRef.operationName;
console.log(name);
```

### Variables
The `UpdateUser` mutation requires an argument of type `UpdateUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateUserVariables {
  id: UUIDString;
  displayName?: string | null;
  phoneNumber?: string | null;
  address?: string | null;
}
```
### Return Type
Recall that executing the `UpdateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateUserData {
  user_update?: User_Key | null;
}
```
### Using `UpdateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateUser, UpdateUserVariables } from '@dataconnect/generated';

// The `UpdateUser` mutation requires an argument of type `UpdateUserVariables`:
const updateUserVars: UpdateUserVariables = {
  id: ..., 
  displayName: ..., // optional
  phoneNumber: ..., // optional
  address: ..., // optional
};

// Call the `updateUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateUser(updateUserVars);
// Variables can be defined inline as well.
const { data } = await updateUser({ id: ..., displayName: ..., phoneNumber: ..., address: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateUser(dataConnect, updateUserVars);

console.log(data.user_update);

// Or, you can use the `Promise` API.
updateUser(updateUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

### Using `UpdateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateUserRef, UpdateUserVariables } from '@dataconnect/generated';

// The `UpdateUser` mutation requires an argument of type `UpdateUserVariables`:
const updateUserVars: UpdateUserVariables = {
  id: ..., 
  displayName: ..., // optional
  phoneNumber: ..., // optional
  address: ..., // optional
};

// Call the `updateUserRef()` function to get a reference to the mutation.
const ref = updateUserRef(updateUserVars);
// Variables can be defined inline as well.
const ref = updateUserRef({ id: ..., displayName: ..., phoneNumber: ..., address: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateUserRef(dataConnect, updateUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

## CreateMover
You can execute the `CreateMover` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createMover(vars: CreateMoverVariables): MutationPromise<CreateMoverData, CreateMoverVariables>;

interface CreateMoverRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateMoverVariables): MutationRef<CreateMoverData, CreateMoverVariables>;
}
export const createMoverRef: CreateMoverRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createMover(dc: DataConnect, vars: CreateMoverVariables): MutationPromise<CreateMoverData, CreateMoverVariables>;

interface CreateMoverRef {
  ...
  (dc: DataConnect, vars: CreateMoverVariables): MutationRef<CreateMoverData, CreateMoverVariables>;
}
export const createMoverRef: CreateMoverRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createMoverRef:
```typescript
const name = createMoverRef.operationName;
console.log(name);
```

### Variables
The `CreateMover` mutation requires an argument of type `CreateMoverVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateMoverVariables {
  companyName: string;
  email: string;
  phoneNumber?: string | null;
  address?: string | null;
  serviceAreas?: string[] | null;
}
```
### Return Type
Recall that executing the `CreateMover` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateMoverData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateMoverData {
  mover_insert: Mover_Key;
}
```
### Using `CreateMover`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createMover, CreateMoverVariables } from '@dataconnect/generated';

// The `CreateMover` mutation requires an argument of type `CreateMoverVariables`:
const createMoverVars: CreateMoverVariables = {
  companyName: ..., 
  email: ..., 
  phoneNumber: ..., // optional
  address: ..., // optional
  serviceAreas: ..., // optional
};

// Call the `createMover()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createMover(createMoverVars);
// Variables can be defined inline as well.
const { data } = await createMover({ companyName: ..., email: ..., phoneNumber: ..., address: ..., serviceAreas: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createMover(dataConnect, createMoverVars);

console.log(data.mover_insert);

// Or, you can use the `Promise` API.
createMover(createMoverVars).then((response) => {
  const data = response.data;
  console.log(data.mover_insert);
});
```

### Using `CreateMover`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createMoverRef, CreateMoverVariables } from '@dataconnect/generated';

// The `CreateMover` mutation requires an argument of type `CreateMoverVariables`:
const createMoverVars: CreateMoverVariables = {
  companyName: ..., 
  email: ..., 
  phoneNumber: ..., // optional
  address: ..., // optional
  serviceAreas: ..., // optional
};

// Call the `createMoverRef()` function to get a reference to the mutation.
const ref = createMoverRef(createMoverVars);
// Variables can be defined inline as well.
const ref = createMoverRef({ companyName: ..., email: ..., phoneNumber: ..., address: ..., serviceAreas: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createMoverRef(dataConnect, createMoverVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.mover_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.mover_insert);
});
```

## UpdateMover
You can execute the `UpdateMover` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateMover(vars: UpdateMoverVariables): MutationPromise<UpdateMoverData, UpdateMoverVariables>;

interface UpdateMoverRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateMoverVariables): MutationRef<UpdateMoverData, UpdateMoverVariables>;
}
export const updateMoverRef: UpdateMoverRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateMover(dc: DataConnect, vars: UpdateMoverVariables): MutationPromise<UpdateMoverData, UpdateMoverVariables>;

interface UpdateMoverRef {
  ...
  (dc: DataConnect, vars: UpdateMoverVariables): MutationRef<UpdateMoverData, UpdateMoverVariables>;
}
export const updateMoverRef: UpdateMoverRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateMoverRef:
```typescript
const name = updateMoverRef.operationName;
console.log(name);
```

### Variables
The `UpdateMover` mutation requires an argument of type `UpdateMoverVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateMoverVariables {
  id: UUIDString;
  companyName?: string | null;
  phoneNumber?: string | null;
  address?: string | null;
  serviceAreas?: string[] | null;
}
```
### Return Type
Recall that executing the `UpdateMover` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateMoverData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateMoverData {
  mover_update?: Mover_Key | null;
}
```
### Using `UpdateMover`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateMover, UpdateMoverVariables } from '@dataconnect/generated';

// The `UpdateMover` mutation requires an argument of type `UpdateMoverVariables`:
const updateMoverVars: UpdateMoverVariables = {
  id: ..., 
  companyName: ..., // optional
  phoneNumber: ..., // optional
  address: ..., // optional
  serviceAreas: ..., // optional
};

// Call the `updateMover()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateMover(updateMoverVars);
// Variables can be defined inline as well.
const { data } = await updateMover({ id: ..., companyName: ..., phoneNumber: ..., address: ..., serviceAreas: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateMover(dataConnect, updateMoverVars);

console.log(data.mover_update);

// Or, you can use the `Promise` API.
updateMover(updateMoverVars).then((response) => {
  const data = response.data;
  console.log(data.mover_update);
});
```

### Using `UpdateMover`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateMoverRef, UpdateMoverVariables } from '@dataconnect/generated';

// The `UpdateMover` mutation requires an argument of type `UpdateMoverVariables`:
const updateMoverVars: UpdateMoverVariables = {
  id: ..., 
  companyName: ..., // optional
  phoneNumber: ..., // optional
  address: ..., // optional
  serviceAreas: ..., // optional
};

// Call the `updateMoverRef()` function to get a reference to the mutation.
const ref = updateMoverRef(updateMoverVars);
// Variables can be defined inline as well.
const ref = updateMoverRef({ id: ..., companyName: ..., phoneNumber: ..., address: ..., serviceAreas: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateMoverRef(dataConnect, updateMoverVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.mover_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.mover_update);
});
```

## CreateVehicle
You can execute the `CreateVehicle` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createVehicle(vars: CreateVehicleVariables): MutationPromise<CreateVehicleData, CreateVehicleVariables>;

interface CreateVehicleRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateVehicleVariables): MutationRef<CreateVehicleData, CreateVehicleVariables>;
}
export const createVehicleRef: CreateVehicleRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createVehicle(dc: DataConnect, vars: CreateVehicleVariables): MutationPromise<CreateVehicleData, CreateVehicleVariables>;

interface CreateVehicleRef {
  ...
  (dc: DataConnect, vars: CreateVehicleVariables): MutationRef<CreateVehicleData, CreateVehicleVariables>;
}
export const createVehicleRef: CreateVehicleRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createVehicleRef:
```typescript
const name = createVehicleRef.operationName;
console.log(name);
```

### Variables
The `CreateVehicle` mutation requires an argument of type `CreateVehicleVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateVehicleVariables {
  moverId: UUIDString;
  make: string;
  model: string;
  year: number;
  licensePlate: string;
  capacity: number;
}
```
### Return Type
Recall that executing the `CreateVehicle` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateVehicleData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateVehicleData {
  vehicle_insert: Vehicle_Key;
}
```
### Using `CreateVehicle`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createVehicle, CreateVehicleVariables } from '@dataconnect/generated';

// The `CreateVehicle` mutation requires an argument of type `CreateVehicleVariables`:
const createVehicleVars: CreateVehicleVariables = {
  moverId: ..., 
  make: ..., 
  model: ..., 
  year: ..., 
  licensePlate: ..., 
  capacity: ..., 
};

// Call the `createVehicle()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createVehicle(createVehicleVars);
// Variables can be defined inline as well.
const { data } = await createVehicle({ moverId: ..., make: ..., model: ..., year: ..., licensePlate: ..., capacity: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createVehicle(dataConnect, createVehicleVars);

console.log(data.vehicle_insert);

// Or, you can use the `Promise` API.
createVehicle(createVehicleVars).then((response) => {
  const data = response.data;
  console.log(data.vehicle_insert);
});
```

### Using `CreateVehicle`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createVehicleRef, CreateVehicleVariables } from '@dataconnect/generated';

// The `CreateVehicle` mutation requires an argument of type `CreateVehicleVariables`:
const createVehicleVars: CreateVehicleVariables = {
  moverId: ..., 
  make: ..., 
  model: ..., 
  year: ..., 
  licensePlate: ..., 
  capacity: ..., 
};

// Call the `createVehicleRef()` function to get a reference to the mutation.
const ref = createVehicleRef(createVehicleVars);
// Variables can be defined inline as well.
const ref = createVehicleRef({ moverId: ..., make: ..., model: ..., year: ..., licensePlate: ..., capacity: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createVehicleRef(dataConnect, createVehicleVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.vehicle_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.vehicle_insert);
});
```

## CreateMovingRequest
You can execute the `CreateMovingRequest` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createMovingRequest(vars: CreateMovingRequestVariables): MutationPromise<CreateMovingRequestData, CreateMovingRequestVariables>;

interface CreateMovingRequestRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateMovingRequestVariables): MutationRef<CreateMovingRequestData, CreateMovingRequestVariables>;
}
export const createMovingRequestRef: CreateMovingRequestRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createMovingRequest(dc: DataConnect, vars: CreateMovingRequestVariables): MutationPromise<CreateMovingRequestData, CreateMovingRequestVariables>;

interface CreateMovingRequestRef {
  ...
  (dc: DataConnect, vars: CreateMovingRequestVariables): MutationRef<CreateMovingRequestData, CreateMovingRequestVariables>;
}
export const createMovingRequestRef: CreateMovingRequestRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createMovingRequestRef:
```typescript
const name = createMovingRequestRef.operationName;
console.log(name);
```

### Variables
The `CreateMovingRequest` mutation requires an argument of type `CreateMovingRequestVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateMovingRequestVariables {
  userId: UUIDString;
  originAddress: string;
  destinationAddress: string;
  moveDate: DateString;
}
```
### Return Type
Recall that executing the `CreateMovingRequest` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateMovingRequestData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateMovingRequestData {
  movingRequest_insert: MovingRequest_Key;
}
```
### Using `CreateMovingRequest`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createMovingRequest, CreateMovingRequestVariables } from '@dataconnect/generated';

// The `CreateMovingRequest` mutation requires an argument of type `CreateMovingRequestVariables`:
const createMovingRequestVars: CreateMovingRequestVariables = {
  userId: ..., 
  originAddress: ..., 
  destinationAddress: ..., 
  moveDate: ..., 
};

// Call the `createMovingRequest()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createMovingRequest(createMovingRequestVars);
// Variables can be defined inline as well.
const { data } = await createMovingRequest({ userId: ..., originAddress: ..., destinationAddress: ..., moveDate: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createMovingRequest(dataConnect, createMovingRequestVars);

console.log(data.movingRequest_insert);

// Or, you can use the `Promise` API.
createMovingRequest(createMovingRequestVars).then((response) => {
  const data = response.data;
  console.log(data.movingRequest_insert);
});
```

### Using `CreateMovingRequest`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createMovingRequestRef, CreateMovingRequestVariables } from '@dataconnect/generated';

// The `CreateMovingRequest` mutation requires an argument of type `CreateMovingRequestVariables`:
const createMovingRequestVars: CreateMovingRequestVariables = {
  userId: ..., 
  originAddress: ..., 
  destinationAddress: ..., 
  moveDate: ..., 
};

// Call the `createMovingRequestRef()` function to get a reference to the mutation.
const ref = createMovingRequestRef(createMovingRequestVars);
// Variables can be defined inline as well.
const ref = createMovingRequestRef({ userId: ..., originAddress: ..., destinationAddress: ..., moveDate: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createMovingRequestRef(dataConnect, createMovingRequestVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.movingRequest_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.movingRequest_insert);
});
```

## UpdateMovingRequestStatus
You can execute the `UpdateMovingRequestStatus` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateMovingRequestStatus(vars: UpdateMovingRequestStatusVariables): MutationPromise<UpdateMovingRequestStatusData, UpdateMovingRequestStatusVariables>;

interface UpdateMovingRequestStatusRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateMovingRequestStatusVariables): MutationRef<UpdateMovingRequestStatusData, UpdateMovingRequestStatusVariables>;
}
export const updateMovingRequestStatusRef: UpdateMovingRequestStatusRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateMovingRequestStatus(dc: DataConnect, vars: UpdateMovingRequestStatusVariables): MutationPromise<UpdateMovingRequestStatusData, UpdateMovingRequestStatusVariables>;

interface UpdateMovingRequestStatusRef {
  ...
  (dc: DataConnect, vars: UpdateMovingRequestStatusVariables): MutationRef<UpdateMovingRequestStatusData, UpdateMovingRequestStatusVariables>;
}
export const updateMovingRequestStatusRef: UpdateMovingRequestStatusRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateMovingRequestStatusRef:
```typescript
const name = updateMovingRequestStatusRef.operationName;
console.log(name);
```

### Variables
The `UpdateMovingRequestStatus` mutation requires an argument of type `UpdateMovingRequestStatusVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateMovingRequestStatusVariables {
  id: UUIDString;
  status: RequestStatus;
}
```
### Return Type
Recall that executing the `UpdateMovingRequestStatus` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateMovingRequestStatusData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateMovingRequestStatusData {
  movingRequest_update?: MovingRequest_Key | null;
}
```
### Using `UpdateMovingRequestStatus`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateMovingRequestStatus, UpdateMovingRequestStatusVariables } from '@dataconnect/generated';

// The `UpdateMovingRequestStatus` mutation requires an argument of type `UpdateMovingRequestStatusVariables`:
const updateMovingRequestStatusVars: UpdateMovingRequestStatusVariables = {
  id: ..., 
  status: ..., 
};

// Call the `updateMovingRequestStatus()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateMovingRequestStatus(updateMovingRequestStatusVars);
// Variables can be defined inline as well.
const { data } = await updateMovingRequestStatus({ id: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateMovingRequestStatus(dataConnect, updateMovingRequestStatusVars);

console.log(data.movingRequest_update);

// Or, you can use the `Promise` API.
updateMovingRequestStatus(updateMovingRequestStatusVars).then((response) => {
  const data = response.data;
  console.log(data.movingRequest_update);
});
```

### Using `UpdateMovingRequestStatus`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateMovingRequestStatusRef, UpdateMovingRequestStatusVariables } from '@dataconnect/generated';

// The `UpdateMovingRequestStatus` mutation requires an argument of type `UpdateMovingRequestStatusVariables`:
const updateMovingRequestStatusVars: UpdateMovingRequestStatusVariables = {
  id: ..., 
  status: ..., 
};

// Call the `updateMovingRequestStatusRef()` function to get a reference to the mutation.
const ref = updateMovingRequestStatusRef(updateMovingRequestStatusVars);
// Variables can be defined inline as well.
const ref = updateMovingRequestStatusRef({ id: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateMovingRequestStatusRef(dataConnect, updateMovingRequestStatusVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.movingRequest_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.movingRequest_update);
});
```

## CreateBid
You can execute the `CreateBid` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createBid(vars: CreateBidVariables): MutationPromise<CreateBidData, CreateBidVariables>;

interface CreateBidRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateBidVariables): MutationRef<CreateBidData, CreateBidVariables>;
}
export const createBidRef: CreateBidRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createBid(dc: DataConnect, vars: CreateBidVariables): MutationPromise<CreateBidData, CreateBidVariables>;

interface CreateBidRef {
  ...
  (dc: DataConnect, vars: CreateBidVariables): MutationRef<CreateBidData, CreateBidVariables>;
}
export const createBidRef: CreateBidRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createBidRef:
```typescript
const name = createBidRef.operationName;
console.log(name);
```

### Variables
The `CreateBid` mutation requires an argument of type `CreateBidVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateBidVariables {
  moverId: UUIDString;
  movingRequestId: UUIDString;
  amount: number;
}
```
### Return Type
Recall that executing the `CreateBid` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateBidData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateBidData {
  bid_insert: Bid_Key;
}
```
### Using `CreateBid`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createBid, CreateBidVariables } from '@dataconnect/generated';

// The `CreateBid` mutation requires an argument of type `CreateBidVariables`:
const createBidVars: CreateBidVariables = {
  moverId: ..., 
  movingRequestId: ..., 
  amount: ..., 
};

// Call the `createBid()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createBid(createBidVars);
// Variables can be defined inline as well.
const { data } = await createBid({ moverId: ..., movingRequestId: ..., amount: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createBid(dataConnect, createBidVars);

console.log(data.bid_insert);

// Or, you can use the `Promise` API.
createBid(createBidVars).then((response) => {
  const data = response.data;
  console.log(data.bid_insert);
});
```

### Using `CreateBid`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createBidRef, CreateBidVariables } from '@dataconnect/generated';

// The `CreateBid` mutation requires an argument of type `CreateBidVariables`:
const createBidVars: CreateBidVariables = {
  moverId: ..., 
  movingRequestId: ..., 
  amount: ..., 
};

// Call the `createBidRef()` function to get a reference to the mutation.
const ref = createBidRef(createBidVars);
// Variables can be defined inline as well.
const ref = createBidRef({ moverId: ..., movingRequestId: ..., amount: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createBidRef(dataConnect, createBidVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.bid_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.bid_insert);
});
```

## UpdateBidStatus
You can execute the `UpdateBidStatus` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateBidStatus(vars: UpdateBidStatusVariables): MutationPromise<UpdateBidStatusData, UpdateBidStatusVariables>;

interface UpdateBidStatusRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateBidStatusVariables): MutationRef<UpdateBidStatusData, UpdateBidStatusVariables>;
}
export const updateBidStatusRef: UpdateBidStatusRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateBidStatus(dc: DataConnect, vars: UpdateBidStatusVariables): MutationPromise<UpdateBidStatusData, UpdateBidStatusVariables>;

interface UpdateBidStatusRef {
  ...
  (dc: DataConnect, vars: UpdateBidStatusVariables): MutationRef<UpdateBidStatusData, UpdateBidStatusVariables>;
}
export const updateBidStatusRef: UpdateBidStatusRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateBidStatusRef:
```typescript
const name = updateBidStatusRef.operationName;
console.log(name);
```

### Variables
The `UpdateBidStatus` mutation requires an argument of type `UpdateBidStatusVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateBidStatusVariables {
  id: UUIDString;
  status: BidStatus;
}
```
### Return Type
Recall that executing the `UpdateBidStatus` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateBidStatusData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateBidStatusData {
  bid_update?: Bid_Key | null;
}
```
### Using `UpdateBidStatus`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateBidStatus, UpdateBidStatusVariables } from '@dataconnect/generated';

// The `UpdateBidStatus` mutation requires an argument of type `UpdateBidStatusVariables`:
const updateBidStatusVars: UpdateBidStatusVariables = {
  id: ..., 
  status: ..., 
};

// Call the `updateBidStatus()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateBidStatus(updateBidStatusVars);
// Variables can be defined inline as well.
const { data } = await updateBidStatus({ id: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateBidStatus(dataConnect, updateBidStatusVars);

console.log(data.bid_update);

// Or, you can use the `Promise` API.
updateBidStatus(updateBidStatusVars).then((response) => {
  const data = response.data;
  console.log(data.bid_update);
});
```

### Using `UpdateBidStatus`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateBidStatusRef, UpdateBidStatusVariables } from '@dataconnect/generated';

// The `UpdateBidStatus` mutation requires an argument of type `UpdateBidStatusVariables`:
const updateBidStatusVars: UpdateBidStatusVariables = {
  id: ..., 
  status: ..., 
};

// Call the `updateBidStatusRef()` function to get a reference to the mutation.
const ref = updateBidStatusRef(updateBidStatusVars);
// Variables can be defined inline as well.
const ref = updateBidStatusRef({ id: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateBidStatusRef(dataConnect, updateBidStatusVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.bid_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.bid_update);
});
```

## CreateJob
You can execute the `CreateJob` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createJob(vars: CreateJobVariables): MutationPromise<CreateJobData, CreateJobVariables>;

interface CreateJobRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateJobVariables): MutationRef<CreateJobData, CreateJobVariables>;
}
export const createJobRef: CreateJobRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createJob(dc: DataConnect, vars: CreateJobVariables): MutationPromise<CreateJobData, CreateJobVariables>;

interface CreateJobRef {
  ...
  (dc: DataConnect, vars: CreateJobVariables): MutationRef<CreateJobData, CreateJobVariables>;
}
export const createJobRef: CreateJobRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createJobRef:
```typescript
const name = createJobRef.operationName;
console.log(name);
```

### Variables
The `CreateJob` mutation requires an argument of type `CreateJobVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateJobVariables {
  movingRequestId: UUIDString;
  moverId: UUIDString;
  bidId: UUIDString;
  vehicleId: UUIDString;
  startDate: DateString;
}
```
### Return Type
Recall that executing the `CreateJob` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateJobData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateJobData {
  job_insert: Job_Key;
}
```
### Using `CreateJob`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createJob, CreateJobVariables } from '@dataconnect/generated';

// The `CreateJob` mutation requires an argument of type `CreateJobVariables`:
const createJobVars: CreateJobVariables = {
  movingRequestId: ..., 
  moverId: ..., 
  bidId: ..., 
  vehicleId: ..., 
  startDate: ..., 
};

// Call the `createJob()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createJob(createJobVars);
// Variables can be defined inline as well.
const { data } = await createJob({ movingRequestId: ..., moverId: ..., bidId: ..., vehicleId: ..., startDate: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createJob(dataConnect, createJobVars);

console.log(data.job_insert);

// Or, you can use the `Promise` API.
createJob(createJobVars).then((response) => {
  const data = response.data;
  console.log(data.job_insert);
});
```

### Using `CreateJob`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createJobRef, CreateJobVariables } from '@dataconnect/generated';

// The `CreateJob` mutation requires an argument of type `CreateJobVariables`:
const createJobVars: CreateJobVariables = {
  movingRequestId: ..., 
  moverId: ..., 
  bidId: ..., 
  vehicleId: ..., 
  startDate: ..., 
};

// Call the `createJobRef()` function to get a reference to the mutation.
const ref = createJobRef(createJobVars);
// Variables can be defined inline as well.
const ref = createJobRef({ movingRequestId: ..., moverId: ..., bidId: ..., vehicleId: ..., startDate: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createJobRef(dataConnect, createJobVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.job_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.job_insert);
});
```

## UpdateJobStatus
You can execute the `UpdateJobStatus` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateJobStatus(vars: UpdateJobStatusVariables): MutationPromise<UpdateJobStatusData, UpdateJobStatusVariables>;

interface UpdateJobStatusRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateJobStatusVariables): MutationRef<UpdateJobStatusData, UpdateJobStatusVariables>;
}
export const updateJobStatusRef: UpdateJobStatusRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateJobStatus(dc: DataConnect, vars: UpdateJobStatusVariables): MutationPromise<UpdateJobStatusData, UpdateJobStatusVariables>;

interface UpdateJobStatusRef {
  ...
  (dc: DataConnect, vars: UpdateJobStatusVariables): MutationRef<UpdateJobStatusData, UpdateJobStatusVariables>;
}
export const updateJobStatusRef: UpdateJobStatusRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateJobStatusRef:
```typescript
const name = updateJobStatusRef.operationName;
console.log(name);
```

### Variables
The `UpdateJobStatus` mutation requires an argument of type `UpdateJobStatusVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateJobStatusVariables {
  id: UUIDString;
  status: JobStatus;
}
```
### Return Type
Recall that executing the `UpdateJobStatus` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateJobStatusData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateJobStatusData {
  job_update?: Job_Key | null;
}
```
### Using `UpdateJobStatus`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateJobStatus, UpdateJobStatusVariables } from '@dataconnect/generated';

// The `UpdateJobStatus` mutation requires an argument of type `UpdateJobStatusVariables`:
const updateJobStatusVars: UpdateJobStatusVariables = {
  id: ..., 
  status: ..., 
};

// Call the `updateJobStatus()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateJobStatus(updateJobStatusVars);
// Variables can be defined inline as well.
const { data } = await updateJobStatus({ id: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateJobStatus(dataConnect, updateJobStatusVars);

console.log(data.job_update);

// Or, you can use the `Promise` API.
updateJobStatus(updateJobStatusVars).then((response) => {
  const data = response.data;
  console.log(data.job_update);
});
```

### Using `UpdateJobStatus`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateJobStatusRef, UpdateJobStatusVariables } from '@dataconnect/generated';

// The `UpdateJobStatus` mutation requires an argument of type `UpdateJobStatusVariables`:
const updateJobStatusVars: UpdateJobStatusVariables = {
  id: ..., 
  status: ..., 
};

// Call the `updateJobStatusRef()` function to get a reference to the mutation.
const ref = updateJobStatusRef(updateJobStatusVars);
// Variables can be defined inline as well.
const ref = updateJobStatusRef({ id: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateJobStatusRef(dataConnect, updateJobStatusVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.job_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.job_update);
});
```

## CreatePayment
You can execute the `CreatePayment` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createPayment(vars: CreatePaymentVariables): MutationPromise<CreatePaymentData, CreatePaymentVariables>;

interface CreatePaymentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreatePaymentVariables): MutationRef<CreatePaymentData, CreatePaymentVariables>;
}
export const createPaymentRef: CreatePaymentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createPayment(dc: DataConnect, vars: CreatePaymentVariables): MutationPromise<CreatePaymentData, CreatePaymentVariables>;

interface CreatePaymentRef {
  ...
  (dc: DataConnect, vars: CreatePaymentVariables): MutationRef<CreatePaymentData, CreatePaymentVariables>;
}
export const createPaymentRef: CreatePaymentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createPaymentRef:
```typescript
const name = createPaymentRef.operationName;
console.log(name);
```

### Variables
The `CreatePayment` mutation requires an argument of type `CreatePaymentVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreatePaymentVariables {
  jobId: UUIDString;
  amount: number;
  paymentType: string;
}
```
### Return Type
Recall that executing the `CreatePayment` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreatePaymentData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreatePaymentData {
  payment_insert: Payment_Key;
}
```
### Using `CreatePayment`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createPayment, CreatePaymentVariables } from '@dataconnect/generated';

// The `CreatePayment` mutation requires an argument of type `CreatePaymentVariables`:
const createPaymentVars: CreatePaymentVariables = {
  jobId: ..., 
  amount: ..., 
  paymentType: ..., 
};

// Call the `createPayment()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createPayment(createPaymentVars);
// Variables can be defined inline as well.
const { data } = await createPayment({ jobId: ..., amount: ..., paymentType: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createPayment(dataConnect, createPaymentVars);

console.log(data.payment_insert);

// Or, you can use the `Promise` API.
createPayment(createPaymentVars).then((response) => {
  const data = response.data;
  console.log(data.payment_insert);
});
```

### Using `CreatePayment`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createPaymentRef, CreatePaymentVariables } from '@dataconnect/generated';

// The `CreatePayment` mutation requires an argument of type `CreatePaymentVariables`:
const createPaymentVars: CreatePaymentVariables = {
  jobId: ..., 
  amount: ..., 
  paymentType: ..., 
};

// Call the `createPaymentRef()` function to get a reference to the mutation.
const ref = createPaymentRef(createPaymentVars);
// Variables can be defined inline as well.
const ref = createPaymentRef({ jobId: ..., amount: ..., paymentType: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createPaymentRef(dataConnect, createPaymentVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.payment_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.payment_insert);
});
```

## CreateInvoice
You can execute the `CreateInvoice` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createInvoice(vars: CreateInvoiceVariables): MutationPromise<CreateInvoiceData, CreateInvoiceVariables>;

interface CreateInvoiceRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateInvoiceVariables): MutationRef<CreateInvoiceData, CreateInvoiceVariables>;
}
export const createInvoiceRef: CreateInvoiceRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createInvoice(dc: DataConnect, vars: CreateInvoiceVariables): MutationPromise<CreateInvoiceData, CreateInvoiceVariables>;

interface CreateInvoiceRef {
  ...
  (dc: DataConnect, vars: CreateInvoiceVariables): MutationRef<CreateInvoiceData, CreateInvoiceVariables>;
}
export const createInvoiceRef: CreateInvoiceRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createInvoiceRef:
```typescript
const name = createInvoiceRef.operationName;
console.log(name);
```

### Variables
The `CreateInvoice` mutation requires an argument of type `CreateInvoiceVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateInvoiceVariables {
  jobId: UUIDString;
  amountDue: number;
  dueDate: DateString;
  issueDate: DateString;
}
```
### Return Type
Recall that executing the `CreateInvoice` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateInvoiceData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateInvoiceData {
  invoice_insert: Invoice_Key;
}
```
### Using `CreateInvoice`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createInvoice, CreateInvoiceVariables } from '@dataconnect/generated';

// The `CreateInvoice` mutation requires an argument of type `CreateInvoiceVariables`:
const createInvoiceVars: CreateInvoiceVariables = {
  jobId: ..., 
  amountDue: ..., 
  dueDate: ..., 
  issueDate: ..., 
};

// Call the `createInvoice()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createInvoice(createInvoiceVars);
// Variables can be defined inline as well.
const { data } = await createInvoice({ jobId: ..., amountDue: ..., dueDate: ..., issueDate: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createInvoice(dataConnect, createInvoiceVars);

console.log(data.invoice_insert);

// Or, you can use the `Promise` API.
createInvoice(createInvoiceVars).then((response) => {
  const data = response.data;
  console.log(data.invoice_insert);
});
```

### Using `CreateInvoice`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createInvoiceRef, CreateInvoiceVariables } from '@dataconnect/generated';

// The `CreateInvoice` mutation requires an argument of type `CreateInvoiceVariables`:
const createInvoiceVars: CreateInvoiceVariables = {
  jobId: ..., 
  amountDue: ..., 
  dueDate: ..., 
  issueDate: ..., 
};

// Call the `createInvoiceRef()` function to get a reference to the mutation.
const ref = createInvoiceRef(createInvoiceVars);
// Variables can be defined inline as well.
const ref = createInvoiceRef({ jobId: ..., amountDue: ..., dueDate: ..., issueDate: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createInvoiceRef(dataConnect, createInvoiceVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.invoice_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.invoice_insert);
});
```

