
const baseThemes = {
  lightTheme: {
    colors: {
      primary: "#4F46E5",
      secondary: "#06B6D4",
      background: "#FFFFFF",
      text: "#1E293B",
      textMuted: "#64748B", // نص ثانوي
      border: "#E2E8F0", // حدود
      success: "#10B981", // نجاح
      error: "#EF4444", // خطأ
      warning: "#F59E0B", // تحذير
      chartPink: "rgb(232, 97, 140)",
      backChartPink: "rgb(253, 241, 245)",
      chartBlue: "rgb(34, 204, 178)",
      backChartBlue: "rgb(239, 252, 250)",
      chartOrange: "rgb(234, 145, 110)",
      backChartOrange: "rgb(253, 245, 241)",
      // ... باقي الألوان كما هي
    },
    fonts: {
      body: "system-ui, sans-serif",
      heading: "Georgia, serif",
    },
    spacing: {
      small: "8px",
      medium: "16px",
      large: "24px",
    },
  },
  darkTheme: {
    colors: {
      primary: "#7C3AED",
      secondary: "#06B6D4",
      background: "#1E293B",
      text: "#FFFFFF",
      textMuted: '#94A3B8',
      border: '#334155',
      success: '#10B981',
      error: '#EF4444',
      warning: '#F59E0B',
      backChartPink:"#f7adc4" ,
      chartPink: "rgb(253, 241, 245)",
      backChartBlue: "#4affe3",
      chartBlue: "rgb(239, 252, 250)",
      backChartOrange: "#fabba2",
      chartOrang : "rgb(253, 245, 241)",
      // ... باقي الألوان كما هي
    }
  },
};

export const customColorThemes = {
  red: {
    ...baseThemes.lightTheme,
    colors: {
      ...baseThemes.lightTheme.colors,
      primary: "#EF4444",
      secondary: "#F87171",
      // background: "#FFD9D9"
      background: "#FEB7B7"
    },
  },
  blue: {
    ...baseThemes.lightTheme,
    colors: {
      ...baseThemes.lightTheme.colors,
      primary: "#3B82F6",
      secondary: "#60A5FA",
      background: "#BDD6FF"
    },
  },
  green: {
    ...baseThemes.lightTheme,
    colors: {
      ...baseThemes.lightTheme.colors,
      primary: "#10B981",
      secondary: "#34D399",
      background :"#7AFFD3"
    },
  },
  yellow: {
    ...baseThemes.lightTheme,
    colors: {
      ...baseThemes.lightTheme.colors,
      primary: "#F59E0B",
      secondary: "#FBBF24",
      background: "#FFC561"
    },
  },
};

export const { lightTheme, darkTheme } = baseThemes;
