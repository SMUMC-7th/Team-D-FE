const user = {
  userId: "user123",
  userName: "John Doe",
  userPassword: "securepassword123",
  userEmail: "john.doe@example.com",
  gender: "MALE",
  birth: new Date("1990-01-01"),
  mbti: "INTJ",
};

const plant = {
  data: user,
};

// PlantDict 데이터 생성
const plantDict = {
  getDate: new Date("2024-01-01"),
  getPlace: "Greenhouse A",
  user: {
    connect: { userKey: user.userKey },
  },
};

// PlantDictPlantLink 데이터 생성
const plantDictPlantLink = {
  userKey: user.userKey,
  plantKey: plant.plantKey,
  plantDictDictKey: plantDict.dictKey,
};

// Project 데이터 생성
const project = {
  totalPeople: 5,
  totalProgress: 50,
  startDate: new Date("2024-01-01"),
  endDate: new Date("2024-06-01"),
  projectName: "Green Initiative",
  taskCount: 10,
  currentProgress: "On Track",
  plant: {
    connect: { plantKey: plant.plantKey },
  },
};

// TaskTable 데이터 생성
const taskTable = {
  taskName: "Complete Report",
  taskProgress: "In Progress",
  taskStartDate: new Date("2024-01-15"),
  taskEndDate: new Date("2024-02-15"),
  user: {
    connect: { userKey: user.userKey },
  },
  project: {
    connect: { projectKey: project.projectKey },
  },
};

// ProjectInfo 데이터 생성
const projectInfo = {
  userKey: user.userKey,
  projectKey: project.projectKey,
  importance: true,
  authority: "ADMIN",
};

// PrivateCalendar 데이터 생성
const privateCalendar = {
  user: {
    connect: { userKey: user.userKey },
  },
};

// ProjectCalendar 데이터 생성
const projectCalendar = {
  memoName: "Initial Plan",
  calendarDate: new Date("2024-02-01"),
  memo: "Discuss project goals.",
  project: {
    connect: { projectKey: project.projectKey },
  },
  privateCalendar: {
    connect: { privateCalendarKey: privateCalendar.privateCalendarKey },
  },
};
