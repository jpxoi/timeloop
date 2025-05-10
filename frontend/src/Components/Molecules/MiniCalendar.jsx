import dayjs from "dayjs";

export const MiniCalendar = ({
  month = dayjs().month(),
  year = dayjs().year(),
}) => {
  const startMonth = dayjs().year(year).month(month).startOf("month");
  const endMonth = dayjs().year(year).month(month).endOf("month");

  const arrayOfDate = [];

  for (let i = 0; i < startMonth.day(); i++) {
    const date = startMonth.day(i);

    arrayOfDate.push({
      currentMonth: false,
      date,
    });
  }

  for (let i = startMonth.date(); i <= endMonth.date(); i++) {
    arrayOfDate.push({
      currentMonth: true,
      date: startMonth.date(i),
      today:
        startMonth.date(i).toDate().toDateString() ===
        dayjs().toDate().toDateString(),
    });
  }

  const remaining = 42 - arrayOfDate.length;

  for (let i = endMonth.date() + 1; i <= endMonth.date() + remaining; i++) {
    arrayOfDate.push({
      currentMonth: false,
      date: endMonth.date(i),
    });
  }
  return arrayOfDate;
};
