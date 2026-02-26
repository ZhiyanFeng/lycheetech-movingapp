import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const BidStatus = {
  PENDING: "PENDING",
  ACCEPTED: "ACCEPTED",
  REJECTED: "REJECTED",
}

export const JobStatus = {
  SCHEDULED: "SCHEDULED",
  IN_PROGRESS: "IN_PROGRESS",
  COMPLETED: "COMPLETED",
  CANCELLED: "CANCELLED",
}

export const RequestStatus = {
  OPEN: "OPEN",
  ASSIGNED: "ASSIGNED",
  COMPLETED: "COMPLETED",
  CANCELLED: "CANCELLED",
}

export const connectorConfig = {
  connector: 'moving',
  service: 'lychee-moving-development',
  location: 'northamerica-northeast2'
};

export const getUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUser', inputVars);
}
getUserRef.operationName = 'GetUser';

export function getUser(dcOrVars, vars) {
  return executeQuery(getUserRef(dcOrVars, vars));
}

export const getUserByEmailRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUserByEmail', inputVars);
}
getUserByEmailRef.operationName = 'GetUserByEmail';

export function getUserByEmail(dcOrVars, vars) {
  return executeQuery(getUserByEmailRef(dcOrVars, vars));
}

export const listMoversRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListMovers');
}
listMoversRef.operationName = 'ListMovers';

export function listMovers(dc) {
  return executeQuery(listMoversRef(dc));
}

export const getMoverRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMover', inputVars);
}
getMoverRef.operationName = 'GetMover';

export function getMover(dcOrVars, vars) {
  return executeQuery(getMoverRef(dcOrVars, vars));
}

export const listMovingRequestsByStatusRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListMovingRequestsByStatus', inputVars);
}
listMovingRequestsByStatusRef.operationName = 'ListMovingRequestsByStatus';

export function listMovingRequestsByStatus(dcOrVars, vars) {
  return executeQuery(listMovingRequestsByStatusRef(dcOrVars, vars));
}

export const getMovingRequestRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMovingRequest', inputVars);
}
getMovingRequestRef.operationName = 'GetMovingRequest';

export function getMovingRequest(dcOrVars, vars) {
  return executeQuery(getMovingRequestRef(dcOrVars, vars));
}

export const listBidsForRequestRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListBidsForRequest', inputVars);
}
listBidsForRequestRef.operationName = 'ListBidsForRequest';

export function listBidsForRequest(dcOrVars, vars) {
  return executeQuery(listBidsForRequestRef(dcOrVars, vars));
}

export const listJobsForUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListJobsForUser', inputVars);
}
listJobsForUserRef.operationName = 'ListJobsForUser';

export function listJobsForUser(dcOrVars, vars) {
  return executeQuery(listJobsForUserRef(dcOrVars, vars));
}

export const getJobRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetJob', inputVars);
}
getJobRef.operationName = 'GetJob';

export function getJob(dcOrVars, vars) {
  return executeQuery(getJobRef(dcOrVars, vars));
}

export const createUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUser', inputVars);
}
createUserRef.operationName = 'CreateUser';

export function createUser(dcOrVars, vars) {
  return executeMutation(createUserRef(dcOrVars, vars));
}

export const updateUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateUser', inputVars);
}
updateUserRef.operationName = 'UpdateUser';

export function updateUser(dcOrVars, vars) {
  return executeMutation(updateUserRef(dcOrVars, vars));
}

export const createMoverRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateMover', inputVars);
}
createMoverRef.operationName = 'CreateMover';

export function createMover(dcOrVars, vars) {
  return executeMutation(createMoverRef(dcOrVars, vars));
}

export const updateMoverRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateMover', inputVars);
}
updateMoverRef.operationName = 'UpdateMover';

export function updateMover(dcOrVars, vars) {
  return executeMutation(updateMoverRef(dcOrVars, vars));
}

export const createVehicleRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateVehicle', inputVars);
}
createVehicleRef.operationName = 'CreateVehicle';

export function createVehicle(dcOrVars, vars) {
  return executeMutation(createVehicleRef(dcOrVars, vars));
}

export const createMovingRequestRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateMovingRequest', inputVars);
}
createMovingRequestRef.operationName = 'CreateMovingRequest';

export function createMovingRequest(dcOrVars, vars) {
  return executeMutation(createMovingRequestRef(dcOrVars, vars));
}

export const updateMovingRequestStatusRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateMovingRequestStatus', inputVars);
}
updateMovingRequestStatusRef.operationName = 'UpdateMovingRequestStatus';

export function updateMovingRequestStatus(dcOrVars, vars) {
  return executeMutation(updateMovingRequestStatusRef(dcOrVars, vars));
}

export const createBidRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateBid', inputVars);
}
createBidRef.operationName = 'CreateBid';

export function createBid(dcOrVars, vars) {
  return executeMutation(createBidRef(dcOrVars, vars));
}

export const updateBidStatusRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateBidStatus', inputVars);
}
updateBidStatusRef.operationName = 'UpdateBidStatus';

export function updateBidStatus(dcOrVars, vars) {
  return executeMutation(updateBidStatusRef(dcOrVars, vars));
}

export const createJobRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateJob', inputVars);
}
createJobRef.operationName = 'CreateJob';

export function createJob(dcOrVars, vars) {
  return executeMutation(createJobRef(dcOrVars, vars));
}

export const updateJobStatusRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateJobStatus', inputVars);
}
updateJobStatusRef.operationName = 'UpdateJobStatus';

export function updateJobStatus(dcOrVars, vars) {
  return executeMutation(updateJobStatusRef(dcOrVars, vars));
}

export const createPaymentRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreatePayment', inputVars);
}
createPaymentRef.operationName = 'CreatePayment';

export function createPayment(dcOrVars, vars) {
  return executeMutation(createPaymentRef(dcOrVars, vars));
}

export const createInvoiceRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateInvoice', inputVars);
}
createInvoiceRef.operationName = 'CreateInvoice';

export function createInvoice(dcOrVars, vars) {
  return executeMutation(createInvoiceRef(dcOrVars, vars));
}

