const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const BidStatus = {
  PENDING: "PENDING",
  ACCEPTED: "ACCEPTED",
  REJECTED: "REJECTED",
}
exports.BidStatus = BidStatus;

const JobStatus = {
  SCHEDULED: "SCHEDULED",
  IN_PROGRESS: "IN_PROGRESS",
  COMPLETED: "COMPLETED",
  CANCELLED: "CANCELLED",
}
exports.JobStatus = JobStatus;

const RequestStatus = {
  OPEN: "OPEN",
  ASSIGNED: "ASSIGNED",
  COMPLETED: "COMPLETED",
  CANCELLED: "CANCELLED",
}
exports.RequestStatus = RequestStatus;

const connectorConfig = {
  connector: 'moving',
  service: 'lychee-moving-development',
  location: 'northamerica-northeast2'
};
exports.connectorConfig = connectorConfig;

const getUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUser', inputVars);
}
getUserRef.operationName = 'GetUser';
exports.getUserRef = getUserRef;

exports.getUser = function getUser(dcOrVars, vars) {
  return executeQuery(getUserRef(dcOrVars, vars));
};

const getUserByEmailRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUserByEmail', inputVars);
}
getUserByEmailRef.operationName = 'GetUserByEmail';
exports.getUserByEmailRef = getUserByEmailRef;

exports.getUserByEmail = function getUserByEmail(dcOrVars, vars) {
  return executeQuery(getUserByEmailRef(dcOrVars, vars));
};

const listMoversRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListMovers');
}
listMoversRef.operationName = 'ListMovers';
exports.listMoversRef = listMoversRef;

exports.listMovers = function listMovers(dc) {
  return executeQuery(listMoversRef(dc));
};

const getMoverRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMover', inputVars);
}
getMoverRef.operationName = 'GetMover';
exports.getMoverRef = getMoverRef;

exports.getMover = function getMover(dcOrVars, vars) {
  return executeQuery(getMoverRef(dcOrVars, vars));
};

const listMovingRequestsByStatusRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListMovingRequestsByStatus', inputVars);
}
listMovingRequestsByStatusRef.operationName = 'ListMovingRequestsByStatus';
exports.listMovingRequestsByStatusRef = listMovingRequestsByStatusRef;

exports.listMovingRequestsByStatus = function listMovingRequestsByStatus(dcOrVars, vars) {
  return executeQuery(listMovingRequestsByStatusRef(dcOrVars, vars));
};

const getMovingRequestRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMovingRequest', inputVars);
}
getMovingRequestRef.operationName = 'GetMovingRequest';
exports.getMovingRequestRef = getMovingRequestRef;

exports.getMovingRequest = function getMovingRequest(dcOrVars, vars) {
  return executeQuery(getMovingRequestRef(dcOrVars, vars));
};

const listBidsForRequestRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListBidsForRequest', inputVars);
}
listBidsForRequestRef.operationName = 'ListBidsForRequest';
exports.listBidsForRequestRef = listBidsForRequestRef;

exports.listBidsForRequest = function listBidsForRequest(dcOrVars, vars) {
  return executeQuery(listBidsForRequestRef(dcOrVars, vars));
};

const listJobsForUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListJobsForUser', inputVars);
}
listJobsForUserRef.operationName = 'ListJobsForUser';
exports.listJobsForUserRef = listJobsForUserRef;

exports.listJobsForUser = function listJobsForUser(dcOrVars, vars) {
  return executeQuery(listJobsForUserRef(dcOrVars, vars));
};

const getJobRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetJob', inputVars);
}
getJobRef.operationName = 'GetJob';
exports.getJobRef = getJobRef;

exports.getJob = function getJob(dcOrVars, vars) {
  return executeQuery(getJobRef(dcOrVars, vars));
};

const createUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUser', inputVars);
}
createUserRef.operationName = 'CreateUser';
exports.createUserRef = createUserRef;

exports.createUser = function createUser(dcOrVars, vars) {
  return executeMutation(createUserRef(dcOrVars, vars));
};

const updateUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateUser', inputVars);
}
updateUserRef.operationName = 'UpdateUser';
exports.updateUserRef = updateUserRef;

exports.updateUser = function updateUser(dcOrVars, vars) {
  return executeMutation(updateUserRef(dcOrVars, vars));
};

const createMoverRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateMover', inputVars);
}
createMoverRef.operationName = 'CreateMover';
exports.createMoverRef = createMoverRef;

exports.createMover = function createMover(dcOrVars, vars) {
  return executeMutation(createMoverRef(dcOrVars, vars));
};

const updateMoverRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateMover', inputVars);
}
updateMoverRef.operationName = 'UpdateMover';
exports.updateMoverRef = updateMoverRef;

exports.updateMover = function updateMover(dcOrVars, vars) {
  return executeMutation(updateMoverRef(dcOrVars, vars));
};

const createVehicleRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateVehicle', inputVars);
}
createVehicleRef.operationName = 'CreateVehicle';
exports.createVehicleRef = createVehicleRef;

exports.createVehicle = function createVehicle(dcOrVars, vars) {
  return executeMutation(createVehicleRef(dcOrVars, vars));
};

const createMovingRequestRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateMovingRequest', inputVars);
}
createMovingRequestRef.operationName = 'CreateMovingRequest';
exports.createMovingRequestRef = createMovingRequestRef;

exports.createMovingRequest = function createMovingRequest(dcOrVars, vars) {
  return executeMutation(createMovingRequestRef(dcOrVars, vars));
};

const updateMovingRequestStatusRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateMovingRequestStatus', inputVars);
}
updateMovingRequestStatusRef.operationName = 'UpdateMovingRequestStatus';
exports.updateMovingRequestStatusRef = updateMovingRequestStatusRef;

exports.updateMovingRequestStatus = function updateMovingRequestStatus(dcOrVars, vars) {
  return executeMutation(updateMovingRequestStatusRef(dcOrVars, vars));
};

const createBidRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateBid', inputVars);
}
createBidRef.operationName = 'CreateBid';
exports.createBidRef = createBidRef;

exports.createBid = function createBid(dcOrVars, vars) {
  return executeMutation(createBidRef(dcOrVars, vars));
};

const updateBidStatusRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateBidStatus', inputVars);
}
updateBidStatusRef.operationName = 'UpdateBidStatus';
exports.updateBidStatusRef = updateBidStatusRef;

exports.updateBidStatus = function updateBidStatus(dcOrVars, vars) {
  return executeMutation(updateBidStatusRef(dcOrVars, vars));
};

const createJobRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateJob', inputVars);
}
createJobRef.operationName = 'CreateJob';
exports.createJobRef = createJobRef;

exports.createJob = function createJob(dcOrVars, vars) {
  return executeMutation(createJobRef(dcOrVars, vars));
};

const updateJobStatusRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateJobStatus', inputVars);
}
updateJobStatusRef.operationName = 'UpdateJobStatus';
exports.updateJobStatusRef = updateJobStatusRef;

exports.updateJobStatus = function updateJobStatus(dcOrVars, vars) {
  return executeMutation(updateJobStatusRef(dcOrVars, vars));
};

const createPaymentRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreatePayment', inputVars);
}
createPaymentRef.operationName = 'CreatePayment';
exports.createPaymentRef = createPaymentRef;

exports.createPayment = function createPayment(dcOrVars, vars) {
  return executeMutation(createPaymentRef(dcOrVars, vars));
};

const createInvoiceRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateInvoice', inputVars);
}
createInvoiceRef.operationName = 'CreateInvoice';
exports.createInvoiceRef = createInvoiceRef;

exports.createInvoice = function createInvoice(dcOrVars, vars) {
  return executeMutation(createInvoiceRef(dcOrVars, vars));
};
