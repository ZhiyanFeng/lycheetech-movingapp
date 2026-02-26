# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useGetUser, useGetUserByEmail, useListMovers, useGetMover, useListMovingRequestsByStatus, useGetMovingRequest, useListBidsForRequest, useListJobsForUser, useGetJob, useCreateUser } from '@dataconnect/generated/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useGetUser(getUserVars);

const { data, isPending, isSuccess, isError, error } = useGetUserByEmail(getUserByEmailVars);

const { data, isPending, isSuccess, isError, error } = useListMovers();

const { data, isPending, isSuccess, isError, error } = useGetMover(getMoverVars);

const { data, isPending, isSuccess, isError, error } = useListMovingRequestsByStatus(listMovingRequestsByStatusVars);

const { data, isPending, isSuccess, isError, error } = useGetMovingRequest(getMovingRequestVars);

const { data, isPending, isSuccess, isError, error } = useListBidsForRequest(listBidsForRequestVars);

const { data, isPending, isSuccess, isError, error } = useListJobsForUser(listJobsForUserVars);

const { data, isPending, isSuccess, isError, error } = useGetJob(getJobVars);

const { data, isPending, isSuccess, isError, error } = useCreateUser(createUserVars);

```

Here's an example from a different generated SDK:

```ts
import { useListAllMovies } from '@dataconnect/generated/react';

function MyComponent() {
  const { isLoading, data, error } = useListAllMovies();
  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div> An Error Occurred: {error} </div>
  }
}

// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyComponent from './my-component';

function App() {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
    <MyComponent />
  </QueryClientProvider>
}
```



## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { getUser, getUserByEmail, listMovers, getMover, listMovingRequestsByStatus, getMovingRequest, listBidsForRequest, listJobsForUser, getJob, createUser } from '@dataconnect/generated';


// Operation GetUser:  For variables, look at type GetUserVars in ../index.d.ts
const { data } = await GetUser(dataConnect, getUserVars);

// Operation GetUserByEmail:  For variables, look at type GetUserByEmailVars in ../index.d.ts
const { data } = await GetUserByEmail(dataConnect, getUserByEmailVars);

// Operation ListMovers: 
const { data } = await ListMovers(dataConnect);

// Operation GetMover:  For variables, look at type GetMoverVars in ../index.d.ts
const { data } = await GetMover(dataConnect, getMoverVars);

// Operation ListMovingRequestsByStatus:  For variables, look at type ListMovingRequestsByStatusVars in ../index.d.ts
const { data } = await ListMovingRequestsByStatus(dataConnect, listMovingRequestsByStatusVars);

// Operation GetMovingRequest:  For variables, look at type GetMovingRequestVars in ../index.d.ts
const { data } = await GetMovingRequest(dataConnect, getMovingRequestVars);

// Operation ListBidsForRequest:  For variables, look at type ListBidsForRequestVars in ../index.d.ts
const { data } = await ListBidsForRequest(dataConnect, listBidsForRequestVars);

// Operation ListJobsForUser:  For variables, look at type ListJobsForUserVars in ../index.d.ts
const { data } = await ListJobsForUser(dataConnect, listJobsForUserVars);

// Operation GetJob:  For variables, look at type GetJobVars in ../index.d.ts
const { data } = await GetJob(dataConnect, getJobVars);

// Operation CreateUser:  For variables, look at type CreateUserVars in ../index.d.ts
const { data } = await CreateUser(dataConnect, createUserVars);


```