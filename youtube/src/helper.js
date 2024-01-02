import { formatDistanceToNow } from 'date-fns';

export const formatRelativeTime = (isoDate) => {
  const date = new Date(isoDate);
  return formatDistanceToNow(date, { addSuffix: true });
};

export const formatViews = (views) => {
    const numericViews = Number(views);
  
    if (isNaN(numericViews)) {
      // Handle invalid input
      return 'Invalid views';
    }
  
    if (numericViews >= 1e6) {
      // Convert to millions (M)
      return (numericViews / 1e6).toFixed(1) + 'M views';
    } else if (numericViews >= 1e3) {
      // Convert to thousands (K)
      return (numericViews / 1e3).toFixed(1) + 'K views';
    } else {
      // Display as is
      return views + ' views';
    }
  };