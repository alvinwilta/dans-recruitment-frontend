export const calculateDays = (created_time: string): string => {
  try {
    const date = new Date(created_time);
    const currentDate = new Date();
    return (
      Math.ceil(
        (currentDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
      ) + " days ago"
    );
  } catch (error) {
    console.log("error parsing time");
    return "";
  }
};
