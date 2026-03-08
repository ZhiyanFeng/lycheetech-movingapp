# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useCreateUser, useUpdateUser, useCreateMover, useUpdateMover, useCreateVehicle, useCreateMovingRequest, useUpdateMovingRequestStatus, useCreateBid, useUpdateBidStatus, useCreateJob } from '@dataconnect/generated/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useCreateUser(createUserVars);

const { data, isPending, isSuccess, isError, error } = useUpdateUser(updateUserVars);

const { data, isPending, isSuccess, isError, error } = useCreateMover(createMoverVars);

const { data, isPending, isSuccess, isError, error } = useUpdateMover(updateMoverVars);

const { data, isPending, isSuccess, isError, error } = useCreateVehicle(createVehicleVars);

const { data, isPending, isSuccess, isError, error } = useCreateMovingRequest(createMovingRequestVars);

const { data, isPending, isSuccess, isError, error } = useUpdateMovingRequestStatus(updateMovingRequestStatusVars);

const { data, isPending, isSuccess, isError, error } = useCreateBid(createBidVars);

const { data, isPending, isSuccess, isError, error } = useUpdateBidStatus(updateBidStatusVars);

const { data, isPending, isSuccess, isError, error } = useCreateJob(createJobVars);

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
import { createUser, updateUser, createMover, updateMover, createVehicle, createMovingRequest, updateMovingRequestStatus, createBid, updateBidStatus, createJob } from '@dataconnect/generated';


// Operation CreateUser:  For variables, look at type CreateUserVars in ../index.d.ts
const { data } = await CreateUser(dataConnect, createUserVars);

// Operation UpdateUser:  For variables, look at type UpdateUserVars in ../index.d.ts
const { data } = await UpdateUser(dataConnect, updateUserVars);

// Operation CreateMover:  For variables, look at type CreateMoverVars in ../index.d.ts
const { data } = await CreateMover(dataConnect, createMoverVars);

// Operation UpdateMover:  For variables, look at type UpdateMoverVars in ../index.d.ts
const { data } = await UpdateMover(dataConnect, updateMoverVars);

// Operation CreateVehicle:  For variables, look at type CreateVehicleVars in ../index.d.ts
const { data } = await CreateVehicle(dataConnect, createVehicleVars);

// Operation CreateMovingRequest:  For variables, look at type CreateMovingRequestVars in ../index.d.ts
const { data } = await CreateMovingRequest(dataConnect, createMovingRequestVars);

// Operation UpdateMovingRequestStatus:  For variables, look at type UpdateMovingRequestStatusVars in ../index.d.ts
const { data } = await UpdateMovingRequestStatus(dataConnect, updateMovingRequestStatusVars);

// Operation CreateBid:  For variables, look at type CreateBidVars in ../index.d.ts
const { data } = await CreateBid(dataConnect, createBidVars);

// Operation UpdateBidStatus:  For variables, look at type UpdateBidStatusVars in ../index.d.ts
const { data } = await UpdateBidStatus(dataConnect, updateBidStatusVars);

// Operation CreateJob:  For variables, look at type CreateJobVars in ../index.d.ts
const { data } = await CreateJob(dataConnect, createJobVars);


```