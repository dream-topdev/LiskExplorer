import moment from "moment";

export const formatAgo = (timestamp: number) => {
  moment.updateLocale("en", {
    relativeTime: {
      s: (number) => number + "s ago",
    },
  });
  const date = moment.unix(timestamp);
  return date.fromNow();
};

export const formatTime = (timestamp: number) => {
  const date = moment.unix(timestamp);
  return date.format('MM/DD/YYYY hh:mm A');
};