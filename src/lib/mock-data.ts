// Mock data for the prototype

export const mockUser = {
  name: "김순희",
  age: 67,
  interests: ["복약", "운동", "마음 건강"],
};

export const mockCaregiver = {
  name: "김민수",
  relation: "아들",
  phone: "010-1234-5678",
};

export const todayTasks = [
  {
    id: 1,
    title: "아침 약 복용",
    time: "08:00",
    completed: true,
    type: "medication" as const,
  },
  {
    id: 2,
    title: "오늘의 체크인",
    time: "10:00",
    completed: false,
    type: "checkin" as const,
  },
  {
    id: 3,
    title: "10분 산책하기",
    time: "15:00",
    completed: false,
    type: "exercise" as const,
  },
];

export const aiCoaching = {
  title: "오늘은 가볍게 산책해볼까요?",
  reason: "어제 잠을 잘 주무셨네요. 컨디션이 좋을 때 몸을 움직여보면 더 활력이 생길 거예요.",
  action: "10분만 집 근처를 천천히 걸어보세요",
  difficulty: "쉬움",
  duration: "10분",
};

export const medications = [
  {
    id: 1,
    name: "고혈압약",
    time: "08:00",
    taken: true,
    takenAt: "08:15",
  },
  {
    id: 2,
    name: "비타민",
    time: "08:00",
    taken: true,
    takenAt: "08:15",
  },
  {
    id: 3,
    name: "고혈압약",
    time: "20:00",
    taken: false,
    takenAt: null,
  },
];

export const weeklyReport = {
  checkInRate: 85,
  medicationRate: 92,
  exerciseRate: 65,
  totalDays: 7,
  checkInDays: 6,
  medicationDays: 6,
  exerciseDays: 5,
};

export const helpOptions = [
  {
    id: 1,
    title: "몸이 불편해요",
    icon: "heart",
    color: "red",
  },
  {
    id: 2,
    title: "넘어졌어요",
    icon: "alert",
    color: "orange",
  },
  {
    id: 3,
    title: "불안해요",
    icon: "cloud",
    color: "blue",
  },
  {
    id: 4,
    title: "가족에게 연락할래요",
    icon: "phone",
    color: "green",
  },
];

export const caregiverSummary = {
  lastCheckIn: "오늘 오전 10:30",
  checkInStatus: "좋음",
  medicationStatus: "복용 완료",
  todayEvents: 0,
  recentAlerts: [
    {
      id: 1,
      type: "medication",
      message: "저녁 약 복용 완료",
      time: "오늘 20:15",
      severity: "normal",
    },
    {
      id: 2,
      type: "checkin",
      message: "아침 체크인 완료 - 컨디션 좋음",
      time: "오늘 10:30",
      severity: "normal",
    },
    {
      id: 3,
      type: "exercise",
      message: "산책 15분 완료",
      time: "어제 15:20",
      severity: "normal",
    },
  ],
};
